import Layout from '@theme/Layout';
import React from 'react';
import Game from '../../components/game';
import styles from './focusgrid.module.css';

export default function FocusGrid() {
  return (
    <Layout
      title="Focus Grid"
      description="Aplikacja do ćwiczenia koncentracji"
    >
      <div className={styles.gameWrapper}>
        <Game />
      </div>
    </Layout>
  );
}
