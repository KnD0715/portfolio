export interface Experience {
  id: string;
  type: "education" | "work" | "activity";
  title: string;
  organization: string;
  period: string;
  description: string;
  details?: string[];
  current: boolean;
}
