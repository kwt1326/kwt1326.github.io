import { Post } from "@/repository/post/types";
import { Category } from "@/repository/category/types";
import GridList from "./ui/GridList";
import SideCategories from './ui/SideCategories';

interface BlogDefaultComponentProps {
  main?: boolean;
  title: string;
  totalCount: number;
  posts: Post[];
  categories: Category[];
}

const BlogDefaultComponent = ({
  main = true,
  title,
  totalCount,
  posts,
  categories,
}: BlogDefaultComponentProps) => {
  if (!posts) return null;

  const list = main ? posts?.slice(0, 12) : posts;
  return (
    <div className="flex">
      <aside className="fixed hidden md:block">
        <SideCategories categories={categories} totalCount={totalCount} />
      </aside>
      <main className="md:ml-52">
        <div className="text-3xl mb-4 font-semibold">
          <h1>{title}</h1>
        </div>
        {!list || list.length === 0 ? (
          <div className="flex justify-center items-center p-12 text-3xl font-semibold">
            There are no Posts.
          </div>
        ) : (
          <GridList>
            {list.map((item, index) => (
              <GridList.Item key={index} item={item} index={index} />
            ))}
          </GridList>
        )}
      </main>
    </div>
  );
};

export default BlogDefaultComponent;
