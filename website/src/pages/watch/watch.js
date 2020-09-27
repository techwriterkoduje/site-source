import React from "react";
import Layout from "@theme/Layout";
import Header from "../../components/header";
import Title from "../../components/title";
import styles from "./styles.module.css";

export default function Watch() {
  return (
    <Layout>
      <Header>
        <Title
          lines={[{ label: "pooglądaj", style: "shadow", lineStyle: "cubed" }]}
        />
      </Header>
      <main>
        <div className="container">
          <section className={styles.videoFeature}>
            <div className="row">
              <div className="col">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/JkU2n2mpuU0"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="col">
                <h2 className={styles.featureTitle}>
                  Doing docs like code in the real world – a case study • Michał
                  Skowron &amp; Paweł Kowaluk • soap! 2019
                </h2>
                <p>
                  Nasza prezentacja na konferencji soap! w 2019 roku. Więcej
                  informacji o konferencji na stornie{" "}
                  <a
                    href="http://soapconf.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    soapconf.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
