export interface BookshelfAPIResponse {
  title: string;
  books: {
    title: string;
    imageUrl: string;
    pdfUrl: string;
  }[];
}
