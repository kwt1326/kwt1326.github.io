import { makeTitle } from "@/helpers/makeTitle";
import { getAuthor } from "@/repository/author";

import AboutDefaultComponentProps from "./components/default";
import { redirect } from "next/navigation";

export async function generateMetadata() {
  const data = await getAuthor('Papaya');
  if (!data) redirect('/blog');

  const { attributes } = data;

  return {
    title: `${attributes.name} - About}`,
    description: makeTitle(attributes.name),
  };
}

export default async function Category() {
  const data = await getAuthor('Papaya');
  if (!data) redirect('/blog');

  return <AboutDefaultComponentProps {...data} />;
}