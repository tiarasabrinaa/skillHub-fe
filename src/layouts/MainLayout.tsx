import React from 'react';
import Header from '../components/Header';
import styles from './MainLayout.module.css';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
