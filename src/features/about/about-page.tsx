import { AboutExpertise } from "@/features/about/about-expertise";
import { AboutIntro } from "@/features/about/about-intro";
import { AboutTechStack } from "@/features/about/about-tech-stack";
import { Experience } from "@/features/home/experience";
import { Capabilities } from "@/features/home/skills";

export function AboutPage() {
  return (
    <>
      <AboutIntro />
      <AboutTechStack />
      <AboutExpertise />
      <Experience />
      <Capabilities />
    </>
  );
}
