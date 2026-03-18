export interface Experience {
  id: string;
  type: "education" | "work" | "activity" | "award";
  title: string;
  organization: string;
  period: string;
  description: string;
  details?: string[];
  current: boolean;
}
