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
    default: "Expenser - Free Expense Tracker & Budget Manager | Personal Finance Dashboard",
    template: "%s | Expenser - Smart Expense Management",
  },
  description: "Free expense tracker and budget manager with real-time analytics. Track spending, manage budgets across 15+ currencies, create custom categories, and achieve financial goals. Start tracking expenses today - no credit card required.",
  keywords: [
    "expense tracker",
    "budget manager",
    "personal finance app",
    "free expense tracker",
    "spending tracker",
    "budget tracking software",
    "financial planning tool",
    "expense management system",
    "money tracking app",
    "financial dashboard",
    "multi-currency expense tracker",
    "budget analytics",
    "expense categories",
    "financial goal tracking",
    "spending analysis",
    "budget calculator",
    "expense reporting",
    "financial insights",
    "money management software",
    "personal budgeting",
    "expense visualization",
    "financial trends",
    "budget planning",
    "expense categorization",
    "spending habits analysis",
    "budget control",
    "financial tracking",
    "expense monitoring",
    "budget optimization",
    "financial organization"
  ],
  authors: [
    { name: "Shakil Ahmed", url: "https://github.com/sakilahmmad71" }
  ],
  creator: "Shakil Ahmed",
  publisher: "Expenser",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      noimageindex: false,
    },
  },
  applicationName: 'Expenser',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon-new.svg',
    shortcut: '/favicon-new.svg',
    apple: '/favicon-new.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8000',
    siteName: "Expenser",
    title: "Expenser - Free Expense Tracker & Budget Manager | Personal Finance Dashboard",
    description: "Free expense tracker and budget manager with real-time analytics. Track spending across 15+ currencies, create custom categories, and achieve financial goals. Start managing your finances today.",
    countryName: 'United States',
    determiner: 'the',
    images: [
      {
        url: '/expense-manager-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'Expenser Expense Tracker Dashboard - Personal Finance Management',
        type: 'image/png',
      },
      {
        url: '/images/expenses-status-and-filters.png',
        width: 1200,
        height: 630,
        alt: 'Expenser Analytics Dashboard with Expense Filters and Statistics',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sakilahmmad71',
    creator: '@sakilahmmad71',
    title: "Expenser - Free Expense Tracker & Budget Manager",
    description: "Free expense tracker with real-time analytics. Track spending, manage budgets across 15+ currencies, and achieve financial goals. No credit card required.",
    images: {
      url: '/expense-manager-dashboard.png',
      alt: 'Expenser Dashboard - Free Expense Tracker and Budget Manager',
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8000',
  },
  category: 'finance',
  verification: {
    // Add verification codes when available
    // google: 'google-site-verification-code',
    // yandex: 'yandex-verification-code',
    // bing: 'bing-site-verification-code',
  },
  other: {
    'facebook-domain-verification': 'wfugv2kt2cexhjdshajdhme217ivvu',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Expenser',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#3b82f6',
    'msapplication-config': '/browserconfig.xml',
  },
  bookmarks: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8000',
  archives: [],
  assets: [],
  generator: 'Next.js',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Expenser',
    alternateName: 'Expense Tracker',
    description: 'Free expense tracker and budget manager with real-time analytics. Track spending across 15+ currencies, create custom categories, and achieve financial goals.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8000',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      category: 'Free'
    },
    creator: {
      '@type': 'Person',
      name: 'Shakil Ahmed',
      url: 'https://github.com/sakilahmmad71',
      sameAs: [
        'https://linkedin.com/in/sakilahmmad71',
        'https://github.com/sakilahmmad71',
        'https://facebook.com/sakilahmmad71'
      ]
    },
    featureList: [
      'Expense Tracking',
      'Budget Management',
      'Multi-currency Support',
      'Analytics Dashboard',
      'Custom Categories',
      'Real-time Updates',
      'Secure Authentication',
      'Monthly Trends Analysis'
    ],
    screenshot: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:8000'}/expense-manager-dashboard.png`,
    softwareVersion: '1.0',
    dateCreated: '2025-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1'
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
