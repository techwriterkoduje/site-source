import React from "react";
import cx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Cube from "../components/cube";

const features = [
  {
    title: <>Podcast</>,
    imageUrl: "img/podcast-thumb.png",
    description: (
      <>
        Podcast o technicznej stronie tworzenia dokumentacji w IT. Skupiamy się
        na tym jak Tech Writer może wpasować się w środowisko programistów pod
        kątem sposobu pracy i narzędzi. Staramy się też pokazać, że praca Tech
        Writera może bardzo rozwijać umiejętności techniczne.
      </>
    ),
    actionLink: {
      to: "/blog/",
      label: "Posłuchaj odcinków",
    },
  },
  {
    title: <>Naucz się pythona</>,
    imageUrl: "img/python-thumb.png",
    description: (
      <>
        Jako tech writer, możesz zrobić bardzo dużo przy użyciu odrobiny
        programowania. Nie musisz byc ekspertem, wystarczy, że umiesz użyć
        Pythona jako narzędzia. A zacząć jest bardzo łatwo. Udostępniamy darmowy
        poradnik szybkiego startu.
      </>
    ),
    actionLink: {
      to: "/docs/",
      label: "Czytaj poradnik",
    },
  },
];

function Feature({ imageUrl, title, description, actionLink }) {
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
              <Link
                className={cx(styles.actionButton, "pixelButton")}
                to={actionLink.to}
              >
                {actionLink.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const subscribeLinks = [
  {
    to: "https://anchor.fm/docdeveloper/",
    label: "Anchor.fm",
  },
  {
    to: "https://open.spotify.com/show/2jhQ1Z1nAOY686RVok7O9I",
    label: "Spotify",
  },
  {
    to: "https://player.fm/series/tech-writer-koduje",
    label: "Player.fm",
  },
  {
    to: "https://anchor.fm/s/8afba9c/podcast/rss",
    label: "RSS",
  },
];

function SubscribeButton({ to, label }) {
  return (
    <a
      className={cx(styles.subscribeButton, "pixelButton")}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}

const hosts = [
  {
    name: "Michał Skowron",
    description: "Fajny gość, preferuje Pythona",
    imageUrl: "/img/michal.gif",
  },
  {
    name: "Paweł Kowaluk",
    description: "Old school, ale zna się na dicie",
    imageUrl: "/img/pawel.gif",
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
    imageUrl: "/img/techwriter-logo-thumb.png",
    link: "http://techwriter.pl/",
    label: "techwriter.pl",
  },
  {
    imageUrl: "/img/not-boring-logo-thumb.png",
    link: "https://www.thenotboringtechwriter.com/",
    label: "The Not-Boring Tech Writer",
  },
  {
    imageUrl: "/img/switkowski.svg",
    link: "https://switowski.com/",
    label: "Sebastian Witkowski",
  },
];

function ShoutOut({ imageUrl, link, label }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img alt={label} src={imageUrl} />
    </a>
  );
}

function AnimatedLogo() {
  return (
    <div className={styles.logoWrapper}>
      <div className="container">
        <div className={styles.animatedLogo}>
          <div className={styles.logoFirst}>
            <span className={styles.logoRedBold}>T</span>
            <span className={styles.logoBlueBold}>e</span>
            <span className={styles.logoOrangeBold}>c</span>
            <span className={styles.logoGreenBold}>h</span>
          </div>
          <div className={styles.logoSecond}>
            <span className={styles.logoGreenBold}>W</span>
            <span className={styles.logoBlueBold}>r</span>
            <span className={styles.logoOrangeBold}>i</span>
            <span className={styles.logoRedBold}>t</span>
            <span className={styles.logoGreenBold}>e</span>
            <span className={styles.logoOrangeBold}>r</span>
          </div>
          <div className={styles.logoThird}>
            <Cube />
            <span className={styles.logoBlueShadow}>k</span>
            <span className={styles.logoOrangeShadow}>o</span>
            <span className={styles.logoRedShadow}>d</span>
            <span className={styles.logoGreenShadow}>u</span>
            <span className={styles.logoOrangeShadow}>j</span>
            <span className={styles.logoBlueShadow}>e</span>
          </div>
        </div>
      </div>
    </div>
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
      <header className={cx("hero", styles.heroBanner)}>
        <div className="container">
          <AnimatedLogo />
          <p className={styles.pageSubtitle}>{siteConfig.tagline}</p>
          {subscribeLinks && subscribeLinks.length > 0 && (
            <div className={styles.buttons}>
              {subscribeLinks.map((props, idx) => (
                <SubscribeButton key={idx} {...props} />
              ))}
            </div>
          )}
        </div>
      </header>
      <main>
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
        <section className={styles.hosts}>
          <div className="container">
            <h2>Prowadzący</h2>
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
            <div className={cx("container", styles.shoutOutBadges)}>
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
