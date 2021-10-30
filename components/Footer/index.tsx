import React from 'react';
import { withRouter } from 'next/router';
import footerIgnore from '../../constants/footerIgnore';
import styles from './Footer.module.scss';

const Footer = (props: any) => {
  if (footerIgnore.find(path => path === props.router.pathname) === undefined) {
    return (
      <footer className={styles.container}>
        <article>made by wontae Kim 2021 // Aiming for full-stack Developer.</article>
      </footer>
    )
  }
  return null;
}

export default withRouter(Footer);