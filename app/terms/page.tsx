/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { Container } from "@/components/global/container";
import { Typography } from "@/components/global/typography";

export const metadata: Metadata = {
  title: "Terms and Conditions - Chaeth AI Platform",
  description: "Terms and conditions for Chaeth's local-first AI platform. Enterprise-grade AI services with Thailand data residency and PDPA compliance.",
  keywords: [
    "terms and conditions",
    "AI service terms",
    "enterprise AI",
    "Thailand data residency",
    "PDPA compliance",
    "AI platform terms"
  ],
  openGraph: {
    title: "Terms and Conditions - Chaeth AI Platform",
    description: "Terms and conditions for Chaeth's local-first AI platform. Enterprise-grade AI services with Thailand data residency and PDPA compliance.",
    url: "https://chaeth.com/terms",
  },
  twitter: {
    title: "Terms and Conditions - Chaeth AI Platform",
    description: "Terms and conditions for Chaeth's local-first AI platform. Enterprise-grade AI services with Thailand data residency and PDPA compliance.",
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <Container outerClassName="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      <div className="py-16 lg:py-24">
        <Typography variant="h1" className="text-center mb-16">
          Terms and Conditions
        </Typography>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Service Overview */}
          <section>
            <Typography variant="h2" className="mb-6">
              1. Service Overview
            </Typography>
            <Typography variant="body" className="mb-4">
              Chaeth Chat provides enterprise-grade AI services through our Thai-based infrastructure,
              delivering cutting-edge AI models while maintaining the highest standards of data security and compliance.
            </Typography>
            <Typography variant="body">
              As Thailand's premier local AI service provider, we ensure your enterprise data remains
              secure within Thailand's borders, never leaving our sovereign infrastructure.
            </Typography>
          </section>

          {/* Data Security & Residency */}
          <section>
            <Typography variant="h2" className="mb-6">
              2. Data Security & Thailand Data Residency
            </Typography>
            <Typography variant="body" className="mb-4">
              <strong>Data Sovereignty Guarantee:</strong> All your data at rest remains exclusively within
              Thailand's jurisdiction. Our infrastructure is designed with multiple layers of security,
              including encryption, access controls, and compliance with Thailand's data protection standards.
            </Typography>
            <Typography variant="body" className="mb-4">
              <strong>Enterprise-Grade Security:</strong> We implement industry-leading security measures
              including end-to-end encryption, regular security audits, and compliance with international
              standards while maintaining Thailand's data residency requirements.
            </Typography>
            <Typography variant="body">
              Your enterprise data is processed and stored exclusively on Thai soil, ensuring compliance
              with local regulations and providing you with complete data sovereignty.
            </Typography>
          </section>

          {/* Enterprise AI Services */}
          <section>
            <Typography variant="h2" className="mb-6">
              3. Enterprise AI Services
            </Typography>
            <Typography variant="body" className="mb-4">
              We offer comprehensive AI solutions tailored for enterprise needs, including:
            </Typography>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>Custom AI model deployment and management</li>
              <li>Local data processing and analytics</li>
              <li>Integration with existing enterprise systems</li>
              <li>24/7 monitoring and support</li>
              <li>Scalable infrastructure for growing AI workloads</li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section>
            <Typography variant="h2" className="mb-6">
              4. User Responsibilities
            </Typography>
            <Typography variant="body" className="mb-4">
              <strong>Account Security:</strong> You are responsible for maintaining the confidentiality
              of your account credentials and ensuring secure access to our services.
            </Typography>
            <Typography variant="body" className="mb-4">
              <strong>Usage Compliance:</strong> All use of our services must comply with applicable
              Thai laws and regulations, including data protection and privacy requirements.
            </Typography>
            <Typography variant="body">
              <strong>Data Ownership:</strong> You retain ownership of all data you upload to our platform.
              We act solely as a service provider for processing and storage within Thailand.
            </Typography>
          </section>

          {/* Service Availability */}
          <section>
            <Typography variant="h2" className="mb-6">
              5. Service Availability & Support
            </Typography>
            <Typography variant="body" className="mb-4">
              <strong>Uptime Commitment:</strong> We strive for 99.9% uptime for our core AI services,
              with comprehensive monitoring and rapid incident response capabilities.
            </Typography>
            <Typography variant="body" className="mb-4">
              <strong>Local Support:</strong> Our team of AI specialists and security experts is based
              in Thailand, providing local expertise and rapid response times for all enterprise needs.
            </Typography>
            <Typography variant="body">
              <strong>Continuous Improvement:</strong> We regularly update our AI models and infrastructure
              to ensure you always have access to the latest advancements in AI technology.
            </Typography>
          </section>

          {/* Limitation of Liability */}
          <section>
            <Typography variant="h2" className="mb-6">
              6. Limitation of Liability
            </Typography>
            <Typography variant="body" className="mb-4">
              Our services are provided "as is" with the highest standards of security and reliability.
              While we implement comprehensive security measures, no system is completely immune to risks.
            </Typography>
            <Typography variant="body">
              Our liability is limited to the amounts paid for services in the preceding 12 months,
              ensuring fair and reasonable risk allocation for enterprise customers.
            </Typography>
          </section>

          {/* Governing Law */}
          <section>
            <Typography variant="h2" className="mb-6">
              7. Governing Law
            </Typography>
            <Typography variant="body" className="mb-4">
              These terms are governed by Thai law, with exclusive jurisdiction in Thai courts.
              This ensures that all legal matters remain within Thailand's legal framework.
            </Typography>
            <Typography variant="body">
              Any disputes will be resolved through Thai legal processes, maintaining consistency
              with our data residency and sovereignty commitments.
            </Typography>
          </section>

          {/* Contact Information */}
          <section className="border-t border-white/10 pt-12">
            <Typography variant="h3" className="mb-6">
              Contact Us
            </Typography>
            <Typography variant="body" className="mb-4">
              For questions about these terms or our services, please contact our enterprise team:
            </Typography>
            <div className="text-white/70">
              <p>Email: enterprise@chaethchat.com</p>
              <p>Phone: +66 XX XXX XXXX</p>
              <p>Address: Bangkok, Thailand</p>
            </div>
          </section>

          <Typography variant="caption" className="text-center text-white/50 mt-16">
            Last updated: {new Date().toLocaleDateString('th-TH', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </Typography>
        </div>
      </div>
    </Container>
  );
}
