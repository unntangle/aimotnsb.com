"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Deterministic fallback used if the remote image ever 404s. */
  seed?: string;
};

/**
 * Fill-mode image with a graceful fallback so a broken remote asset
 * never leaves a hole in the layout. Parent must be `relative`.
 */
export default function Img({
  src,
  alt,
  className = "object-cover",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  seed = "aimo",
}: Props) {
  const [current, setCurrent] = useState(src);

  return (
    <Image
      src={current}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() =>
        setCurrent(`https://picsum.photos/seed/${encodeURIComponent(seed)}/1200/800`)
      }
    />
  );
}
