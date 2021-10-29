import { withRouter } from 'next/router';
import React from 'react';
import icon from './svgComponent';

import styles from './Profile.module.scss';

const Profile = (props: any) => {
  if (['/blog/editor'].includes(props.router.pathname) === false) {
    return (
      <div className={styles.container}>
        <div className={styles.profile_img_wrap}>
          <div className={styles.profile_img_circle}>
            <img src="/images/me_profile.jpeg" alt="img_me" />
          </div>
        </div>
        <div className={styles.profile_infos}>
          <article key="name" className={styles.name}>
            {'Kim Wontae'}
          </article>
          <article key="introduction" className={styles.introduction}>
            {'이것저것 관심이 많은 웹 개발자 입니다.'}
          </article>
          <div className={styles.icons}>
            <article key="icon-github"><icon.GithubIcon /></article>
            <article key="icon-email"><icon.EmailIcon /></article>
          </div>
        </div>
      </div>
    )
  }
  return null;
}

export default withRouter(Profile);