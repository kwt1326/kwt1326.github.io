'use client'

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Image from "@/app/components/image";
import CodeBlock from "./CodeBlock";

import defaultSrc from "public/develop.jpeg";

import './markdown.css';

interface ContentProps {
  content: string;
  thumbnail?: any;
}

const Content = ({ content, thumbnail }: ContentProps) => {
  const imageSrc = thumbnail?.url ?? defaultSrc

  return (
    <main className={`mt-8 mb-8`}>
      <Image
        className="m-auto"
        src={imageSrc}
        alt={"thumbnail"}
        width={thumbnail?.width ?? 1024}
        height={thumbnail?.height ?? 0}
      />
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
