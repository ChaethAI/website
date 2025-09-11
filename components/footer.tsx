import Link from "next/link";
import { Container } from "./global/container";

const DEMO_LINK = "https://demo.chaeth.com";
const CONTACT_LINK = "mailto:hello@chaeth.com";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-200">
      <Container className="py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-white font-medium">Chaeth</div>
            <div className="text-sm text-neutral-400">Local‑first AI in Thailand</div>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="#features" className="hover:text-white">Features</Link>
            <Link href="#hosting" className="hover:text-white">Hosting</Link>
            <Link href={DEMO_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white">Demo</Link>
            <Link href={CONTACT_LINK} className="hover:text-white">Contact</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Chaeth. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
