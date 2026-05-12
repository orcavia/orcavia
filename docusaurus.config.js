// @ts-check

const config = {
  title: 'Orcavia',
  tagline: 'Blender add-ons, production tools, and 3D portfolio work.',
  favicon: 'img/orcavia-icon.svg',
  url: 'https://orcavia.github.io',
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
    image: 'img/orcavia-logo.svg',
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
