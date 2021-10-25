import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Banner from '../components/Banner';
import Hosts from '../components/Hosts/Hosts';
import ShoutOuts from '../components/ShoutOuts/ShoutOuts';
import Latest from '../components/Latest';
import SubscribeButtons from '../components/SubscribeButtons/SubscribeButtons';
import GetInTouch from '../components/GetInTouch';

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
        <SubscribeButtons />
        <Latest />
        <GetInTouch />
        <Hosts />
        <ShoutOuts />
      </main>
    </Layout>
  );
}

export default Home;
