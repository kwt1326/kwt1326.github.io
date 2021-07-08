import React from 'react';
import { withRouter } from 'next/router';
import headerIgnore from '../../constants/headerIgnore';
import styles from './Header.module.scss';

const Header = (props: any) => {
  if (headerIgnore.find(path => path === props.router.pathname) === undefined) {
    return (
      <header className={styles.container}>
        <div className={styles.title}>동태 's blog</div>
        <div className={styles.right_menu}>
          <img src={'/images/menu.svg'} alt={'menu_toggle'} />
        </div>
      </header>
    )
  }
  return null;
}

export default withRouter(Header);