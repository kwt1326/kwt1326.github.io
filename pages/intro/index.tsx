import React from 'react';
import ArticleList from '../../components/Lists/ArticleList';

import styles from './intro.module.scss';

const Intro = (props: any) => {
  return (
    <div className={styles.intro_container}>
      <ArticleList
        title={'Recently Post'}
        listItems={props.data}
      />
    </div>
    )
}

export default Intro;