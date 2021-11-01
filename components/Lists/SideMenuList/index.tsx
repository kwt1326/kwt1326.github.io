import { motion } from 'framer-motion';
import { NextRouter, withRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { menuOnOff } from '../../../store/actions';

import styles from './SideMenuList.module.scss';

const SideMenuList = (props: {
  router: NextRouter;
  menuOnOff: Function;
  isOpen: boolean;
  list: any[];
}) => {
  const [toggle, setToggle] = useState<{ [x: string]: boolean; }>({});

  const updateState = (key: string, value: boolean) => setToggle({ ...toggle, [key]: value });

  useEffect(() => {}, [toggle])

  // @ts-ignore
  const renderItems = (item: any, key?: string, isLastItem?: boolean) => {
    if (Array.isArray(item)) {
      return item.map((item, i) => <div key={i}>{renderItems(item, key, isLastItem)}</div>)
    }
    if (typeof item === 'object' && isLastItem) {
      return (
        <article
          key={item?.title}
          className={styles.menu_item}
          style={{ marginLeft: 15 }}
          onClick={() => {
            props.menuOnOff(false);
            props.router.push(`/blog/post/${key}/${item?.fileName}`)
          }}
        >
          <article
            style={{
              fontSize: 18,
              paddingBottom: 5,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              // @ts-ignore
              e.target.style.borderBottom = '2px solid #aaa';
            }}
            onMouseLeave={(e) => {
              // @ts-ignore
              e.target.style.borderBottom = '2px solid transparent';
            }}
          >
            {item?.title}
          </article>
        </article>
      )
    } else if (typeof item === 'object' && !isLastItem) {
      const _key = Object.keys(item)[0];
      return (
        <div key={_key}>
          <article
            className={styles.menu_item}
            onClick={() => updateState(_key, !toggle[_key])}
          >
            <article
              onMouseEnter={(e) => {
                if (!toggle[_key]) {
                  // @ts-ignore
                  e.target.style.borderBottom = '2px solid #aaa';
                }
              }}
              onMouseLeave={(e) => {
                if (!toggle[_key]) {
                  // @ts-ignore
                  e.target.style.borderBottom = '2px solid transparent';
                }
              }}
              style={{
                cursor: 'pointer',
                fontSize: 18,
                paddingBottom: 5,
                borderBottom: toggle[_key] ? '2px solid #aaa' : 'none'
              }}
            >
              {_key}
            </article>
            <article
              style={{ marginLeft: 10, cursor: 'pointer'}}
              onClick={() => {
                props.menuOnOff(false);
                props.router.push(`/blog/post/${_key}`);
              }}
            >
              {'>'}
            </article>
          </article>
          <div style={{ display: toggle[_key] ? 'block' : 'none' }}>
            {renderItems(item[_key], _key, true)}
          </div>
        </div>
      )
    }
  }

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
          onClick={() => props.menuOnOff(false)}
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
            {renderItems(props.list)}
          </motion.div>
        </motion.div>
      </section>
    );
  }
  return null;
}

const mapStateToProps = (state: { menu: { isOpen: boolean; list: any[]; }; }) => ({
  isOpen: state.menu.isOpen,
  list: state.menu.list,
});

const mapDispatchToProps = (dispatch: (params: { type: string; isOpen?: boolean; }) => any) => ({
  menuOnOff: (isOpen: boolean) => dispatch(menuOnOff(isOpen)),
});  

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideMenuList));