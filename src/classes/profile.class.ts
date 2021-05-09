import { ICertification, IDiploma, IProfile } from '@/interfaces';
import { Certification, Diploma, Skills } from '@/classes';
import dayjs from 'dayjs';

export class Profile {
  firstName: string;
  lastName: string;
  birthDate: Date;
  title: string;
  yearsOfExperience: number;
  strengths: string[];
  skills: Skills;
  diplomas: Diploma[];
  certifications: Certification[];
  spokenLanguages: string[];

  constructor({
    lastName,
    firstName,
    birthDate,
    title,
    strengths,
    skills,
    diplomas,
    certifications,
    yearsOfExperience,
    spokenLanguages
  }: IProfile) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.birthDate = new Date(birthDate);
    this.title = title;
    this.yearsOfExperience = yearsOfExperience;
    this.strengths = strengths;
    this.skills = new Skills(skills);
    this.diplomas = diplomas.map((diploma: IDiploma) => new Diploma(diploma));
    this.certifications = certifications.map(
      (certif: ICertification) => new Certification(certif)
    );
    this.spokenLanguages = spokenLanguages;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName.toUpperCase() ?? ''}`;
  }

  get initials(): string {
    return `${this.firstName.substring(0, 1)}${this.lastName.substring(0, 1)}`;
  }

  get formattedBirthDate(): string {
    return dayjs(this.birthDate).format('DD/MM/YYYY');
  }
}
