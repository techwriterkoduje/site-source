import React from "react";
import cx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import Features from "../components/features";
import Cube from "../components/cube";

const features = [
  {
    title: <>Posłuchaj</>,
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
    title: <>Poczytaj</>,
    imageUrl: "img/read-thumb.png",
    description: (
      <>
        Jak Ty jako tech writer możesz ułatwić sobie życie na co dzień? Jak
        możesz zacząć kodować w Pythonie? Co kodować? Jak zarządzać projektami
        dokumentacyjnymi? Przygotowaliśmy dla Was garść poradników i artykułów
        do poczytania.
      </>
    ),
    actionLink: {
      to: "/read/",
      label: "Poczytaj porady",
    },
  },
];

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
        <Features features={features} />
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
