import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Banner from '@site/src/components/Banner';
import Hosts from '@site/src/components/Hosts/Hosts';
import ShoutOuts from '@site/src/components/ShoutOuts/ShoutOuts';
import Latest from '@site/src/components/Latest';
import SubscribeButtons from '@site/src/components/SubscribeButtons/SubscribeButtons';
import GetInTouch from '@site/src/components/GetInTouch';

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
