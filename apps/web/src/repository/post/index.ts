import client, { combine } from "../client";
import { Post } from "./types";
import { postAllQuery, getPostPopulateQuery, postAllCountQuery } from "./query";
import { PagePaginationMetadata } from "../types";

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


export const getPostsCount = async () => {
  try {
    const { meta } = await client(combine(baseUrl, postAllCountQuery));
    if (!meta) {
      throw new Error('failed fetch metadata');
    }
    return meta as PagePaginationMetadata;
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
