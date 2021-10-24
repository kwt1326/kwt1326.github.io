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
  if (headerIgnore.find(path => path === props.router.pathname) === undefined) {
    return (
      <header className={styles.container}>
        <motion.div
          className={styles.title}
          onClick={() => props.router.push('/')}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.article
          >DONGTAE</motion.article>
          <motion.article
            style={{ width: 'fit-content' }}
            whileHover={{ rotateZ: [0, 90, 80, 90] }}
            >{"'s \n"}</motion.article> 
          <motion.article>DOG-FOOT</motion.article>
        </motion.div>
        <div className={styles.right_menu}>
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