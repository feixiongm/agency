export const projectTypes = [
  "Custom Software Development",
  "Backend Development",
  "Cloud Migration",
  "Application Modernization",
  "AI Automation",
  "Other",
] as const;

export type ProjectType = (typeof projectTypes)[number];

export interface ContactRequest {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: ProjectType | "";
  message: string;
}

export interface ContactResponse extends ContactRequest {
  id: number;
  status: string;
  createdAt: string;
}
