"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "scale-in"
  | "blur-in";

interface AnimateOnScrollProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "article" | "aside" | "main";
  threshold?: number;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  as = "div",
  threshold = 0.15,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      el.classList.add("animate-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-visible");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("animate-visible");
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const props = {
    ref,
    className: `animate-on-scroll animate-${variant} ${className}`,
    style: {
      "--animate-delay": `${delay}ms`,
      "--animate-duration": `${duration}ms`,
    } as React.CSSProperties,
  };

  switch (as) {
    case "section":
      return <section {...props}>{children}</section>;
    case "header":
      return <header {...props}>{children}</header>;
    case "footer":
      return <footer {...props}>{children}</footer>;
    case "article":
      return <article {...props}>{children}</article>;
    case "aside":
      return <aside {...props}>{children}</aside>;
    case "main":
      return <main {...props}>{children}</main>;
    default:
      return <div {...props}>{children}</div>;
  }
}
