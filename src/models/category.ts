type Id = string;
type Title = string;
type Color = string;

export class Category {
  id: Id;
  title: Title;
  color: Color;

  constructor(id: Id, title: Title, color: Color) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}
