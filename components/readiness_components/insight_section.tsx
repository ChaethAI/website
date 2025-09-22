import { Container } from "@/components/global/container";
import { Typography } from "@/components/global/typography";
import type { ReactNode } from "react";

export interface InsightEvidence {
  quote: string;
  attribution: string;
  sources: { label: string; url?: string }[];
}

export interface InsightContent {
  id: string;
  label: string;
  title: string;
  description: string[];
  highlights: string[];
  evidence: InsightEvidence;
  takeaway: string;
}

interface InsightSectionProps {
  background?: "dark" | "darker";
  content: InsightContent;
  index: number;
  renderFooter?: (content: InsightContent) => ReactNode;
}

export function InsightSection({ background = "dark", content, index, renderFooter }: InsightSectionProps) {
  const isEven = index % 2 === 0;

  return (
    <Container bg={isEven ? background : background === "dark" ? "darker" : "dark"} pad_y="lg" className="relative">
      <div className="text-center mb-12 space-y-4">
        <Typography variant="caption" className="uppercase tracking-[0.3em] text-neutral-400">
          {content.label}
        </Typography>
        <Typography as="h2" variant="sectionTitle" className="mb-0">
          {content.title}
        </Typography>
      </div>

      <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] xl:gap-0">
        <div className="space-y-6 text-left bg-neutral-800/80 p-8 sm:p-10 lg:p-12">
          {content.description.map((paragraph) => (
            <Typography key={paragraph} variant="body" className="text-neutral-200">
              {paragraph}
            </Typography>
          ))}

          <div className="grid gap-4 sm:grid-cols-2">
            {content.highlights.map((highlight) => (
              <div key={highlight} className="flex items-start gap-3">
                <span className="mt-1 block h-2 w-2 rounded-full bg-violet-400" />
                <Typography variant="body" className="text-sm text-neutral-200">
                  {highlight}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        <div className="flex aspect-square flex-col justify-between bg-neutral-100/95 p-10 sm:p-12">
          <div className="space-y-4">
            <Typography variant="quote" className="text-neutral-900">
              &ldquo;{content.evidence.quote}&rdquo;
            </Typography>
            <Typography variant="caption" className="text-neutral-600">
              {content.evidence.attribution}
            </Typography>
          </div>

          <div className="space-y-1 text-xs text-neutral-600">
            {content.evidence.sources.map(({ label, url }) => (
              <div key={label}>
                {url ? (
                  <a
                    href={url}
                    className="text-violet-600 transition-colors hover:text-violet-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 text-left">
        {renderFooter ? (
          renderFooter(content)
        ) : (
          <>
            <Typography variant="caption" className="uppercase tracking-[0.2em] text-neutral-500">
              Chaeth insight
            </Typography>
            <Typography variant="body" className="mt-3 max-w-3xl text-neutral-200">
              {content.takeaway}
            </Typography>
          </>
        )}
      </div>

      <div className="absolute bottom-0 left-1/2 h-px w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
    </Container>
  );
}
