import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { CardItem, DialogCopy } from "@/types/content";

export function ContentCard({ item, dialog, readMoreLabel = "Read more" }: { item: CardItem; dialog?: DialogCopy; readMoreLabel?: string }) {
  return (
    <Card className="m-0 h-full border-0 bg-transparent shadow-none justify-center">
      <CardContent className="p-6 md:p-10">
        <span className="mb-3 inline-flex items-center rounded-md bg-white/20 px-2 py-0.5 text-[11px] font-mono uppercase tracking-wider text-white">
          {item.category}
        </span>
        <h3 className="text-2xl font-semibold leading-tight sm:text-3xl text-white">{item.title}</h3>
        <p className="mt-3 max-w-prose text-neutral-300">{item.sentence}</p>

        {dialog && (
          <div className="mt-5">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link" className="gap-1 text-neutral-300 hover:text-neutral-100">
                  {readMoreLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-neutral-800 text-neutral-100 border border-white/15 p-6 sm:p-8 md:p-10 w-[calc(100%-2rem)] max-w-[calc(100%-2rem)] max-h-[calc(100vh-2rem)] overflow-auto sm:rounded-lg md:aspect-square md:w-[36rem] md:max-w-[min(36rem,calc(100vw-2rem))] md:max-h-[80vh] md:overflow-auto">
                <DialogHeader>
                  <DialogTitle className="text-white font-semibold">{dialog.title}</DialogTitle>
                  <DialogDescription className="text-neutral-300">{dialog.body}</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
