import { redirect } from "next/navigation";

/** Legacy route — the founder is again a section of the About page. */
export default function FounderRedirect() {
  redirect("/about#our-founder");
}
