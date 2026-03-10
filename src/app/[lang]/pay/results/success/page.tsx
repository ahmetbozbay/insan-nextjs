import PayView from "@/views/pay-view";
import PaymentResultView from "@/views/payment-result-view";

// export const dynamic = 'force-dynamic'
export default async function ContactPage({ params }: any) {
    const { lang, slug } = (await params)
    return (
        <>
            <PaymentResultView lang={lang} result="success" />
        </>
    );
}


