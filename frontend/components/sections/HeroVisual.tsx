export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-xl" aria-label="Abstract software architecture visualization">
      <div className="absolute inset-8 rounded-[2rem] bg-gradient-to-br from-brand-100 via-white to-sky-100 blur-2xl" />
      <div className="absolute inset-x-0 top-8 rounded-2xl border border-white/80 bg-white/90 p-5 shadow-card backdrop-blur">
        <div className="mb-5 flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-red-300"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-300"/><span className="ml-auto text-xs font-medium text-muted">SYSTEM OVERVIEW</span></div>
        <div className="grid grid-cols-3 gap-3">{["Web app", "API layer", "Data"].map((label, index) => <div key={label} className="rounded-xl border border-line bg-slate-50 p-4"><div className={`mb-8 h-8 w-8 rounded-lg ${index === 1 ? "bg-brand-600" : "bg-ink"}`} /><p className="text-xs font-semibold">{label}</p><div className="mt-2 h-1.5 w-12 rounded bg-slate-200" /></div>)}</div>
      </div>
      <div className="absolute bottom-6 left-7 w-48 rounded-2xl border border-line bg-white p-4 shadow-card"><p className="text-xs text-muted">Deployment</p><p className="mt-1 text-sm font-semibold">Healthy & ready</p><div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-4/5 rounded-full bg-emerald-400" /></div></div>
      <div className="absolute bottom-0 right-3 w-44 rounded-2xl bg-ink p-4 text-white shadow-card"><p className="text-xs text-slate-400">Request flow</p><div className="mt-4 flex items-end gap-2">{[45,70,52,88,67,92].map((height, i) => <span key={i} className="w-3 rounded-t bg-brand-500" style={{height: `${height * .65}px`}} />)}</div></div>
    </div>
  );
}
