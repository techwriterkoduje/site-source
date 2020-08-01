/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Tech Writer koduje', // Title for your website.
  tagline: 'Kiedy słowa to za mało...',
  url: 'http://techwriterkoduje.pl', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  cname: 'techwriterkoduje.pl',

  // Used for publishing and more
  projectName: 'site-source',
  organizationName: 'techwriterkoduje',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {page: 'python', label: 'Naucz się Pythona'},
    { blog: true, label: 'Odcinki' },
    { page: 'contact', label: 'Kontakt' }
  ],

  // If you have users set above, you add it here:
  users,
  
  // Blog settings
  blogSidebarCount: 20,
  blogSidebarTitle: { default: 'Ostatnie odcinki', all: 'Wszystkie odcinki' },

  /* path to images for header/footer */
  headerIcon: 'img/logo-square.svg',
  footerIcon: 'img/logo-square.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#21211F',
    secondaryColor: '#008DD2',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `© ${new Date().getFullYear()} Tech Writer koduje`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    {src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js', async: true},
    {src: '/js/code-block-buttons.js', async: true},
    {src: 'https://buttons.github.io/buttons.js', async: true},
    {src: 'https://code.jquery.com/jquery-3.3.1.slim.min.js', async: true},
    {src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', async: true},
    {src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', async: true}
  ],
  stylesheets: [
    'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
    'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
    'https://fonts.googleapis.com/css?family=Inconsolata',
    '/css/code-block-buttons.css'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  editUrl: 'https://github.com/techwriterkoduje/site-source/tree/master/docs/',

  // Open Graph and Twitter card images.
  // ogImage: 'img/undraw_online.svg',
  // twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
  michalProfilePic: 'img/michal.jpg',
  pawelProfilePic: 'img/pawel.jpg',
  mainPageBanner: 'img/logo-horizontal.png',
  anchorProfile: 'https://anchor.fm/docdeveloper/',
  spotifyProfile: 'https://open.spotify.com/show/2jhQ1Z1nAOY686RVok7O9I',
  playerFmProfile: 'https://player.fm/series/tech-writer-koduje',
  rss: 'https://anchor.fm/s/8afba9c/podcast/rss'
};

module.exports = siteConfig;
