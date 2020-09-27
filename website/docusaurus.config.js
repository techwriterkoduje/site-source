module.exports = {
  title: "Tech Writer koduje",
  tagline: "Kiedy słowa to za mało",
  url: "https://techwriterkoduje.pl",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "techwriterkoduje", // Usually your GitHub org/user name.
  projectName: "site-source", // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: "Tech Writer koduje",
      logo: {
        alt: "Logo",
        src: "img/logo-square.png",
      },
      items: [
        { to: "blog", label: "Posłuchaj", position: "right" },
        { to: "/read", label: "Poczytaj", position: "right" },
        { to: "contact", label: "Kontakt", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Tech Writer koduje</br></br>Logo stworzone przez rad89`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/techwriterkoduje/site-source/tree/master/website/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/techwriterkoduje/site-source/tree/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [require.resolve("docusaurus-lunr-search")],
};
