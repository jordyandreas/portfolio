export type ProjectStatus = "completed" | "in-progress" | "archived";

export type ProjectPlatform = "web" | "mobile" | "backend";

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  domain: string;
  role: string;
  context: string;
  challenge: string;
  contribution: string;
  outcomes: string[];
  technologies: string[];
  highlights: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  status: ProjectStatus;
  platform: ProjectPlatform;
  showcaseImages: Array<{
    src: string;
    alt: string;
  }>;
  order: number;
};
