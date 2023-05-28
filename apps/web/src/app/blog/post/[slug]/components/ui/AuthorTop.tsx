import Image from "@/app/components/image";
import { Author } from "@/repository/author/types";
import { dateFormatter } from "@/helpers/dateFormatter";

const AuthorTopComponent =({
  attributes: {
    name,
    thumbnail,
    publishedAt,
  },
}: Author) => {
  const imageSrc = thumbnail?.data?.attributes?.url;
  return (
    <div className="select-none px-8 py-8 text-gray-500">
      <div className="flex flex-wrap items-center sm:flex-nowrap sm:space-x-6">
        <div className="relative h-12 w-12 flex-shrink-0 ">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={name}
              className="rounded-full object-cover"
              fill
              sizes="96px"
            />
          )}
        </div>
        <div className="bg-brand-secondary/20 rounded-full py-2 text-sm text-blue-600 flex flex-col">
          <h3 className="text-lg font-medium text-gray-300">{name}</h3>
          <span className="text-sm text-gray-400">
            {dateFormatter(publishedAt)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AuthorTopComponent;