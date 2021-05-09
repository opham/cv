import { ISkills } from '@/interfaces';

export class Skills implements ISkills {
  sectors: string[];
  languages: string[];
  operatingSystems: string[];
  databases: string[];
  tools: string[];
  functionalSkills: string[];
  methodologies: string[];

  constructor({
    sectors,
    languages,
    operatingSystems,
    databases,
    tools,
    functionalSkills,
    methodologies
  }: ISkills) {
    this.sectors = sectors;
    this.languages = languages;
    this.operatingSystems = operatingSystems;
    this.databases = databases;
    this.tools = tools;
    this.functionalSkills = functionalSkills;
    this.methodologies = methodologies;
  }
}
