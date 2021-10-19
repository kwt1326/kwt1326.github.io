import React from 'react';
import { withRouter } from 'next/router';
import headerIgnore from '../../constants/headerIgnore';
import styles from './Footer.module.scss';

const Footer = (props: any) => {
  if (headerIgnore.find(path => path === props.router.pathname) === undefined) {
    return (
      <footer className={styles.container}>
        <article>made by wontae Kim 2021 * Aiming for full-stack Developer.</article>
      </footer>
    )
  }
  return null;
}

export default withRouter(Footer);