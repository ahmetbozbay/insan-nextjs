import { NextResponse } from "next/server";
import xml2js from "xml2js";
import crypto from 'crypto'


export async function POST(req: any) {
  try {
    const body = await req.json();
    const {
      cardNumber,
      expireMonth,
      expireYear,
      cvv,
      cardHolderName,
      amount,
      orderId,
    } = body;
    function createHashString(merchantId:any, amount:any, merchantOrderId = "", okUrl = "", failUrl = "", username = "", hashPassword = "") {
      const newHash = `${merchantId}${merchantOrderId}${amount || ""}${okUrl}${failUrl}${username}${hashPassword}`;
      return newHash;
    }
    function computeHash(hashstr: any) {
      // Create SHA-1 hash object
      const sha1 = crypto.createHash('sha1');

      // Encode the string in ISO-8859-9 (Turkish character encoding)
      sha1.update(hashstr, 'latin1'); // 'latin1' is equivalent to ISO-8859-9 in Node.js

      // Compute the hash and convert it to Base64
      const hash = sha1.digest('base64');

      return hash;
    }
    // Constructing the XML payload
    const builder = new xml2js.Builder({ headless: true });
    const xmlRequest = builder.buildObject({
      VPosMessageContract: {
        $: {
          "xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
          "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        },
        // HashData: "kAzwrEXt6hFy7TyHMZFCp4a9ow0=", // Securely generate this
        HashData: computeHash(createHashString("989464", amount, orderId, "", "", "insansanal", "QM21R/hQ/WJBKU4TzVrd5VAhesA=")), // Securely generate this
        MerchantId: "989464",
        CustomerId: "989464",
        UserName: "insansanal",
        HashPassword: computeHash("202400"),
        MerchantOrderId: orderId,
        InstallmentCount: "0",
        Amount: amount,
        DisplayAmount: amount,
        FECCurrencyCode: "0949",
        CurrencyCode: "0949",
        Addresses: {
          VPosAddressContract: {
            Type: "1",
            Name: "Mahmut Sami YAZAR",
            PhoneNumber: "324234234234",
            OrderId: "0",
            AddressId: "12",
            Email: "mahmutsamiyazar@hotmail.com",
          },
        },
        CardNumber: cardNumber,
        CardExpireDateYear: expireYear,
        CardExpireDateMonth: expireMonth,
        CardCVV2: cvv,
        CardHolderName: cardHolderName,
        PaymentType: "1",
        TransactionSecurity: "1",
      },
    });

    // Adding XML Declaration with UTF-16 encoding
    const finalXmlRequest = `<?xml version="1.0" encoding="UTF-8"?>\n${xmlRequest}`;

    console.log({ finalXmlRequest });


    // Sending the XML request to the VPOS API
    const response = await fetch(
      // "https://boa.vakifkatilim.com.tr/VirtualPOS.Gateway/Home/ThreeDModelPayGate",
      "https://boa.vakifkatilim.com.tr/VirtualPOS.Gateway/Home/Non3DPayGate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/xml",
        },
        body: finalXmlRequest,
      }
    );

    const responseText = await response.text();

    // Parsing XML response
    const parsedResponse = await xml2js.parseStringPromise(responseText, {
      explicitArray: false,
    });

    return NextResponse.json(parsedResponse, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}