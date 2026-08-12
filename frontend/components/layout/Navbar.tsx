"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/site-content";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/90 backdrop-blur-xl">
      <nav className="container-page flex h-18 items-center justify-between" aria-label="Primary navigation">
        <Link href="#home" className="focus-ring flex items-center gap-2.5 rounded-lg font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-sm text-white">N</span>
          <span>Northstar Digital</span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="focus-ring rounded text-sm font-medium text-muted transition hover:text-ink">{item.label}</Link>)}
          <ButtonLink href="#contact">Start a Project</ButtonLink>
        </div>
        <button type="button" className="focus-ring rounded-lg p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>
      {open && <div className="border-t border-line bg-white px-5 py-5 lg:hidden">{navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="focus-ring block rounded-lg px-3 py-3 font-medium text-muted hover:bg-brand-50 hover:text-ink">{item.label}</Link>)}<div className="mt-3"><ButtonLink href="#contact">Start a Project</ButtonLink></div></div>}
    </header>
  );
}
