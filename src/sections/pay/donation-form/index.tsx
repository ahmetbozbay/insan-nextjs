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
    quickSelectAmounts: number[]; // New: List of quick donation amounts
    initialAmount?: number;
    href: string;
}

const DonationPaymentSection: React.FC<DonationPaymentSectionProps> = ({
    categories,
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
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAmountSelect = (amount: number) => {
        setFormData({ ...formData, amount });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { data } = await axios.post('/api/pay-with-3d', { ...formData, no: formData.no.replace(/\s+/g, '') });
        console.log(data)
        document.open();
        document.write(data);
        document.close();
    };

    return (
        <div className="donation-payment py-110 lg:py-70 xs-to-md-max:py-50">
            <div className="container">
                <div className="grid grid-cols-12 justify-between gap-24">
                    {/* Payment Form */}
                    <div className="xs-to-md-min:col-span-7 col-span-12">
                        <div className="card-style box-shadow border-0 p-10">
                            <div className="small-tittle mb-50">
                                <h2 className="common-title text-7xl xs-to-md-max:text-2xl capitalize font-semibold">
                                    Şimdi bağış yapın
                                </h2>
                            </div>

                            {/* Quick Select Pricing */}
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

                            {/* Donation Form */}
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-12 gap-24">
                                    <div className="col-span-12">
                                        <label className="mb-15 font-normal text-base xs-to-sm-max:text-md text-tertiary-title block">
                                            Miktar
                                        </label>
                                        <input
                                            type="number"
                                            name="amount"
                                            min="1"
                                            value={formData.amount}
                                            onChange={handleChange}
                                            className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray text-base xs-to-sm-max:text-md font-normal text-tertiary-title rounded-[8px]"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-12">
                                        <label className="mb-15 font-normal text-base xs-to-sm-max:text-md text-tertiary-title block">
                                            Kart Numarası
                                        </label>
                                        <input
                                            type="text"
                                            name="no"
                                            value={formData.no}
                                            onChange={handleChange}
                                            className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray text-base xs-to-sm-max:text-md font-normal text-tertiary-title rounded-[8px]"
                                            placeholder=""
                                            required
                                        />
                                    </div>

                                    <div className="xs-to-md-min:col-span-4 col-span-12">
                                        <label className="mb-15 font-normal text-base xs-to-sm-max:text-md text-tertiary-title block">
                                            Son kullanma tarihi
                                        </label>
                                        <input
                                            type="text"
                                            name="expDateMonth"
                                            value={formData.expDateMonth}
                                            onChange={handleChange}
                                            maxLength={2}
                                            className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray text-base xs-to-sm-max:text-md font-normal text-tertiary-title rounded-[8px]"
                                            placeholder="00"
                                            required
                                        />
                                    </div>
                                    {/* <div className="xs-to-md-min:col-span-1 col-span-12">
                                        <h1>/</h1>
                                    </div> */}
                                    <div className="xs-to-md-min:col-span-4 col-span-12">
                                        <label className="mb-15 font-normal text-base xs-to-sm-max:text-md text-tertiary-title block min-h-[24px]">

                                        </label>
                                        <input
                                            type="text"
                                            name="expDateYear"
                                            value={formData.expDateYear}
                                            onChange={handleChange}
                                            maxLength={2}
                                            className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray text-base xs-to-sm-max:text-md font-normal text-tertiary-title rounded-[8px]"
                                            placeholder="00"
                                            required
                                        />
                                    </div>

                                    <div className="xs-to-md-min:col-span-4 col-span-12">
                                        <label className="mb-15 font-normal text-base xs-to-sm-max:text-md text-tertiary-title block">
                                            CVV
                                        </label>
                                        <input
                                            type="text"
                                            name="cvv"
                                            value={formData.cvv}
                                            maxLength={3}
                                            onChange={handleChange}
                                            className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray text-base xs-to-sm-max:text-md font-normal text-tertiary-title rounded-[8px]"
                                            placeholder="000"
                                            required
                                        />
                                    </div>
                                    <div className="col-span-12">
                                        <label className="mb-15 font-normal text-base xs-to-sm-max:text-md text-tertiary-title block">
                                            Kart Sahibinin Adı
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="py-13 px-20 h-50 w-full bg-secondary-gray border border-primary-gray text-base xs-to-sm-max:text-md font-normal text-tertiary-title rounded-[8px]"
                                            placeholder=""
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Payment Methods */}
                                <div className="form-group col-12 payment-gateway-wrapper mt-10">
                                    <ul className="payment-gateway-list flex flex-wrap mb-10">
                                        {paymentMethods.map((method) => (
                                            <li key={method.id} className="single-gateway-item">
                                                <Image src={method.imageUrl} alt="Payment Method" width={50} height={30} />
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Terms & Conditions */}
                                    {/* <div className="remember-me terms-condition">
                                        <label className="mb-30">
                                            <input
                                                type="checkbox"
                                                name="agreeTerms"
                                                checked={formData.agreeTerms}
                                                onChange={handleCheckboxChange}
                                                className="checkbox-style"
                                            />
                                            <small>
                                                I agree to all the{" "}
                                                <Link href="/terms-condition" className="text-primary">
                                                    Terms
                                                </Link>{" "}
                                                and{" "}
                                                <Link href="/privacy-policy" className="text-primary">
                                                    Privacy policy
                                                </Link>
                                            </small>
                                        </label>
                                    </div> */}

                                    <button type="submit" className="btn-primary-fill py-15 px-48 text-base rounded-[6px]">
                                        Bağış yapın
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="xs-to-lg-min:col-span-4 xs-to-md-min:col-span-5 xs-to-sm-min:col-span-7 col-span-12">
                        <div className="blog-section-two">
                            <div className="single-blog rounded-[10px] bg-white transition-bundle hover:shadow-helpful-card">
                                <div className="relative">
                                    <Image
                                        src={donationDetailsImage}
                                        className="w-full rounded-t-[10px]"
                                        width={400}
                                        height={300}
                                        alt="Donation Details"
                                    />
                                </div>
                                <div className="paymentDetails">
                                    <div className="blog-info border border-primary-gray rounded-b-[10px] p-20 mt-6 text-primary-title">
                                        <Link href={href}>
                                            <h4 className="text-xl xs:text-base leading-normal font-bold text-primary-title mb-15">
                                                {donationTitle}
                                            </h4>
                                        </Link>
                                        <p className="text-base xs:text-md leading-normal font-normal mb-20 text-tertiary-title">
                                            {donationDescription}
                                        </p>
                                        <div className="priceListing">
                                            <ul className="listing">
                                                {/* <li className="flex justify-between mb-10">
                                                    <p className="text-md leading-normal font-semibold text-tertiary-title">Your Donation</p>
                                                    <p className="text-base leading-normal font-semibold text-tertiary-title">${formData.amount}</p>
                                                </li> */}
                                                {/* <li className="flex justify-between mb-10">
                                                    <p className="text-md leading-normal font-semibold text-tertiary-title">Tax</p>
                                                    <p className="text-base leading-normal font-semibold text-tertiary-title">$5</p>
                                                </li> */}
                                                <li className="flex justify-between border-t border-[#e5e5e5] pt-10">
                                                    <p className="text-md leading-normal font-semibold text-tertiary-title">Toplam</p>
                                                    <p className="text-base leading-normal font-semibold text-tertiary-title">{formData.amount} TL</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-30 flex items-center">
                            <Link href="/about/account-numbers" type="button" className="btn-primary-fill py-15 px-48 text-base rounded-[6px]">
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
