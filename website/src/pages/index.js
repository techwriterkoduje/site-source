import React from 'react';
import cx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import Features from '../components/features';

const subscribeLinks = [
  {
    to: 'https://anchor.fm/docdeveloper/',
    label: 'Anchor.fm',
  },
  {
    to: 'https://open.spotify.com/show/2jhQ1Z1nAOY686RVok7O9I',
    label: 'Spotify',
  },
  {
    to: 'https://player.fm/series/tech-writer-koduje',
    label: 'Player.fm',
  },
  {
    to: 'https://anchor.fm/s/8afba9c/podcast/rss',
    label: 'RSS',
  },
];

const features = [
  {
    title: <>.posłuchaj()</>,
    imageUrl: 'img/listen.png',
    description: (
      <>
        <p>
          Podcast o technicznej stronie tworzenia dokumentacji w IT. Skupiamy
          się na tym jak Tech Writer może wpasować się w środowisko programistów
          pod kątem sposobu pracy i narzędzi. Staramy się też pokazać, że praca
          Tech Writera może bardzo rozwijać umiejętności techniczne.
        </p>
        <h4 className={styles.platformLinksTitle}>Platformy</h4>
        {subscribeLinks && subscribeLinks.length > 0 && (
          <div className={styles.buttons}>
            {subscribeLinks.map((props, idx) => (
              <SubscribeButton key={idx} {...props} />
            ))}
          </div>
        )}
      </>
    ),
    actionLink: {
      to: '/blog/',
      label: 'Lista odcinków',
    },
  },
  {
    title: <>.poczytaj()</>,
    imageUrl: 'img/read.png',
    description: (
      <>
        Jak Ty, jako Tech Writer, możesz ułatwić sobie pracę na co dzień? Jak
        możesz zacząć kodować w Pythonie? Jak zarządzać projektami
        dokumentacyjnymi? Przygotowaliśmy dla Ciebie kilka poradników i
        artykułów do poczytania.
      </>
    ),
    actionLink: {
      to: '/read/',
      label: 'Poczytaj porady',
    },
  },
  {
    title: <>.pooglądaj()</>,
    imageUrl: 'img/watch.png',
    description: (
      <>
        Wystąpienia, webinary, screencasty i filmiki, które uważamy za
        wartościową pomoc dla Tech Writerów. Jeżeli najlepiej uczysz się
        wizualnie, to ta sekcja jest dla Ciebie.
      </>
    ),
    actionLink: {
      to: '/watch/',
      label: 'Pooglądaj filmiki',
    },
  },
];

function SubscribeButton({ to, label }) {
  return (
    <Link className="brandButton" href={to}>
      {label}
    </Link>
  );
}

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

const shoutOuts = [
  {
    imageUrl: '/img/techwriter-logo-thumb.png',
    link: 'http://techwriter.pl/',
    label: 'techwriter.pl',
  },
  {
    imageUrl: '/img/not-boring-logo-thumb.png',
    link: 'https://www.thenotboringtechwriter.com/',
    label: 'The Not-Boring Tech Writer',
  },
  {
    imageUrl: '/img/switkowski.svg',
    link: 'https://switowski.com/',
    label: 'Sebastian Witkowski',
  },
];

function ShoutOut({ imageUrl, link, label }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img alt={label} src={imageUrl} />
    </a>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Witaj na stronie ${siteConfig.title}`}
      description="Polski podcast o technical writingu, technologiach i IT"
    >
      <main>
        <Features features={features} />
        <section className={styles.hosts}>
          <div className="container">
            <h2>Poznaj</h2>
            {hosts && hosts.length > 0 && (
              <div className={styles.hostAvatars}>
                {hosts.map((props, idx) => (
                  <HostAvatar key={idx} {...props} />
                ))}
              </div>
            )}
            <div className={styles.aboutUs}>
              <p>
                Od kilku lat zajmujemy się zawodowo dokumentacją do
                oprogramowania. Właściwie od samego początku, techniczna strona
                tworzenia dokumentacji była dla nas najbardziej interesująca.
                Dlatego uwielbiamy pisać skrypty, konfigurować narzędzia i
                automatyzować. Szukamy rozwiązań, które pozwolą Tech Writerom
                skupić się na tym co ważne.
              </p>
              <p>
                Na co dzień zastanawiamy się jak świat dokumentacji może czerpać
                korzyści z technologii, których używa się w świecie IT.
              </p>
            </div>
          </div>
        </section>
        {shoutOuts && shoutOuts.length > 0 && (
          <section className={styles.shoutOuts}>
            <h2>Szanujemy i wspieramy</h2>
            <div className={cx('container', styles.shoutOutBadges)}>
              {shoutOuts.map((props, idx) => (
                <ShoutOut key={idx} {...props} />
              ))}
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
