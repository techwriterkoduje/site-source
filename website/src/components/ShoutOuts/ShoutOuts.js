import React from 'react';
import Link from '@docusaurus/Link';
import cx from 'clsx';
import styles from './ShoutOuts.module.css';

import techWriterLogo from './img/techwriter-logo-thumb.png';
import SwitkowskiLogo from './img/switkowski.svg';
import notBoringLogo from './img/not-boring-logo-thumb.png';

const shoutOuts = [
  {
    imageUrl: techWriterLogo,
    link: 'http://techwriter.pl/',
    label: 'techwriter.pl',
  },
  {
    imageUrl: notBoringLogo,
    link: 'https://www.thenotboringtechwriter.com/',
    label: 'The Not-Boring Tech Writer',
  },
  {
    logo: <SwitkowskiLogo />,
    link: 'https://switowski.com/',
    label: 'Sebastian Witkowski',
  },
];

function ShoutOut({ imageUrl, link, label, logo }) {
  return (
    <Link href={link} className={styles.shoutOutLink}>
      {imageUrl && <img alt={label} src={imageUrl} />}
      {logo}
    </Link>
  );
}

export default function ShoutOuts() {
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
