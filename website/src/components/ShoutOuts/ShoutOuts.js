import React from 'react';
import Link from '@docusaurus/Link';
import styles from './ShoutOuts.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import SwitkowskiLogo from './img/switkowski.svg';

function ShoutOut({ imageUrl, link, label, logo }) {
  return (
    <Link href={link} className={styles.shoutOutLink}>
      {imageUrl && <img alt={label} src={imageUrl} />}
      {logo}
    </Link>
  );
}

export default function ShoutOuts() {
  const shoutOuts = [
    {
      imageUrl: useBaseUrl('img/techwriter-logo-thumb.png'),
      link: 'http://techwriter.pl/',
      label: 'techwriter.pl',
    },
    {
      logo: <SwitkowskiLogo />,
      link: 'https://switowski.com/',
      label: 'Sebastian Witkowski',
    },
  ];

  return (
    <div className={styles.wrapper}>
      {shoutOuts && shoutOuts.length > 0 && (
        <div>
          <h2 className={styles.shoutOutTitle}>Szanujemy i wspieramy</h2>
          <div className={styles.shoutOutBadges}>
            {shoutOuts.map((props, idx) => (
              <ShoutOut key={idx} {...props} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
