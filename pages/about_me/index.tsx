import { readFileSync } from 'fs';
import { GetStaticProps } from 'next';
import { withRouter } from 'next/router';
import path from 'path';
import React from 'react';
import Viewer from '../../components/Viewer';

import styles from './Aboutme.module.scss';

const AboutMe = (props: any) => {
  return (
    <section className={styles.container}>
      <Viewer initialValue={props?.content || ''} noContainerStyle={true} />
    </section>
  )
}

export const getStaticProps: GetStaticProps = async (_ctx) => {
  try {
    const filepath = path.join(process.cwd(), '/constants/aboutMe.md');
    const content = readFileSync(filepath, { encoding: 'utf8' });
    return { props: { content } }
  } catch (error) {
    console.error(error);
  }

  return { props: {} }
}

export default withRouter(AboutMe);