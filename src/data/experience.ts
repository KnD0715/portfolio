import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "ssafy",
    type: "education",
    title: "삼성 청년 SW 아카데미 (SSAFY) 12기",
    organization: "Samsung Software Academy For Youth",
    period: "2024.07 - Present",
    description:
      "Java/Spring 기반 웹 개발 교육 과정 이수. 팀 프로젝트를 통한 실전 개발 경험 축적.",
    details: [
      "Java, Spring Boot 기반 백엔드 개발 집중 학습",
      "팀 프로젝트 SQuiz(ModuStudy) — 백엔드 핵심 개발 담당",
      "알고리즘 스터디 및 코딩 테스트 준비",
    ],
    current: true,
  },
  // TODO: 추가 경력/학력 사항을 여기에 작성하세요
  // {
  //   id: "university",
  //   type: "education",
  //   title: "OO대학교 OO학과",
  //   organization: "OO University",
  //   period: "2020.03 - 2024.02",
  //   description: "컴퓨터공학 전공",
  //   current: false,
  // },
];
