// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require("tailwindcss");
const postcssPlugins = [tailwind()];

module.exports = {
  siteName: "Your Brand name here",
  siteUrl: "https://twblog.terabytetiger.com",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        remark: {},
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        include: ["/", "/blog/**"],
      },
    },
  ],
  transformers: {
    remark: {
      plugins: [
        [
          "remark-autolink-headings",
          {
            behavior: "wrap",
            linkProperties: {
              ariaHidden: "true",
              tabIndex: -1,
            },
          },
        ],
        [
          "gridsome-plugin-remark-prismjs-all",
          {
            showLineNumbers: true,
            aliases: {
              vue: "html",
              cmd: "bash",
              dos: "bash",
            },
          },
        ],
      ],
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};
