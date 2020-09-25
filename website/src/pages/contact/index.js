import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./styles.module.css";

const supportLinks = [
  {
    title: "E-mail",
    links: [
      {
        label: "kontakt@techwriterkoduje.pl",
        to: "mailto:kontakt@techwriterkoduje.pl",
      },
    ],
  },
  {
    title: "Projekty",
    links: [
      {
        label: "Źródło tej strony na GitHubie",
        to: "https://github.com/techwriterkoduje",
      },
    ],
  },
];

function SupportLink({ title, links }) {
  return (
    <section className="col">
      <h3>{title}</h3>
      {links && links.length > 0 && (
        <div>
          {links.map((link, idx) => (
            <p>
              <a href={link.to} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
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
      <div className={clsx("container", styles.contactPage)}>
        <section>
          <h2>Skontaktuj się z nami!</h2>
          <p>
            Masz pomysł na odcinek? Chcesz być gościem programu? Chcesz nam coś
            przekazać?
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