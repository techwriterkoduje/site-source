module.exports = {
  title: 'Tech Writer koduje',
  tagline: 'Kiedy słowa to za mało',
  url: 'https://techwriterkoduje.pl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'techwriterkoduje', // Usually your GitHub org/user name.
  projectName: 'site-source', // Usually your repo name.
  i18n: { defaultLocale: 'pl', locales: ['pl'] },
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'Tech Writer koduje',
      logo: {
        alt: 'Logo',
        src: 'img/play.png',
      },
      items: [
        { to: 'blog', label: 'Odcinki', position: 'right' },
        { to: 'read', label: 'Czytelnia', position: 'right' },
        { to: 'watch', label: 'Filmiki', position: 'right' },
        { to: 'projects', label: 'Projekty', position: 'right' },
        { to: 'contact', label: 'Kontakt', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Tech Writer koduje</br></br>Logo stworzone przez rad89`,
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
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
          blogSidebarTitle: 'Najnowsze posty',
          feedOptions: {
            type: 'all',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: ['@docusaurus/plugin-ideal-image'],
};
