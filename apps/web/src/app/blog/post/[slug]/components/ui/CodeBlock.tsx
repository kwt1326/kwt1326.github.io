/* eslint-disable react/no-children-prop */
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
      PreTag="div"
      style={vscDarkPlus}
      language={match[1]}
      children={String(children).replace(/\n$/, "")}
    />
  ) : (
    <code {...props} className="rmd-default">
      {children}
    </code>
  );
};

export default CodeBlock;