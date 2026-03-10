import HomeView from "@/views/home-view";
export const dynamic = 'force-dynamic'
export default async function Home({ params }: any) {
  const lang = (await params).lang
  return (
    <>
      <HomeView lang={lang} />
    </>
  );
}

