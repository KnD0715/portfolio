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
              <span className="font-medium text-foreground">김민재</span>입니다.
              삼성 청년 SW 아카데미(SSAFY)에서 Java/Spring 기반 백엔드부터
              Python Flask AI 서비스, React 프론트엔드까지 폭넓은 개발 경험을
              쌓고 있습니다.
            </p>
            <p>
              <span className="font-medium text-foreground">
                안정적이고 유지보수 가능한 시스템 설계
              </span>
              에 관심이 많습니다. DDD와 상태 머신 패턴으로 복잡한 비즈니스
              로직을 명확하게 분리하고, Spring Boot와 Flask를 결합한 마이크로서비스
              아키텍처로 AI 채점 서비스를 구축한 경험이 있습니다. 테스트 코드로
              시스템의 신뢰성을 확보하는 것을 중요하게 생각합니다.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
