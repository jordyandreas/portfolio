export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location?: string;
  outcomes: string[];
  technologies: string[];
};

export type ExperienceContent = {
  heading: string;
  entries: ExperienceEntry[];
};
