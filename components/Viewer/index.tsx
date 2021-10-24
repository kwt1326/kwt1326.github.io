import React from "react";
import { ViewerProps } from "@toast-ui/react-editor";
import dynamic from "next/dynamic";
import styles from "./Viewer.module.scss";

// @ts-ignore
const Viewer = dynamic<ViewerProps>(() => import("@toast-ui/react-editor").then(m => m.Viewer), { ssr: false });

const ViewerWrapper = (props: any) => (
  <section className={styles.viewer_container}>
    <Viewer {...props} />
  </section>
); 

export default ViewerWrapper;