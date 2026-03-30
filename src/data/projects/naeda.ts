import { Project } from "@/types/project";

export const naeda: Project = {
  slug: "naeda",
  title: "NAEDA (내다)",
  subtitle: "얼굴 결제 기반 구미 지역 특화 금융 앱",
  description:
    "페이스페이(FacePay)로 결제할 때마다 포인트가 쌓이고, AI가 소비를 분석해주고, 모은 포인트로 구미 지역 할인권을 교환하는 지역 특화 금융 앱입니다. RBA 리스크 기반 인증, FDS 이상 거래 탐지, SSAFY 금융 API 5종 이상 연동을 담당했으며, RAG 기반 AI 챗봇 토미봇을 풀스택으로 구현했습니다.",
  period: "2026.02 - 2026.04",
  teamSize: 6,
  role: "Backend & AI Service Developer",
  thumbnail: "/images/projects/naeda-thumbnail.png",
  techStack: [
    "Spring Boot",
    "Java 17",
    "JPA",
    "PostgreSQL",
    "Redis",
    "Kafka",
    "Resilience4j",
    "FastAPI",
    "Python",
    "OpenAI GPT",
    "Docker",
    "Firebase FCM",
  ],
  features: [
    "페이스페이(FacePay) 얼굴 인식 결제 — 3D 프린팅 물리 단말기와 연동한 실제 결제 플로우 시연",
    "RBA(Risk-Based Authentication) — 얼굴 유사도·결제 금액을 조합한 3단계 동적 인증 엔진",
    "FDS 이상 거래 탐지 — Strategy 패턴 규칙 엔진 (심야 고액·연속 결제·금액 이상 3개 Rule, 점수 구간별 4단계 대응)",
    "지역 포인트 시스템 — 결제 시 자동 적립, 구미 매장 할인권 교환, Rich Domain Model(PointWallet.earn/use)",
    "SSAFY 금융 API 연동 — 카드·수시입출금·인증 등 5종 이상 통합 공통 인프라(SsafyApiClient) 구축",
    "AI 챗봇 토미봇 — FastAPI + OpenAI GPT 기반 RAG 패턴, 구미 맛집·축제 자연어 추천",
    "소비 분석 리포트 — AI 서버 Pull 방식 연동, 카테고리별 breakdown·지역 기여 등급(A~D) 저장",
    "Resilience4j 장애 대응 — CircuitBreaker(30초 복구) + Retry(3회) + 타임아웃으로 외부 API 안정성 확보",
    "AOP 감사 로그 + TraceId — 모든 API에 UUID 기반 8자리 추적 ID 자동 부여",
    "금융 보안 강화 — IDOR 방지, CVC 마스킹, 카드번호 마스킹, 입력값 검증, 비관적 락 기반 동시성 제어",
  ],
  challenges: [
    {
      title: "결제 동시성 제어 — 계층적 접근",
      problem:
        "포인트 차감과 결제 처리가 동시에 발생할 경우 잔액 불일치 및 중복 결제가 발생할 수 있었습니다. 단일 서버 락만으로는 스케일아웃 환경에서 보장이 어려웠습니다.",
      solution:
        "계층적 동시성 제어를 설계했습니다. DB 레벨에서 비관적 락(SELECT FOR UPDATE)으로 최종 정합성을 보장하고, 분산 레벨에서 Redis 락 + Rate Limiting으로 서버 인스턴스 간 동시성을 제어했습니다. 애플리케이션 레벨에서는 Idempotency Key로 중복 요청을 차단하고 Kafka 비동기 처리로 순차성을 보장했습니다.",
    },
    {
      title: "RBA 인증 엔진 — 단일 엔진으로 다단계 인증 통합",
      problem:
        "얼굴 인식 유사도(MATCH/AMBIGUOUS/NO_MATCH)와 결제 금액 두 변수를 조합하여 인증 단계를 동적으로 결정해야 했고, 분기 조건이 늘어날수록 코드 복잡도가 급격히 상승했습니다.",
      solution:
        "RbaEngine 단일 클래스에서 두 변수 조합을 3단계로 분기하는 구조를 설계했습니다. 1단계(MATCH → 즉시 결제), 2단계(AMBIGUOUS → 전화번호 4자리·PIN 보조 인증), 3단계(고액 → 전자서명 추가)로 명확히 분리하여 새로운 인증 조건 추가 시 분기만 확장하면 되는 구조를 만들었습니다.",
    },
    {
      title: "SSAFY 외부 API 장애 대응 — Resilience4j 적용",
      problem:
        "핵심 결제 기능이 SSAFY 금융 API에 의존하는 구조여서, 외부 API 먹통 시 스레드 무한 대기 및 서비스 전체 장애로 이어질 위험이 있었습니다.",
      solution:
        "Resilience4j로 다층 방어를 구성했습니다. RestTemplate 타임아웃(connect 5초, read 10초)으로 1차 차단 후, Retry(최대 3회, 1초 대기)로 일시적 오류를 흡수하고, CircuitBreaker(실패율 50% 초과 시 OPEN, 30초 후 HALF_OPEN 복구)로 장애 전파를 차단했습니다. CB → Retry → 실제 호출 데코레이터 순서로 OPEN 상태에서는 retry 자체를 하지 않는 최적 구조를 적용했습니다.",
    },
  ],
  links: {
  },
  images: [
    { src: "/images/projects/naeda-01.png", alt: "Swagger API 문서" },
    { src: "/images/projects/naeda-02.png", alt: "시스템 아키텍처 다이어그램" },
    { src: "/images/projects/naeda-03.png", alt: "ERD — 전체 데이터베이스 구조" },
    { src: "/images/projects/naeda-04.jpg", alt: "AI 챗봇 토미봇 화면" },
  ],
  metrics: [
    { label: "담당 티켓", value: "31개" },
    { label: "구현 도메인", value: "14개" },
    { label: "외부 API 활용", value: "5종+" },
    { label: "보안 레이어", value: "RBA·FDS" },
    { label: "AI 챗봇", value: "RAG 기반" },
    { label: "동시성 제어", value: "3계층" },
  ],
  roleDetails: [
    {
      area: "Backend — Spring Boot",
      summary:
        "뱅킹·카드·결제·인증·FDS·포인트 등 14개 도메인의 API 설계·구현 및 공통 인프라 구축",
      techStack: [
        "Spring Boot",
        "Java 17",
        "JPA",
        "PostgreSQL",
        "Redis",
        "Kafka",
        "Resilience4j",
        "Firebase FCM",
      ],
      contributions: [
        {
          title: "SSAFY 금융 API 공통 인프라 구축",
          details: [
            "SsafyApiClient: 모든 SSAFY API POST 호출을 담당, 응답 Header responseCode 자동 검증 및 SsafyApiException 처리",
            "SsafyHeaderFactory: yyyyMMddHHmmss + 6자리 난수로 20자리 고유 거래 번호 자동 생성",
            "buildBody() 헬퍼: 가변인자(key-value)로 request body 조립, 팀 공용 기반 코드 제공",
          ],
        },
        {
          title: "뱅킹 서비스 (계좌 조회·이체·거래내역)",
          details: [
            "계좌 조회: SSAFY 수시입출금 API 연동, 내부 DB 싱크 구조",
            "이체: 서버 측 잔액 사전 검증 후 SSAFY API 호출로 예외 조기 처리",
            "거래내역: 날짜 범위·타입(전체/입금/출금) 파라미터 지원, transaction_log 캐싱으로 AI 소비 분석에 활용",
            "카드 거래내역: CVC 응답 노출 방지, inquireCreditCardTransactionList 연동",
          ],
        },
        {
          title: "카드 등록/관리 및 결제 한도 설정",
          details: [
            "SSAFY inquireSignUpCreditCardList로 카드 조회 후 credit_card·payment_method 자동 연결",
            "소프트 딜리트(is_active=false) + 소유자 검증(userNo 일치) + 연결 payment_method hard delete 처리",
            "1회·1일·월 한도 PaymentLimit 엔티티 설계, 결제 오케스트레이션에서 사전 차단 연동",
          ],
        },
        {
          title: "RBA 리스크 기반 인증 엔진",
          details: [
            "얼굴 유사도(MATCH/AMBIGUOUS/NO_MATCH) × 결제 금액 조합으로 3단계 인증 분기 단일 엔진 설계",
            "1단계: MATCH → FACE_ONLY 즉시 결제 / 2단계: AMBIGUOUS → 전화번호 4자리·PIN 보조 인증 / 3단계: 고액 → 전자서명",
            "PhoneVerificationService: User 엔티티 의존 없이 순수 문자열 기반 전화번호 검증 구현",
          ],
        },
        {
          title: "FDS 이상 거래 탐지",
          details: [
            "Strategy 패턴 FdsRule 인터페이스 + 3개 Rule 구현: LateNightRule·FrequencyRule·AmountAnomalyRule",
            "점수 구간별 4단계 대응: 0~30(로그) / 30~60(앱 알림) / 60~80(결제 일시정지) / 80~100(결제 차단)",
            "실운영: FCM 푸시 알림 + 결제 한도(BE-013) 기반 사전 차단으로 비정상 거래 방어",
          ],
        },
        {
          title: "포인트 시스템 — Rich Domain Model 적용",
          details: [
            "PointWallet.earn() / use(): 잔액 변경 규칙을 엔티티에 캡슐화, Service 레이어 책임 최소화",
            "포인트 상품: isAvailable()(판매상태·재고·기간) / deductStock()(자동 SOLD_OUT 전환) 비즈니스 메서드",
            "구매 플로우(지갑 차감→재고 차감→이력 기록→주문 생성) 단일 @Transactional, JPA dirty checking 활용",
            "카테고리·키워드 검색 필터링, 포인트 상품 CRUD 구현",
          ],
        },
        {
          title: "소비 리포트·매장 추천·알림 설정",
          details: [
            "ConsumptionReport: 카테고리별 breakdown(JSONB), 지역 기여 등급(A~D), AI 인사이트 저장·조회",
            "AI 서버 Pull 방식 연동으로 느슨한 결합 유지, AI 측 데이터 변경 시 Backend 수정 불필요",
            "구미 매장 필터링 API: 카테고리·페이스페이 지원·소상공인 여부 조건 조합",
            "NotificationSetting: 결제·FDS·축제·포인트·시스템 알림 타입별 on/off 컬럼 관리",
          ],
        },
        {
          title: "감사 로그·보안·안정성 강화",
          details: [
            "TraceIdFilter: 모든 요청에 UUID 기반 8자리 traceId 생성, MDC 저장, 응답 헤더(X-Trace-Id) 포함",
            "AuditLogAspect: @RestController 전체 AOP 적용, 요청·응답·처리시간 자동 감사 로그",
            "IDOR 방지: 전 도메인 userNo 소유자 검증, CVC·카드번호 마스킹, 서버 로그 마스킹 적용",
            "결제 중복 방지: DB 비관적 락(SELECT FOR UPDATE) + 멱등성 키 패턴",
            "입력값 검증: @Max·@Pattern·@Valid 전 요청 DTO 적용, 서비스 레이어 도달 전 차단",
          ],
        },
      ],
    },
    {
      area: "AI 챗봇 — FastAPI (토미봇)",
      summary:
        "구미 지역 맛집·축제 추천 RAG 기반 챗봇을 AI 서버 풀스택으로 단독 구현",
      techStack: ["FastAPI", "Python", "OpenAI GPT", "PostgreSQL"],
      contributions: [
        {
          title: "RAG 기반 챗봇 아키텍처",
          details: [
            "Android 앱 → FastAPI 직접 호출 구조로 Spring Boot 중계 레이어 제거",
            "사용자 메시지 SQL 키워드 필터링(맛집/카페/축제 등)으로 의도 파악, store·festival 테이블 SQL 쿼리",
            "수백 건 규모에서 벡터 DB 없이 SQL로 충분, 조회 데이터를 system prompt에 context 주입하여 hallucination 방지",
            "페이스페이 가능 매장 우선 추천 프롬프트 설계",
            "대화 이력: 프론트 history 배열 매 요청 전송 방식, 최근 10턴(20개 메시지) truncate로 토큰 초과 방지",
          ],
        },
      ],
    },
  ],
  featured: true,
  order: 1,
};
