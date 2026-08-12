import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { TechnologySection } from "@/components/sections/TechnologySection";

export default function Home() { return <><Navbar/><main><HeroSection/><ServicesSection/><SolutionsSection/><TechnologySection/><ProcessSection/><AboutSection/><ContactSection/></main><Footer/></>; }
