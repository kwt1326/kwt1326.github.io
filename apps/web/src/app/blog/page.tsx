import { makeTitle } from "@/helpers/makeTitle";
import { getPosts, getPostsCount } from "@/repository/post";
import { getCategories } from "@/repository/category";
import BlogDefaultComponent from "./components/default";

export const metadata = {
  title: makeTitle('Blog'),
  description: makeTitle('Blog'),
}

export default async function Blog(_: any) {
  const postsData = await getPosts();
  const totalCount = (await getPostsCount())?.pagination?.total ?? 0;
  const categoriesData = await getCategories();
  const props = { title: 'Last 12 Posts', posts: postsData, totalCount, categories: categoriesData };

  return <BlogDefaultComponent {...props} />;
}