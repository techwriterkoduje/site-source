import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

function Python() {
  return (
    <Layout
      title="Tech writer koduje w Pythonie"
      description="POradnik szybkiego startu, nauka Pythona dla technical writerów"
    >
      <div className={styles.pythonCoverImageWrapper}>
        <div className={styles.pythonCoverImageWithButton}>
          <img
            src="/img/tech_writer_koduje_w_pythonie.png"
            alt="tech writer koduje w pythonie, przewodnik szybkiego startu. autor: Michał Skowron."
          />
          <a href="/docs/">
            <div className={styles.pythonCoverButton}>
              <div className={styles.pythonCoverButtonInner}>
                <div className={styles.pythonButtonLabelWrapper}>
                  na_początek_trochę_teorii →
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default Python;
