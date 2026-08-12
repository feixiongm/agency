import Link from "next/link";
import { navigation } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#07112b] py-14 text-white">
      <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2"><p className="text-lg font-semibold">Northstar Digital</p><p className="mt-4 max-w-sm leading-7 text-slate-300">Software engineering, cloud solutions, and intelligent automation for real business problems.</p></div>
        <div><p className="font-semibold">Quick links</p><ul className="mt-4 space-y-3">{navigation.slice(1).map((item) => <li key={item.href}><Link className="text-sm text-slate-300 hover:text-white" href={item.href}>{item.label}</Link></li>)}</ul></div>
        <div><p className="font-semibold">Connect</p><div className="mt-4 flex gap-4 text-sm text-slate-300"><span title="Link to be added">LinkedIn</span><span title="Link to be added">GitHub</span></div><div className="mt-6 space-y-2 text-sm text-slate-400"><p>Privacy Policy — coming soon</p><p>Terms — coming soon</p></div></div>
      </div>
      <div className="container-page mt-12 border-t border-white/10 pt-6 text-sm text-slate-400">© {new Date().getFullYear()} Northstar Digital. All rights reserved.</div>
    </footer>
  );
}
