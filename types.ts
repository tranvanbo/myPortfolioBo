export interface Project {
  name: string;
  description: string;
  techStack: string[];
  responsibilities: string[];
  link?: string;
  linkText?: string;
  type: 'Mini App' | 'React Native' | 'Mobile App';
  image?: string; // Added for visual cards
}

export interface Experience {
  company: string;
  role?: string;
  period: string;
  projects: Project[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  avatar: string;
}
