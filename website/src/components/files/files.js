import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './files.module.css';
import Icon from '../icon';
import Draggable from 'react-draggable';

export default function Files({ files }) {
  const [visibleFile, setVisibleFile] = useState(undefined);

  function Window({ title, description, actionLink, thumb }) {
    return (
      <Draggable>
        <div className={styles.window}>
          <div className={styles.windowHeader}>
            <div className={styles.titleWithIcon}>
              <Icon name={thumb} className={styles.headerIcon} />
              <div className={styles.windowTitle}>{title}</div>
            </div>
            <button
              className={styles.close}
              aria-label="close"
              onClick={() => setVisibleFile(undefined)}
            >
              <div>x</div>
            </button>
          </div>
          <div className={styles.windowMain}>
            <h2>{title}</h2>
            <div className={styles.windowDescription}>{description}</div>
            {actionLink && (
              <Link to={actionLink.to} className={styles.actionLink}>
                {actionLink.label}
              </Link>
            )}
          </div>
        </div>
      </Draggable>
    );
  }

  function File(props) {
    const { title, thumb } = props;
    const isActive = title === visibleFile?.title;
    return (
      <div
        className={clsx(styles.file, isActive && styles.activeFile)}
        role="button"
        onClick={() => {
          setVisibleFile(props);
        }}
      >
        <Icon name={thumb} className={styles.thumb} />
        <div className={styles.fileName}>
          {title.substr(0, 11)}
          {title.length > 12 && '...'}
        </div>
      </div>
    );
  }

  return (
    <div>
      {visibleFile && <Window {...visibleFile} />}
      {files && files.length > 0 && (
        <section className={styles.files}>
          {files.map((file) => (
            <File key={file.title} {...file} />
          ))}
        </section>
      )}
    </div>
  );
}
