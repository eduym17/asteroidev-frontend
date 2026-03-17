import Container from "../../components/ui/Container";
import SectionHeader from "../../components/ui/SectionHeader";
import SkillUpCard from "../../components/ui/SkillUpCard";
import Hero from "../../components/Hero";
import { Settings2, GraduationCap, Goal, FastForward, Rocket, Crown, Brain, BookOpenCheck } from "lucide-react";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <Container className="flex flex-col items-center">
        <SectionHeader className="text-asdev-night" highlight="Unlock" ringPosition="-left-4">
          Unlock new opportunities
        </SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <SkillUpCard header="Tailored Learning" cardIcon={Settings2} hoverIcon={GraduationCap}>
            Tailored learning paths based on your ambitions.
          </SkillUpCard>
          <SkillUpCard header="Goal Driven Progress" cardIcon={Goal} hoverIcon={FastForward}>
            Set, track, and achieve milestones efficiently.
          </SkillUpCard>
          <SkillUpCard header="Career Boosting Insights" cardIcon={Rocket} hoverIcon={Crown}>
            Gain in-demand skills to stay ahead.
          </SkillUpCard>
          <SkillUpCard header="A Smarter Way to Learn" cardIcon={Brain} hoverIcon={BookOpenCheck}>
            Practical, guided and results-focused growth.
          </SkillUpCard>
        </div>
        <div className="py-14 text-center text-[15px] md:text-lg">
          <p>Start today and <span className="font-semibold">take control</span> of your future!</p>
          <p>Your next level is just <span className="font-semibold">one step</span> away.</p>
        </div>
      </Container>
    </section>
  )
}