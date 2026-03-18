import { Project } from "@/types/project";

export const medichart: Project = {
  slug: "medichart",
  title: "MediChart",
  subtitle: "현대인의 건강을 위한 질병 예측 및 건강진단서 해석 플랫폼",
  description:
    "바쁜 일상으로 건강을 놓치는 현대인들을 위한 질병 예측 및 건강진단서 해석 플랫폼입니다. 로그인/회원가입 시스템과 건강진단서 OCR 해석 기능의 백엔드를 담당했습니다.",
  period: "2024.07 - 2024.08",
  teamSize: 6,
  role: "Backend Developer",
  thumbnail: "/images/projects/medichart-thumbnail.png",
  techStack: [
    "Spring Boot",
    "Java",
    "MySQL",
    "Python",
    "Flask",
    "React",
    "JavaScript",
  ],
  features: [
    "로그인 및 회원가입 (세션 기반 인증)",
    "건강진단서 OCR 해석 — 한국어/일본어/중국어 다국어 번역 지원",
    "검진정보 입력 및 질병 발병 확률 예측 (당뇨병, 심장병, 고혈압 등 6종)",
    "공지사항 및 고객센터",
    "관리자 페이지 (공지사항·가입자 관리)",
  ],
  challenges: [],
  links: {
    github: "https://github.com/KnD0715/MediChart",
    live: "http://223.130.155.178",
  },
  metrics: [
    { label: "팀 규모", value: "6인" },
    { label: "프로젝트 기간", value: "1개월" },
    { label: "질병 예측", value: "6종" },
    { label: "다국어 지원", value: "3개국어" },
  ],
  roleDetails: [
    {
      area: "Backend — Spring Boot",
      summary: "로그인/회원가입 및 건강진단서 해석 기능 백엔드 개발",
      techStack: ["Spring Boot", "Java", "MySQL"],
      contributions: [
        {
          title: "로그인 및 회원가입",
          details: [
            "회원가입, 로그인, 세션 관리 등 인증 시스템 구현",
            "유효성 검증 및 에러 처리",
          ],
        },
        {
          title: "건강진단서 해석",
          details: [
            "건강진단서 파일 업로드 및 OCR 텍스트 추출",
            "한국어/일본어/중국어 다국어 번역 지원",
            "원본 텍스트와 번역 텍스트 동시 제공",
          ],
        },
      ],
    },
  ],
  featured: false,
  order: 2,
};
