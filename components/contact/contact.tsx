import { Typography } from "@/components/global/typography";
import { Badge } from "@/components/ui/badge";
import { ContactFormCard } from "@/components/contact/contact_form";

/**
 * ContactContextCard
 * - Exportable left-side card (context)
 * - On large screens the inner edge is square so it touches the form card exactly
 * - Semi-transparent/frosted background so the center seam feels "transparent"
 */
export function ContactContextCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={[
        // shared card style
        "p-6 md:p-10 bg-neutral-900 backdrop-blur-sm border border-white/6 shadow-xl",
        // square corners on all screens
        "flex flex-col justify-center",
        className,
      ].filter(Boolean).join(" ")}
    >
      <Badge variant="outline" className="mb-4 text-white/80 border-white/20">
        Contact
      </Badge>

      <Typography variant="h3" className="mb-3">
        Get Started with Chaeth AI
      </Typography>

      <Typography variant="body" className="mb-6 text-neutral-300">
        Ready to transform your enterprise with local-first AI? Connect with our team to discuss your specific needs and explore how Chaeth can accelerate your AI journey while keeping your data secure in Thailand.
      </Typography>

      <ul className="space-y-2">
        <li>
          <Typography variant="caption" className="text-neutral-300">✓ Thai-hosted</Typography>
        </li>
        <li>
          <Typography variant="caption" className="text-neutral-300">✓ Enterprise-grade security</Typography>
        </li>
        <li>
          <Typography variant="caption" className="text-neutral-300">✓ Dedicated supports</Typography>
        </li>
        <li>
          <Typography variant="caption" className="text-neutral-300">✓ PDPA-compliant</Typography>
        </li>
        <li>
          <Typography variant="caption" className="text-neutral-300">✓ Thai first language</Typography>
        </li>
      </ul>
    </div>
  );
}

/**
 * Contact page - composes the two cards so they touch in the middle
 * - Grid with two columns, gap-0 so edges touch
 * - Cards have square inner edges on lg+ screens
 * - Exported default so you can use as a page, while the individual card components are also exportable
 */
export default function Contact() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
      {/* Left: exported context card */}
      <ContactContextCard />

      {/* Right: form card wrapper (imported from contact_form file) */}
      <ContactFormCard />
    </div>
  );
}
