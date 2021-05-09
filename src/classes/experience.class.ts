import { IExperience, IProject } from '@/interfaces';
import { Project } from './project.class';

export class Experience {
  client: string;
  period: string;
  role: string;
  missionStrengths: string[];
  projects: Project[];
  tasks: string[];
  environmentHighlights: string[];

  constructor({
    client,
    period,
    role,
    missionStrengths,
    projects,
    tasks,
    environmentHighlights
  }: IExperience) {
    this.client = client;
    this.period = period;
    this.role = role;
    this.missionStrengths = missionStrengths;
    this.tasks = tasks;
    this.environmentHighlights = environmentHighlights;
    this.projects = projects.map((proj: IProject) => new Project(proj));
  }
}
