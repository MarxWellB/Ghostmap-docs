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
      ],
    },
    {
      type: 'category',
      label: 'Arquitectura',
      items: [
        'architecture/arquitectura-v1',
        'architecture/loading-policy',
        'architecture/local-state',
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
