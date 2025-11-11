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

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    
    // 🏢 Renium şirketi için özel dokümanlar
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'renium',
        path: 'docs/merged/renium',
        routeBasePath: 'renium/docs',
        sidebarPath: './sidebars.renium.ts',
        editUrl: 'https://github.com/Renium-Docs/renium-docs/tree/main/',
      },
    ],
    
    // 🏢 AWS şirketi için özel dokümanlar
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'aws',
        path: 'docs/merged/aws',
        routeBasePath: 'aws/docs',
        sidebarPath: './sidebars.aws.ts',
        editUrl: 'https://github.com/Renium-Docs/renium-docs/tree/main/',
      },
    ],
    
    // 🏢 Azure şirketi için özel dokümanlar
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'azure',
        path: 'docs/merged/azure',
        routeBasePath: 'azure/docs',
        sidebarPath: './sidebars.azure.ts',
        editUrl: 'https://github.com/Renium-Docs/renium-docs/tree/main/',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          // 📚 Public docs (ortak dokümanlar)
          path: 'docs/merged/public',
          sidebarPath: './sidebars.ts',
          editUrl: ({locale, docPath}) => {
            if (locale === 'en') {
              return `https://github.com/Renium-Docs/renium-docs/tree/main/i18n/en/docusaurus-plugin-content-docs/current/${docPath}`;
            }
            return `https://github.com/Renium-Docs/renium-docs/tree/main/docs/${docPath}`;
          },
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: ({locale, blogPath}) => {
            if (locale === 'en') {
              return `https://github.com/Renium-Docs/renium-docs/tree/main/i18n/en/docusaurus-plugin-content-blog/${blogPath}`;
            }
            return `https://github.com/Renium-Docs/renium-docs/tree/main/blog/${blogPath}`;
          },
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
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {},
    },

    docs: {
      sidebar: {hideable: true},
    },

    image: 'img/docusaurus-social-card.jpg',

    navbar: {
      title: 'Renium Docs',
      logo: {
        alt: 'Renium Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/Renium-Docs/renium-docs',
          label: 'GitHub',
          position: 'right',
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
            {label: 'Backup', to: '/docs/backup'},
          ],
        }
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