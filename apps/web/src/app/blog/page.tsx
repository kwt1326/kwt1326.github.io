import { makeTitle } from "@/helpers/makeTitle";
import { getPosts } from "@/repository/post";
import { getCategories } from "@/repository/category";
import BlogDefaultComponent from "./components/default";

export const metadata = {
  title: makeTitle('Blog'),
  description: makeTitle('Blog'),
}

export default async function Blog(_: any) {
  const postsData = await getPosts();
  const categoriesData = await getCategories();
  const props = { title: 'Last 12 Posts', posts: postsData, categories: categoriesData };

  return <BlogDefaultComponent {...props} />;
}