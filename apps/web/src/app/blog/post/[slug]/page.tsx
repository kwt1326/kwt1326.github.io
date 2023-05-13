import { makeTitle } from "@/helpers/metadata";
import { getPost, getPosts } from "@/repository/post";
import PostDefaultComponent from "./components/default";

// export async function generateStaticParams() {
//   return await getPosts();
// }

export async function generateMetadata({ params }: any) {
  const { attributes } = await getPost(params.slug);
  return { title: makeTitle(attributes.title), description: attributes.title };
}

export default async function Post({ params }: any) {
  const data = await getPost(params.slug);

  if (!data?.attributes) {
    return {
      status: 404,
    };
  }

  return <PostDefaultComponent {...data} />;
}
