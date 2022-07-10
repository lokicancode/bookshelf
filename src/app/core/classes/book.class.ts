export class Book {
  show: boolean = true;

  constructor(
    public title: string,
    public imageUrl: string,
    public pdfUrl: string
  ) {}
}
