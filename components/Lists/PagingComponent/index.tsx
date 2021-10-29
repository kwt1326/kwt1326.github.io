import React from 'react';
import styles from './Paging.module.scss';

const PagingComponent = (props: {
  totalPage: number,
  curPage: number,
  onClick(i: number): void
}) => {
  return (
    <section className={styles.container}>
      {
        [...new Array(props?.totalPage)].map((_unuse, i) => (
          <div key={i} className={styles.page_num} onClick={() => props.onClick(i + 1)}>
            <>{console.log(props)}</>
            <article style={{ color: (props.curPage - 1) === i ? '#ffd000' : '#aaa' }}>{i + 1}</article>
          </div>
        ))
      }
    </section>
  )
}

export default PagingComponent;