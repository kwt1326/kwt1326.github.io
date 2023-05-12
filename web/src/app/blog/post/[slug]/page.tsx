import { getPost, getPosts } from "@/src/data/source/post";

// export async function generateStaticParams() {
//   return await getPosts();
// }

export async function generateMetadata({ params }: any) {
  const post: any = await getPost(params.slug);
  return { title: 'Blog', description: post.title };
}

export default async function Post({ params }: any) {
  const post: any = await getPost(params.slug);

  if (!post) {
    return {
      status: 404,
    };
  }

  const components = {};

  return (
    <main>
      <div>{post.author.name}</div>
      <h1>{post.title}</h1>
      <PortableText value={post.body} components={components} />
    </main>
  );
}
