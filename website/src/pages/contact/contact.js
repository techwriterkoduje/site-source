import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './contact.module.css';
import Desktop from '../../components/desktop/desktop';

const supportLinks = [
  {
    title: 'E-mail',
    links: [
      {
        label: 'kontakt@techwriterkoduje.pl',
        to: 'mailto:kontakt@techwriterkoduje.pl',
      },
    ],
  },
];

function SupportLink({ title, links }) {
  return (
    <div>
      <h3>{title}</h3>
      {links && links.length > 0 && (
        <div>
          {links.map((link, key) => (
            <p key={key}>
              <a href={link.to} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

function Contact() {
  return (
    <Layout>
      <Desktop
        title="Skontaktuj się z nami!"
        subtitle={
          <p>
            Chcesz nam coś przekazać? Masz pytanie lub sugestię? Może masz
            pomysł na odcinek podcasta albo chcesz być gościem naszej audycji?
            Po prostu napisz do nas.
          </p>
        }
      >
        {supportLinks && supportLinks.length > 0 && (
          <div className={styles.supportLinks}>
            {supportLinks.map((props, idx) => (
              <SupportLink key={idx} {...props} />
            ))}
          </div>
        )}
      </Desktop>
    </Layout>
  );
}

export default Contact;
