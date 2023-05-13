import ReactMarkdown from "react-markdown";

interface ContentProps {
  content: string;
}

const Content = ({ content }: ContentProps) => {
  return (
    <main className="mt-8 mb-8">
      <ReactMarkdown children={content} />
    </main>
  );
}

export default Content;
