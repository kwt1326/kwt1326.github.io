'use client'

import NextImage from "next/image";

export default function Image(props) {
  return (
    <NextImage
      alt=""
      {...props}
      loader={({ src }) => src}
    />
  );
}