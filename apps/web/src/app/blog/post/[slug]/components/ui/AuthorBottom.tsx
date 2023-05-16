'use client'
import { Fragment, useState } from "react";

import Image from "@/app/components/image";
import { Author } from "@/repository/author/types";
import Content from "./Content";

const AuthorBottomComponent = ({
  attributes: {
    name,
    description,
    thumbnail,
    author_detail,
  },
}: Author) => {
  const [open, setOpen] = useState<boolean>(false)

  const imageSrc = thumbnail?.data?.attributes?.formats?.small?.url;

  return (
    <Fragment>
      <div className="select-none mt-3 rounded-2xl px-8 py-8 text-gray-400 duration-200 bg-gray-900 hover:bg-gray-800">
        <div
          className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="relative mt-1 h-24 w-24 flex-shrink-0">
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
          <div>
            <div className="bg-brand-secondary/20 rounded-full py-2 text-sm text-blue-600 flex flex-col">
              <h3 className="text-lg font-medium text-gray-300 underline decoration-purple-500">
                {name}
              </h3>
            </div>
            <span className="text-sm text-gray-400">{description}</span>
          </div>
        </div>
        {open && (
          <div className="static select-none rounded-2xl text-gray-400">
            <Content content={author_detail?.data?.attributes?.introduce ?? ''} />
          </div>
        )}
      </div>
      <div className="h-8" />
    </Fragment>
  );
}

export default AuthorBottomComponent;
