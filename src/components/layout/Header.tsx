"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { nav } from "@/lib/site";

/* Intrinsic proportions of the supplied artwork. Height is driven by CSS
   (`h-* w-auto`), so these only fix the aspect ratio. */
const WORDMARK = { w: 800, h: 175 };
const EMBLEM = { w: 263, h: 300 };
const BADGE = { w: 300, h: 300 };

export default function Header() {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* -------- Masthead: centred wordmark, scrolls away -------- */}
      <div className="bg-white">
        <div className="shell flex items-center justify-between gap-3 py-2.5 sm:gap-6">
          {/* AIMO emblem — top-left anchor */}
          <Link href="/" aria-label="AIMO TNSB — home" className="flex shrink-0 items-center">
            <Image
              src="/assets/aimo-logo-left.png"
              alt="AIMO emblem"
              width={EMBLEM.w}
              height={EMBLEM.h}
              priority
              className="h-12 w-auto sm:h-[60px] lg:h-[94px]"
            />
          </Link>

          {/* Centred wordmark */}
          <Link
            href="/"
            aria-label="All India Manufacturers' Organisation (TNSB) — home"
            className="flex min-w-0 flex-1 items-center justify-center"
          >
            <Image
              src="/assets/aimo-logo-center.png"
              alt="All India Manufacturers' Organisation — founded by Bharat Ratna Sir M. Visvesvaraya in 1941"
              width={WORDMARK.w}
              height={WORDMARK.h}
              priority
              className="h-11 w-auto max-w-full sm:h-14 lg:h-[86px]"
            />
          </Link>

          {/* 80th-year commemorative badge — top-right anchor */}
          <div className="flex shrink-0 items-center">
            <Image
              src="/assets/aimo-80logo-right.png"
              alt="AIMO — 80 years, 2023–2024"
              width={BADGE.w}
              height={BADGE.h}
              priority
              className="h-12 w-auto sm:h-[60px] lg:h-[94px]"
            />
          </div>
        </div>
      </div>

      {/* ---------------------- Sticky navigation bar ---------------------- */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          stuck
            ? "shadow-[0_10px_30px_-22px_rgba(15,27,61,0.55)]"
            : "border-y border-hairline"
        }`}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-4">
          {/* Compact emblem — appears only once the masthead has scrolled away */}
          <Link
            href="/"
            aria-label="AIMO TNSB — home"
            className={`shrink-0 items-center transition-opacity duration-200 ${
              stuck ? "flex opacity-100" : "hidden opacity-0"
            }`}
          >
            <Image
              src="/assets/aimo-logo-left.png"
              alt="AIMO emblem"
              width={EMBLEM.w}
              height={EMBLEM.h}
              className="h-14 w-auto lg:h-[58px]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden flex-1 items-center justify-center gap-0.5 xl:flex">
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 font-display text-[14.5px] font-medium transition-colors ${
                    isActive(item.href) ? "text-brand" : "text-navy hover:text-brand"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-2 rounded-lg border border-hairline bg-white py-2 opacity-0 shadow-[0_24px_50px_-24px_rgba(15,27,61,0.45)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block border-l-2 border-transparent px-4 py-2 text-[14px] text-slatey transition-all hover:border-brand hover:bg-mist hover:pl-5 hover:text-navy"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3 xl:ml-0">
            <Link
              href="/membership/apply"
              className="btn btn-primary hidden rounded-full px-5 py-2.5 text-[13.5px] md:inline-flex"
            >
              Become a Member
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-md border border-hairline text-navy transition-colors hover:border-brand hover:text-brand xl:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="fixed inset-0 z-[60] xl:hidden">
            <div
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm overflow-y-auto bg-white p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <Image
                  src="/assets/aimo-logo-left.png"
                  alt="AIMO"
                  width={EMBLEM.w}
                  height={EMBLEM.h}
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center rounded-md border border-hairline text-navy"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="flex flex-col">
                {nav.map((item) => (
                  <div key={item.label} className="border-b border-hairline">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex-1 py-3.5 font-display text-[15px] font-medium ${
                          isActive(item.href) ? "text-brand" : "text-navy"
                        }`}
                      >
                        {item.label}
                      </Link>
                      {item.children && (
                        <button
                          aria-label={`Toggle ${item.label}`}
                          onClick={() =>
                            setExpanded(expanded === item.label ? null : item.label)
                          }
                          className="p-2 text-slatey"
                        >
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              expanded === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {item.children && expanded === item.label && (
                      <div className="pb-3 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block border-l border-hairline py-2 pl-4 text-[14px] text-slatey hover:text-brand"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <Link href="/membership/apply" className="btn btn-primary mt-6 w-full">
                Become a Member
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
