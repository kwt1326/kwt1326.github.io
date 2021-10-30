import React from 'react';
import styles from './Paging.module.scss';

const PagingComponent = (props: {
  totalPage: number,
  curPage: number,
  onClick(i: number): void
}) => {
  const { totalPage, curPage, onClick } = props;
  const currentPage = curPage > totalPage ? totalPage : curPage;
  const currentStandardLow = (currentPage % 10 === 0) ? (currentPage - 10) : (currentPage - (currentPage % 10));
  const currentStandardMax = currentStandardLow + 10 > totalPage ? totalPage : currentStandardLow + 10;
  const count = currentStandardMax - currentStandardLow;

  return (
    <section className={styles.container}>
      {
        [...new Array(count)].map((_unuse, i) => (
          <div key={i} className={styles.page_num} onClick={() => onClick(i + 1)}>
            <article style={{ color: (props.curPage - 1) === i ? '#ffd000' : '#aaa' }}>{i + 1}</article>
          </div>
        ))
      }
    </section>
  )
}

export default PagingComponent;