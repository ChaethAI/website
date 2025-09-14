import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/global/navbar";
import { SiteContentProvider } from "./providers";
import { UseCaseNavProvider } from "@/lib/uc_store";
import { GeistSans, GeistMono } from "geist/font";

export const metadata: Metadata = {
  title: "Chaeth - Local-First AI Platform for Thai Enterprises",
  description: "Professional AI chat and API platform hosted in Thailand. PDPA-compliant, enterprise-grade security with Thai language support. Your data stays in Thailand with full audit trails and SSO integration.",
  keywords: [
    "AI chat",
    "Thai AI",
    "local-first AI",
    "enterprise AI",
    "PDPA compliance",
    "data residency Thailand",
    "private AI platform",
    "Thai language AI",
    "enterprise security",
    "SSO integration",
    "SAML OIDC",
    "AI API Thailand"
  ],
  authors: [{ name: "Chaeth" }],
  creator: "Chaeth",
  publisher: "Chaeth",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://chaeth.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Chaeth - Local-First AI Platform for Thai Enterprises",
    description: "Professional AI chat and API platform hosted in Thailand. PDPA-compliant, enterprise-grade security with Thai language support.",
    url: "https://chaeth.com",
    siteName: "Chaeth",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/chaeth_logo.svg",
        width: 1200,
        height: 630,
        alt: "Chaeth - Local-First AI Platform for Thai Enterprises",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaeth - Local-First AI Platform for Thai Enterprises",
    description: "Professional AI chat and API platform hosted in Thailand. PDPA-compliant, enterprise-grade security with Thai language support.",
    images: ["/chaeth_logo.svg"],
    creator: "@chaeth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Chaeth",
    "description": "Local-first AI platform for Thai enterprises with PDPA compliance and enterprise-grade security",
    "url": "https://chaeth.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "THB"
    },
    "provider": {
      "@type": "Organization",
      "name": "Chaeth",
      "url": "https://chaeth.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TH"
      }
    },
    "featureList": [
      "Local-first AI",
      "Thai language support",
      "PDPA compliance",
      "Enterprise security",
      "SSO integration",
      "Data residency in Thailand"
    ]
  };

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Chaeth" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/chaeth_logo.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="antialiased font-sans">
        <UseCaseNavProvider>
          <SiteContentProvider initialLocale="en">
            <Navbar />
            {children}
          </SiteContentProvider>
        </UseCaseNavProvider>
      </body>
    </html>
  );
}
