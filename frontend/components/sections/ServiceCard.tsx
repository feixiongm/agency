import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import type { Service } from "@/types/content";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return <article className="group rounded-2xl border border-line bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-100"><div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white"><Icon className="h-6 w-6"/></div><h3 className="mt-6 text-xl font-semibold tracking-tight">{service.title}</h3><p className="mt-3 leading-7 text-muted">{service.description}</p><Link href={service.href} className="focus-ring mt-6 inline-flex items-center rounded font-semibold text-brand-700">Learn more <ArrowUpRightIcon className="ml-1.5 h-4 w-4"/></Link></article>;
}
