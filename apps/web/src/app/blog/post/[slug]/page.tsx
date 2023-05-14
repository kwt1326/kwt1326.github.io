import { makeTitle } from "@/helpers/makeTitle";
import { getPost, getPostSlugs } from "@/repository/post";
import PostDefaultComponent from "./components/default";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return (await getPostSlugs());
}

export async function generateMetadata({ params }: any) {
  const { attributes } = await getPost(params.slug);
  return {
    title: makeTitle(attributes.title),
    description: attributes.title
  };
}

export default async function Post({ params: { slug } }) {
  const data = await getPost(slug);

  if (!data?.attributes) redirect('/blog');

  return <PostDefaultComponent {...data} />;
}
