import { IProject } from '@/interfaces';

export interface IExperience {
  client: string;
  period: string;
  role: string;
  missionStrengths: string[];
  projects: IProject[];
  tasks: string[];
  environmentHighlights: string[];
}
