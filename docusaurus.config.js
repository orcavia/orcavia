// @ts-check

const config = {
  title: 'Orcavia',
  tagline: 'Tridi Viewer, Blender add-ons, and practical 3D production tools.',
  favicon: 'favicon.ico',
  titleDelimiter: '|',
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '48x48',
        href: '/favicon-48.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon-192.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '192x192',
        href: '/favicon-192.png',
      },
    },
  ],
  future: {
    v4: true,
    faster: true,
  },
  url: 'https://orcavia.dev',
  baseUrl: '/',
  organizationName: 'orcavia',
  projectName: 'orcavia',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        sitemap: {
          changefreq: 'daily',
          priority: 0.8,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'https://orcavia.dev/img/orcavia-logo.svg',
    metadata: [
      { name: 'description', content: 'Orcavia creates Tridi Viewer, a fast native 3D model viewer for Windows, alongside practical Blender add-ons and 3D production tools.' },
      { name: 'keywords', content: 'Orcavia, Tridi Viewer, Windows 3D viewer, 3D model viewer, Blender add-ons, Blender tools, Blender UV tools, Easeam, ShadingMod, QuickMod, MirrorPro, Duplicator, Armacurve, MultiLattice' },
      { name: 'author', content: 'Orcavia' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Orcavia' },
      { property: 'og:title', content: 'Orcavia | Tridi Viewer and 3D Production Tools' },
      { property: 'og:description', content: 'Tridi Viewer for fast 3D inspection on Windows, plus practical Blender add-ons and production tools by Orcavia.' },
      { property: 'og:url', content: 'https://orcavia.dev/' },
      { property: 'og:image', content: 'https://orcavia.dev/img/orcavia-logo.svg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Orcavia | Tridi Viewer and 3D Production Tools' },
      { name: 'twitter:description', content: 'Tridi Viewer for Windows, practical Blender add-ons, and 3D production tools by Orcavia.' },
      { name: 'twitter:image', content: 'https://orcavia.dev/img/orcavia-logo.svg' },
    ],
    navbar: {
      title: 'Orcavia',
      logo: {
        alt: 'Orcavia icon',
        src: 'img/orcavia-icon.svg',
      },
      items: [
        { href: 'https://tridi.orcavia.dev/', label: 'Tridi Viewer', position: 'right' },
        { to: '/#products', label: 'Products', position: 'right' },
        { to: '/#portfolio', label: 'Portfolio', position: 'right' },
        { href: 'https://superhivemarket.com/creators/orcavia', label: 'Superhive', position: 'right' },
        { href: 'https://discord.gg/MznXAXeYQN', label: 'Discord', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Orcavia',
          items: [
            { label: 'Discord', href: 'https://discord.gg/MznXAXeYQN' },
            { label: 'ArtStation', href: 'https://www.artstation.com/orcavia' },
            { label: 'Superhive', href: 'https://superhivemarket.com/creators/orcavia' },
            { label: 'YouTube', href: 'https://www.youtube.com/@orcavia9123' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Orcavia.`,
    },
  },
};

export default config;
