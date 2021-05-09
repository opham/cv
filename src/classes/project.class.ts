interface IProject {
  title: string;
  description: string;
}

export class Project implements IProject {
  title: string;
  description: string;

  constructor({ title, description }: IProject) {
    this.title = title;
    this.description = description;
  }
}
