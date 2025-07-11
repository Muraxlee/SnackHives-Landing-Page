// src/components/landing/AnimatedText.tsx
'use client';

import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  inView: boolean;
  delay?: number;
  className?: string;
}

export default function AnimatedText({
  text,
  inView,
  delay = 0,
  className,
}: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden pb-1">
          <span
            className={cn(
              "inline-block transform transition-all duration-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
            )}
            style={{ transitionDelay: `${(delay + index) * 150}ms` }}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </span>
  );
}
