import React, { Fragment, useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './test.module.scss';
import MenuIcon from '../../components/MenuIcon';

export default function Test(props: any) {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0,1,0]);

  const rerun = () => {

  }

  useEffect(() => {

  }, [])

  return (
    <div className={styles.container}>
      {/* <motion.div
        initial={false}
        style={{ x, opacity, width: 300, height: 300 }}
        // drag="x"
        // dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.9, rotate: 30 }}
        animate={{ scale: 0.5 }}
      >
        <div style={{ width: 300, height: 300, padding: 50, backgroundColor: 'magenta' }} />
      </motion.div> */}
      <MenuIcon onClick={() => console.log('testmenu')} />
    </div>
  )
}