export type SkillLevel = "advanced" | "intermediate" | "beginner";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}
