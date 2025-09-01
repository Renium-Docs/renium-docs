import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Renium Documentation',
  tagline: 'Tüm Renium servisleri için kapsamlı dokümantasyon',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.renium.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'renium', // Usually your GitHub org/user name.
  projectName: 'renium-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
  },


  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/renium/renium-docs/tree/main/',
          // Multiple docs instances for different sections
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
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

  themeConfig: {
    // Replace with your project's social card
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
      ],
    },
    
    // Algolia DocSearch
    algolia: {
      // The application ID provided by Algolia
      appId: 'NUDWOMOH3M',
      
      // Public API key: it is safe to commit it
      apiKey: '2f31d13d31d67a92710c8d508d191129',
      
      // The index name
      indexName: 'renium-docs',
      
      // Optional: See doc section below
      contextualSearch: true,
      
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push
      externalUrlRegex: 'external\\.com|domain\\.com',
      
      // Optional: Replace parts of the item URLs from Algolia
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },
      
      // Optional: Algolia search parameters
      searchParameters: {},
      
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
      
      //... other Algolia params
    },
    
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokümantasyon',
          items: [
            {
              label: 'Octo Desktop',
              to: '/docs/octo-desktop',
            },
            {
              label: 'Octo Web',
              to: '/docs/octo-web',
            },
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
