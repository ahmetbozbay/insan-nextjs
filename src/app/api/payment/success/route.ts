import axios from "axios";
import crypto from "crypto";
import { NextResponse } from "next/server";
import xml2js from "xml2js";
import { computeHash, createHashString } from "../../pay-with-3d";

export async function POST(req: Request) {
    try {
        const formData = await req.formData(); // Parse formData
        const MD = formData.get("MD") as string; // Extract the MD field

        const formDataEntries: Record<string, any> = {};
        for (const [key, value] of formData.entries()) {
            formDataEntries[key] = value;
        }

        console.log("Received formData:", formDataEntries);

        // Define required values
        const MerchantId = 7474;
        const CustomerId = 989464;
        const UserName = "insansanal";
        const HashPassword = computeHash('202400');

        const requestData: any = {
            MerchantId,
            CustomerId,
            UserName,
            TransactionSecurity: 3,
            MerchantOrderId: 485592628,
            Amount: 200,
            DisplayAmount: 200,
            OkUrl: "https://insander.org/api/payment/success",
            FailUrl: "https://insander.org/api/payment/fail",
            AdditionalData: {
                AdditionalDataList: [
                    {
                        VPosAdditionalData: {
                            Key: "MD",
                            Data: MD,
                        }
                    },
                ],
            },
        };

        // Generate HashData
        const hashString = createHashString({
            merchantId: requestData.MerchantId,
            merchantOrderId: requestData.MerchantOrderId,
            okUrl: requestData.OkUrl,
            failUrl: requestData.FailUrl,
            amount: requestData.Amount,
            username: requestData.UserName,
            hashPassword: HashPassword,
        });

        requestData.HashData = computeHash(hashString);

        // Convert JSON request to XML
        const builder = new xml2js.Builder({ headless: true });
        const xmlRequest = builder.buildObject({ VPosMessageContract: requestData });
        const xmlWithEncoding = `<?xml version="1.0" encoding="UTF-16"?>\n${xmlRequest}`;
        console.log(xmlWithEncoding)

        // Send the request to the payment gateway (Onaylama Adımı)
        const { data } = await axios.post(
            "https://insander.org/bank/approve",
            xmlWithEncoding,
            {
                headers: { "Content-Type": "application/xml" },
            }
        );

        // =========================================================
        // YENİ EKLENEN KISIM: ONAY ALINDIKTAN SONRA MAİLİ TETİKLE
        // =========================================================
        try {
            await axios.post("https://insander.org/api/send-donation-info", {
                // Bankanın "AdditionalData" sayesinde geri döndürdüğü alanları yakalıyoruz
                donorFullName: formDataEntries.donorFullName || "Bağışçı",
                donorEmail: formDataEntries.donorEmail || "Belirtilmedi",
                donorPhone: formDataEntries.donorPhone || "Belirtilmedi",
                projectTitle: formDataEntries.projectTitle || "Bağış",
                amount: requestData.DisplayAmount // Tutarın düzeltilmiş halini maile iletiyoruz
            });
            console.log("Success: Ödeme alındı ve bilgi maili gönderildi.");
        } catch (mailError) {
            console.error("Success: Ödeme alındı ancak mail tetiklenemedi!", mailError);
        }
        // =========================================================

        // Generate an HTML page with a meta redirect
        const htmlContent = `
         <!DOCTYPE html>
         <html lang="en">
         <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <meta http-equiv="refresh" content="0; url=https://insander.org/tr/pay/results/success">
             <title>Redirecting...</title>
         </head>
         <body>
             <p>Redirecting to payment success page...</p>
             <script>
                 window.location.href = "https://insander.org/tr/pay/results/success";
             </script>
         </body>
         </html>
     `;

        return new NextResponse(htmlContent, {
            status: 200,
            headers: { "Content-Type": "text/html" },
        });

    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ error: (error as Error).message });
    }
}