import client, { combine } from "../client";
import { Post } from "./types";
import { postAllQuery, getPostPopulateQuery } from "./query";

const baseUrl = '/posts';

export const getPost = async (slug: string): Promise<Post> => {
  try {
    const { data } = await client(combine(baseUrl, getPostPopulateQuery(slug)));
    if (!(data?.[0])) {
      throw new Error('failed fetch data');
    }
    return data?.[0] as Post;
  } catch (error) {
    console.error(error);
  }
}

export const getPosts = async () => {
  try {
    const { data } = await client(combine(baseUrl, postAllQuery));
    if (!data) {
      throw new Error('failed fetch data');
    }
    return data as Post[];
  } catch (error) {
    console.error(error);
  }
}

export const getPostSlugs = async () => {
  try {
    const { data } = await client(combine(baseUrl, postAllQuery));
    
    if (!data) {
      throw new Error('failed fetch data');
    }
    
    return (data as Post[]).map(({ attributes: { title } }) => ({ slug: decodeURIComponent(title) }));
  } catch (error) {
    console.error(error);
  }
}
