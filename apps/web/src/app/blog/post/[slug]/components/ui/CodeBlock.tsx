
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import './markdown.css';

const CodeBlock = ({
  node,
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      {...props}
      children={String(children).replace(/\n$/, "")}
      style={vscDarkPlus}
      language={match[1]}
      PreTag="div"
    />
  ) : (
    <code {...props} className="rmd-default">
      {children}
    </code>
  );
};

export default CodeBlock;