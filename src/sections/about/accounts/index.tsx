"use client";
import { useState } from "react";
import { Clipboard } from "lucide-react";
import Image from "next/image";

const BankCard = ({ bank }: any) => {
    const [copied, setCopied] = useState(null);

    const handleCopy = (iban: any) => {
        navigator.clipboard.writeText(iban);
        setCopied(iban);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="xs-to-lg-min:w-1/2 xs-to-sm-min:w-full xs-to-sm-max:w-full p-20">
            <div className="border rounded-lg shadow-lg bg-white p-6">
                <div className="flex">
                    <div className=" w-1/2 flex items-center gap-4 mb-4 p-10">
                        <Image src={bank.logo} alt={bank.name} className="h-[120px] w-full" width={400} height={500} />
                    </div>

                    <div className=" w-1/2 text-lg space-y-1 p-10 flex items-center justify-start flex-col h-full">
                        <p className="w-full"><span className="font-semibold">Banka Adı:</span> {bank.bankName}</p>
                        <p className="w-full"><span className="font-semibold">Hesap Adı:</span> {bank.accountName}</p>
                        {/* <p><span className="font-semibold">Şube Adı:</span> {bank.branchName}</p>
                    <p><span className="font-semibold">Şube Kodu:</span> {bank.branchCode}</p> */}
                        {bank.swiftCode && <p><span className="font-semibold">Swift Kodu:</span> {bank.swiftCode}</p>}
                    </div>
                </div>

                {/* Accounts */}
                <div className="mt-4 space-y-3">
                    {bank.accounts.map((acc: any, index: any) => (
                        <div key={index} className="border p-3 rounded-lg flex justify-between items-center">
                            <div>
                                {/* <p className="font-semibold">HESAP NO [{acc.currency}]</p> */}
                                <p>{acc.accountNumber}</p>
                                <p className="font-semibold">IBAN [{acc.currency}]</p>
                                <p>{acc.iban}</p>
                            </div>
                            <button
                                className="p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                                onClick={() => handleCopy(acc.iban)}
                            >
                                <Clipboard className=" " />
                            </button>
                        </div>
                    ))}
                    {copied && <p className="text-green-500 text-sm">Copied: {copied}</p>}
                </div>
            </div>
        </div>
    );
};

export default function BankAccounts() {
    const banks = [
        {
            name: "Ziraat Katılım",
            logo: "/assets/images-used/banks/ziraat.png",
            bankName: "Ziraat  Katılım Bankası",
            accountName: "İnsan Derneği ",
            branchName: "",
            branchCode: "",
            accounts: [
                { currency: "TL", accountNumber: "", iban: "TR39 0020 9000 0159 0001 0000 01" },
                { currency: "USD", accountNumber: "", iban: "TR82 0020 9000 0159 0001 0000 03" },
                { currency: "EURO", accountNumber: "", iban: "TR82 0020 9000 0159 0001 0000 03" },
            ],
        },
        {
            name: "Vakif Katılım",
            logo: "/assets/images-used/banks/vakif.png",
            bankName: "Vakıf Katılım Bankası",
            accountName: "İnsan Derneği",
            branchName: "",
            branchCode: "",
            swiftCode: "",
            accounts: [
                { currency: "TL", accountNumber: "", iban: "TR65 0021 0000 0009 8946 4000 01" },
                { currency: "USD", accountNumber: "", iban: "TR81 0021 0000 0009 8946 4001 01" },
                { currency: "EURO", accountNumber: "", iban: "TR54 0021 0000 0009 8946 4001 02" },
            ],
        },
    ];

    return (
        <div className="flex p-50 justify-center items-center flex-wrap">
            {banks.map((bank, index) => (
                <BankCard key={index} bank={bank} />
            ))}
        </div>
    );
}
