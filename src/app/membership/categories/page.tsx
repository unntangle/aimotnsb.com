import { redirect } from "next/navigation";

/** Legacy route — membership now lives on a single page. */
export default function CategoriesRedirect() {
  redirect("/membership");
}
