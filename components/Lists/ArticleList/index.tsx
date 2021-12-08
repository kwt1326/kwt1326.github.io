import React, { LegacyRef } from 'react';
import { motion } from 'framer-motion';
import { withRouter, NextRouter } from 'next/router';
import Link from 'next/link';

import styles from './ArticleList.module.scss';
import Viewer from '../../Viewer';

type SubTypes = {
  listItem: {
    category: string;
    title: string;
    file_name: string;
  };
}

type ComponentProps = {
  router: NextRouter;
  title: string;
  listItems: SubTypes['listItem'][];
}

const ArticleList = (props: ComponentProps) => {

  const LinkChildren = React.forwardRef(({ href, item, index }: {
    href?: string;
    item: any;
    index: number;
  }, ref: LegacyRef<HTMLAnchorElement>) => {
    return (
      <motion.div
        key={index}
        className={styles.list_item_container_action}
        onClick={() => {
          if (href) document.location.href = href
        }}
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
            delay: index * 0.35
          }}
        >
          <motion.article>{`${item.category} /`}</motion.article>
          <motion.article
            animate={{
              marginLeft: [70, -10, 10, 0]
            }}
            transition={{
              duration: 1,
              delay: index * 0.35
            }}
          >
            {item.title}
          </motion.article>
          {/* <Viewer initialValue={item.content} /> */}
        </motion.div>
      </motion.div>
    )
  })

  return (
    <section className={styles.container}>
      <motion.article className={styles.title}>
        <p>{props.title}</p>
      </motion.article>
      {
        props.listItems?.map((item: SubTypes['listItem'], i: number) => (
          <Link
            key={i}
            href={{
              pathname: '/blog/post/[category]/[fileName]',
              query: { category: item.category, fileName: item.file_name }
            }}
            passHref
          >
            <LinkChildren item={item} index={i} />
          </Link>
        ))
      }
    </section>
  )
}

export default withRouter(ArticleList)
