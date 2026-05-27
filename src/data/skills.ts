import { SkillCategory } from "@/types/skill";

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Java", level: "intermediate" },
      { name: "Spring Boot", level: "intermediate" },
      { name: "MySQL", level: "intermediate" },
      { name: "PostgreSQL", level: "beginner" },
    ],
  },
  {
    category: "AI Service",
    skills: [
      { name: "Python", level: "intermediate" },
      { name: "FastAPI", level: "beginner" },
      { name: "Flask", level: "beginner" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "intermediate" },
      { name: "TypeScript", level: "intermediate" },
      { name: "Tailwind CSS", level: "intermediate" },
      { name: "HTML / CSS", level: "intermediate" },
    ],
  },
  {
    category: "DevOps / Infra",
    skills: [
      { name: "Docker", level: "intermediate" },
      { name: "Docker Compose", level: "intermediate" },
      { name: "Jenkins", level: "beginner" },
      { name: "Nginx", level: "beginner" },
    ],
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { name: "Git / GitHub", level: "advanced" },
      { name: "GitLab", level: "intermediate" },
      { name: "Jira", level: "intermediate" },
      { name: "Swagger", level: "intermediate" },
      { name: "IntelliJ IDEA", level: "intermediate" },
      { name: "VS Code", level: "intermediate" },
    ],
  },
];
