import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "ssafy",
    type: "education",
    title: "삼성 청년 SW 아카데미 (SSAFY) 14기",
    organization: "Samsung Software Academy For Youth",
    period: "2025.07 - Present",
    description: "Python 비전공 교육 과정 수료",
    details: [
      "백엔드, AI 서비스, 프론트엔드를 아우르는 풀스택 프로젝트 경험 축적",
      "Java, Spring Boot 기반 백엔드 개발 — DDD, 상태 머신 패턴, 3계층 테스트 전략 적용",
      "Python Flask 기반 AI 유사도 채점 마이크로서비스 설계 및 단독 개발",
      "React/TypeScript 프론트엔드 — 워크스페이스 UI 풀스택 개발",
      "팀 프로젝트 SQuiz(ModuStudy) — 백엔드 7개 도메인 + AI 서비스 + 프론트엔드 담당",
    ],
    current: true,
  },
  {
    id: "university",
    type: "education",
    title: "남서울대학교 지능정보통신공학과",
    organization: "Namseoul University",
    period: "2019.03 - 2025.02",
    description: "지능정보통신공학과 전공",
    current: false,
  },
];
