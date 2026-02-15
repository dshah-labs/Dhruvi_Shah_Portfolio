
export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  skills: string[];
  bullets: string[];
}

export interface ProjectItem {
  title: string;
  organization?: string;
  period: string;
  bullets: string[];
  tags: string[];
  link?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
