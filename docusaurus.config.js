// @ts-check

const config = {
  title: 'Orcavia',
  tagline: 'Blender add-ons, production tools, and 3D portfolio work.',
  favicon: 'favicon.ico',
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
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'https://orcavia.dev/img/orcavia-logo.svg',
    metadata: [
      { name: 'keywords', content: 'Orcavia, Blender add-ons, Blender tools, UV tools, 3D portfolio' },
      { name: 'author', content: 'Orcavia' },
      { property: 'og:type', content: 'website' },
    ],
    headTags: [
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
    navbar: {
      title: 'Orcavia',
      logo: {
        alt: 'Orcavia icon',
        src: 'img/orcavia-icon.svg',
      },
      items: [
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
