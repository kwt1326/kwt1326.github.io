import Link from "next/link";
import { Category } from "@/repository/category/types";

interface CategoriesProps {
  categories: Category[];
}

const Categories = ({ categories }: CategoriesProps) => {
  const category = (category: Category) => {
    return (
      <Link href={`/blog/category/${category.id}`}>
        <h1 className="select-none text-xs font-semibold px-2 py-1 m-1 flex items-center bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-full border-transparent hover:scale-110">
          #{category.attributes.name}
        </h1>
      </Link>
    )
  }

  return (
    <div className="flex flex-wrap justify-center w-max">
      {categories.map((_) => category(_))}
    </div>
  )
}

export default Categories;
