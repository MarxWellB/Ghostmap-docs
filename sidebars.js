// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introducción',
    },
    {
      type: 'category',
      label: 'Empezar',
      collapsed: false,
      items: [
        'get-started/requisitos',
        'get-started/instalacion',
        'vsix-install',
        'get-started/primeros-5-minutos',
      ],
    },
    {
      type: 'category',
      label: 'Guía / Conceptos',
      collapsed: false,
      items: [
        'guide/philosophy',
        'guide/symbol',
        'guide/ghost-metadata',
        'guide/ghost-status',
        'guide/ghost-description',
        'guide/anchor',
        'guide/semantic-anchor',
        'guide/contextual-anchor',
        'guide/range-anchor',
        'guide/ownership-radius',
        'guide/symbol-validity-gate',
      ],
    },
    {
      type: 'category',
      label: 'Referencia',
      collapsed: false,
      items: [
        'reference/sintaxis',
        'reference/ghost-tree',
        'reference/diagnostics',
        'reference/settings',
        'reference/rendimiento',
        'keyboard-shortcuts',
      ],
    },
    {
      type: 'category',
      label: 'Arquitectura',
      items: [
        'architecture/arquitectura-v1',
        'architecture/loading-policy',
        'architecture/local-state',
        'data-location',
      ],
    },
    {
      type: 'category',
      label: 'Ayuda',
      items: [
        'troubleshooting',
        'faq',
        'glossary',
        'uninstall',
      ],
    },
    {
      type: 'category',
      label: 'Roadmap',
      items: [
        'roadmap/vision-v2',
      ],
    },
    {
      type: 'category',
      label: 'Estado',
      items: [
        'status/estado-del-proyecto',
        'changelog',
      ],
    },
    {
      type: 'category',
      label: 'Planes',
      items: [
        'legal/planes',
        'legal/programa-early-access',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        'legal/privacy',
        'legal/terms',
        'legal/notices',
        'legal/disclaimer',
      ],
    },
  ],
};

export default sidebars;
