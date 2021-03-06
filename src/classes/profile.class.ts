import { ICertification, IDiploma, IProfile } from '@/interfaces';
import { Certification, Diploma, Skills } from '@/classes';
import dayjs from 'dayjs';

export class Profile {
  firstName: string;
  lastName: string;
  birthDate: Date;
  title: string;
  email: string;
  mobile: string;
  github: string;
  yearsOfExperience: number;
  strengths: string[];
  skills: Skills;
  diplomas: Diploma[];
  certifications: Certification[];
  spokenLanguages: string[];
  hobbies: string[];

  constructor({
    lastName,
    firstName,
    birthDate,
    title,
    email,
    mobile,
    github,
    strengths,
    skills,
    diplomas,
    certifications,
    yearsOfExperience,
    spokenLanguages,
    hobbies
  }: IProfile) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.birthDate = new Date(birthDate);
    this.title = title;
    this.email = email;
    this.mobile = mobile;
    this.github = github;
    this.yearsOfExperience = yearsOfExperience;
    this.strengths = strengths;
    this.skills = new Skills(skills);
    this.diplomas = diplomas.map((diploma: IDiploma) => new Diploma(diploma));
    this.certifications = certifications.map(
      (certif: ICertification) => new Certification(certif)
    );
    this.spokenLanguages = spokenLanguages;
    this.hobbies = hobbies;
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
