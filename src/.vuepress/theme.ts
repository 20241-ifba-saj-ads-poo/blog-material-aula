import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "20241-ifba-saj-ads-poo.github.io/blog-material-aula/",

  author: {
    name: "Leandro Souza",
    url: "https://github.com/leandro-costa",
  },

  lastUpdated: false,
  contributors: false,

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "20241-ifba-saj-ads-poo/blog-material-aula",

  docsDir: "src",
  
  docsBranch: "master",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "Material de aula IFBA SAJ",

  displayFooter: true,

  blog: {
    description: "Professor EBTT",
    intro: "/intro.html",
roundAvatar:true,
    avatar: "/assets/icon/icon-512.png",
    medias: {
      Email: "mailto:leandro.costa@ifba.edu.br",
      GitHub: "https://github.com/leandro-costa",
    },
  },

  metaLocales: {
    editLink: "Edite esta pagina no GitHub",
toc: "Nesta Página",
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: true,

    // install @waline/client before enabling it
    // WARNING: This is a test server for demo only.
    // You should create and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    search: true,

    components: {
      components: ["Badge", "VPCard"],
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      footnote: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // uncomment these if you want a PWA
    pwa: {
    favicon: "/favicon.ico",
    cacheHTML: true,
    cachePic: true,
    appendBase: true,
    apple: {
    icon: "/assets/icon/icon-152.png",
    statusBarColor: "black",
    },
    msTile: {
    image: "/assets/icon/icon-144.png",
    color: "#ffffff",
    },
    manifest: {
    icons: [
    {
             src: "/assets/icon/icon-512.png",
    sizes: "512x512",
    purpose: "maskable",
    type: "image/png",
    },
    {
             src: "/assets/icon/icon-192.png",
    sizes: "192x192",
    purpose: "maskable",
    type: "image/png",
    },
    {
             src: "/assets/icon/icon-512.png",
    sizes: "512x512",
    type: "image/png",
    },
    {
             src: "/assets/icon/icon-192.png",
    sizes: "192x192",
    type: "image/png",
    },
    ],
    },
     },
  },
});
