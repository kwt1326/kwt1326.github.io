import React from 'react';
import GithubIcon from './github';

import styles from './Profile.module.scss';

const Profile = (props: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.profile_img_wrap}>
        <div className={styles.profile_img_circle}>
          <img src="/images/me_profile.jpeg" alt="img_me" />
        </div>
      </div>
      <div className={styles.profile_infos}>
        <article key="name">Kim Wontae</article>
        <article key="introduction">
          {'이것저것 관심이 많은 웹 개발자 입니다.'}
        </article>
        <article key="icon-github"><GithubIcon /></article>
      </div>
    </div>
  )
}

export default Profile;