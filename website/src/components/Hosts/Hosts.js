import React from 'react';
import styles from './Hosts.module.css';

const hosts = [
  {
    name: 'Michał Skowron',
    imageUrl: '/img/michal.png',
  },
  {
    name: 'Paweł Kowaluk',
    imageUrl: '/img/pawel.png',
  },
];

function HostAvatar({ name, description, imageUrl }) {
  return (
    <div className={styles.hostAvatar}>
      <img src={imageUrl} className={styles.hostImage} />
      <div className={styles.hostName}>{name}</div>
    </div>
  );
}

export default function Hosts() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Prowadzący</h2>
      <div className={styles.body}>
        <div>
          {hosts && hosts.length > 0 && (
            <div className={styles.hostAvatars}>
              {hosts.map((props, idx) => (
                <HostAvatar key={idx} {...props} />
              ))}
            </div>
          )}
        </div>
        <div className={styles.aboutUs}>
          <p>
            Od kilku lat zajmujemy się zawodowo dokumentacją do oprogramowania.
            Właściwie od samego początku, techniczna strona tworzenia
            dokumentacji była dla nas najbardziej interesująca. Dlatego
            uwielbiamy pisać skrypty, konfigurować narzędzia i automatyzować.
            Szukamy rozwiązań, które pozwolą Tech Writerom skupić się na tym co
            ważne.
          </p>
          <p>
            Na co dzień zastanawiamy się jak świat dokumentacji może czerpać
            korzyści z technologii, których używa się w świecie IT.
          </p>
        </div>
      </div>
    </div>
  );
}
