import { ICertification, IDiploma, ISkills } from '@/interfaces';

export interface IProfile {
  firstName: string;
  lastName: string;
  birthDate: string;
  title: string;
  yearsOfExperience: number;
  strengths: string[];
  skills: ISkills;
  diplomas: IDiploma[];
  certifications: ICertification[];
  spokenLanguages: string[];
  hobbies: string[];
}
