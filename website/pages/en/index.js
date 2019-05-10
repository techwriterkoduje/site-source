/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig } = this.props;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const HostSummary = () => (
      <div
        className="productShowcaseSection paddingBottom">
        <h2>O prowadzących</h2>
        <MarkdownBlock>Prowadzący od kilku lat zajmują się zawodowo dokumentacją do oprogramowania. Właściwie od samego początku, techniczna strona tworzenia dokumentacji była dla nich najbardziej interesująca. Dlatego uwielbiają brudzić sobie ręce pisząc skrypty, konfigurując narzędzia i wymyślając rozwiązania związane z automatyzacją, które pozwalają Tech Writerom skupić się na tym co ważne. Na co dzień zastanawiają się jak świat dokumentacji może czerpać korzyści z technologii, których używa się w świecie IT.</MarkdownBlock>
      </div>
    );

    const About = () => (
      <Block background="light">
        {[
          {
            content:
              'O co chodzi w tym podkaście?',
            image: `${baseUrl}img/podcast.svg`,
            imageAlign: 'right',
            title: 'Podcast',
          },
        ]}
      </Block>
    );

    const HostCards = () => (
      <div className="hosts">
        <Block layout="fourColumn">
          {[
            {
              content: 'Fajny gość, preferuje Pythona',
              image: `https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/278281_2223337990898_6169616_o.jpg?_nc_cat=101&_nc_ht=scontent-frx5-1.xx&oh=210032a119a5cb130e704bcab0056be2&oe=5D2B011F`,
              imageAlign: 'top',
              title: 'Michał',
            },
            {
              content: 'Ziomuś, który zna się na dicie',
              image: `https://avatars3.githubusercontent.com/u/6593513?s=460&v=4`,
              imageAlign: 'top',
              title: 'Paweł',
            },
          ]}
        </Block>
      </div>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <About />
          <HostCards />
          <HostSummary />
        </div>
      </div>
    );
  }
}

module.exports = Index;
