import { Post } from "../post/types";

export interface Category {
  id: number;
  attributes: {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: 'ko' | 'en';
    posts?: { data: Post[] };
  }
}