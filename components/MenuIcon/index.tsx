import React, { useRef, useState } from 'react';
import styles from './MenuIcon.module.scss';

type PropsTypes = {
  onClick: Function;
}

export default function Test(props: PropsTypes) {
  const [transformToX, setTransformToX] = useState(false);
  const span1 = useRef<HTMLSpanElement>(null);
  const span2 = useRef<HTMLSpanElement>(null);
  const span3 = useRef<HTMLSpanElement>(null);

  return (
    <div
      className={styles.menu_container}
      onMouseEnter={() => setTransformToX(true)}
      onMouseLeave={() => setTransformToX(false)}
      onClick={() => props.onClick()}
    >
      <span ref={span1} className={transformToX ? styles.span_1_x : styles.span_1_menu}></span>
      <span ref={span2} className={transformToX ? styles.span_2_x : styles.span_2_menu}></span>
      <span ref={span3} className={transformToX ? styles.span_3_x : styles.span_3_menu}></span>
    </div>
  )
}