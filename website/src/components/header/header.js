import React from 'react';
import styles from './styles.module.css';

export default function Header({ children }) {
  return (
    <header className={styles.heroBanner}>
      <div className="container">{children}</div>
    </header>
  );
}
