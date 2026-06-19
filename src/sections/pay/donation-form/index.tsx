'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import axios from "axios";

interface DonationFormData {
    amount: number;
    name: string;
    no: string;
    expDateMonth: string;
    expDateYear: string;
    cvv: string;
    donorFullName: string;
    donorEmail: string;
    donorPhone: string;
}

interface PaymentMethod {
    id: number;
    imageUrl: string;
}

interface DonationPaymentSectionProps {
    categories: string[];
    paymentMethods: PaymentMethod[];
    donationDetailsImage: string;
    donationDescription: string;
    donationTitle: string;
    quickSelectAmounts: number[];
    initialAmount?: number;
    href: string;
}

const DonationPaymentSection: React.FC<DonationPaymentSectionProps> = ({
    paymentMethods,
    donationDetailsImage,
    donationDescription,
    donationTitle,
    quickSelectAmounts,
    href,
    initialAmount = 50,
}) => {

    const [formData, setFormData] = useState<DonationFormData>({
        amount: initialAmount,
        name: "",
        no: "",
        expDateMonth: "",
        expDateYear: "",
        cvv: "",
        donorFullName: "",
        donorEmail: "",
        donorPhone: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAmountSelect = (amount: number) => {
        setFormData({ ...formData, amount });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            // DİKKAT: /api/send-donation-info mail isteğini buradan KALDIRDIK.
            // Mail işlemi artık sadece banka success rotasına düştüğünde backend'de çalışacak.

            // Tüm form datasını (isim, mail dahil) ve proje adını 3D API'sine gönderiyoruz.
            const { data } = await axios.post('/api/pay-with-3d', {
                ...formData,
                projectTitle: donationTitle, // Mailde kullanmak üzere proje başlığını da gönderdik
                no: formData.no.replace(/\s+/g, '')
            });

            document.open();
            document.write(data);
            document.close();

        } catch (error) {
            console.error("İşlem sırasında hata oluştu:", error);
        }
    };

    return (
        <section className="w-full bg-white">
            <div className="container mx-auto px-6">

                <div className="grid grid-cols-12 gap-10 items-stretch">

                    {/* ================= SOL FORM ================= */}
                    <div className="col-span-12 xs-to-lg-min:col-span-7">

                        <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-16 lg:p-12 h-full">

                            <h2 className="text-6xl font-black text-[#0b5331] mb-[23px]">
                                {donationTitle}
                            </h2>

                            <p className="text-gray-500 text-lg mb-20 leading-relaxed">
                                <br></br>Paylaştığınız bilgiler, bağış süreçlerinizin takibi ve tamamlanması için esas alınacaktır. Bağışınızla ilgili tüm bilgilendirmeler ve süreç güncellemeleri tarafınıza telefon veya e-posta yoluyla iletilecektir.
                            </p>

                            {/* QUICK SELECT */}
                            <ul className="flex flex-wrap gap-3 mb-20">
                                {quickSelectAmounts.map((amount) => (
                                    <li
                                        key={amount}
                                        onClick={() => handleAmountSelect(amount)}
                                        className={cn(
                                            "px-4 py-4 rounded-xl border cursor-pointer font-semibold transition",
                                            amount === formData.amount
                                                ? "bg-[#0b5331] text-white border-[#0b5331]"
                                                : "bg-white text-gray-600 border-gray-200"
                                        )}
                                    >
                                        {amount} TL
                                    </li>
                                ))}
                            </ul>

                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* BAĞIŞÇI */}
                                <div>
                                    <h3 className="text-3xl font-bold text-[#0b5331] mb-10">
                                        Bağışçı Bilgileri
                                    </h3>
                                    
                                    <input
                                        type="text"
                                        name="donorFullName"
                                        value={formData.donorFullName}
                                        onChange={handleChange}
                                        placeholder="Ad Soyad"
                                        className="w-full h-[42px] px-5 rounded-xl border border-gray-200 focus:border-[#0b5331] outline-none"
                                    />

                                    <div className="grid grid-cols-2 gap-4 mt-4 mb-20">

                                        <input
                                            type="email"
                                            name="donorEmail"
                                            value={formData.donorEmail}
                                            onChange={handleChange}
                                            placeholder="E-posta"
                                            className="h-[42px] px-5 rounded-xl border border-gray-200"
                                        />

                                        <input
                                            type="tel"
                                            name="donorPhone"
                                            value={formData.donorPhone}
                                            onChange={handleChange}
                                            placeholder="Telefon"
                                            className="h-[42px] px-5 rounded-xl border border-gray-200"
                                        />
                                    </div>
                                </div>

                                {/* ÖDEME */}
                                <div>
                                    <h3 className="text-2xl font-bold text-[#0b5331] mt-[46px]">
                                        Ödeme Bilgileri
                                    </h3>

                                    <input
                                        type="text"
                                        name="no"
                                        value={formData.no}
                                        onChange={handleChange}
                                        placeholder="Kart Numarası"
                                        className="w-full h-[42px] px-5 rounded-xl border border-gray-200 mt-10 mb-8"
                                    />

                                    <div className="grid grid-cols-3 gap-10 mt-10 mb-8">

                                        <input
                                            type="text"
                                            name="expDateMonth"
                                            value={formData.expDateMonth}
                                            onChange={handleChange}
                                            placeholder="AA"
                                            className="h-[42px] px-4 rounded-xl border"
                                        />

                                        <input
                                            type="text"
                                            name="expDateYear"
                                            value={formData.expDateYear}
                                            onChange={handleChange}
                                            placeholder="YY"
                                            className="h-[42px] px-4 rounded-xl border"
                                        />

                                        <input
                                            type="text"
                                            name="cvv"
                                            value={formData.cvv}
                                            onChange={handleChange}
                                            placeholder="CVV"
                                            className="h-[42px] px-4 rounded-xl border "
                                        />
                                    </div>

                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Kart Üzerindeki İsim"
                                        className="w-full h-[42px] px-5 rounded-xl border border-gray-200 mt-10 mb-8"
                                    />
                                </div>

                                <button className="w-full bg-[#0b5331] hover:bg-[#b71c1c] text-white py-5 rounded-xl text-xl font-black">
                                    Bağışımı Tamamla
                                </button>

                            </form>
                        </div>
                    </div>

                    {/* ================= SAĞ ================= */}
                    <div className="col-span-12 xs-to-lg-min:col-span-5">

                        <div className="relative rounded-3xl overflow-hidden h-full min-h-[700px]">

                            <Image
                                src={donationDetailsImage}
                                alt={donationTitle}
                                fill
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 p-10 text-white">

                                <h3 className="text-3xl font-black mb-2">
                                    {donationTitle}
                                </h3>

                                <p className="text-white/80 text-lg">
                                    {donationDescription}
                                </p>

                                <div className="mt-6 text-2xl font-bold text-[#ffd700]">
                                    {formData.amount} TL
                                </div>

                            </div>
                        </div>

                        <div className="mt-6">
                            <Link
                                href="/about/account-numbers"
                                className="block text-center bg-[#0b5331] text-white py-4 rounded-xl font-semibold"
                            >
                                IBAN’a gönderin
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default DonationPaymentSection;