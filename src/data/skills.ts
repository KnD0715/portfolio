import { SkillCategory } from "@/types/skill";

export const skills: SkillCategory[] = [
  {
    category: "Backend",
    skills: [
      { name: "Java", level: "advanced" },
      { name: "Spring Boot", level: "advanced" },
      { name: "JPA / Hibernate", level: "advanced" },
      { name: "QueryDSL", level: "intermediate" },
      { name: "MySQL", level: "advanced" },
      { name: "Redis", level: "intermediate" },
      { name: "JUnit5", level: "advanced" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "intermediate" },
      { name: "TypeScript", level: "intermediate" },
      { name: "HTML / CSS", level: "intermediate" },
      { name: "Zustand", level: "beginner" },
    ],
  },
  {
    category: "Infra & DevOps",
    skills: [
      { name: "Docker", level: "intermediate" },
      { name: "WebSocket (STOMP)", level: "intermediate" },
      { name: "WebRTC", level: "beginner" },
      { name: "Firebase (FCM)", level: "intermediate" },
    ],
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { name: "Git / GitHub", level: "advanced" },
      { name: "Jira", level: "intermediate" },
      { name: "Swagger", level: "intermediate" },
      { name: "IntelliJ IDEA", level: "advanced" },
    ],
  },
];
