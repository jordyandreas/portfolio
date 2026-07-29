import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { ExperienceEntry } from "@/features/home/experience-entry";
import { experienceContent } from "@/data/experience";

export function Experience() {
  const { heading, entries } = experienceContent;

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <Container className="py-8 sm:py-12 md:py-16">
        <Reveal intensity="medium" className="space-y-8 md:space-y-10">
          <h2
            id="experience-heading"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {heading}
          </h2>

          <ol>
            {entries.map((entry) => (
              <ExperienceEntry
                key={`${entry.company}-${entry.period}`}
                entry={entry}
              />
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  );
}
