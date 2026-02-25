import type { ComponentType } from 'react';

export interface IProject {
    src: string;
    uptitle: string;
    title: string;
    description: string;
    tags: string[];
    deployURL?: string;
    figmaURL?: string;
    githubURL?: string;
}

export interface ISkill {
  src?: string;
  icon?: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  borderColor: string;
}