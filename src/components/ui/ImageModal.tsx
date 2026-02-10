"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import type { ProjectImage } from "@/types/project";

interface ImageModalProps {
  images: ProjectImage[];
}

export function ImageGallery({ images }: ImageModalProps) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {images.map((image, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setSelected(i)}
            className="overflow-hidden rounded-xl border border-border text-left transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="relative aspect-video">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
            <p className="bg-card px-3 py-2 text-xs text-muted-foreground">
              {image.alt}
            </p>
          </button>
        ))}
      </div>

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selected].src}
              alt={images[selected].alt}
              width={1600}
              height={900}
              className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
            />
            <p className="mt-2 text-center text-sm text-white/70">
              {images[selected].alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
