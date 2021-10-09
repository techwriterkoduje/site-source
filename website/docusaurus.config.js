module.exports = {
  title: 'Tech Writer koduje',
  tagline: 'Kiedy słowa to za mało',
  url: 'https://techwriterkoduje.pl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'techwriterkoduje', // Usually your GitHub org/user name.
  projectName: 'site-source', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'Tech Writer koduje',
      logo: {
        alt: 'Logo',
        src: 'img/logo-square.png',
      },
      items: [
        { to: 'blog', label: '.posłuchaj()', position: 'right' },
        { to: 'read', label: '.poczytaj()', position: 'right' },
        { to: 'watch', label: '.pooglądaj()', position: 'right' },
        { to: 'projects', label: 'Projekty', position: 'right' },
        { to: 'contact', label: 'Kontakt', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Tech Writer koduje</br></br>Logo stworzone przez rad89`,
    },
    algolia: {
      apiKey: '374ef9fe5ec6f4673b8bd853ebff193b',
      indexName: 'techwriterkoduje',
      contextualSearch: false,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/techwriterkoduje/site-source/tree/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/techwriterkoduje/site-source/tree/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
