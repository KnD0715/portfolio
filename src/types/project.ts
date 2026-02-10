export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  period: string;
  teamSize: number;
  role: string;
  thumbnail: string;
  techStack: string[];
  features: string[];
  challenges: Challenge[];
  links: ProjectLinks;
  metrics?: ProjectMetric[];
  roleDetails?: RoleDetail[];
  images?: ProjectImage[];
  featured: boolean;
  order: number;
}

export interface Challenge {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
  blog?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ContributionItem {
  title: string;
  details: string[];
}

export interface RoleDetail {
  area: string;
  summary: string;
  techStack?: string[];
  contributions: ContributionItem[];
}

export interface ProjectImage {
  src: string;
  alt: string;
}
