import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "squiz",
    title: "SQuiz (ModuStudy)",
    subtitle: "SSAFY 교육생을 위한 IT 스터디 관리 플랫폼",
    description:
      "스터디 모집부터 운영, 퀴즈 기반 학습, 실시간 협업까지 올인원으로 지원하는 스터디 관리 플랫폼입니다. 7개 백엔드 도메인의 설계·구현·테스트를 담당했습니다.",
    period: "2025.01 - 2025.02",
    teamSize: 6,
    role: "Backend Developer",
    thumbnail: "/images/projects/squiz-thumbnail.png",
    techStack: [
      "Spring Boot",
      "Java 21",
      "JPA",
      "QueryDSL",
      "MySQL",
      "Redis",
      "WebSocket",
      "React",
      "TypeScript",
    ],
    features: [
      "스터디 그룹 CRUD 및 상태 머신 기반 라이프사이클 관리",
      "워크스페이스 실시간 채팅 (TEXT/IMAGE/FILE/SYSTEM 메시지 지원)",
      "KPT 회고 시스템 및 데일리 리포트",
      "학습 자료실 및 댓글 기능",
      "FCM 기반 알림 시스템 (타입별 설정 가능)",
      "통합 예외 처리 체계 및 테스트 가이드라인 수립",
    ],
    challenges: [
      {
        title: "복잡한 도메인 관계 관리",
        problem:
          "Study 도메인에 Member, Session, Comment, Application 등 10개 이상의 자식 엔티티가 연결되어 있어 트랜잭션 관리와 도메인 간 의존성 제어가 어려웠습니다.",
        solution:
          "DDD 원칙을 적용하여 20개 도메인을 feature 디렉토리로 분리하고, 계층형 아키텍처(Entity → Repository → Service → Controller)를 일관되게 적용하여 의존성을 최소화했습니다.",
      },
      {
        title: "스터디 상태 전이 설계",
        problem:
          "스터디의 생명주기(초안 → 모집 → 진행 → 완료)를 안전하게 관리하고, 잘못된 상태 전이를 방지해야 했습니다.",
        solution:
          "상태 머신 패턴을 적용하여 DRAFT → RECRUITING → IN_PROGRESS → COMPLETED 전이를 선언적으로 관리하고, 유효하지 않은 전이 시 예외를 발생시키도록 설계했습니다.",
      },
      {
        title: "CI/CD 테스트 안정성 확보",
        problem:
          "로컬에서 통과하는 테스트가 CI 환경에서 실패하는 문제가 반복 발생했습니다.",
        solution:
          "FK 제약조건을 고려한 엔티티 생성 순서 표준화, flush()/clear() 패턴 정립, 하드코딩 ID 금지 원칙을 팀 가이드라인으로 문서화하여 CI/CD 안정성을 확보했습니다.",
      },
    ],
    links: {
      github: "https://github.com/KnD0715/squiz", // TODO: 실제 레포 URL로 변경
    },
    metrics: [
      { label: "담당 도메인", value: "7개" },
      { label: "API 엔드포인트", value: "50+" },
      { label: "테스트 파일", value: "92개" },
      { label: "Controller", value: "12개" },
      { label: "Service", value: "14개" },
    ],
    featured: true,
    order: 1,
  },
  // TODO: 추가 프로젝트를 여기에 작성하세요
  // {
  //   slug: "project-2",
  //   title: "두 번째 프로젝트",
  //   ...
  // },
];
