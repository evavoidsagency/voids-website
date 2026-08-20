import Image from "next/image";
import type { CSSProperties } from "react";

/** Real photography, sized to an aspect-ratio box via next/image `fill`. */
export function Photo({
  src,
  alt,
  ratio = "4 / 5",
  radius = "var(--radius-lg)",
  priority = false,
  sizes = "(max-width: 860px) 100vw, 50vw",
  objectPosition = "center",
  style,
}: {
  src: string;
  alt: string;
  ratio?: string;
  radius?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: ratio,
        borderRadius: radius,
        overflow: "hidden",
        ...style,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectFit: "cover", objectPosition }}
      />
    </div>
  );
}
