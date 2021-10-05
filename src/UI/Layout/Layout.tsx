import React from 'react';

import styles from './Layout.module.css';

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return <section className={styles.layout}>{props.children}</section>;
};

export default Layout;
