import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import splash from './img/tech_writer_koduje_w_pythonie.png';

export default function Python() {
  return (
    <Layout
      title="Tech writer koduje w Pythonie"
      description="POradnik szybkiego startu, nauka Pythona dla technical writerów"
    >
      <div className={styles.pythonCoverImageWrapper}>
        <div className={styles.pythonCoverImageWithButton}>
          <img
            src={splash}
            alt="tech writer koduje w pythonie, przewodnik szybkiego startu. autor: Michał Skowron."
          />
          <a href={useBaseUrl('docs/teoria')}>
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
