import React from "react";
import Layout from "@theme/Layout";
import Features from "../../components/features";
import Header from "../../components/header";

const features = [
  {
    title: <>Naucz się Pythona</>,
    imageUrl: "img/python-thumb.png",
    description: (
      <>
        Jako tech writer, możesz zrobić bardzo dużo przy użyciu odrobiny
        programowania. Nie musisz być ekspertem, wystarczy, że umiesz użyć
        Pythona jako narzędzia. A zacząć jest bardzo łatwo. Udostępniamy darmowy
        poradnik szybkiego startu.
      </>
    ),
    actionLink: {
      to: "/docs/teoria",
      label: "Czytaj poradnik",
    },
  },
  {
    title: <>Naucz się zarządzać dokumentacją</>,
    imageUrl: "img/ddo-thumb.png",
    description: (
      <>
        Ta książka została napisana z myślą o osobach odpowiedzialnych za
        dokumentację w firmie. Nieważne czy jesteś na stanowisku kierowniczym i
        prowadzisz zespół, czy jesteś product ownerem i w Twoim produkcie nie ma
        jeszcze dokumentacji czy jesteś jedynym technical writerem w firmie.
        Czytaj online za darmo.
      </>
    ),
    actionLink: {
      to:
        "https://pensjonatus.github.io/dokumentacja-do-oprogramowania/docs/przedslowie",
      label: "Czytaj online",
      external: true,
    },
  },
];

export default function Read() {
  return (
    <Layout>
      <Header>
        <h1>Poczytaj</h1>
      </Header>
      <main>
        <div className="container">
          <Features features={features} />
        </div>
      </main>
    </Layout>
  );
}
