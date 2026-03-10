import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { Builder, parseStringPromise } from 'xml2js';  // Import Builder and parseStringPromise from xml2js

// Helper function to create the hash string
function createHashString({
    merchantId,
    merchantOrderId,
    amount,
    okUrl,
    failUrl,
    username,
    hashPassword
}: {
    merchantId: string;
    merchantOrderId: string;
    amount: number;
    okUrl: string;
    failUrl: string;
    username: string;
    hashPassword: string;
}): string {
    //   return `${merchantId}|${merchantOrderId}|${amount}|${okUrl}|${failUrl}|${username}|${hashPassword}`;
    return `${merchantId}|${merchantOrderId}|${amount}|${okUrl}|${failUrl}|${username}|${hashPassword}`;
}

// Helper function to compute the hash (you can adjust the hashing algorithm based on your needs)
function computeHash(hashString: string): string {
    return crypto.createHash('sha256').update(hashString).digest('hex');
}

export async function POST(request: Request) {
    const data = await request.json();

    const requestData: any = {
        "$": {
            "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
            "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance"
        },
        PaymentType: 1,
        CardNumber: '4609590033345932',
        CardExpireDateMonth: '10',
        CardExpireDateYear: '30',
        CardCVV2: '672',
        CardHolderName: 'Diaa Dervis',
        FECCurrencyCode: '0949',
        CurrencyCode: '0949',
        APIVersion: '1',
        MerchantId: "7474", // Use environment variable for merchant ID
        CustomerId: "989464",
        UserName: 'insansanal',
        MerchantOrderId: '1',
        InstallmentCount: 0,
        Amount: 1,
        DisplayAmount: '100',
        Addresses: [
            {
                Name: 'isminiz',
                PhoneNumber: 'telefon numaranız',
                Email: 'mail adresiniz',
                AddressId: 0,
                Type: ''
            }
        ],
        TransactionSecurity: 1,
    };

    // HashData calculation
    const hashPassword = ''; // You can fetch this from somewhere securely
    const hashString = createHashString({
        merchantId: requestData.MerchantId,
        merchantOrderId: '',
        amount: 0,
        okUrl: '',
        failUrl: '',
        username: requestData.UserName,
        hashPassword: hashPassword
    });

    requestData.HashData = computeHash(hashString);

    // Serialize the requestData to XML using xml2js Builder
    const builder = new Builder({ headless: true });
    const xmlRequest = builder.buildObject({ VPosMessageContract: requestData });
    const xmlWithEncoding = `<?xml version="1.0" encoding="UTF-16"?>\n${xmlRequest}`;

    console.log(xmlWithEncoding);

    try {
        // Make the POST request to the external API
        const result = await fetch('https://boa.vakifkatilim.com.tr/VirtualPOS.Gateway/Home/Non3DPayGate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/xml',
            },
            body: xmlWithEncoding,
        });

        const responseText = await result.text();

        // Parse the XML response using xml2js
        const parsedResponse = await parseStringPromise(responseText);

        return NextResponse.json({ response: parsedResponse });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: (error as Error).message });
    }
}
