import React from 'react';
import styles from './Header.module.scss';

const Header = (props: any) => {
  return (
    <header className={styles.container}>
      <div className={styles.title}>동태 's blog</div>
      <div className={styles.right_menu}>
        <img src={'/images/menu.svg'} alt={'menu_toggle'} />
      </div>
    </header>
  )
}

export default Header;