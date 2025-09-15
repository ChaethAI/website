"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Typography } from "@/components/global/typography"
import type { DialogCopy } from "@/types/content"

function formatDialogBody(body: string) {
  // Check if this is a use case dialog with structured content (Who/What format)
  const hasStructuredContent = body.includes('Who:') && body.includes('What:');

  if (hasStructuredContent) {
    // Split by section headers and format each section
    const sections = body.split(/(?=Who:|What:|How it helps:|Why it matters:|Example:)/);

    return sections.map((section, index) => {
      if (section.trim() === '') return null;

      const isHeader = section.match(/^(Who:|What:|How it helps:|Why it matters:|Example:)/);

      if (isHeader) {
        const [header, ...contentParts] = section.split(':');
        const content = contentParts.join(':').trim();

        return (
          <div key={index} className="mb-4 last:mb-0">
            <Typography variant="caption" className="text-white uppercase tracking-wide !text-base !font-semibold">
              {header}:
            </Typography>
            <Typography variant="body" className="text-neutral-300 mt-1" as="span">
              {content}
            </Typography>
          </div>
        );
      }

      return (
        <div key={index} className="mb-4 last:mb-0">
          <Typography variant="body" className="text-neutral-300" as="span">
            {section.trim()}
          </Typography>
        </div>
      );
    }).filter(Boolean);
  } else {
    // Handle paragraph-style content (like explainer dialogs)
    return (
      <Typography variant="body" className="text-neutral-300 leading-relaxed" as="div">
        {body}
      </Typography>
    );
  }
}

export function ContentDialogTrigger({ dialog, label = "Read more" }: { dialog: DialogCopy; label?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="gap-1 text-neutral-300 hover:text-neutral-100">
          {label}
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-neutral-800 text-neutral-100 border border-white/15 p-6 sm:p-8 md:p-10 w-[calc(100%-2rem)] max-w-[calc(100%-2rem)] max-h-[calc(100vh-2rem)] overflow-auto sm:rounded-lg md:aspect-square md:w-[36rem] md:max-w-[min(36rem,calc(100vw-2rem))] md:max-h-[80vh] md:overflow-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{dialog.title}</DialogTitle>
          <Typography variant="h3" className="!text-white !font-semibold !mb-4">
            {dialog.title}
          </Typography>
          <div className="space-y-1">
            {formatDialogBody(dialog.body)}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

