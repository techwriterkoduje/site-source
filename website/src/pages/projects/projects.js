import React from 'react';
import Layout from '@theme/Layout';
import Features from '@site/src/components/SiteFeatures';

const features = [
  {
    title: <>Semantyczne testy w DITA (Python)</>,
    imageUrl: 'img/semantics.png',
    description: (
      <>
        Semantyczne tagi w standardzie DITA pozwalają na na pisanie bardzo
        dokładnych testów dokumentacji. Na przykład możesz sprawdzić czy komenda
        (&lt;codeblock&gt;) zapisana w dokumentacji jest poprawna i czy
        przyniesie pożądany skutek (&lt;result&gt;).
      </>
    ),
    actionLink: {
      to: 'https://github.com/techwriterkoduje/dita-semantic-tests',
      label: 'Zacznij testować',
    },
  },
  {
    title: <>Statyczna strona z dokumentacja do wielu API (Next.js + Redoc)</>,
    imageUrl: 'img/next-redoc.png',
    description: (
      <>
        Zobacz przykład strony, która wyświetla zbiór specyfikacji OpenAPI.
        Redoc renderuje każdą ze specyfikacji. Next.js serwuje całość jako
        statyczną stronę.
      </>
    ),
    actionLink: {
      to: 'https://github.com/techwriterkoduje/next-js-redoc',
      label: 'Dokumentuj API',
    },
  },
  {
    title: <>Źródło tej strony (Docusaurus)</>,
    imageUrl: 'img/website.png',
    description: (
      <>
        Podoba Ci się nasza strona? Chcesz stworzyć podobną? Strona opiera się o
        platformę Docusaurus i pliki Markdown. Jest deployowana za pomocą GitHub Actions
        i hostowana na GitHub Pages.
      </>
    ),
    actionLink: {
      to: 'https://github.com/techwriterkoduje/site-source',
      label: 'Zainspiruj się',
    },
  },
];

export default function Projects() {
  return (
    <Layout title="Projekty" description="Przykładowe projekty na GihHubie">
      <main>
        <div className="container">
          <Features features={features} />
        </div>
      </main>
    </Layout>
  );
}
