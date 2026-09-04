import type { Metadata } from "next";
import { Inter, Poppins, Tinos } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollTop from "@/components/ui/ScrollTop";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

/* Times-metric serif used only for the masthead wordmark, so the typeset
   lockup reads the same as the printed/legacy letterhead. */
const tinos = Tinos({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-tinos",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.short}`,
  },
  description: site.description,
  keywords: [
    "AIMO TNSB",
    "AIMO Tamil Nadu State Board",
    "AIMO",
    "All India Manufacturers Organisation",
    "MSME Tamil Nadu",
    "MSME India",
    "Indian manufacturing association",
    "industry body India",
    "Sir M Visvesvaraya",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/aimo-logo-right.png", type: "image/png" }],
    shortcut: [{ url: "/aimo-logo-right.png", type: "image/png" }],
    apple: [{ url: "/aimo-logo-right.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${poppins.variable} ${tinos.variable}`}
    >
      <body className="min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <TopBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
