import client from "@/repository/client";
import { Post } from "@/repository/post/types";
import Image from "@/app/components/image";
import Link from "next/link";
import defaultSrc from "public/develop.jpeg"
import { PropsWithChildren } from "react";

interface GridListItemProps {
  item: Post;
  index: number;
}

interface GridListComposition {
  Item: React.FC<GridListItemProps>;
}

const GridList: React.FC<PropsWithChildren<any>> & GridListComposition = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {children}
    </div>
  );
};

const GridListItem = ({ item, index }: { item: Post; index: number }) => {
  const isReminderZero = (index + 1) % 3 === 0;
  const thumbnail = item.attributes?.thumbnail?.data?.attributes.formats.large;
  return (
    <div
      key={index}
      className={`col-start-1 col-end-2 md:${
        isReminderZero ? "col-span-2" : "col-span-1"
      } flex flex-col justify-center w-full`}
    >
      <Link href={`/blog/post/${item.attributes.title}`}>
        <div className="w-full flex justify-center transition-transform hover:scale-105">
          <Image
            src={thumbnail?.url ?? defaultSrc}
            alt={item.attributes.title}
            className="rounded-sm object-cover"
            width={thumbnail?.width ?? 1024}
            height={thumbnail?.height ?? 0}
            priority={true}
          />
        </div>
      </Link>
      <div>
        <div className="flex flex-wrap justify-start w-max">
          {item.attributes.categories.data.map((category, i) => (
            <Link key={i} href={`/blog/category/${category.attributes.name}`}>
              <h1 className="select-none text-lg font-semibold py-2 mr-2 flex items-center text-white rounded-full border-transparent hover:underline decoration-2 underline-offset-4 decoration-orange-500">
                {category.attributes.name}
              </h1>
            </Link>
          ))}
        </div>
        <Link href={`/blog/post/${item.attributes.title}`}>
          <div className="w-full flex flex-wrap justify-start text-xl md:text-2xl font-semibold transition-colors bg-gradient-to-r from-white to-white hover:from-pink-500 hover:to-yellow-500 bg-clip-text hover:text-transparent">
            {item.attributes.title}
          </div>
        </Link>
      </div>
    </div>
  );
};

GridList.Item = GridListItem;

export default GridList;
