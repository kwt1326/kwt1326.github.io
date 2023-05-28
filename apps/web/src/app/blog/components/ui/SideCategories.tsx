import Link from "next/link";
import { Category } from "@/repository/category/types";

interface SideCategoriesProps {
  categories: Category[];
  totalCount: number;
}

const SideCategories = ({ categories, totalCount }: SideCategoriesProps) => {
  const _categories = categories.map((category: Category) => ({
    name: category.attributes.name,
    count: category.attributes.posts.data.length,
  }));

  const renderItem = ({ name, count, href }) => (
    <Link key={name} href={href}>
      <h1 className="select-none text-lg font-semibold py-2 mr-2 flex items-center text-white rounded-full border-transparent hover:underline decoration-2 underline-offset-4 decoration-orange-500">
        {name}
        {` (${count})`}
      </h1>
    </Link>
  );

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-semibold mb-2">Categories</h1>
      <div className="flex flex-col justify-center w-max">
        {renderItem({ name: 'All', count: totalCount, href: '/blog' })}
        {_categories.map(({ name, count }) =>
          renderItem({ name, count, href: `/blog/category/${name}` })
        )}
      </div>
    </div>
  );
};

export default SideCategories;
