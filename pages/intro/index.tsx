import React from 'react';
import styles from './intro.module.scss';

const Intro = (props: any) => {
  const renderContentList = () => {
    const data = props.data;
    console.log(data)
    return (
      <>TEST</>
    )
  }

  return (
    <div className={styles.intro_container}>
      {renderContentList()}
    </div>
    )
}

export default Intro;