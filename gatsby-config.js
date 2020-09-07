module.exports = {
  siteMetadata: {
    title: "LGRQVST",
    author: "Johan Lagerqvist",
    description: "Personal website of Johan Lagerqvist",
    siteUrl: "https://lgrqvst.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts/`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: "pages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500,
              linkImagesToOriginal: false,
              showCaptions: ["title"],
            },
          },
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: "oldschool",
            },
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Dark+ (default dark)",
            },
          },
          `gatsby-remark-embedder`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://lgrqvst.com`,
      },
    },
    {
      resolve: `gatsby-plugin-accessibilityjs`,
      options: {
        injectStyles: `
        .accessibility-error {
          box-shadow: 0 0 3px 1px #f00;
          background-color: rgba(255, 0, 0, 0.25);
          position: relative;
        }
        .accessibility-error:before {
          content: "A11Y";
          position: absolute;
          top: 0;
          left: 0;
          color: #fff;
          font-size: 10px;
          background-color: rgba(255, 0, 0, 0.5);
          transform: translateY(-100%);
        }
      `,
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve("./src/components/layout"),
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Rajdhani",
              variants: ["300", "400", "500", "600"],
            },
            {
              family: "Crimson Pro",
              variants: ["200", "200i"],
            },
            {
              family: "Ibarra Real Nova",
              variants: ["400", "700", "400i", "700i"],
            },
            {
              family: "Fira Code",
              variants: ["400"],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    `gatsby-plugin-polished`,
    {
      resolve: `gatsby-plugin-prettier-build`,
      options: {
        types: ["html"],
        concurrency: 20,
        verbose: true,
      },
    },
    `gatsby-plugin-preact`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-59894238-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        defer: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LGRQVST`,
        short_name: `LGRQVST`,
        start_url: `/`,
        background_color: `#efefef`,
        theme_color: `#ffaa05`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
