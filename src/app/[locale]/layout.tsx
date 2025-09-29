import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Header from "../../components/header";
import Footer from "../../components/footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import Script from "next/script";
import AnalyticsTracker from "../../components/AnalyticsTracker";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DEV-HAWKS",
  description:
    "Website development, web design, and e-commerce solutions for businesses of any size. We create professional websites, online stores, corporate websites, landing pages, and automation systems. Full-cycle web development: design, front-end, back-end, SEO optimization, and technical support.",
  keywords:
    "website development, web design, online store, e-commerce, corporate website, landing page, business website, custom web development, IT services, automation systems, SEO, front-end, back-end, CRM development, mobile-friendly websites",
  authors: [{ name: "YourCompanyName" }],
  creator: "Telnov Andrey",
  robots: "index, follow",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased layout`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>

        <AnalyticsTracker />

        {/* Google Analytics скрипты */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-D8YXWPF6DS`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-D8YXWPF6DS');
          `}
        </Script>
      </body>
    </html>
  );
}
