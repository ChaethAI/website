import { ContactForm } from "@/components/contact_form";
import { Container } from "@/components/global/container";
import { Typography } from "@/components/global/typography";

export default function ContactPage() {
  return (
    <Container bg="dark" pad_y="lg" className="min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Typography variant="h2" className="mb-4">
            Contact Us
          </Typography>
          <Typography variant="subtitle">
            Start your AI journey and scale knowing your data is safe.
          </Typography>
        </div>
        <ContactForm />
      </div>
    </Container>
  );
}
