import { redirect } from 'next/navigation';
import { makeTitle } from "@/helpers/makeTitle";
import { getPostsCount } from '@/repository/post';
import { getCategorySlugs, getCategory, getCategories } from "@/repository/category";

import BlogDefaultComponent from "@/app/blog/components/default";

export async function generateStaticParams() {
  return (await getCategorySlugs());
}

export async function generateMetadata({ params }: any) {
  const { attributes } = await getCategory(params.slug);
  return {
    title: makeTitle(attributes.name),
    description: makeTitle(attributes.name),
  };
}

export default async function Category({ params: { slug } }) {
  const _slug = decodeURIComponent(slug);
  const totalCount = (await getPostsCount())?.pagination?.total ?? 0;
  const categoriesData = await getCategories();
  const categoryData = categoriesData.find(
    (category) => category.attributes.name === _slug
  );

  console.log('TEST', totalCount);

  if (!categoryData) redirect("/blog");

  return (
    <BlogDefaultComponent
      main={false}
      title={categoryData.attributes.name}
      posts={categoryData.attributes.posts.data}
      totalCount={totalCount}
      categories={categoriesData}
    />
  );
}
