import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Renium Documentation',
  tagline: 'Tüm Renium servisleri için kapsamlı dokümantasyon',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://renium-docs.netlify.app',
  baseUrl: '/',

  organizationName: 'renium',
  projectName: 'renium-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
  },

  // 🔹 Buraya plugin'i ekliyoruz
  plugins: [require.resolve('docusaurus-plugin-image-zoom')],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Renium-Docs/renium-docs/tree/main/',
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/Renium-Docs/renium-docs/tree/main/blog/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '6B841B51C952B3D3',
      },
    },
  ],

  themeConfig: {
    // 🔹 Zoom plugin konfigürasyonu
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {
        // https://github.com/francoischalifour/medium-zoom#usage
      },
    },

    docs: {
      sidebar: {hideable: true},
    },

    image: 'img/docusaurus-social-card.jpg',

    navbar: {
      title: 'Renium Docs',
      logo: {
        alt: 'Renium Logo',
        src: 'img/renium-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'octoDesktopSidebar',
          position: 'left',
          label: 'Octo Desktop',
        },
        {
          type: 'docSidebar',
          sidebarId: 'octoWebSidebar',
          position: 'left',
          label: 'Octo Web',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
      ],
    },

    algolia: {
      appId: 'NUDWOMOH3M',
      apiKey: '2f31d13d31d67a92710c8d508d191129',
      indexName: 'renium-docs',
      contextualSearch: true,
      externalUrlRegex: 'external\\.com|domain\\.com',
      replaceSearchResultPathname: {
        from: '/docs/',
        to: '/',
      },
      searchParameters: {},
      searchPagePath: 'search',
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokümantasyon',
          items: [
            {label: 'Octo Desktop', to: '/docs/octo-desktop'},
            {label: 'Octo Web', to: '/docs/octo-web'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Renium. Tüm hakları saklıdır.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
