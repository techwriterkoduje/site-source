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

function Contact(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: 'Znajdź nas na Facebooku itp...',
      title: 'Media społeczniościowe',
    },
    {
      content: 'Napisz do nas',
      title: 'E-mail',
    },
    {
      content: 'Nasze próbki kodu i źródło tej strony na <a href="https://github.com/techwriterkoduje" target="_blank"><i class="fas fa-link"></i> GitHubie</a>',
      title: 'Projekty',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Skontaktuj się z nami!</h1>
          </header>
          <p>Masz pomysły na odcinki? Chcesz być gościem programu?</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Contact;
