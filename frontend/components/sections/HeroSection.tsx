import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroVisual } from "./HeroVisual";

export function HeroSection() {
  return <section id="home" className="overflow-hidden border-b border-line bg-[radial-gradient(circle_at_15%_20%,#eef6ff_0,transparent_35%)]"><div className="container-page grid min-h-[760px] items-center gap-14 py-20 lg:grid-cols-[1.08fr_.92fr]"><div><p className="mb-6 inline-flex rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">Practical engineering for ambitious teams</p><h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">Build better software.<br/><span className="text-brand-600">Modernize faster.</span><br/>Scale with confidence.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">We help businesses design, build, and modernize reliable software systems using Java, cloud technologies, modern web development, and AI automation.</p><div className="mt-9 flex flex-wrap gap-3"><ButtonLink href="#services">Explore Services <ArrowRightIcon className="ml-2 h-4 w-4"/></ButtonLink><ButtonLink href="#contact" variant="secondary">Start a Project</ButtonLink></div></div><HeroVisual/></div></section>;
}
