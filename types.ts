import { profilePicture } from './assets.ts';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export enum Language {
  TR = 'tr',
  EN = 'en',
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  tags: string[];
  url: string;
  imageUrl: string;
}

export interface Experience {
  company: string;
  logo: string; // Changed from React.FC to string for image path
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
    sidebar: {
      title: string;
    },
    projectPages: {
      backButton: string;
    },
    home: {
      intro: string;
      name: string;
      fullIntro: string;
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
