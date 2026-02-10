import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection>
          <SectionHeading
            title="About Me"
            subtitle="개발자로서의 저를 소개합니다"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl space-y-4 text-muted-foreground">
            <p>
              안녕하세요, 백엔드 개발자{" "}
              <span className="font-medium text-foreground">잼민</span>입니다.
              삼성 청년 SW 아카데미(SSAFY)에서 Java/Spring 기반 웹 개발을
              학습하며, 팀 프로젝트를 통해 실전 개발 경험을 쌓고 있습니다.
            </p>
            <p>
              <span className="font-medium text-foreground">
                안정적이고 유지보수 가능한 백엔드 시스템
              </span>
              을 설계하는 데 관심이 많습니다. 도메인 주도 설계(DDD)와 계층형
              아키텍처를 적용하여 복잡한 비즈니스 로직을 명확하게 분리하고,
              테스트 코드로 시스템의 신뢰성을 확보하는 것을 중요하게 생각합니다.
            </p>
            <p>
              팀 프로젝트에서 7개 도메인의 설계부터 구현, 테스트까지 담당하며
              복잡한 엔티티 관계 관리와 CI/CD 환경에서의 테스트 안정성 확보 등
              실무에 가까운 문제들을 해결한 경험이 있습니다. 또한 테스트 작성
              가이드라인을 수립하여 팀 전체의 코드 품질 향상에 기여했습니다.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
