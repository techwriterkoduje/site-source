import React from 'react';
import Layout from '@theme/Layout';
import Features from '../../components/Features';

const features = [
  {
    title: <>Tech Writer koduje w Pythonie. Przewodnik szybkiego startu.</>,
    imageUrl: 'img/python.png',
    description: (
      <>
        Jako Tech Writer, możesz zrobić bardzo dużo przy użyciu odrobiny
        programowania. Nie musisz być ekspertem, wystarczy, że umiesz użyć
        Pythona jako narzędzia. A zacząć jest bardzo łatwo. Udostępniamy darmowy
        przewodnik szybkiego startu.
      </>
    ),
    actionLink: {
      to: '/docs/teoria',
      label: 'Czytaj przewodnik',
    },
  },
  {
    title: <>Dokumentacja do oprogramowania. Poradnik dla managerów.</>,
    imageUrl: 'img/managers.png',
    description: (
      <>
        Ta książka została napisana z myślą o osobach odpowiedzialnych za
        dokumentację w firmie. Nieważne czy jesteś na stanowisku kierowniczym i
        prowadzisz zespół, czy jesteś product ownerem i w Twoim produkcie nie ma
        jeszcze dokumentacji czy jesteś jedynym Technical Writerem w firmie.
        Czytaj online za darmo.
      </>
    ),
    actionLink: {
      to: 'https://pensjonatus.github.io/dokumentacja-do-oprogramowania/docs/przedslowie',
      label: 'Czytaj książkę',
    },
  },
];

export default function Read() {
  return (
    <Layout
      title="Poczytaj"
      description="Artykuły i poradniki dla Tech Writerów"
    >
      <main>
        <div className="container">
          <Features features={features} />
        </div>
      </main>
    </Layout>
  );
}
