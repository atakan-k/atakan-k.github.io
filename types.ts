export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export enum Language {
  TR = 'tr',
  EN = 'en',
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
}

export interface Experience {
  company: string;
  logo: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  date: string;
  description: string;
}

export interface NavLink {
  id: string;
  label: string;
}

export interface Translations {
  [key: string]: {
    navLinks: NavLink[];
    home: {
      intro: string;
      name: string;
      description: string;
    };
    about: {
      title: string;
      content: string[];
    };
    experience: {
      title: string;
    };
    projects: {
      title: string;
    };
    contact: {
      title: string;
      content: string;
      email: string;
    };
    footer: {
      text: string;
    };
  };
}
