module.exports = {
  title: "Tech Writer koduje",
  tagline: "Kiedy słowa to za mało",
  url: "http://techwriterkoduje.pl",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "docdeveloper", // Usually your GitHub org/user name.
  projectName: "homepage", // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: "Tech Writer koduje",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "python/",
          activeBasePath: "docs",
          label: "Naucz się Pythona",
          position: "right",
        },
        { to: "blog", label: "Odcinki", position: "right" },
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
          homePageId: "teoria",
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
};
