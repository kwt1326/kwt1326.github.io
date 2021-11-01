import React from 'react';
import ArticleList from '../../components/Lists/ArticleList';

import styles from './intro.module.scss';

const Intro = (props: any) => {
  return (
    <div className={styles.intro_container}>
      <ArticleList
        title={'최근 작성된 포스트'}
        listItems={props.data}
      />
    </div>
    )
}

export default Intro;