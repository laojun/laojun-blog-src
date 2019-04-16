module.exports = {
  base:'/laojun-blog/',
  title: "个人主页",
  description: "老俊的博客",
  head: [
    ["link", { rel: "icon", href: "/img/logo.ico" }],
    ["link", { rel: "manifest", href: "/menifest.json" }],
  ],
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      {
        text: "博文",
        items: [
          { text: "Android", link: "/android/" },
          { text: "ios", link: "/ios/" }
        ]
      },
      { text: "关于", link: "/about/" },
      { text: "Github", link: "" }
    ],
    sidebar:[
      '/ios/',
      '/android/'
    ],
    sidebarDepth: 2,
    lastUpdated: "Last Updated",
    serviceWorker: true,
  }
};
