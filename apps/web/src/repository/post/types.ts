import { Author } from "../author/types";
import { Category } from "../category/types";

export interface Post {
  id: number;
  attributes: {
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: 'ko' | 'en';
    author: { data: Author };
    categories: { data: Category[] };
  }
}
