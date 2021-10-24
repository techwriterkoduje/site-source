import React from 'react';
import styles from './AnchorEmbed.module.css';

export default function AnchorEmbed({ episodeId }) {
  return (
    <iframe
      src={`https://anchor.fm/docdeveloper/embed/episodes/${episodeId}`}
      frameborder="0"
      scrolling="no"
      className={styles.iframe}
    ></iframe>
  );
}
