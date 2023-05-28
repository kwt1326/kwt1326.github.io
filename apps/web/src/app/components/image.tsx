'use client'

import NextImage from "next/image";

export default function Image(props) {
  let _props = { ...props }

  if (typeof props.src === "string") {
    _props.src =
    process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_STRAPI_REST_API_IMAGE_HOST_DEV + props.src
        : process.env.NEXT_PUBLIC_STRAPI_REST_API_IMAGE_HOST + props.src;
  }

  return (
    <NextImage
      alt=""
      loader={({ src }) => src}
      unoptimized={true}
      {..._props}
    />
  );
}