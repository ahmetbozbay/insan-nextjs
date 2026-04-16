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
            // Bilgileri mail olarak gönder (Ödeme öncesi veriyi güvene alıyoruz)
            await axios.post('/api/send-donation-info', {
                donorFullName: formData.donorFullName,
                donorEmail: formData.donorEmail,
                donorPhone: formData.donorPhone,
                amount: formData.amount,
                projectTitle: donationTitle 
            });

            // Teknik ödeme akışı (3D Secure yönlendirmesi)
            const { data } = await axios.post('/api/pay-with-3d', { 
                ...formData, 
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
        <div className="donation-payment py-110 lg:py-70 xs-to-md-max:py-50">
            <div className="container">
                <div className="grid grid-cols-12 justify-between gap-24">
                    <div className="xs-to-md-min:col-span-7 col-span-12">
                        <div className="card-style box-shadow border-0 p-10">
                            <div className="small-tittle mb-50">
                                <h2 className="common-title text-7xl xs-to-md-max:text-2xl capitalize font-semibold">
                                    Şimdi bağış yapın
                                </h2>
                            </div>

                            <ul className="selectPricing mb-20 flex gap-4">
                                {quickSelectAmounts.map((amount) => (
                                    <li
                                        key={amount}
                                        className={cn(`listItem`, amount === formData.amount ? 'active' : '')}
                                        onClick={() => handleAmountSelect(amount)}
                                    >
                                        {amount} TL
                                    </li>
                                ))}
                            </ul>

                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-12 gap-24">
                                    {/* --- BAĞIŞÇI BİLGİLERİ --- */}
                                    <div className="col-span-12">
                                        <h3 className="font-bold text-lg mb-4 text-primary-title">Bağışçı Bilgileri</h3>
                                    </div>

                                    <div className="col-span-12">
                                        <label className="mb-10 font-normal text-base text-tertiary-title block">Ad Soyad</label>
                                        <input
                                            type="text"
                                            name="donorFullName"
                                            value={formData.donorFullName}
                                            onChange={handleChange}
                                            className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray rounded-[8px]"
                                            placeholder="Adınız Soyadınız"
                                            required
                                        />
                                    </div>

                                    <div className="xs-to-md-min:col-span-6 col-span-12">
                                        <label className="mb-10 font-normal text-base text-tertiary-title block">E-posta Adresi</label>
                                        <input
                                            type="email"
                                            name="donorEmail"
                                            value={formData.donorEmail}
                                            onChange={handleChange}
                                            className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray rounded-[8px]"
                                            placeholder="ornek@mail.com"
                                            required
                                        />
                                    </div>

                                    <div className="xs-to-md-min:col-span-6 col-span-12">
                                        <label className="mb-10 font-normal text-base text-tertiary-title block">Telefon Numarası</label>
                                        <input
                                            type="tel"
                                            name="donorPhone"
                                            value={formData.donorPhone}
                                            onChange={handleChange}
                                            className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray rounded-[8px]"
                                            placeholder="05xx xxx xx xx"
                                            required
                                        />
                                    </div>

                                    {/* --- ÖDEME BİLGİLERİ --- */}
                                    <div className="col-span-12 border-t pt-20 mt-10">
                                        <h3 className="font-bold text-lg mb-4 text-primary-title">Kart Bilgileri</h3>
                                    </div>

                                    <div className="col-span-12">
                                        <label className="mb-15 font-normal text-base text-tertiary-title block">Miktar</label>
                                        <input
                                            type="number"
                                            name="amount"
                                            min="1"
                                            value={formData.amount}
                                            onChange={handleChange}
                                            className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray rounded-[8px]"
                                            required
                                        />
                                    </div>

                                    <div className="col-span-12">
                                        <label className="mb-15 font-normal text-base text-tertiary-title block">Kart Numarası</label>
                                        <input
                                            type="text"
                                            name="no"
                                            value={formData.no}
                                            onChange={handleChange}
                                            className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray rounded-[8px]"
                                            placeholder="0000 0000 0000 0000"
                                            required
                                        />
                                    </div>

                                    <div className="xs-to-md-min:col-span-4 col-span-12">
                                        <label className="mb-15 font-normal text-base text-tertiary-title block">Ay</label>
                                        <input
                                            type="text"
                                            name="expDateMonth"
                                            value={formData.expDateMonth}
                                            onChange={handleChange}
                                            maxLength={2}
                                            className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray rounded-[8px]"
                                            placeholder="AA"
                                            required
                                        />
                                    </div>

                                    <div className="xs-to-md-min:col-span-4 col-span-12">
                                        <label className="mb-15 font-normal text-base text-tertiary-title block">Yıl</label>
                                        <input
                                            type="text"
                                            name="expDateYear"
                                            value={formData.expDateYear}
                                            onChange={handleChange}
                                            maxLength={2}
                                            className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray rounded-[8px]"
                                            placeholder="YY"
                                            required
                                        />
                                    </div>

                                    <div className="xs-to-md-min:col-span-4 col-span-12">
                                        <label className="mb-15 font-normal text-base text-tertiary-title block">CVV</label>
                                        <input
                                            type="text"
                                            name="cvv"
                                            value={formData.cvv}
                                            maxLength={3}
                                            onChange={handleChange}
                                            className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray rounded-[8px]"
                                            placeholder="000"
                                            required
                                        />
                                    </div>

                                    <div className="col-span-12">
                                        <label className="mb-15 font-normal text-base text-tertiary-title block">Kart Sahibinin Adı</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray rounded-[8px]"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group col-12 payment-gateway-wrapper mt-20">
                                    <ul className="payment-gateway-list flex flex-wrap mb-10">
                                        {paymentMethods.map((method) => (
                                            <li key={method.id} className="single-gateway-item">
                                                <Image src={method.imageUrl} alt="Payment Method" width={50} height={30} />
                                            </li>
                                        ))}
                                    </ul>
                                    <button type="submit" className="btn-primary-fill py-15 px-48 text-base rounded-[6px]">
                                        Bağış yapın
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Sağ Taraf - Bağış Özeti */}
                    <div className="xs-to-lg-min:col-span-4 xs-to-md-min:col-span-5 xs-to-sm-min:col-span-7 col-span-12">
                        <div className="blog-section-two">
                            <div className="single-blog rounded-[10px] bg-white shadow-sm border">
                                <div className="relative">
                                    <Image src={donationDetailsImage} className="w-full rounded-t-[10px]" width={400} height={300} alt="Donation" />
                                </div>
                                <div className="p-20">
                                    <h4 className="text-xl font-bold mb-10 text-primary-title">{donationTitle}</h4>
                                    <p className="text-sm text-tertiary-title mb-20">{donationDescription}</p>
                                    <div className="border-t pt-10 flex justify-between">
                                        <span className="font-semibold">Toplam Miktar:</span>
                                        <span className="font-bold text-primary">{formData.amount} TL</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-30">
                            <Link href="/about/account-numbers" className="btn-primary-fill py-15 text-center block w-full rounded-[6px]">
                                IBAN’a gönderin
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationPaymentSection;