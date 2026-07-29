import { About } from "@/features/home/about";
import { ContactCta } from "@/features/home/contact-cta";
import { Experience } from "@/features/home/experience";
import { Hero } from "@/features/home/hero";
import { Projects } from "@/features/home/projects";
import { Capabilities } from "@/features/home/skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Capabilities />
      <ContactCta />
    </>
  );
}
