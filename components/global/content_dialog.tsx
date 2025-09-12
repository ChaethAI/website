"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type { DialogCopy } from "@/types/content"

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
          <DialogTitle className="text-white font-semibold">{dialog.title}</DialogTitle>
          <DialogDescription className="text-neutral-300">{dialog.body}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

