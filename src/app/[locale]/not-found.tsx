import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale, isLocale } from "@/i18n/config";

type NotFoundProps = {
  params?: Promise<{ locale?: string }>;
};

export default async function NotFound({ params }: NotFoundProps) {
  const resolved = params ? await params : undefined;
  const localeParam = resolved?.locale;
  const locale = localeParam && isLocale(localeParam) ? localeParam : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <section
      aria-labelledby="not-found-heading"
      className="relative flex min-h-[70vh] items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--surface)_85%,transparent)_0%,transparent_68%)]"
      />

      <Container className="relative py-16 sm:py-20 md:py-24">
        <Reveal
          intensity="medium"
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <div className="relative flex min-h-[7rem] w-full items-center justify-center sm:min-h-[8.5rem]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-[6.5rem] leading-none font-semibold tracking-tight text-foreground/[0.06] select-none sm:text-[8.5rem] md:text-[10rem]"
            >
              404
            </span>
            <h1
              id="not-found-heading"
              className="relative text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              {dictionary.notFound.title}
            </h1>
          </div>

          <p className="mt-4 max-w-lg text-base leading-8 text-muted-foreground sm:text-lg">
            {dictionary.notFound.description}
          </p>

          <div aria-hidden="true" className="mt-10 flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-border" />
            <span className="size-1.5 rounded-full bg-border" />
            <span className="size-1.5 rounded-full bg-border" />
          </div>

          <p className="mt-6 text-sm text-muted-foreground/80">
            {dictionary.notFound.hint}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
