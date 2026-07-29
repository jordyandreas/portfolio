import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";
import { CapabilityGroup } from "@/features/home/capability-group";
import { capabilitiesContent } from "@/data/capabilities";

export function Capabilities() {
  const { heading, groups } = capabilitiesContent;

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <Container className="py-8 sm:py-12 md:py-16">
        <div className="space-y-8 md:space-y-10">
          <Reveal intensity="medium">
            <h2
              id="skills-heading"
              className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              {heading}
            </h2>
          </Reveal>

          <StaggerGroup className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {groups.map((group) => (
              <StaggerItem key={group.title}>
                <CapabilityGroup group={group} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
