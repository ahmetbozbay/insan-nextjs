import { getProject } from "@/actions/projects";
import { getTranslations } from "@/actions/translations";
import Banner from "@/components/banner";
import HomeGallery from "@/sections/home/gallery";
import DonationPaymentSection from "@/sections/pay/donation-form";
import Link from "next/link";

export interface PayViewProps {
    lang?: string;
    result: 'success' | 'fail';
}
export default async function PaymentResultView({ lang = 'tr', result }: PayViewProps) {
    if(result == 'success'){
        return (
            <>
                <div className="flex flex-col items-center justify-center py-[5rem] bg-white">
                    <img src="/assets/images-used/success.png" alt="Payment Failed" className="w-[100px] h-[100px] mb-[20px]" />
                    <h2 className="text-green-600 text-4xl font-semibold mt-[10px] mb-[10px]">Bağışınız yapıldı</h2>
                    {/* <p className="text-gray-600 text-sm mb-4">Don't worry, your money is safe. You can try again.</p> */}
                    {/* <button className="px-6 py-2 border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition">
                        Try Again Payment
                    </button> */}
                    <Link
                        href={'/'}
                        className={`btn-primary-fill hover:bg-white rounded-full leading-tight px-30 py-14 mt-[30px]`}
                    >
                        Ana sayfaya geri dön
                    </Link>
                </div>
            </>
        );
    }
    if(result == 'fail'){
        return (
            <>
                <div className="flex flex-col items-center justify-center py-[5rem] bg-white">
                    <img src="/assets/images-used/failed.png" alt="Payment Failed" className="w-[100px] h-[100px] mb-[20px]" />
                    <h2 className="text-red-600 text-4xl font-semibold mt-[10px] mb-[10px]">Bir Hata Oluştu</h2>
                    {/* <p className="text-gray-600 text-sm mb-4">Don't worry, your money is safe. You can try again.</p> */}
                    {/* <button className="px-6 py-2 border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition">
                        Try Again Payment
                    </button> */}
                    <Link
                        href={'/'}
                        className={`btn-primary-fill hover:bg-white rounded-full leading-tight px-30 py-14 mt-[30px]`}
                    >
                        Ana sayfaya geri dön
                    </Link>
                </div>
            </>
        );
    }
}