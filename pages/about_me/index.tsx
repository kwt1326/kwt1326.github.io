import { withRouter } from 'next/router';
import React from 'react';

import styles from './Aboutme.module.scss';

const AboutMe = () => {
  return (
    <section className={styles.container}>
      Aboutme
    </section>
  )
}

export default withRouter(AboutMe);