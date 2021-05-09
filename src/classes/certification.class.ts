import { ICertification } from '@/interfaces';

export class Certification implements ICertification {
  name: string;
  grade: string;

  constructor({ name, grade }: ICertification) {
    this.name = name;
    this.grade = grade;
  }
}
