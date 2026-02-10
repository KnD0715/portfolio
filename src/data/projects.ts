import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "squiz",
    title: "SQuiz (ModuStudy)",
    subtitle: "SSAFY 교육생을 위한 IT 스터디 관리 플랫폼",
    description:
      "스터디 모집부터 운영, AI 기반 CS 퀴즈 채점, 실시간 워크스페이스 협업까지 올인원으로 지원하는 스터디 관리 플랫폼입니다. 7개 백엔드 도메인 설계·구현·테스트, Python Flask 기반 AI 유사도 채점 서비스 단독 개발, React/TypeScript 워크스페이스 UI 풀스택 구현을 담당했습니다.",
    period: "2025.01 - 2025.02",
    teamSize: 6,
    role: "Backend & AI Service Developer",
    thumbnail: "/images/projects/squiz-thumbnail.png",
    techStack: [
      "Spring Boot",
      "Java 21",
      "JPA",
      "QueryDSL",
      "MySQL",
      "Redis",
      "WebSocket",
      "Python",
      "Flask",
      "Sentence Transformers",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Vite",
    ],
    features: [
      "스터디 그룹 CRUD 및 상태 머신 기반 라이프사이클 관리 (DRAFT → RECRUITING → IN_PROGRESS → COMPLETED)",
      "AI 기반 CS 퀴즈 채점 — 코사인 유사도 + 동의어 사전 + 규칙 기반 보정 하이브리드 방식",
      "워크스페이스 실시간 채팅",
      "학습 자료실 및 댓글 기능",
      "FCM 기반 알림 시스템 (타입별 개별 설정 가능)",
      "한국어 임베딩(ko-sroberta) 기반 단어 유사도 측정",
      "SVG 기반 인터랙티브 S자 도로 커리큘럼 로드맵",
    ],
    challenges: [
      {
        title: "Study 도메인 복잡도 관리",
        problem:
          "Study 하나에 Member, Session, Comment, Application, Bookmark 등 10개 이상의 자식 엔티티가 연결되어 트랜잭션 관리와 도메인 간 의존성 제어가 어려웠습니다.",
        solution:
          "기능별 Controller/Service를 분리(StudyController, ApplicationController, StudyMemberController 등 12개)하고, 공통 권한 검증 로직을 추출하여 각 기능이 독립적으로 개발·테스트 가능한 구조를 만들었습니다.",
      },
      {
        title: "AI 유사도 채점 정확도 향상",
        problem:
          "순수 코사인 유사도만으로는 '정렬'→'알고리즘' 같은 관련어나 '연결 리스트' vs 'Linked List' 같은 동의어 점수가 부정확하여 채점 정확도가 낮았습니다.",
        solution:
          "하이브리드 접근을 설계했습니다. Sentence Transformers(ko-sroberta) 코사인 유사도를 기본으로, CS 용어 동의어 사전을 구축하여 한영 변환과 약어를 처리하고, 부분 문자열 일치 + 카테고리 보너스 + 점수 스케일링으로 채점 정확도를 크게 향상시켰습니다.",
      },
    ],
    links: {},
    images: [
      // TODO: public/images/projects/ 폴더에 스크린샷 이미지를 넣고 경로를 수정하세요
      { src: "/images/projects/squiz-01.png", alt: "Swagger API 문서 — 50+ 엔드포인트" },
      { src: "/images/projects/squiz-02.png", alt: "워크스페이스 채팅" },
      { src: "/images/projects/squiz-03.png", alt: "커리큘럼 로드맵" },
      { src: "/images/projects/squiz-04.png", alt: "CS 퀴즈 게임" },
    ],
    metrics: [
      { label: "담당 도메인", value: "7개" },
      { label: "API 엔드포인트", value: "50+" },
      { label: "테스트 작성", value: "60+/92" },
      { label: "ERD 설계", value: "60+ 테이블" },
      { label: "AI 서비스", value: "Flask 단독" },
      { label: "프론트 기여", value: "16파일" },
    ],
    roleDetails: [
      {
        area: "Backend — Spring Boot",
        summary:
          "7개 도메인의 설계·구현·테스트를 전담하여 프로젝트 전체 백엔드의 핵심 비즈니스 로직을 구축",
        techStack: [
          "Spring Boot",
          "Java 21",
          "JPA",
          "QueryDSL",
          "MySQL",
          "Redis",
          "WebSocket",
        ],
        contributions: [
          {
            title: "Study 도메인 (프로젝트 최대 규모)",
            details: [
              "상태 머신 패턴으로 스터디 라이프사이클 관리 (DRAFT → RECRUITING → IN_PROGRESS → COMPLETED)",
              "10개+ 자식 엔티티와의 복잡한 연관관계 설계 및 기능별 Controller/Service 12+14개 분리",
              "스터디 신청/승인/거절 워크플로우, 멤버 역할 관리, 스터디장 권한 체계 구현",
              "스터디 검색/필터링, 북마크, 댓글, 템플릿 CRUD",
            ],
          },
          {
            title: "Workspace / Message 도메인",
            details: [
              "스터디 시작 시 워크스페이스 자동 생성 (Study와 1:1 관계)",
              "TEXT/IMAGE/FILE/SYSTEM 4가지 메시지 타입 지원, Soft delete, 커서 기반 페이징",
              "메시지 검색, 타입별 필터링, 본인 메시지만 수정/삭제 (관리자 예외)",
            ],
          },
          {
            title: "DailyReport / Retrospective(KPT) 도메인",
            details: [
              "스터디별 데일리 리포트 조회/삭제, 날짜/기간 기반 조회 API",
              "KPT/FREE 타입 회고 생성, 세션 연동, Keep/Problem/Try 항목 CRUD",
              "생성자/스터디장 권한 분리 및 항목 작성자 본인 검증",
            ],
          },
          {
            title: "Material / Notification 도메인",
            details: [
              "학습 자료 업로드/다운로드 및 MaterialComment 댓글 CRUD",
              "FCM 토큰 관리, 알림 생성/조회/읽음 처리, 타입별 on/off 설정",
            ],
          },
          {
            title: "공통 아키텍처 설계",
            details: [
              "GlobalExceptionHandler + 도메인별 커스텀 Exception 통합 예외 처리 체계",
              "92개 테스트 중 60개+ 직접 작성 — Repository(통합)/Service(단위+통합)/Controller(MockMvc) 3계층",
              "CI/CD 환경 안정성을 위한 팀 테스트 가이드라인 수립 및 문서화",
            ],
          },
        ],
      },
      {
        area: "AI Service — Python Flask",
        summary:
          "IT 용어 맞추기 게임의 AI 채점 마이크로서비스를 단독 설계·구현",
        techStack: ["Python", "Flask", "Sentence Transformers"],
        contributions: [
          {
            title: "하이브리드 채점 시스템",
            details: [
              "Sentence Transformers(ko-sroberta) 한국어 임베딩 기반 코사인 유사도 계산",
              "AI 유사도 + 동의어 사전 + 부분 일치 + 카테고리 보너스 + 점수 스케일링 하이브리드 채점",
              "싱글톤 패턴으로 400MB AI 모델 인스턴스 관리",
              "Blueprint 기반 라우팅, 계층 분리 (models/services/routes)",
            ],
          },
          {
            title: "마이크로서비스 통신",
            details: [
              "Spring Boot 메인 서버와 Flask AI 서비스 간 REST API 통신 설계",
              "단어 유사도 계산, 랜덤 문제 출제, 정답 확인, 배치 유사도 비교 API 제공",
            ],
          },
        ],
      },
      {
        area: "Frontend — React / TypeScript",
        summary:
          "워크스페이스 UI 전체, 스터디 관리 페이지, 커리큘럼 로드맵 등 주요 프론트엔드 구현",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
        contributions: [
          {
            title: "워크스페이스 전체 (16파일, 134KB)",
            details: [
              "백엔드 API + 프론트 UI를 모두 담당한 풀스택 개발",
              "실시간 채팅, 캘린더 뷰, 세션 관리 모달, 멤버 목록, 검색/고정 메시지 패널",
            ],
          },
          {
            title: "스터디 관리 및 커리큘럼 로드맵",
            details: [
              "신청자 승인/거절, 멤버 관리, 출석/소명 관리, 팀 대시보드 UI",
              "SVG 기반 S자 도로 커리큘럼 시각화 — 자동차 애니메이션, 세션별 상태 표시, 30초 간격 실시간 업데이트",
            ],
          },
          {
            title: "알림 기능",
            details: [
              "알림 목록/읽음 처리 UI, Zustand 기반 상태 관리",
            ],
          },
        ],
      },
      {
        area: "ERD 설계",
        summary: "전체 데이터베이스 구조 설계에 참여",
        contributions: [
          {
            title: "데이터베이스 아키텍처",
            details: [
              "20개 도메인, 60개+ 테이블의 전체 ERD 설계 참여",
              "식별/비식별 관계 정의, FK 제약조건 설계, 스터디 상태 머신 설계",
            ],
          },
        ],
      },
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
