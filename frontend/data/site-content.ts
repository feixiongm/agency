import {
  ArrowPathRoundedSquareIcon,
  BoltIcon,
  CircleStackIcon,
  CloudArrowUpIcon,
  CodeBracketSquareIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import type { ProcessStep, Service, Solution, TechnologyGroup } from "@/types/content";

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Technologies", href: "#technologies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  { title: "Custom Software Development", description: "Purpose-built web applications and internal systems shaped around your business.", href: "#contact", icon: CodeBracketSquareIcon },
  { title: "Java & Spring Boot Development", description: "Maintainable backend platforms built for reliability, security, and long-term growth.", href: "#contact", icon: CpuChipIcon },
  { title: "API & Microservices Development", description: "Clear, dependable APIs and service architectures that connect critical systems.", href: "#contact", icon: ArrowPathRoundedSquareIcon },
  { title: "Cloud & AWS Engineering", description: "Practical cloud architecture, deployment, and modernization without unnecessary complexity.", href: "#contact", icon: CloudArrowUpIcon },
  { title: "Database Modernization", description: "Data migrations, performance improvements, and resilient PostgreSQL-centered systems.", href: "#contact", icon: CircleStackIcon },
  { title: "AI & Workflow Automation", description: "Focused automation that removes repetitive work and improves everyday operations.", href: "#contact", icon: BoltIcon },
];

export const solutions: Solution[] = [
  { title: "Legacy System Modernization", description: "Replace fragile components incrementally while protecting business continuity." },
  { title: "Cloud Migration", description: "Move applications and workloads with a plan grounded in cost, reliability, and risk." },
  { title: "Backend System Development", description: "Build the APIs, services, and data foundations behind dependable products." },
  { title: "Business Process Automation", description: "Turn manual, repetitive processes into transparent digital workflows." },
  { title: "Data Integration", description: "Connect platforms and data sources so information moves where it is needed." },
  { title: "Internal Business Applications", description: "Give teams focused tools that match how their work actually gets done." },
];

export const technologyGroups: TechnologyGroup[] = [
  { category: "Backend", technologies: ["Java", "Spring Boot", "REST APIs", "Kafka"] },
  { category: "Frontend", technologies: ["React", "Next.js", "TypeScript"] },
  { category: "Cloud", technologies: ["AWS", "Docker", "Kubernetes"] },
  { category: "Database", technologies: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "DevOps", technologies: ["Git", "Maven", "CI/CD"] },
];

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Discover", description: "Understand the business problem, constraints, users, and desired outcome." },
  { number: "02", title: "Design", description: "Define a practical technical architecture and a clear delivery path." },
  { number: "03", title: "Build", description: "Develop in focused iterations with visible progress and regular feedback." },
  { number: "04", title: "Deliver", description: "Test, deploy, document, and support a reliable transition into use." },
];
