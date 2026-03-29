import type { Metadata } from "next";
import { Inter, Open_Sans, Cairo } from "next/font/google";
import "@/app/[lang]/globals.css";
import { cn } from "@/lib/utils";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["latin", "arabic", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-open-sans",
  display: "swap",
});

const cairo2 = Cairo({
  subsets: ["latin", "arabic", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Insan Dernegi",
  verification: {
    google: "F34JRith0bfRMZvA4cQ9lEuGrg-zZns84qBRR2MJypY",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const { lang } = await params
  return (
    <html lang={lang} dir={lang == 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <link rel="stylesheet" type="text/css" href="/css/remixicon.css" />
        <link rel="stylesheet" type="text/css" href="/css/plugin.css" />
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          lang != 'ar' && inter.variable,
          lang != 'ar' && openSans.variable,
          lang == 'ar' && cairo.variable,
          lang == 'ar' && cairo2.variable
        )}
      // className={`${inter.variable} ${openSans.variable}`}
      >
        {children}
        <GoogleAnalytics gaId="G-WR99BX6GZ7" />
      </body>
    </html>
  );
}
