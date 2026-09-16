"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { aboutSections } from "@/lib/site";

/**
 * Side menu for the consolidated About page. Highlights the section currently
 * in view and scrolls to it on click. On small screens it collapses into a
 * horizontally scrolling strip that sticks under the header.
 */
export default function AboutNav() {
  const [active, setActive] = useState<string>(aboutSections[0].id);

  useEffect(() => {
    const onScroll = () => {
      const marker = window.scrollY + 180;
      let current = aboutSections[0].id;

      for (const s of aboutSections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = s.id;
      }

      // Snap to the last item once the bottom of the page is reached.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 120) {
        current = aboutSections[aboutSections.length - 1].id;
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const go = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <aside className="sticky top-[68px] z-30 -mx-5 border-b border-hairline bg-white/95 px-5 py-3 backdrop-blur lg:top-24 lg:z-auto lg:mx-0 lg:self-start lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
      <p className="eyebrow mb-3 hidden lg:block">On this page</p>

      <nav
        aria-label="About sections"
        className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] lg:flex-col lg:gap-0 lg:overflow-visible lg:border-l lg:border-hairline lg:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {aboutSections.map((s) => {
          const on = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => go(e, s.id)}
              aria-current={on ? "true" : undefined}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 font-display text-[13.5px] font-medium transition-all lg:-ml-px lg:whitespace-normal lg:rounded-none lg:border-0 lg:border-l-2 lg:px-4 lg:py-2.5 lg:text-[14px] ${
                on
                  ? "border-brand bg-brand text-white lg:border-l-brand lg:bg-transparent lg:text-brand"
                  : "border-hairline text-slatey hover:border-brand hover:text-brand lg:border-l-transparent lg:hover:border-l-brand"
              }`}
            >
              {s.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
