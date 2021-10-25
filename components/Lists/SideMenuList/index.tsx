import { motion } from 'framer-motion';
import React from 'react';
import { connect } from 'react-redux';

import styles from './SideMenuList.module.scss';

const SideMenuList = (props: any) => {
  if (props.isOpen) {
    return (
      <section className={styles.container}>
        <motion.section
          className={styles.cover}
          initial={{ opacity: 0, }}
          animate={{
            opacity: [null, 0.6],
            transition: { duration: 0.5 }
          }}
        />
        <motion.div
          className={styles.menu_dom}
          style={{ opacity: 1 }}
          initial={{ opacity: 0, right: -400 }}
          animate={{
            opacity: [null, 1],
            right: 0,
            transition: { duration: 0.5 }
          }}
        >
          <motion.div className={styles.menu_content}>
            {
              props?.itemLists?.map((item: any) => (
                <motion.article>
                  {item.title}
                </motion.article>
              ))
            }
          </motion.div>
        </motion.div>
      </section>
    );
  }
  return null;
}

const mapStateToProps = (state: { menu: { isOpen: boolean; }; }) => ({
  isOpen: state.menu.isOpen,
});

export default connect(mapStateToProps)(SideMenuList);