import type { ComponentType, SVGProps } from "react";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export interface Service {
  title: string;
  description: string;
  href: string;
  icon: IconComponent;
}

export interface Solution {
  title: string;
  description: string;
}

export interface TechnologyGroup {
  category: string;
  technologies: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

