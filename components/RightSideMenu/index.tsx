import { withRouter } from "next/router";
import React from "react";
import styles from './RightSideMenu.module.scss';

const RightSideMenu = (props: any) => {
  if (['/blog/editor'].includes(props.router.pathname) === false) {
    return (
      <section className={styles.container}>

      </section>
    )
  }
  return null;
}

export default withRouter(RightSideMenu);