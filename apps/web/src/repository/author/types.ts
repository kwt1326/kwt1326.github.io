export interface Author {
  id: number;
  attributes: {
    name: string;
    email: string;
    job: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    thumbnail: { data: { id: number, attributes: any } };
    author_detail?: { data: { id: number, attributes: any } };
  }
}