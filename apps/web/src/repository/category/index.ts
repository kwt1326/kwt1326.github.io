import client, { combine } from "../client";
import { categoryAllQuery, getCategoryQuery, getCategoriesQuery } from "./query";
import { Category } from "./types";

const baseUrl = '/categories';

export const getCategory = async (name: string) => {
  try {
    const { data } = await client(combine(baseUrl, getCategoryQuery(name)));
    
    if (!(data?.[0])) {
      throw new Error('failed fetch data');
    }
    return data?.[0] as Category;
  } catch (error) {
    console.error(error);
  }
}

export const getCategories = async () => {
  try {
    const { data } = await client(combine(baseUrl, getCategoriesQuery));
    
    if (!data) {
      throw new Error('failed fetch data');
    }
    
    return (data ?? {}) as Category[];
  } catch (error) {
    console.error(error);
  }
}

export const getCategorySlugs = async () => {
  try {
    const { data } = await client(combine(baseUrl, categoryAllQuery));
    
    if (!data) {
      throw new Error('failed fetch data');
    }
    
    return ((data ?? {}) as Category[]).map(({ attributes: { name } }) => ({ slug: name }));
  } catch (error) {
    console.error(error);
  }
}
