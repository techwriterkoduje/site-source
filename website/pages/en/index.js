/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

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
        <img className="heroImage" alt="Tech Writer koduje logo horizontal" src={`${siteConfig.baseUrl}${siteConfig.mainPageBanner}`} />
        <div className="tagLine">{siteConfig.tagline}</div>
        <div className="container paddingTop">
          <div className="row">
            <div className="col-sm">
              <a class="btn btn-dark mt-3 w-100 primaryBackground" href={siteConfig.anchorProfile} target="_blank"><i class="fas fa-headphones"></i> Anchor.fm</a>
            </div>
            <div className="col-sm">
              <a class="btn btn-dark mt-3 w-100 primaryBackground" href={siteConfig.spotifyProfile} target="_blank"><i class="fab fa-spotify"></i> Spotify</a>
            </div>
            <div className="col-sm">
              <a class="btn btn-dark mt-3 w-100 primaryBackground" href={siteConfig.playerFmProfile} target="_blank"><i class="fas fa-play"></i> Player.fm</a>
            </div>
            <div className="col-sm">
              <a class="btn btn-dark mt-3 w-100 primaryBackground" href={siteConfig.rss} target="_blank"><i class="fas fa-rss"></i> RSS</a>
            </div>
          </div>
        </div >
      </div >
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
      <div class="container paddingBottom paddingTop">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm-6">
            <img
              className="aboutSplash"
              alt="Photo by Neil Godding on Unsplash"
              title="Photo by Neil Godding on Unsplash"
              src={`${baseUrl}img/neil-godding-179009-unsplash.jpg`} />
          </div>
          <div className="col-sm"></div>
        </div>
        <div className="row podcastDescription">
          <div className="col-sm"></div>
          <div className="col-sm-6 text-justify">
            <p>
              Podcast o technicznej stronie tworzenia dokumentacji w IT. Skupiamy się na tym jak
              Tech Writer może wpasować się w środowisko programistów pod kątem sposobu pracy i narzędzi.
              Staramy się też pokazać, że praca Tech Writera może bardzo rozwijać umiejętności techniczne.
            </p>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    );

    const Episodes = () => (
      <Container padding={['bottom', 'top']}>
        <a class="btn btn-secondary btn-lg btn-block primaryBackground shadow-sm p-3 mb-5 rounded" href="blog"><i class="fas fa-headphones"></i> Podsumowania odcinków</a>
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
              <h3>Michał Skowron</h3>
              <p>Fajny gość, preferuje Pythona</p>
            </div>
            <div className="col-sm">
              <img src={`${baseUrl}${siteConfig.pawelProfilePic}`} />
              <h3>Paweł Kowaluk</h3>
              <p>Old school, ale zna się na dicie</p>
            </div>
          </div>
          <div className="row">
            <div className="col text-justify">
              <p>
                Od kilku lat zajmujemy się zawodowo dokumentacją do oprogramowania.
                Właściwie od samego początku, techniczna strona tworzenia dokumentacji była dla nas najbardziej interesująca.
                Dlatego uwielbiamy pisać skrypty, konfigurować narzędzia i automatyzować.
                Szukamy rozwiązań, które pozwolą Tech Writerom skupić się na tym co ważne.
              </p>
              <p>Na co dzień zastanawiamy się jak świat dokumentacji może czerpać korzyści z technologii, których używa się w świecie IT.</p>
            </div>
          </div>
        </div>
      </div>
    );

    const Friends = () => (
      <div className="productShowcaseSection paddingBottom">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1>Szanujemy i wspieramy</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <a href="https://www.thenotboringtechwriter.com/" target="_blank">
              <img
                alt="Logo of the Not-Boring Tech Writer podcast"
                title="Logo of the Not-Boring Tech Writer podcast"
                src={`${baseUrl}img/not-boring-tech-writer-logo-240px.png`} />
              </a>
            </div>
            <div className="col-sm">
              <a href="http://techwriter.pl/" target="_blank">
              <img
                alt="Logo of the Techwriter.pl portal"
                title="Logo of the Techwriter.pl portal"
                src={`${baseUrl}img/techwriter-pl-logo-240px.png`} />
              </a>
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
          <Friends />
        </div>
      </div>
    );
  }
}

module.exports = Index;
