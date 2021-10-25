import React from 'react';
import styles from './ContentWrapper.module.scss';

interface ContentWrapperTypes {
  children: any;
  contentStyle?: any;
}

const ContentWrapper: React.FC<ContentWrapperTypes> = (props) => {
  return (
    <div className={styles.container}>
      <section className={styles.content_wrap} style={props?.contentStyle || {}}>
        {props.children}
      </section>
    </div>
  )
}

export default ContentWrapper;