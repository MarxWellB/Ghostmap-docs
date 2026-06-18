// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GhostMap',
  tagline: 'Estructura de proyecto, dentro de tu código.',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://docs.ghostmap.dev',
  baseUrl: '/',

  // Required for `npm run deploy` to push to gh-pages on the correct repo.
  organizationName: 'MarxWellB',
  projectName: 'Ghostmap-docs',
  deploymentBranch: 'gh-pages',

  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#080810',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'GhostMap contributors',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'referrer',
        content: 'strict-origin-when-cross-origin',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/MarxWellB/Ghostmap-docs/edit/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/ghost-logo.svg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'v1-prerelease',
        content:
          'GhostMap V1 está en pre-release. La sintaxis @ghost y los settings son estables, pero pueden ajustarse en versiones futuras antes de la 1.0.',
        backgroundColor: '#0e0e1a',
        textColor: '#eeeef5',
        isCloseable: true,
      },
      navbar: {
        title: 'GhostMap',
        logo: {
          alt: 'GhostMap logo',
          src: 'img/ghost-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://marketplace.visualstudio.com/',
            label: 'Instalar para VS Code',
            position: 'right',
            className: 'navbar-cta',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Producto',
            items: [
              {label: 'Inicio', to: '/'},
              {label: 'Roadmap', to: '/roadmap/vision-v2'},
              {label: 'Estado del proyecto', to: '/status/estado-del-proyecto'},
              {label: 'Changelog', to: '/changelog'},
            ],
          },
          {
            title: 'Documentación',
            items: [
              {label: 'Guía rápida', to: '/get-started/instalacion'},
              {label: 'Conceptos', to: '/guide/symbol'},
              {label: 'Referencia', to: '/reference/sintaxis'},
              {label: 'Solución de problemas', to: '/troubleshooting'},
              {label: 'FAQ', to: '/faq'},
            ],
          },
          {
            title: 'Legal',
            items: [
              {label: 'Privacy Policy', to: '/legal/privacy'},
              {label: 'Terms of Use', to: '/legal/terms'},
              {label: 'Third-Party Notices', to: '/legal/notices'},
              {label: 'Disclaimer', to: '/legal/disclaimer'},
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {label: 'GitHub', href: 'https://github.com/'},
              {label: 'Issues', href: 'https://github.com/'},
              {label: 'Discusiones', href: 'https://github.com/'},
            ],
          },
        ],
        copyright: `MIT Licensed · © ${new Date().getFullYear()} GhostMap`,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'typescript',
          'tsx',
          'jsx',
          'python',
          'java',
          'csharp',
          'cpp',
          'c',
          'go',
          'rust',
          'php',
          'ruby',
          'dart',
          'scala',
          'solidity',
          'kotlin',
          'swift',
          'elixir',
          'groovy',
          'julia',
          'bash',
          'shell-session',
          'powershell',
          'json',
          'yaml',
          'toml',
          'diff',
          'markdown',
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      // Algolia DocSearch placeholder. Apply at https://docsearch.algolia.com/apply
      // then fill in the credentials below and uncomment.
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'ghostmap',
      //   contextualSearch: true,
      // },
    }),
};

export default config;
