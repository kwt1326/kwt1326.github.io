import React from 'react';
import { motion } from 'framer-motion';

import styles from './ArticleList.module.scss';
import Viewer from '../../Viewer';

type SubTypes = {
  listItem: {
    content: string;
    category: string;
    title: string;
  };
}

type ComponentProps = {
  title: string;
  listItems: SubTypes['listItem'][];
}

const ArticleList = (props: ComponentProps) => {
  return (
    <section className={styles.container}>
      <motion.article
        className={styles.title}
        animate={{ rotateZ: [50, 30, -10, 0] }}
        transition={{ duration: 1 }}
      >
        <p>{props.title}</p>
      </motion.article>
      {
        props.listItems?.map((item: SubTypes['listItem'], i: number) => (
          <motion.div
            key={i}
            className={styles.list_item_container_action}
            whileHover={{ scale: 1.05, rotateZ: -2 }}
          >
            <motion.div
              className={styles.list_item_container}
              initial={{
                opacity: 0,
                marginTop: 80,
              }}
              animate={{
                opacity: 1,
                marginTop: 0,
              }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: i * 0.35
              }}
            >
              <motion.article
                animate={{
                  rotateZ: [-40, -20, 10, 0],
                  scale: [0, 1.5, 0.9, 1]
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.35
                }}
              >{`${item.category} /`}</motion.article>
              <motion.article
                animate={{
                  marginLeft: [70, -10, 10, 0]
                }}
                transition={{
                  duration: 1,
                  delay: i * 0.35
                }}
              >{item.title}</motion.article>
              {/* <Viewer initialValue={item.content} /> */}
            </motion.div>
          </motion.div>
        ))
      }
    </section>
  )
}

export default ArticleList
