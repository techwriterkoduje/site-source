import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import styles from './styles.module.css';
import Envelope from './mail_white_36dp.svg';
import heroImage from './damian-zaleski-RYyr-k3Ysqg-unsplash.jpg';

const supportLinks = [
  {
    title: 'E-mail',
    links: [
      {
        icon: <Envelope className={styles.envelope} />,
        label: 'kontakt@techwriterkoduje.pl',
        to: 'mailto:kontakt@techwriterkoduje.pl',
      },
    ],
  },
];

function SupportLink({ title, links }) {
  return (
    <section className="col">
      <h3 className={styles.linkHeading}>{title}</h3>
      {links && links.length > 0 && (
        <div>
          {links.map((link, key) => (
            <p key={key}>
              <Link href={link.to} className={styles.link}>
                {link.icon}
                {link.label}
              </Link>
            </p>
          ))}
        </div>
      )}
    </section>
  );
}

function Contact() {
  return (
    <Layout>
      <Image img={heroImage} className={styles.hero} />
      <div className={styles.contactPage}>
        <section>
          <h2>Skontaktuj się z nami!</h2>
          <p>
            Chcesz nam coś przekazać? Masz pytanie lub sugestię? Może masz
            pomysł na odcinek podcasta albo chcesz być gościem naszej audycji?
            Po prostu napisz do nas.
          </p>
          {supportLinks && supportLinks.length > 0 && (
            <div className="container">
              <div className="row">
                {supportLinks.map((props, idx) => (
                  <SupportLink key={idx} {...props} />
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
}

export default Contact;
