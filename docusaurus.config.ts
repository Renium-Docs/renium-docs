import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Renium Docs',
  tagline: 'Octo Desktop, Web ve Lab Dokümantasyonları',
  favicon: 'img/favicon.ico',

  url: 'https://renium-docs.netlify.app',
  baseUrl: '/',

  organizationName: 'Renium-Docs',
  projectName: 'renium-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'tr',
    locales: ['tr','en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          id: 'public',
          path: 'docs/merged/public',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: ({locale, docPath}) => {
            if (locale === 'en') {
              return `https://github.com/Renium-Docs/renium-docs/edit/main/i18n/${locale}/docusaurus-plugin-content-docs-public/current/${docPath}`;
            }
            return `https://github.com/Renium-Docs/renium-docs/edit/main/docs/common/${docPath}`;
          },
        },
        blog: false,
        sitemap: {
          ignorePatterns: ['/tags/**'],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cfdbfc79-7598-4828-6b2a-08dc27e3fe33',
        path: 'docs/merged/cfdbfc79-7598-4828-6b2a-08dc27e3fe33',
        routeBasePath: 'cfdbfc79-7598-4828-6b2a-08dc27e3fe33/docs',
        sidebarPath: './sidebars.cfdbfc79-7598-4828-6b2a-08dc27e3fe33.ts',
        
        editUrl: ({locale, docPath}) => {
          if (locale === 'en') {
            return `https://github.com/Renium-Docs/renium-docs/edit/main/i18n/${locale}/docusaurus-plugin-content-docs-cfdbfc79-7598-4828-6b2a-08dc27e3fe33/current/${docPath}`;
          }
          
          const fs = require('fs');
          const path = require('path');
          
          const companySpecificPath = path.join(
            __dirname,
            'docs/companies/cfdbfc79-7598-4828-6b2a-08dc27e3fe33',
            docPath
          );
          
          if (fs.existsSync(companySpecificPath)) {
            return `https://github.com/Renium-Docs/renium-docs/edit/main/docs/companies/cfdbfc79-7598-4828-6b2a-08dc27e3fe33/${docPath}`;
          }
        
          return `https://github.com/Renium-Docs/renium-docs/edit/main/docs/common/${docPath}`;
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Renium Docs',
      logo: {
        alt: 'Renium Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          to: '/docs/intro',  
          position: 'left',
          label: 'Dokümantasyon',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/Renium-Docs/renium-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      appId: 'K83XBB322R',
      apiKey: 'adc4592bd9db05b55df4244a3ca8a735',
      indexName: 'Renium Docs',
      contextualSearch: true,
      searchPagePath: 'search',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokümanlar',
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
        {
          title: 'Daha Fazla',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Renium-Docs/renium-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Renium. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;