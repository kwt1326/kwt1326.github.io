import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

import client from "@/repository/client";
import { Author } from "@/repository/author/types";
import { dateFormatter } from "@/helpers/dateFormatter";

const AuthorComponent =({
  attributes: {
    name,
    thumbnail,
    publishedAt,
  },
}: Author) => {
  const imageSrc = thumbnail?.data?.attributes?.formats?.small?.url;
  return (
    <div className="select-none px-8 py-8 text-gray-500">
      <div className="flex flex-wrap items-center sm:flex-nowrap sm:space-x-6">
        <div className="relative h-12 w-12 flex-shrink-0 ">
          {imageSrc && (
            <Link href={`/about`}>
              <Image
                src={`${client.imageHost}${imageSrc}`}
                alt={name}
                className="rounded-full object-cover"
                fill
                sizes="96px"
              />
            </Link>
          )}
        </div>
        <div className="bg-brand-secondary/20 rounded-full py-2 text-sm text-blue-600 dark:text-blue-500 flex flex-col">
          <Link href={`/about`}>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
              {name}
            </h3>
          </Link>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {dateFormatter(publishedAt)}
          </span>
        </div>
      </div>
    </div>
  );
}

const AuthorBottomComponent = ({
  attributes: {
    name,
    description,
    thumbnail,
  },
}: Author) => {
  const imageSrc = thumbnail?.data?.attributes?.formats?.small?.url;

  return (
    <Fragment>
      <div className="select-none mt-3 rounded-2xl bg-gray-50 px-8 py-8 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
        <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
          <div className="relative mt-1 h-24 w-24 flex-shrink-0 ">
            {imageSrc && (
              <Link href={`/about`}>
                <Image
                  src={`${client.imageHost}${imageSrc}`}
                  alt={name}
                  className="rounded-full object-cover"
                  fill
                  sizes="96px"
                />
              </Link>
            )}
          </div>
          <div>
            <Link
              href={`/about`}
              className="bg-brand-secondary/20 rounded-full py-2 text-sm text-blue-600 dark:text-blue-500 flex flex-col"
            >
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300 underline decoration-purple-500">
                {name}
              </h3>
            </Link>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {description}
            </span>
          </div>
        </div>
      </div>
      <div className="h-8" />
    </Fragment>
  );
}

const AuthorComponents = { Top: AuthorComponent, Bottom: AuthorBottomComponent };

export default AuthorComponents;