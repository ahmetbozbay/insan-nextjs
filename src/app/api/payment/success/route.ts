import axios from "axios";
import crypto from "crypto";
import { NextResponse } from "next/server";
import xml2js from "xml2js";
import { computeHash, createHashString } from "../../pay-with-3d";
import { redirect } from "next/navigation";

export async function POST(req: Request) {

    try {
        // const { MD } = await req.json();
        const formData = await req.formData(); // Parse formData
        const MD = formData.get("MD") as string; // Extract the MD field

        const formDataEntries: Record<string, any> = {};
        for (const [key, value] of formData.entries()) {
            formDataEntries[key] = value;
        }

        console.log("Received formData:", formDataEntries);

        // return NextResponse.json({ MD });

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
            // HashPassword: HashPassword,
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
            // okUrl: '',
            // failUrl: '',
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

        // Send the request to the payment gateway
        const { data } = await axios.post(
            "https://insander.org/bank/approve",
            xmlWithEncoding,
            {
                headers: { "Content-Type": "application/xml" },
            }
        );




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

        // return NextResponse.redirect(new URL('/pay/results/success', 'http://insander.org'));
        // return redirect('https://insander.org/tr/pay/results/success')
        // return NextResponse.json({ response: data });

        // Parse the XML response to JSON
        // xml2js.parseString(data, { explicitArray: false }, (err, result) => {
        //     if (err) {
        //         throw new Error("Failed to parse XML response");
        //     }
        //     return NextResponse.json({ response: result });
        // });
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ error: (error as Error).message });
    }
}
