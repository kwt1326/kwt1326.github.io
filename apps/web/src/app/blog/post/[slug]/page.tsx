import { redirect } from "next/navigation";
import { ISitemapField, getServerSideSitemap } from "next-sitemap";

import client from "@/repository/client";
import { makeTitle } from "@/helpers/makeTitle";
import { getPost, getPostSlugs } from "@/repository/post";

import PostDefaultComponent from "./components/default";

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  const fields: ISitemapField[] = slugs.map((slug) => {
    return {
      loc: `${client.clientHost}/blog/${slug}`, // 페이지 경로
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 1,
    };
  });
  await getServerSideSitemap(fields);

  return slugs;
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
