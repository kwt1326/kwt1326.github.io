import { Fragment } from "react";
import { Post } from "@/repository/post/types";

import Title from "./ui/Title";
import Content from "./ui/Content";
import AuthorTop from "./ui/AuthorTop";
import AuthorBottom from "./ui/AuthorBottom";
import UtterancComponent from "./Utteranc";
import Categories from "@/app/blog/components/ui/Categories";

const PostDefaultComponent = ({ attributes }: Post) => {
  const authorData = attributes?.author?.data;
  const categories = attributes?.categories?.data;
  const title = attributes.title;
  const content = attributes.content;
  const thumbnail = attributes.thumbnail?.data?.attributes?.formats?.large;

  if (!authorData) return null;

  return (
    <Fragment>
      <Title title={title} />
      <Categories categories={categories}/>
      <AuthorTop {...authorData}/>
      <Content content={content} thumbnail={thumbnail} />
      <AuthorBottom {...authorData}/>
      <UtterancComponent />
    </Fragment>
  );
}

export default PostDefaultComponent;
