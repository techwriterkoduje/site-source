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
      style: 'dark',
      logo: {
        alt: 'Logo',
        src: 'img/t-icon.png',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Nawigacja',
          position: 'left',
          items: [
            { to: '/', label: 'Start' },
            { to: 'blog', label: 'Posłuchaj' },
            { to: 'read', label: 'Poczytaj' },
            { to: 'watch', label: 'Pooglądaj' },
            { to: 'projects', label: 'Projekty' },
            { to: 'contact', label: 'Kontakt' },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Tech Writer koduje</br></br>Logo stworzone przez mojk`,
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
          blogSidebarTitle: 'Ostatnie wpisy',
          editUrl:
            'https://github.com/techwriterkoduje/site-source/tree/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [require.resolve('docusaurus-lunr-search')],
};
