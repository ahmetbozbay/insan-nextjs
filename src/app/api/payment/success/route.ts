import axios from "axios";
import crypto from "crypto";
import { NextResponse } from "next/server";
import xml2js from "xml2js";
import { computeHash, createHashString } from "../../pay-with-3d";

export async function POST(req: Request) {
    try {
        const formData = await req.formData(); // Parse formData
        const MD = formData.get("MD") as string; // Extract the MD field

        // DİKKAT: Form verileri yerine, URL'ye gizlediğimiz verileri çekiyoruz
        const url = new URL(req.url);
        const donorFullName = url.searchParams.get("name") || "Bağışçı";
        const donorEmail = url.searchParams.get("email") || "Belirtilmedi";
        const donorPhone = url.searchParams.get("phone") || "Belirtilmedi";
        const projectTitle = url.searchParams.get("title") || "Bağış";
        const amount = url.searchParams.get("amt") || "200";

        // Bankaya gönderilecek standart onay (Approve) verileri
        const MerchantId = 7474;
        const CustomerId = 989464;
        const UserName = "insansanal";
        const HashPassword = computeHash('202400');
        
        // Hash işleminin hatasız çalışması için orijinal URL'yi kullanıyoruz
        const fullOkUrl = `https://insander.org/api/payment/success${url.search}`;

        const requestData: any = {
            MerchantId,
            CustomerId,
            UserName,
            TransactionSecurity: 3,
            MerchantOrderId: 485592628,
            Amount: 200, // Eğer bunu da dinamik yapacaksan: Number(amount) * 100 yapabilirsin
            DisplayAmount: 200,
            OkUrl: fullOkUrl,
            FailUrl: "https://insander.org/api/payment/fail",
            AdditionalData: {
                AdditionalDataList: [
                    {
                        VPosAdditionalData: { Key: "MD", Data: MD }
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
            { headers: { "Content-Type": "application/xml" } }
        );

        // =========================================================
        // YENİ EKLENEN KISIM: LİNKTEN ÇEKİLEN BİLGİLERLE MAİLİ AT
        // =========================================================
        try {
            await axios.post("https://insander.org/api/send-donation-info", {
                donorFullName: donorFullName,
                donorEmail: donorEmail,
                donorPhone: donorPhone,
                projectTitle: projectTitle,
                amount: amount 
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