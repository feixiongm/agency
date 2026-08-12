import { services } from "@/data/site-content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() { return <section id="services" className="section-space bg-slate-50"><div className="container-page"><SectionHeader eyebrow="What we build" title="Software foundations that move your business forward" description="From a focused internal tool to a modern backend platform, we choose technology to fit the problem—not the other way around."/><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.title} service={service}/>)}</div></div></section>; }
