import { redirect } from "next/navigation";

import { DOCS_URL } from "@/lib/navigation";

export default function DevelopersPage() {
  redirect(DOCS_URL);
}
