"use client";

import Link from "next/link";
import { Container } from "./global/container";
import { useSiteContent } from "@/app/providers";

export default function Footer() {
  const { content } = useSiteContent();
  const footer = content.footer;
  return (
    <footer className="bg-neutral-950 text-neutral-200">
      <Container pad_y="none" className="py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-white font-medium">{footer.brandName}</div>
            {footer.tagline ? (
              <div className="text-sm text-neutral-400">{footer.tagline}</div>
            ) : null}
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {footer.links.map((l) => (
              <Link key={l.label} href={l.href} target={l.target} rel={l.rel} className="hover:text-white">
                {l.label}
              </Link>
            ))}
            <Link href="mailto:sales@chaeth.com" className="hover:text-white">
              sales@chaeth.com
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {footer.legal?.copyrightBrand ?? footer.brandName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
