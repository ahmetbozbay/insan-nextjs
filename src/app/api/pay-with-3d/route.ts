import { NextResponse } from 'next/server';
import { Builder, parseStringPromise } from 'xml2js';  // Import Builder and parseStringPromise from xml2js
import { computeHash, createHashString } from '.';

export async function POST(request: Request) {
    const data = await request.json();



    const hashPassword = computeHash('202400');

    const requestData: any = {
        // OkUrl: "http://localhost:3000/api/payment/success",
        // FailUrl: "http://localhost:3000/api/payment/fail",
        OkUrl: "https://insander.org/api/payment/success",
        FailUrl: "https://insander.org/api/payment/fail",
        MerchantId: 7474,
        // SubMerchantId: 0,
        CustomerId: 989464,
        UserName: "insansanal",
        // MerchantOrderId: 493702523,
        MerchantOrderId: 485592628,
        InstallmentCount: 0,
        Amount: data.amount ? (Number(data.amount) * 100) : 200,
        DisplayAmount: data.amount || 200,
        HashPassword: hashPassword,
        FECAmount: 0,
        FECCurrencyCode: "0949",
        // AdditionalData: {
        //     AdditionalDataList: [
        //         {
        //             Key: "keyasdadsads",
        //             Data: "asadasdsad",
        //             Description: "descdsadasd"
        //         }
        //     ]
        // },
        Addresses: [
            {
                Type: 1,
                Name: data.name || "",
                PhoneNumber: "05555555555",
                // OrderId: 0,
                AddressId: 0,
                Email: ""
            }
        ],
        APIVersion: "1.0.0",
        CardNumber: data.no,
        CardExpireDateMonth: data.expDateMonth,
        CardExpireDateYear: data.expDateYear,
        CardCVV2: data.cvv,
        CardHolderName: data.name || "",

        // CardNumber: '5487931180164490',
        // CardExpireDateMonth: '06',
        // CardExpireDateYear: '28',
        // CardCVV2: '758',
        // CardHolderName: 'Mousab Aldebs',
        PaymentType: 1,
        DebtId: 0,
        SurchargeAmount: 0,
        SGKDebtAmount: 0,
        InstallmentMaturityCommisionFlag: 0,
        TransactionSecurity: 3
    };
    const hashString = createHashString({
        merchantId: requestData.MerchantId,
        merchantOrderId: requestData.MerchantOrderId,
        amount: requestData.Amount,
        okUrl: requestData.OkUrl,
        failUrl: requestData.FailUrl,
        username: requestData.UserName,
        hashPassword: hashPassword
    });

    console.log(hashString)
    requestData.HashData = `${computeHash(hashString)}`;





    // Serialize the requestData to XML using xml2js Builder
    const builder = new Builder({ headless: true });
    const xmlRequest = builder.buildObject({ VPosMessageContract: requestData });
    const xmlWithEncoding = `<?xml version="1.0" encoding="UTF-16"?>\n${xmlRequest}`;

    console.log(xmlWithEncoding);

    try {
        // Make the POST request to the external API
        // const result = await fetch('https://boa.vakifkatilim.com.tr/VirtualPOS.Gateway/Home/ThreeDModelPayGate', {
        const result = await fetch('https://insander.org/bank/pay', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/xml',
            },
            body: xmlWithEncoding,
        });

        const responseText = await result.text();

        // Parse the XML response using xml2js
        // const parsedResponse = await parseStringPromise(responseText);

        try {
            const response = await fetch("https://submit-form.com/hy3Jxs80e", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: data.name || 'no name',
                    message: `new donation with amount: ${requestData.Amount}`,
                }),
            })

        } catch (error) {

        }


        return new Response(responseText, {
            headers: { 'Content-Type': 'text/html' }
        });

        // return NextResponse.json(responseText);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: (error as Error).message });
    }
}
