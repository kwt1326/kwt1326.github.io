import client, { combine } from "../client";
import { getAuthorQuery } from "./query";
import { Author } from "./types";

const baseUrl = '/authors';

export const getAuthor = async (name: string) => {
  try {
    const { data } = await client(combine(baseUrl, getAuthorQuery(name)));
    
    if (!(data?.[0])) {
      throw new Error('failed fetch data');
    }
    return data?.[0] as Author;
  } catch (error) {
    console.error(error);
  }
}
