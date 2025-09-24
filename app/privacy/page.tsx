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
    <main className="min-h-screen bg-neutral-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light mb-8">Privacy Policy</h1>
        <p className="text-neutral-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="space-y-8 text-neutral-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              Chaeth (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal data.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
              or use our AI platform services. We comply with the Personal Data Protection Act B.E. 2562 (2019) (PDPA) and
              ensure your data remains within Thailand.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-medium text-white mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Contact information (name, email, phone) when you contact us or sign up</li>
              <li>Account information when you register for our services</li>
              <li>Communication content when you use our chat support</li>
              <li>Feedback and survey responses</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-3">2.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, features used)</li>
              <li>Language preference and timezone</li>
              <li>Cookies and similar technologies</li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-3">2.3 Third-Party Services</h3>
            <p className="mb-4">
              We use Crisp (a customer support chat service) to provide customer support through our website.
              When you interact with our chat widget, Crisp may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chat conversation content and metadata</li>
              <li>Technical information about your device and browser</li>
              <li>Session information and user preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve our AI platform services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process transactions and manage your account</li>
              <li>Send you important updates about our services</li>
              <li>Analyze usage patterns to improve our platform</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations under PDPA</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Data Residency and Security</h2>
            <p className="mb-4">
              <strong>Thai Data Residency:</strong> All customer data is stored and processed within Thailand
              to comply with PDPA requirements. We do not transfer personal data outside Thailand without
              explicit consent or legal authorization.
            </p>
            <p className="mb-4">
              <strong>Security Measures:</strong> We implement industry-standard security measures including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of data in transit (TLS 1.2+) and at rest (AES-256)</li>
              <li>Access controls and regular security audits</li>
              <li>Regular security updates and patches</li>
              <li>Employee training on data protection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights Under PDPA</h2>
            <p className="mb-4">Under the PDPA, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> Request information about your personal data we hold</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Object:</strong> Object to processing in certain circumstances</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar technologies to enhance your experience and analyze website usage.
              Our chat widget (Crisp) may also use cookies to maintain conversation history and user preferences.
            </p>
            <p>
              You can control cookie preferences through your browser settings. However, disabling certain
              cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Third-Party Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-white mb-2">Crisp Chat Support</h3>
                <p className="mb-2">
                  We use Crisp to provide customer support. Crisp processes chat data on our behalf and
                  is contractually obligated to maintain the same privacy and security standards.
                </p>
                <p>
                  For more information about Crisp&apos;s data practices, please visit:
                  <a href="https://crisp.chat/privacy/" className="text-blue-400 hover:text-blue-300 ml-1" target="_blank" rel="noopener noreferrer">
                    Crisp Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Data Retention</h2>
            <p className="mb-4">
              We retain personal data only as long as necessary for the purposes outlined in this policy,
              or as required by law. Specific retention periods include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account data: Retained while your account is active and for 3 years after closure</li>
              <li>Chat conversations: Retained for customer support purposes and deleted after 2 years</li>
              <li>Analytics data: Anonymized after 12 months</li>
              <li>Legal compliance: Retained as required by PDPA and other applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. International Data Transfers</h2>
            <p>
              As a Thai company committed to data residency, we do not transfer personal data outside Thailand
              except where explicitly authorized by PDPA or with your consent. Any necessary transfers are
              conducted with appropriate safeguards and legal mechanisms in place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age. We do not knowingly collect
              personal information from children under 13. If you believe we have collected information from
              a child under 13, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes
              by posting the updated policy on our website and updating the &ldquo;Last updated&rdquo; date. Your continued
              use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-neutral-800 p-6 rounded-lg">
              <p className="mb-2"><strong>Data Protection Officer</strong></p>
              <p className="mb-2">Chaeth</p>
              <p className="mb-2">Email: privacy@chaeth.com</p>
              <p className="mb-2">Phone: +66 XX XXX XXXX</p>
              <p>Address: Bangkok, Thailand</p>
            </div>
            <p className="mt-4 text-sm text-neutral-400">
              For PDPA compliance inquiries and data subject requests, please include &ldquo;PDPA Request&rdquo; in your email subject.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

