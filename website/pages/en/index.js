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
      <div className="container">
        <div className="row kodujeHero">
          <div className="col-sm heroTW">Tech.Writer.</div>
          <div className="col-sm"></div>
          <div class="w-100"></div>
          <div className="col-sm"></div>
          <div className="col-sm kodujeTW shadow-sm p-3 mb-5 rounded"><i class="fas fa-cube"></i> koduje</div>
        </div>
          <div className="tagLine">{siteConfig.tagline}</div>
        </div>
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

    const About = () => (
      <div className="container lightBackground paddingBottom paddingTop">
        <div className="row">
          <div className="col-sm text-justify">
            <div className="podcastIcon">
              <i class="fas fa-microphone-alt"></i>
            </div>
            <div>
              <p>
                Podcast o technicznej stronie tworzenia dokumentacji w IT. Skupiamy się na tym jak
                Tech Writer może wpasować się w środowisko programistów pod kątem sposobu pracy i narzędzi. 
                Staramy się też pokazać, że praca Tech Writera może bardzo rozwijać umiejętności techniczne.
            </p>
            </div>
          </div>
          <div className="col-sm">
            <img 
              alt="Photo by Neil Godding on Unsplash" 
              title="Photo by Neil Godding on Unsplash" 
              src={`${baseUrl}/img/neil-godding-179009-unsplash.jpg`} />
          </div>
        </div>
      </div>
    );

    const Episodes = () => (
      <Container padding={['bottom', 'top']}>
        <a class="btn btn-secondary btn-lg btn-block primaryBackground episodeButton shadow-sm p-3 mb-5 rounded" href="blog"><i class="fas fa-headphones"></i> Posłuchaj odcinków</a>
      </Container>
    );

    const Hosts = () => (
      <div className="productShowcaseSection primaryBackground paddingBottom">
        <div className="hosts container">
          <div className="row">
            <div className="col-sm">
              <h1>Prowadzący</h1>
            </div>
          </div>
          <div className="row hostCards">
            <div className="col-sm">
              <img src={`${baseUrl}${siteConfig.michalProfilePic}`} />
              <h3>Michał</h3>
              <p>Fajny gość, preferuje Pythona</p>
            </div>
            <div className="col-sm">
              <img src={`${baseUrl}${siteConfig.pawelProfilePic}`} />
              <h3>Paweł</h3>
              <p>Old school, ale zna się na dicie</p>
            </div>
          </div>
          <div className="row">
            <div className="col text-justify">
              <p>
                Prowadzący od kilku lat zajmują się zawodowo dokumentacją do oprogramowania.
                Właściwie od samego początku, techniczna strona tworzenia dokumentacji była dla nich najbardziej interesująca.
                Dlatego uwielbiają pisać skrypty, konfigurować narzędzia i automatyzować.
                Szukają rozwiązań, które pozwolą Tech Writerom skupić się na tym co ważne.
              </p>
              <p>Na co dzień zastanawiają się jak świat dokumentacji może czerpać korzyści z technologii, których używa się w świecie IT.</p>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <About />
          <Episodes />
          <Hosts />
        </div>
      </div>
    );
  }
}

module.exports = Index;
