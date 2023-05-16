'use client'

import Image from "@/app/components/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import client from "@/repository/client";
import CodeBlock from "./CodeBlock";
import defaultSrc from "public/develop.jpeg";

import './markdown.css';

interface ContentProps {
  content: string;
  thumbnail?: any;
}

const Content = ({ content, thumbnail }: ContentProps) => {
  return (
    <main className={`mt-8 mb-8`}>
      {thumbnail && (
        <Image
          className="m-auto"
          src={thumbnail.url ?? defaultSrc}
          alt={"thumbnail"}
          width={thumbnail.width}
          height={thumbnail.height}
        />
      )}
      <ReactMarkdown
        className="rmd"
        remarkPlugins={[remarkGfm]}
        components={{ code: CodeBlock }}
      >
        {content}
      </ReactMarkdown>
    </main>
  );
}

export default Content;
