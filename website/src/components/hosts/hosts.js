import React from 'react';
import styles from './hosts.module.css';

const hosts = [
  {
    name: 'Michał Skowron',
    description: 'Fajny gość, preferuje Pythona',
    imageUrl: '/img/michal.png',
  },
  {
    name: 'Paweł Kowaluk',
    description: 'Old school, ale zna się na dicie',
    imageUrl: '/img/pawel.png',
  },
];

function HostAvatar({ name, description, imageUrl }) {
  return (
    <div className={styles.hostAvatar}>
      <img src={imageUrl} className={styles.hostImage} />
      <div className={styles.hostName}>{name}</div>
      <div className={styles.hostDescription}>{description}</div>
    </div>
  );
}

export default function Hosts() {
  return (
    <div className={styles.hostAvatars}>
      {hosts.map((props) => (
        <HostAvatar key={props.name} {...props} />
      ))}
    </div>
  );
}
