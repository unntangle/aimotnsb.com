import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { contact } from "@/lib/site";

const icons = { facebook: Facebook, twitter: Twitter, linkedin: Linkedin, youtube: Youtube };

export default function TopBar() {
  return (
    <div className="hidden bg-navy text-white/70 lg:block">
      <div className="shell flex h-11 items-center justify-between text-[13px]">
        <div className="flex items-center gap-1">
          {(
            [
              ["facebook", "https://facebook.com", "Facebook"],
              ["twitter", "https://x.com", "X"],
              ["linkedin", "https://linkedin.com", "LinkedIn"],
              ["youtube", "https://youtube.com", "YouTube"],
            ] as const
          ).map(([key, href, label]) => {
            const Icon = icons[key];
            return (
              <a
                key={key}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="grid h-7 w-7 place-items-center rounded-sm transition-colors hover:bg-brand hover:text-white"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 text-brand" />
            {contact.phones[0]}
          </a>
          <a
            href={`mailto:${contact.emails[0]}`}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="h-3.5 w-3.5 text-brand" />
            {contact.emails[0]}
          </a>
          <Link href="/contact" className="flex items-center gap-2 transition-colors hover:text-white">
            <MapPin className="h-3.5 w-3.5 text-brand" />
            Nungambakkam High Road, Chennai
          </Link>
        </div>
      </div>
    </div>
  );
}
