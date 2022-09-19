import React from 'react';
import Link from '@docusaurus/Link';
import styles from './GetInTouch.module.css';
import Icon from './mail_white_36dp.svg';

export default function GetInTouch() {
  return (
    <div className={styles.wrapper}>
      <div>Masz pomysł na odcinek? Chcesz być gościem?</div>
      <Link to="mailto:kontakt@techwriterkoduje.pl" className={styles.button}>
        <Icon />
        Napisz do nas
      </Link>
    </div>
  );
}
