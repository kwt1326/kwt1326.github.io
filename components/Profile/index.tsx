import { withRouter } from 'next/router';
import React from 'react';
import sideIgnore from '../../constants/sideIgnore';
import icon from './svgComponent';

import styles from './Profile.module.scss';

const Profile = (props: any) => {
  if (sideIgnore.includes(props.router.pathname) === false) {
    return (
      <div className={styles.container}>
        <div className={styles.profile_img_wrap}>
          <div className={styles.profile_img_circle}>
            <img src="/images/me_profile.jpeg" alt="img_me" />
          </div>
        </div>
        <div className={styles.profile_infos}>
          <article key="name" className={styles.name}>
            {'Kim Wontae / Web Developer'}
          </article>
          <article key="introduction" className={styles.introduction}>
            {'3D / 게임개발 기술에 흥미 돋고 웹 기술 이것저것 관심 많은 개발자'}
          </article>
          <div className={styles.icons}>
            <article key="icon-github"><icon.GithubIcon /></article>
            <article key="icon-email"><icon.EmailIcon /></article>
            <article
              key="icon-about"
              onClick={() => props.router.push('/about_me')}
              style={{
                cursor: 'pointer',
                color: '#aaa',
                borderBottom: '2px solid #aaa',
              }}
            >About me</article>
          </div>
        </div>
      </div>
    )
  }
  return null;
}

export default withRouter(Profile);