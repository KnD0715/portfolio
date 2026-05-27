import { Project } from "@/types/project";

export const spacearcade: Project = {
  slug: "spacearcade",
  title: "우주 오락실",
  subtitle: "실시간 멀티플레이어 미니게임 플랫폼",
  description:
    "닉네임만 입력하면 최대 100명이 동시 접속해 미니게임을 라운드로 진행하고 최종 랭킹을 가리는 마리오 파티형 실시간 경쟁 플랫폼입니다. GitLab-Jenkins-Docker 기반 멀티 서버 CI/CD 파이프라인 구축, Nginx ip_hash 로드밸런싱 설계, Prometheus+Grafana 모니터링 운영, 미니게임 2종 개발을 담당했습니다.",
  period: "2026.04 - 2026.05",
  teamSize: 6,
  role: "DevOps & Frontend Game Developer",
  thumbnail: "/images/projects/spacearcade-thumbnail.png",
  techStack: [
    "Jenkins",
    "Docker",
    "Docker Compose",
    "Nginx",
    "Prometheus",
    "Grafana",
    "Spring Boot",
    "WebSocket",
    "Redis",
    "React 18",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Canvas 2D API",
  ],
  features: [
    "GitLab → Jenkins → Docker 완전 자동화 CI/CD — 머지 한 번으로 SSAFY·C5a 두 서버 동시 배포 및 Mattermost 팀 알림",
    "Nginx ip_hash 로드밸런싱 — WebSocket 세션 고정(Sticky) + 100명 부하 분산",
    "Let's Encrypt SSL — 전 구간 HTTPS / WebSocket wss 보안 연결",
    "Prometheus + Grafana 모니터링 — JVM·CPU·응답시간·동시 접속자 수 실시간 대시보드",
    "플러그인 기반 게임 모듈 아키텍처 — IGameModule 인터페이스 표준화, 게임 레지스트리 패턴",
    "무(無)DB 휘발성 설계 — 서버 메모리 + Redis로 방·게임·순위 상태 관리, 200ms 델타 동기화",
    "단어 외우기 게임 — 30초 암기 + 60초 입력, Set 기반 O(1) 중복 체크",
    "총알 피하기 게임 — delta time 프레임 독립 루프, 오브젝트 풀링 200개, 제곱근 생략 충돌 판정",
  ],
  challenges: [
    {
      title: "WebSocket 세션 일관성 vs 로드밸런싱",
      problem:
        "100명 동시 접속 부하를 두 서버로 분산해야 하는데, WebSocket은 장기 지속 연결이라 같은 클라이언트가 매 요청마다 다른 서버로 라우팅되면 연결이 끊기는 문제가 있었습니다.",
      solution:
        "Nginx 로드밸런싱 정책으로 ip_hash를 선택했습니다. 동일 클라이언트 IP를 항상 같은 서버로 고정(Sticky Session)해 WebSocket 세션 일관성을 보장하면서, 서로 다른 클라이언트는 두 서버로 분산되어 부하도 해소했습니다.",
    },
    {
      title: "멀티 서버 동시 배포 자동화",
      problem:
        "SSAFY 서버와 C5a 서버 두 대를 운영하는데, 배포 시 두 서버를 수동으로 각각 업데이트하면 버전 불일치와 배포 병목이 발생했습니다.",
      solution:
        "Jenkins 파이프라인에서 SSAFY 서버 로컬 배포 완료 후 SSH로 C5a 서버에 원격 배포를 자동 트리거하도록 구성했습니다. 머지 한 번으로 두 서버가 동시에 같은 버전으로 갱신되고, 완료 시 Mattermost 알림이 발송되어 6명 병렬 개발 환경에서 배포가 병목이 되지 않도록 했습니다.",
    },
  ],
  links: {},
  images: [
    { src: "/images/projects/spacearcade-01.png", alt: "시스템 아키텍처 — Nginx 로드밸런서·멀티 서버 구성도" },
    { src: "/images/projects/spacearcade-02.png", alt: "Grafana 모니터링 — 실시간 동접 세션 분산 현황 (총 65명)" },
    { src: "/images/projects/spacearcade-03.png", alt: "총알 피하기 미니게임 — 우주 테마 Canvas 렌더링" },
    { src: "/images/projects/spacearcade-04.png", alt: "Mattermost CI/CD 배포 완료 자동 알림" },
  ],
  metrics: [
    { label: "동시 접속", value: "100명" },
    { label: "배포 서버", value: "2대" },
    { label: "미니게임", value: "2종 개발" },
    { label: "로드밸런싱", value: "ip_hash" },
    { label: "배포 자동화", value: "GitLab→Jenkins" },
    { label: "모니터링", value: "Prometheus+Grafana" },
  ],
  roleDetails: [
    {
      area: "DevOps — CI/CD 파이프라인",
      summary:
        "GitLab-Jenkins-Docker로 빌드부터 배포까지 전 과정을 자동화하고, 멀티 서버 동시 배포 체계 구축",
      techStack: ["Jenkins", "Docker", "Docker Compose", "GitLab"],
      contributions: [
        {
          title: "자동화 배포 파이프라인",
          details: [
            "master 브랜치 MR 머지 → Jenkins 감지 → 서버 코드 강제 동기화(git fetch && git reset --hard)",
            "백엔드/프론트엔드 Docker 이미지 빌드 후 docker compose up -d --build 전체 스택 재배포",
            "Mattermost 배포 완료 알림 연동 — 6인 병렬 개발 환경에서 배포 병목 제거",
          ],
        },
        {
          title: "멀티 서버 동시 배포",
          details: [
            "SSAFY 서버 로컬 배포 완료 후 SSH로 C5a 서버 원격 배포 자동 트리거",
            "머지 한 번으로 두 서버가 동일 버전 유지 — 수동 배포·버전 불일치 완전 제거",
          ],
        },
      ],
    },
    {
      area: "DevOps — 운영 인프라",
      summary:
        "100명 동시 접속을 두 서버로 분산하는 로드밸런싱과 SSL·모니터링 운영 환경 구축",
      techStack: ["Nginx", "Let's Encrypt", "Prometheus", "Grafana"],
      contributions: [
        {
          title: "Nginx 리버스 프록시 + 로드밸런서",
          details: [
            "SSAFY 서버·C5a 서버 두 대 간 ip_hash 분배 정책 선택 — WebSocket Sticky Session 보장",
            "동일 클라이언트를 같은 서버에 고정해 WebSocket 연결 일관성 유지 + 부하 분산 동시 달성",
          ],
        },
        {
          title: "보안 및 모니터링",
          details: [
            "Let's Encrypt SSL 인증서 발급 — 전 구간 HTTPS, WebSocket wss 보안 연결 적용",
            "Prometheus + Grafana 대시보드 — JVM·CPU·응답시간·동시 접속자 수 실시간 가시화",
          ],
        },
      ],
    },
    {
      area: "시스템 아키텍처 설계",
      summary:
        "게임 확장성을 위한 플러그인 기반 모듈 구조와 무DB 실시간 상태 관리 구조 설계 주도",
      techStack: ["React 18", "TypeScript", "WebSocket", "Redis"],
      contributions: [
        {
          title: "플러그인 기반 게임 모듈 아키텍처",
          details: [
            "각 미니게임이 공통 IGameModule 인터페이스를 따르도록 표준화 — onReady / onProgress / onComplete 콜백",
            "Shell(플랫폼 본체)이 게임 내부 구현에 의존하지 않는 구조 — 게임 레지스트리 패턴으로 신규 게임 자동 편입",
            "팀원들이 각자 게임을 병렬 개발해도 충돌 없이 통합 가능한 구조 설계",
          ],
        },
        {
          title: "무(無)DB 휘발성 상태 + 200ms 델타 동기화",
          details: [
            "게임 데이터 영구 저장 불필요 판단 → DB 제거, 서버 메모리 + Redis로 방·게임·순위 상태 관리",
            "실시간 순위 브로드캐스트를 매 프레임이 아닌 200ms 델타 동기화(변경분만 전송)로 네트워크 부하 억제",
          ],
        },
      ],
    },
    {
      area: "Frontend — 미니게임 2종",
      summary:
        "Canvas 2D API 기반 미니게임 2종을 직접 설계·구현, 성능 최적화 적용",
      techStack: ["React 18", "TypeScript", "Canvas 2D API", "requestAnimationFrame"],
      contributions: [
        {
          title: "총알 피하기 (우주 테마)",
          details: [
            "requestAnimationFrame + delta time 적용 — 프레임 독립적(frame-independent) 게임 루프로 기기 성능 무관 공정한 난이도",
            "총알 200개 오브젝트 풀링 — 객체 생성·소멸 반복 제거로 GC 부하 감소",
            "충돌 판정 최적화 — 제곱근 생략 거리 비교(dx*dx + dy*dy < (r1+r2)²)로 연산량 절감",
          ],
        },
        {
          title: "단어 외우기 (고대 유적 테마)",
          details: [
            "30초 암기 → 60초 입력의 기억력·타이핑 게임 구조 설계",
            "이미 맞힌 단어 중복 체크를 Set 자료구조로 O(1) 처리",
            "단계 전환 CSS transition 연출로 자연스러운 게임 흐름 구현",
          ],
        },
      ],
    },
  ],
  featured: true,
  order: 1,
};
