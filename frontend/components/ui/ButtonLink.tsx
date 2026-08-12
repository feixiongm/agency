import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  const styles = variant === "primary"
    ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700"
    : "border border-line bg-white text-ink hover:border-brand-500 hover:text-brand-700";
  return <Link href={href} className={`focus-ring inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition ${styles}`}>{children}</Link>;
}
