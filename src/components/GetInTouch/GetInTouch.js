import React from 'react';
import Link from '@docusaurus/Link';
import styles from './GetInTouch.module.css';
import Icon from './mail_white_36dp.svg';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function GetInTouch() {
  const { siteConfig } = useDocusaurusContext();
  const { email } = siteConfig.customFields;

  return (
    <div className={styles.wrapper}>
      <div>Masz pomysł na odcinek? Chcesz być gościem?</div>
      <Link to={`mailto:${email}`} className={styles.button}>
        <Icon />
        Napisz do nas
      </Link>
    </div>
  );
}
