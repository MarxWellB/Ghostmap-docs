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

  organizationName: 'ghostmap',
  projectName: 'ghostmap-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/ghostmap-social-card.png',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
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
            ],
          },
          {
            title: 'Documentación',
            items: [
              {label: 'Guía rápida', to: '/get-started/instalacion'},
              {label: 'Conceptos', to: '/guide/symbol'},
              {label: 'Referencia', to: '/reference/sintaxis'},
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
        copyright: `MIT Licensed · Hecho con 💜 por developers · © ${new Date().getFullYear()} GhostMap`,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['typescript', 'python', 'json', 'bash'],
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },
    }),
};

export default config;
