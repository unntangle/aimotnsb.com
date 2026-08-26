import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { contact, site } from "@/lib/site";

const socialLinks = [
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Twitter, href: "https://x.com", label: "X" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About AIMO", href: "/about" },
  { label: "Members", href: "/about/office-bearers" },
  { label: "Membership", href: "/membership" },
  { label: "Become a Member", href: "/membership/apply" },
];

const otherLinks = [
  { label: "Upcoming Event", href: "/events" },
  { label: "Past Events", href: "/events/past" },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "AIMO Awards", href: "/awards" },
  { label: "Book Hall & Board Room", href: "/resources/book-hall" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white/65">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-white p-1.5">
              <Image
                src="/assets/aimo-logo-left.png"
                alt="AIMO emblem"
                width={263}
                height={300}
                className="h-full w-auto object-contain"
              />
            </span>
            <span className="font-display text-lg font-bold leading-tight text-white">
              AIMO TNSB
              <span className="block text-[11px] font-medium tracking-widest text-brand">
                SINCE 1941
              </span>
            </span>
          </div>

          <p className="mt-5 text-[14.5px] leading-relaxed">
            The All India Manufacturers&rsquo; Organisation was founded by{" "}
            {site.founder} with a single motto,{" "}
            <span className="text-white">&ldquo;{site.tagline}&rdquo;</span>. Eight decades
            on, that remains the whole of our brief.
          </p>

          <div className="mt-6 flex gap-2">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-md bg-white/10 transition-colors hover:bg-brand hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Quick Links" links={quickLinks} />
        <FooterColumn title="Other Pages" links={otherLinks} />

        {/* Contact */}
        <div>
          <FooterTitle>Get In Touch</FooterTitle>
          <ul className="mt-6 space-y-4 text-[14.5px]">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>
                {contact.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-white">
                    {p}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>
                {contact.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="block hover:text-white">
                    {e}
                  </a>
                ))}
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>
                <span className="block text-white">{contact.org}</span>
                {contact.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col items-center justify-between gap-3 py-5 text-[13.5px] sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex gap-5">
            <Link href="/contact" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="relative pb-3 font-display text-[17px] font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-9 after:rounded-full after:bg-brand">
      {children}
    </h3>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <FooterTitle>{title}</FooterTitle>
      <ul className="mt-6 space-y-3 text-[14.5px]">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="inline-block transition-all hover:translate-x-1 hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
