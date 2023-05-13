import client from "../client";
import { postPopulateQuery } from "./query";
import { Post } from "./types";

export const getPost = async (id: string): Promise<Post> => {
  try {
    const { data } = await client(`/posts/${id}${postPopulateQuery}`);
    if (!data) {
      throw new Error('failed fetch data');
    }
    return (data ?? {}) as Post;
  } catch (error) {
    console.error(error);
  }
}

export const getPosts = async () => {
  try {
    const { data } = await client('/posts');
    if (!data) {
      throw new Error('failed fetch data');
    }
    return (data ?? {}) as Post[];
  } catch (error) {
    console.error(error);
  }
}