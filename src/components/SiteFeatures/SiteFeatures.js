import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './SiteFeatures.module.css';

function Feature({ imageUrl, title, description, actionLink, external }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={styles.feature}>
      {imgUrl && (
        <img className={styles.featureImage} src={imgUrl} alt={title} />
      )}
      <div className={styles.featureBody}>
        <h3>{title}</h3>
        <div>{description}</div>
        <div className={styles.actionBar}>
          <Link className="brandButton" to={actionLink.to}>
            {actionLink.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SiteFeatures({ features }) {
  return (
    <div>
      {features && features.length > 0 && (
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
