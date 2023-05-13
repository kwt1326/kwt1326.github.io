import { Fragment } from "react";
import { Post } from "@/repository/post/types";

import Title from "./ui/Title";
import Content from "./ui/Content";
import Categories from "./ui/Categories";
import UtterancComponent from "./Utteranc";
import { AuthorComponent, AuthorBottomComponent } from "./ui/Author";

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
      <AuthorComponent {...authorData}/>
      <Content content={content} />
      <AuthorBottomComponent {...authorData}/>
      <UtterancComponent />
    </Fragment>
  );
}

export default PostDefaultComponent;
