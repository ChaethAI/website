import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Chaeth AI Platform",
  description: "Privacy policy for Chaeth's local-first AI platform. Learn how we protect your data with PDPA compliance and Thailand data residency.",
  keywords: [
    "privacy policy",
    "PDPA compliance",
    "data protection",
    "Thailand data residency",
    "AI privacy",
    "enterprise data security"
  ],
  openGraph: {
    title: "Privacy Policy - Chaeth AI Platform",
    description: "Privacy policy for Chaeth's local-first AI platform. Learn how we protect your data with PDPA compliance and Thailand data residency.",
    url: "https://chaeth.com/privacy",
  },
  twitter: {
    title: "Privacy Policy - Chaeth AI Platform",
    description: "Privacy policy for Chaeth's local-first AI platform. Learn how we protect your data with PDPA compliance and Thailand data residency.",
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-[40vh] bg-neutral-900 text-white px-6 py-16">
      <h1 className="text-3xl font-light mb-4">Privacy</h1>
      <p className="text-neutral-300">Placeholder privacy policy. Content coming soon.</p>
    </main>
  );
}

