// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'English start',
      collapsed: false,
      items: [
        'intro',
        'en/overview',
        'en/install',
        'en/legal-support',
      ],
    },
    {
      type: 'category',
      label: 'Spanish details',
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
      label: 'Guía / Conceptos (ES)',
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
      label: 'Referencia (ES)',
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
      label: 'Arquitectura (ES)',
      items: [
        'architecture/arquitectura-v1',
        'architecture/loading-policy',
        'architecture/local-state',
        'data-location',
      ],
    },
    {
      type: 'category',
      label: 'Ayuda (ES)',
      items: [
        'faq',
        'troubleshooting',
        'glossary',
        'uninstall',
      ],
    },
    {
      type: 'doc',
      id: 'changelog',
      label: 'Changelog',
    },
    {
      type: 'category',
      label: 'Roadmap (ES)',
      items: [
        'roadmap/vision-v2',
      ],
    },
    {
      type: 'category',
      label: 'Estado (ES)',
      items: [
        'status/estado-del-proyecto',
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
