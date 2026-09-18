import Link from "next/link";
import { ArrowRight, CalendarDays, Camera, Trophy } from "lucide-react";

const LINKS = [
  {
    href: "/events/past",
    icon: CalendarDays,
    title: "Past Events",
    body: "Conclaves, clinics and conventions already held, with summary notes available to members.",
  },
  {
    href: "/gallery",
    icon: Camera,
    title: "Photo Gallery",
    body: "Photographs from council sessions, factory visits, workshops and award nights.",
  },
  {
    href: "/awards",
    icon: Trophy,
    title: "Awards",
    body: "Six categories recognising members who set the standard, judged on evidence and verified on site.",
  },
];

/** Onward links to the rest of the Events & Awards section. */
export default function EventLinks() {
  return (
    <section className="py-20 lg:py-24">
      <div className="shell grid gap-6 md:grid-cols-3">
        {LINKS.map((c) => (
          <Link key={c.href} href={c.href} className="card group p-8">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <c.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-xl transition-colors group-hover:text-brand">{c.title}</h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-slatey">{c.body}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 font-display text-[14px] font-semibold text-brand">
              Open <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
