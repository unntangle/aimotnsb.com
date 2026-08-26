import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/about/tamil-nadu-state-board",
    "/about/office-bearers",
    "/membership",
    "/membership/apply",
    "/events",
    "/events/past",
    "/gallery",
    "/awards",
    "/resources/book-hall",
    "/resources/magazine",
    "/resources/internship-testimonials",
    "/state-boards",
    "/contact",
  ];

  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}
