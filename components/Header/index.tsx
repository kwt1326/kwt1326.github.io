import React from 'react';
import { NextRouter, withRouter } from 'next/router';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import MenuIcon from '../MenuIcon';

import { menuOnOff } from '../../store/actions';
import headerIgnore from '../../constants/headerIgnore';

import styles from './Header.module.scss';

interface PropsType {
  router: NextRouter;
  // store
  menuOnOff: Function;
  isOpen: boolean;
}

const Header = (props: PropsType) => {
  if (headerIgnore.includes(props.router.pathname) === false) {
    const createPostBtn = () => {
      if (process.env.NODE_ENV === 'development') {
        return (
          <button
            className={styles.editor_button}
            onClick={() => props.router.push('/blog/editor')}
          >작성하기</button>
        )
      }
      return null;
    }

    return (
      <header className={styles.container}>
        <div className={styles.title} onClick={() => props.router.push('/')}>{"/\Wonta3_code/"}</div>
        <div className={styles.right_menu}>
          {createPostBtn()}
          <MenuIcon onClick={() => props.menuOnOff(!props.isOpen)} />
        </div>
      </header>
    )
  }
  return null;
}

const mapStateToProps = (state: { menu: { isOpen: boolean; }; }) => ({
  isOpen: state.menu.isOpen,
});

const mapDispatchToProps = (dispatch: (params: { type: string; isOpen?: boolean; }) => any) => ({
  menuOnOff: (isOpen: boolean) => dispatch(menuOnOff(isOpen)),
});  

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));