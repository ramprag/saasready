import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'SaaSReady - Open Source Auth0 Alternative',
  tagline: 'Self-hosted alternative to Auth0, WorkOS, and Clerk for B2B SaaS',
  url: 'https://ramprag.github.io',
  baseUrl: '/saasready/',
  organizationName: 'ramprag',
  projectName: 'saasready',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ramprag/saasready/edit/master/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-7PCKSQZDZ8',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    // SEO metadata
    metadata: [
      {
        name: 'keywords',
        content: 'auth0 alternative, workos alternative, clerk alternative, self-hosted authentication, open source auth, multi-tenant auth, saas authentication, rbac, python auth'
      },
      {
        name: 'description',
        content: 'SaaSReady is an open-source, self-hosted alternative to Auth0, WorkOS, and Clerk. Get enterprise authentication, RBAC, and multi-tenancy for free.'
      },
      {
        name: 'google-site-verification',
        content: 'F69FeYAHqQnbvOaSlEre6xxs2Ykcd2DULo34FH8oCBk'
      },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    navbar: {
      title: 'SaaSReady',
      logo: {
        alt: 'SaaSReady logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/docs/comparisons',
          label: 'Comparisons',
          position: 'left',
        },
        {
          href: 'https://github.com/ramprag/saasready',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Comparisons',
          items: [
            { label: 'vs Auth0', to: '/docs/comparisons/auth0' },
            { label: 'vs WorkOS', to: '/docs/comparisons/workos' },
            { label: 'vs Clerk', to: '/docs/comparisons/clerk' },
          ],
        },
        {
          title: 'Guides',
          items: [
            { label: 'Quick Start', to: '/docs/quickstart' },
            { label: 'Multi-Tenant Auth', to: '/docs/tutorials/multi-tenant-auth-guide' },
            { label: 'API Reference', to: '/docs/api-reference' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/ramprag/saasready' },
            { label: 'Discussions', href: 'https://github.com/ramprag/saasready/discussions' },
            { label: 'Issues', href: 'https://github.com/ramprag/saasready/issues' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SaaSReady. Open Source MIT License.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
