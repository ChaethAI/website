import Contact from "@/components/contact/contact";
import { Container } from "@/components/global/container";
import { Typography } from "@/components/global/typography";

export default function ContactPage() {
  return (
    <Container bg="dark" outerClassName="min-h-screen flex items-center">
      <Typography variant="h1" className="mb-8">Contact Us</Typography>
      <Contact />
    </Container>
  );
}
