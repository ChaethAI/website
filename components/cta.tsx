import Link from "next/link";
import { Container } from "./global/container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/global/typography";

const CONTACT_LINK = "mailto:hello@chaeth.com";
const DEMO_LINK = "https://demo.chaeth.com";

export default function FinalCTA() {
  return (
    <Container outerClassName="bg-neutral-900" className="py-24 sm:py-28 lg:py-32 text-center">
      <Typography as="h2" variant="sectionTitle">Interested to unleash AI across your organization?</Typography>
      <Typography as="p" variant="sectionSubtitle" className="mb-8 sm:mb-10">
        Tell us about your environment and goals—let’s plan a pilot.
      </Typography>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <Button variant="primary" size="lg" asChild>
          <Link href={CONTACT_LINK}>Get in touch</Link>
        </Button>
        <Button variant="ghosty" size="lg" asChild>
          <Link href={DEMO_LINK} target="_blank" rel="noopener noreferrer">See the demo</Link>
        </Button>
      </div>
    </Container>
  );
}
