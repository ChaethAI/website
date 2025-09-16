import Contact from "@/components/contact/contact";
import { Container } from "@/components/global/container";
import { Typography } from "@/components/global/typography";

export default function ContactPage() {
  return (
    <Container bg="dark" outerClassName="min-h-screen flex flex-col items-center">
      <Typography variant="h1" className="mb-8">Contact Us</Typography>
      <Contact />
      <Typography variant="subtitle" className="mt-8 text-center max-w-2xl">
        If you prefer email, please send your request to{" "}
        <a
          href="mailto:sales@chaeth.com?subject=Interest in Thai AI services"
          className="text-white hover:text-white/80 underline decoration-white/30 hover:decoration-white/50 transition-colors"
        >
          sales@chaeth.com
        </a>
      </Typography>
    </Container>
  );
}
