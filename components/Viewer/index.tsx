import React from "react";
import { ViewerProps } from "@toast-ui/react-editor";
import dynamic from "next/dynamic";

const Viewer = dynamic<ViewerProps>(() => import("@toast-ui/react-editor").then(m => m.Viewer), { ssr: false });

const ViewerWrapper = (props: any) => (
  <Viewer {...props} />
); 

export default ViewerWrapper;