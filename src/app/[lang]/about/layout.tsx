import MainLayout from "@/layouts/main-layout";

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
