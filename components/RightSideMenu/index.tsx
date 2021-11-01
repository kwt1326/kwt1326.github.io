import { withRouter } from "next/router";
import React from "react";
import sideIgnore from "../../constants/sideIgnore";
// import sideMenuItems from "../../constants/sideMenuItems";
import styles from './RightSideMenu.module.scss';

const RightSideMenu = (props: any) => {
  if (sideIgnore.includes(props.router.pathname) === false) {
    return (
      <section className={styles.container}>
        {/* {
          sideMenuItems?.map((item) => (
            <div className={styles.item}>
              {item}
            </div>
          ))
        } */}
      </section>
    )
  }
  return null;
}

export default withRouter(RightSideMenu);