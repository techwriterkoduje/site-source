import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import cx from "clsx";
import styles from "./styles.module.css";

function Feature({ imageUrl, title, description, actionLink, external }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={styles.feature}>
      <div className="container">
        <div className="row">
          {imgUrl && (
            <div className="text--center col col--4">
              <img className={styles.featureImage} src={imgUrl} alt={title} />
            </div>
          )}
          <div className="col">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.actionBar}>
              {external ? (
                <a
                  className={cx(
                    styles.actionButton,
                    styles.external,
                    "pixelButton"
                  )}
                  href={actionLink.to}
                  rel="noopener noreferrer"
                >
                  {actionLink.label}
                </a>
              ) : (
                <Link
                  className={cx(styles.actionButton, "pixelButton")}
                  to={actionLink.to}
                >
                  {actionLink.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Features({ features }) {
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
