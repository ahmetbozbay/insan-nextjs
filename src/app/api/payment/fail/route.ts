import { NextResponse } from "next/server";

export async function POST(request: Request) {


    // xml2js.parseString(data, { explicitArray: false }, (err, result) => {
    //     if (err) {
    //         throw new Error("Failed to parse XML response");
    //     }
    //     return NextResponse.json({ response: result });
    // });

    const data = await request.text();
    console.log('payment/fail body', data)
    // return NextResponse.json({ response: data });
    // return new Response(data, {
    //     headers: { 'Content-Type': 'text/html' }
    // });
    // return NextResponse.redirect(new URL('/pay/results/fail', request.url));
    const htmlContent = `
         <!DOCTYPE html>
         <html lang="en">
         <head>
             <meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <meta http-equiv="refresh" content="0; url=https://insander.org/tr/pay/results/fail">
             <title>Redirecting...</title>
         </head>
         <body>
             <p>Redirecting to payment fail page...</p>
             <script>
                 window.location.href = "https://insander.org/tr/pay/results/fail";
             </script>
         </body>
         </html>
     `;

    return new NextResponse(htmlContent, {
        status: 200,
        headers: { "Content-Type": "text/html" },
    });
}