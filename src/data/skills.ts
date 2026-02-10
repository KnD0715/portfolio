import { SkillCategory } from "@/types/skill";

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Java", level: "intermediate" },
      { name: "Spring Boot", level: "intermediate" },
      { name: "JPA / Hibernate", level: "intermediate" },
      { name: "MySQL", level: "intermediate" },
    ],
  },
  {
    category: "AI Service",
    skills: [
      { name: "Python", level: "intermediate" },
      { name: "Flask", level: "intermediate" },
      { name: "Sentence Transformers", level: "intermediate" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "intermediate" },
      { name: "TypeScript", level: "intermediate" },
      { name: "Tailwind CSS", level: "intermediate" },
      { name: "HTML / CSS", level: "intermediate" },
      { name: "Zustand", level: "beginner" },
    ],
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { name: "Git / GitHub", level: "advanced" },
      { name: "Jira", level: "intermediate" },
      { name: "Swagger", level: "beginner" },
      { name: "IntelliJ IDEA", level: "intermediate" },
      { name : "VsCode", level: "intermediate"}
    ],
  },
];
