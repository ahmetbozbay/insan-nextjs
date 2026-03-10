import BankAccounts from "@/sections/about/accounts";

export interface AccountNumbersViewProps {
    lang?: string;
}

export default async function AccountNumbersView({ lang = "en" }: AccountNumbersViewProps) {
    return (
        <>
            <BankAccounts />
        </>
    );
}
