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
  flip = false,
  zoom = 1,
  style,
}: {
  src: string;
  alt: string;
  ratio?: string;
  radius?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
  /** Mirror the image horizontally — used to visually distinguish reused source photos. */
  flip?: boolean;
  /** Scale the image up (cropping further in) — used to visually distinguish reused source photos. */
  zoom?: number;
  style?: CSSProperties;
}) {
  const transforms = [flip ? "scaleX(-1)" : "", zoom !== 1 ? `scale(${zoom})` : ""].filter(Boolean).join(" ");
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: ratio,
        borderRadius: radius,
        overflow: "hidden",
        background: "var(--voids-line-soft)",
        ...style,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        style={{ objectFit: "cover", objectPosition, transform: transforms || undefined }}
      />
    </div>
  );
}
