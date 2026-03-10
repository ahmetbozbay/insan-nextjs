import MainLayout from "@/layouts/main-layout";
import { locales } from "@/middleware";

export async function generateStaticParams() {
  return locales.map(locale => ({ lang: locale }))
}

export default async function Layout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const lang = (await params).lang
  return (
    <>
      <MainLayout lang={lang}>
        {children}
      </MainLayout>
    </>
  );
}
