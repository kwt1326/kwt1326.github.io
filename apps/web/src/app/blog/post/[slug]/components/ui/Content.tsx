'use client'

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";
import './markdown.css';

interface ContentProps {
  content: string;
}

const Content = ({ content }: ContentProps) => {
  return (
    <main className="mt-8 mb-8">
      <ReactMarkdown
        className="rmd"
        children={content}
        remarkPlugins={[remarkGfm]}
        components={{ code: CodeBlock }}
      />
    </main>
  );
}

export default Content;
