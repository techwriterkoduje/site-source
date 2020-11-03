import React from 'react';
import Layout from '@theme/Layout';
import Header from '../../components/header';
import Title from '../../components/title';
import styles from './styles.module.css';

import semanticTesting from '@site/static/vid/dita_as_code_tcworld_02112020.mp4';

const videos = [
  {
    playback: (
      <>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/JkU2n2mpuU0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </>
    ),
    title:
      'Doing docs like code in the real world – a case study • Michał Skowron &amp; Paweł Kowaluk • soap! 2019',
    description: (
      <>
        Nasza prezentacja z konferencji soap! w 2019 roku. Więcej informacji o
        konferencji na stronie{' '}
        <a href="http://soapconf.com" target="_blank" rel="noopener noreferrer">
          soapconf.com
        </a>
      </>
    ),
  },
  {
    playback: (
      <>
        <video controls width="100%">
          <source src={semanticTesting} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </>
    ),
    title: 'Semantic testing in DITA',
    description: (
      <>
        A presentation we gave at TC World 2020. DITA gives you semantics that
        go beyond formatting text. DITA semantics allow you to test your
        documentation against code in a more meaningful way. Example project{' '}
        <a
          href="https://github.com/techwriterkoduje/dita-semantic-tests"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </>
    ),
  },
];

export default function Watch() {
  return (
    <Layout
      title="Pooglądaj"
      description="Wystąpienia, screencasty, webinary i inne przydatne filmiki dla Tech Writerów"
    >
      <Header>
        <Title
          lines={[{ label: 'pooglądaj', style: 'shadow', lineStyle: 'cubed' }]}
        />
      </Header>
      <main>
        <div className="container">
          {videos.map((video, key) => (
            <section className={styles.videoFeature} key={key}>
              <div className="row">
                <div className="col">{video.playback}</div>
                <div className="col">
                  <h2 className={styles.featureTitle}>{video.title}</h2>
                  <div>{video.description}</div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </Layout>
  );
}
