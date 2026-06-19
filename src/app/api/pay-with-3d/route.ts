import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { Builder } from 'xml2js';

// Helper function to create the hash string
export function createHashString({
    merchantId,
    merchantOrderId,
    amount,
    okUrl,
    failUrl,
    username,
    hashPassword
}: {
    merchantId: any;
    merchantOrderId: string;
    amount: number;
    okUrl: string;
    failUrl: string;
    username: string;
    hashPassword: string;
}): string {
    return `${merchantId}${merchantOrderId}${amount}${okUrl}${failUrl}${username}${hashPassword}`;
}

// Helper function to compute the hash
export function computeHash(hashString: string): string {
    return crypto.createHash('sha1').update(hashString).digest('base64');
}

export async function POST(request: Request) {
    const data = await request.json();

    const hashPassword = computeHash('202400');

    const requestData: any = {
        OkUrl: "https://insander.org/api/payment/success",
        FailUrl: "https://insander.org/api/payment/fail",
        MerchantId: 7474,
        CustomerId: 989464,
        UserName: "insansanal",
        MerchantOrderId: 485592628,
        InstallmentCount: 0,
        Amount: data.amount ? (Number(data.amount) * 100) : 200,
        DisplayAmount: data.amount || 200,
        HashPassword: hashPassword,
        FECAmount: 0,
        FECCurrencyCode: "0949",
        // BİLGİLERİ KAYBETMEMEK İÇİN BURAYA EKLİYORUZ:
        AdditionalData: {
            AdditionalDataList: [
                { Key: "donorFullName", Data: data.donorFullName || "Belirtilmedi" },
                { Key: "donorEmail", Data: data.donorEmail || "Belirtilmedi" },
                { Key: "donorPhone", Data: data.donorPhone || "Belirtilmedi" },
                { Key: "projectTitle", Data: data.projectTitle || "Bağış" }
            ]
        },
        Addresses: [
            {
                Type: 1,
                Name: data.name || "",
                PhoneNumber: "05555555555",
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
        const result = await fetch('https://insander.org/bank/pay', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/xml',
            },
            body: xmlWithEncoding,
        });

        const responseText = await result.text();
        console.log(responseText)

        try {
            const response = await fetch("https://submit-form.com/hy3Jxs80e", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: data.name || 'no name',
                    message: `new donation with amount: ${requestData.DisplayAmount}`,
                }),
            })
        } catch (error) {
            console.log(error)
        }

        return new Response(responseText, {
            headers: { 'Content-Type': 'text/html' }
        });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: (error as Error).message });
    }
}