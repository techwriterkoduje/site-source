import React from 'react';
import styles from './desktop.module.css';
import Files from '../files/files';

export default function Desktop({ files, title, subtitle, children }) {
  return (
    <div className={styles.desktop}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        {children}
      </div>
      <Files files={files} />
    </div>
  );
}
