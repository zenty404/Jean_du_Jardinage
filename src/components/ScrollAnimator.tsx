"use client";

import { useEffect } from "react";

export default function ScrollAnimator() {
  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.querySelectorAll("[data-animate]").forEach((el) => {
        el.classList.add("animate-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe all elements with data-animate
    const targets = document.querySelectorAll("[data-animate]");
    targets.forEach((el) => observer.observe(el));

    // Watch for new elements (page navigations)
    const mutation = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.hasAttribute("data-animate")) {
              observer.observe(node);
            }
            node.querySelectorAll?.("[data-animate]").forEach((child) => {
              observer.observe(child);
            });
          }
        });
      });
    });

    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
