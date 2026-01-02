import Script from 'next/script';
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8000'),
  title: {
    default: "Expenser - Take Control of Your Personal Finances",
    template: "%s | Expenser",
  },
  description: "Track expenses, analyze spending patterns, and achieve your financial goals with our intuitive expense management platform. Features multi-currency support, custom categories, real-time analytics dashboard, and secure JWT authentication.",
  keywords: [
    "expense tracker",
    "finance management",
    "budgeting app",
    "expense analytics",
    "personal finance",
    "budget tracker",
    "expense management",
    "financial planning",
    "money management",
    "spending tracker",
    "multi-currency support",
    "expense categories",
    "financial dashboard"
  ],
  authors: [
    { name: "Shakil Ahmed", url: "https://github.com/sakilahmmad71" }
  ],
  creator: "Shakil Ahmed",
  publisher: "Expenser",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8000',
    siteName: "Expenser",
    title: "Expenser - Take Control of Your Personal Finances",
    description: "Track expenses, analyze spending patterns, and achieve your financial goals with our intuitive expense management platform. Features multi-currency support, custom categories, and analytics dashboard.",
    images: [
      {
        url: '/expense-manager-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Expenser Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Expense Manager - Take Control of Your Personal Finances",
    description: "Track expenses, analyze spending patterns, and achieve your financial goals with our intuitive expense management platform.",
    creator: '@sakilahmmad71',
    images: ['/expense-manager-dashboard.png'],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8000',
  },
  category: 'finance',
  verification: {
    // Add verification codes when available
    // google: 'google-site-verification-code',
    // yandex: 'yandex-verification-code',
  },
  other: {
    'facebook-domain-verification': 'wfugv2kt2cexhjdshajdhme217ivvu',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTQCPVV5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MTQCPVV5');
          `,
        }}
      />
      <GoogleAnalytics gaId="G-MMJ960HSSC" />
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
