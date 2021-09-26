import React from 'react';
import cx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Logo from './img/logo-commodore-64.svg';
import Desktop from '../components/desktop/desktop';
import Hosts from '../components/hosts';

function SubscribeButton({ to, label }) {
  return (
    <a
      className={styles.subscribeButton}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
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

const files = [
  {
    title: 'Posłuchaj',
    thumb: 'headphones',
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
    title: 'Poczytaj',
    thumb: 'book',
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
    title: 'Pooglądaj',
    thumb: 'tv',
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
  {
    title: 'Poznaj',
    thumb: 'person',
    description: (
      <>
        <Hosts />
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
      </>
    ),
  },
  {
    title: 'Szanujemy i wspieramy',
    thumb: 'heart',
    description: (
      <div className={cx('container', styles.shoutOutBadges)}>
        {shoutOuts.map((props, idx) => (
          <ShoutOut key={idx} {...props} />
        ))}
      </div>
    ),
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Polski podcast o technical writingu, technologiach i IT"
    >
      <Desktop files={files} title={<Logo />} subtitle={siteConfig.tagline} />
    </Layout>
  );
}

export default Home;
