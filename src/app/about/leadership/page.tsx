import { redirect } from "next/navigation";

/** Legacy route — the leadership page is now Office Bearers & Committee Members. */
export default function LeadershipRedirect() {
  redirect("/about/office-bearers");
}
