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
              저는 처음부터 개발을 잘했던 사람은 아니지만, 우연히 들었던 대학
              수업을 계기로 개발에 흥미를 갖게 되었습니다. 이후{" "}
              <span className="font-medium text-foreground">
                멋쟁이사자처럼과 SSAFY
              </span>{" "}
              과정을 거치며 다양한 프로젝트를 경험했고, 그 과정에서 혼자 문제를
              해결하는 능력뿐만 아니라 팀원들과 소통하며 하나의 결과물을
              만들어가는 협업의 중요성도 배웠습니다.
            </p>
            <p>
              특히 여러 프로젝트를 진행하면서 예상하지 못한 오류나 갈등을
              마주하기도 했지만, 그때마다{" "}
              <span className="font-medium text-foreground">
                포기하기보다 원인을 찾고 해결하려는 태도
              </span>
              를 갖게 되었습니다.
            </p>
            <p>
              저는 아직 배워야 할 점이 많지만, 새로운 환경에 적응하고 꾸준히
              성장하려는 자세만큼은 자신 있습니다. 앞으로도 변화하는 상황 속에서
              유연하게 대처하며, 신뢰할 수 있는 결과를 만들어내는 사람이
              되겠습니다.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
