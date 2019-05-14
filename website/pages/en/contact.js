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

function Contact() {

  const supportLinks = [
    {
      content: '<a href="mailto:kontakt@techwriterkoduje.pl">kontakt@techwriterkoduje.pl</a>',
      title: '<i class="far fa-envelope"></i> E-mail',
    },
    {
      content: 'Źródło tej strony na <a href="https://github.com/techwriterkoduje" target="_blank"><i class="fas fa-link"></i> GitHubie</a>',
      title: '<i class="far fa-sticky-note"></i> Projekty',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Skontaktuj się z nami!</h1>
          </header>
          <p>Masz pomysł na odcinek? Chcesz być gościem programu? Chcesz nam coś przekazać?</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Contact;
