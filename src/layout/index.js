import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './styles.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.app}>
      <CssBaseline />

      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.content}>
        <Container>{children}</Container>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
