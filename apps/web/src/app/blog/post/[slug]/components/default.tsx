import { Fragment } from "react";
import { Post } from "@/repository/post/types";

import Title from "./ui/Title";
import Content from "./ui/Content";
import Categories from "@/app/blog/components/ui/Categories";
import UtterancComponent from "./Utteranc";
import Author from "./ui/Author";

const PostDefaultComponent = ({ attributes }: Post) => {
  const authorData = attributes?.author?.data;
  const categories = attributes?.categories?.data;
  const title = attributes.title;
  const content = attributes.content;

  if (!authorData) return null;

  return (
    <Fragment>
      <Title title={title} />
      <Categories categories={categories}/>
      <Author.Top {...authorData}/>
      <Content content={content} />
      <Author.Bottom {...authorData}/>
      <UtterancComponent />
    </Fragment>
  );
}

export default PostDefaultComponent;
