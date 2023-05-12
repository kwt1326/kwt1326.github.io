import { client } from "@/sanity/lib/client";
import { postAllQuery, postBySlugQuery } from "./query";

interface FetcherProps {
  query: string, params: any
}

export const clientFetcher = async ({ query, params }: FetcherProps) => 
  client?.fetch(query, params);

export const getPosts = async (): Promise<any[]> => {
  return await clientFetcher({ query: postAllQuery, params: {}});
}

export const getPost = async (slug: string): Promise<any[]> => {
  return await clientFetcher({ query: postBySlugQuery, params: { slug }});
}