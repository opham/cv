import { IDiploma } from '@/interfaces';

export class Diploma implements IDiploma {
  year: string;
  title: string;

  constructor({ year, title }: IDiploma) {
    this.year = year;
    this.title = title;
  }
}
