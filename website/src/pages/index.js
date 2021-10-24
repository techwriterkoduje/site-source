import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Banner from '../components/Banner';
import Hosts from '../components/Hosts/Hosts';
import ShoutOuts from '../components/ShoutOuts/ShoutOuts';
import Latest from '../components/Latest';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Witaj na stronie ${siteConfig.title}`}
      description="Polski podcast o technical writingu, technologiach i IT"
    >
      <Banner />
      <main>
        <Latest />
        <Hosts />
        <ShoutOuts />
      </main>
    </Layout>
  );
}

export default Home;
