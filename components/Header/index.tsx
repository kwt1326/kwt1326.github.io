import React from 'react';
import { withRouter } from 'next/router';
import headerIgnore from '../../constants/headerIgnore';
import styles from './Header.module.scss';
import MenuIcon from '../MenuIcon';

const Header = (props: any) => {
  if (headerIgnore.find(path => path === props.router.pathname) === undefined) {
    return (
      <header className={styles.container}>
        <div
          className={styles.title}
          onClick={() => props.router.push('/')}
        >
          DONGTAE's DOG-FOOT
        </div>
        <div className={styles.right_menu}>
          <MenuIcon onClick={() => console.log('testmenu')} />
        </div>
      </header>
    )
  }
  return null;
}

export default withRouter(Header);