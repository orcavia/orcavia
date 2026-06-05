import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import products from '../data/products';

const socials = [
  { label: 'ArtStation', href: 'https://www.artstation.com/orcavia', icon: 'artstation' },
  { label: 'Superhive', href: 'https://superhivemarket.com/creators/orcavia', icon: 'superhive' },
  { label: 'YouTube', href: 'https://www.youtube.com/@orcavia9123', icon: 'youtube' },
  { label: 'Email', href: 'mailto:mutar.orcavia@gmail.com', icon: 'email' },
];

const pageDescription =
  'Orcavia creates practical Blender add-ons, UV tools, modifier workflow utilities, mirroring helpers, curve rigging tools, lattice deformation tools, and game-ready 3D assets.';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://orcavia.dev/#organization',
      name: 'Orcavia',
      url: 'https://orcavia.dev/',
      logo: 'https://orcavia.dev/img/orcavia-logo.svg',
      sameAs: [
        'https://superhivemarket.com/creators/orcavia',
        'https://www.artstation.com/orcavia',
        'https://www.youtube.com/@orcavia9123',
        'https://discord.gg/MznXAXeYQN',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://orcavia.dev/#website',
      url: 'https://orcavia.dev/',
      name: 'Orcavia',
      description: pageDescription,
      publisher: { '@id': 'https://orcavia.dev/#organization' },
      inLanguage: 'en',
    },
    {
      '@type': 'ItemList',
      '@id': 'https://orcavia.dev/#products',
      name: 'Orcavia Blender add-ons',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareApplication',
          name: product.name,
          applicationCategory: 'Blender Add-on',
          operatingSystem: 'Windows, macOS, Linux',
          url: product.href,
          description: product.summary,
          creator: { '@id': 'https://orcavia.dev/#organization' },
          subjectOf: product.docsHref
            ? {
                '@type': 'TechArticle',
                name: product.docsLabel || product.name + ' documentation',
                url: product.docsHref,
              }
            : undefined,
        },
      })),
    },
    {
      '@type': 'TechArticle',
      '@id': 'https://orcavia.dev/Easeam-doc/#documentation',
      name: 'Easeam 2 Blender UV seam marking and unwrap documentation',
      url: 'https://orcavia.dev/Easeam-doc/',
      about: [
        'Blender add-on',
        'UV seam marking',
        'Blender unwrap workflow',
        'UV island cleanup',
        'UV map management',
      ],
      isPartOf: { '@id': 'https://orcavia.dev/#website' },
      publisher: { '@id': 'https://orcavia.dev/#organization' },
    },
  ],
};

const easeamProduct = products.find((product) => product.slug === 'easeam');

function Icon({ name }) {
  const paths = {
    discord: (
      <>
        <path d="M7.7 7.4c1.2-.9 2.4-1.3 3.7-1.5l.4.8c1.5-.2 3-.2 4.4 0l.4-.8c1.3.2 2.6.7 3.7 1.5 1.8 2.6 2.6 5.5 2.3 8.3-1.5 1.1-2.9 1.8-4.3 2.1l-1-1.4c.6-.2 1.2-.5 1.7-.8-.1-.1-.3-.2-.4-.3-3.2 1.5-6.5 1.5-9.7 0-.1.1-.3.2-.4.3.5.3 1.1.6 1.7.8l-1 1.4c-1.5-.3-2.9-1-4.3-2.1-.2-3 .6-5.8 2.3-8.3Z" />
        <path d="M10.8 13.5c.7 0 1.2-.6 1.2-1.3s-.5-1.3-1.2-1.3-1.2.6-1.2 1.3.6 1.3 1.2 1.3Zm6.4 0c.7 0 1.2-.6 1.2-1.3s-.5-1.3-1.2-1.3-1.2.6-1.2 1.3.5 1.3 1.2 1.3Z" />
      </>
    ),
    artstation: <path d="M4.4 18.4 10.8 7.3l2.4 4.2-4 6.9H4.4Zm6.3 0 3.1-5.4 3.1 5.4h-6.2Zm4.2-10.9 6.7 11.6c.5.8-.1 1.9-1.1 1.9h-2.2L11.1 8.5l.7-1.2c.7-1.2 2.4-1.2 3.1.2Z" />,
    superhive: <path d="M12 3.5 19.4 8v8L12 20.5 4.6 16V8L12 3.5Zm0 3.2L7.4 9.5v5l4.6 2.8 4.6-2.8v-5L12 6.7Zm0 3 2.1 1.3v2L12 14.3 9.9 13v-2L12 9.7Z" />,
    youtube: (
      <>
        <path d="M21.5 8.2c-.2-.9-.9-1.5-1.8-1.8C18.2 6 12 6 12 6s-6.2 0-7.7.4c-.9.3-1.6.9-1.8 1.8C2 9.7 2 12 2 12s0 2.3.5 3.8c.2.9.9 1.5 1.8 1.8 1.5.4 7.7.4 7.7.4s6.2 0 7.7-.4c.9-.3 1.6-.9 1.8-1.8.5-1.5.5-3.8.5-3.8s0-2.3-.5-3.8Z" />
        <path d="m10 15 5.2-3L10 9v6Z" className="iconCutout" />
      </>
    ),
    grid: <path d="M4 4h7v7H4V4Zm9 0h7v7h-7V4ZM4 13h7v7H4v-7Zm9 0h7v7h-7v-7Z" />,
    external: <path d="M7 7h7v2H9v6H7V7Zm8-3h5v5h-2V7.4l-7.3 7.3-1.4-1.4L16.6 6H15V4Zm-9 4H4v12h12v-2H6V8Z" />,
    docs: <path d="M6 3h9l3 3v15H6V3Zm8 1.8V7h2.2L14 4.8ZM8 11h8V9H8v2Zm0 4h8v-2H8v2Zm0 4h6v-2H8v2Z" />,
    email: <path d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2Zm0 3.2V17h16V8.2l-8 5.2-8-5.2Zm1.2-1.2 6.8 4.4L18.8 7H5.2Z" />,
  };

  return (
    <svg className={`icon icon--${name}`} viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function ProductCard({ product }) {
  return (
    <article className={`productCard productCard--${product.accent}`}>
      <div>
        <p className="eyebrow">{product.eyebrow}</p>
        <h3>{product.name}</h3>
        <p>{product.summary}</p>
      </div>
      <div className="cardActions">
        <Link className="cardLink" href={product.href}>
          View product
        </Link>
        <Link className="cardLink cardLink--details" to={`/products/${product.slug}`}>
          Details
        </Link>
        {product.docsHref && (
          <Link className="cardLink cardLink--docs" href={product.docsHref}>
            <Icon name="docs" />
            {product.docsCardLabel || product.docsLabel || 'Documentation'}
          </Link>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <Layout
      title="Blender Add-ons, UV Tools, and 3D Portfolio"
      description={pageDescription}
    >
      <Head>
        <link rel="canonical" href="https://orcavia.dev/" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <main>
        <Link className="floatingDiscord" href="https://discord.gg/MznXAXeYQN">
          <Icon name="discord" />
          Join our Discord
        </Link>

        <section className="hero">
          <div className="hero__inner">
            <div className="brandPanel" aria-label="Orcavia brand mark">
              <img
                src="/img/orcavia-logo.svg"
                alt="Orcavia logo"
                width="1366"
                height="768"
                fetchPriority="high"
              />
            </div>
            <div className="hero__copy">
              <p className="eyebrow">Blender add-ons and 3D production assets</p>
              <h1>Orcavia Blender Add-ons and 3D Production Tools</h1>
              <p className="hero__lead">
                Self-taught developer and 3D artist creating Blender add-ons, production tools, and game-ready assets from practical everyday workflow needs.
              </p>
              <div className="hero__actions">
                <Link className="buttonPrimary" to="#products">
                  <Icon name="grid" />
                  Browse products
                </Link>
                <Link className="buttonSecondary" href="https://www.artstation.com/orcavia">
                  <Icon name="external" />
                  View portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="linkBand" aria-label="Orcavia links">
          <div className="pageShell linkGrid">
            {socials.map((social) => (
              <Link key={social.href} href={social.href}>
                <Icon name={social.icon} />
                {social.label}
              </Link>
            ))}
          </div>
        </section>

        {easeamProduct && (
          <section className="docsSpotlight" aria-labelledby="easeam-docs-title">
            <div className="pageShell docsSpotlight__inner">
              <div>
                <p className="eyebrow">Featured documentation</p>
                <h2 id="easeam-docs-title">Easeam 2 Blender UV seam and unwrap documentation</h2>
                <p>
                  Learn the Easeam 2 workflow for Blender UV seam marking, unwrap passes,
                  UV island cleanup, and UV map management. Start from the docs index, then
                  jump into operator guides for seam loops, tube seams, flat-area seams,
                  Re-Unwrap, and UV Maps Manager.
                </p>
              </div>
              <Link className="buttonPrimary docsSpotlight__link" href={easeamProduct.docsHref}>
                <Icon name="docs" />
                {easeamProduct.docsLabel}
              </Link>
            </div>
          </section>
        )}

        <section className="section pageShell" id="products">
          <div className="sectionHeader">
            <p className="eyebrow">Products</p>
            <h2>Blender add-ons by Orcavia</h2>
            <p>
              Practical Blender add-ons built to support everyday modelling workflows, from UV cleanup and modifier handling to mirroring, duplication, curve rigs, and lattice deformation.
            </p>
          </div>
          <div className="productGrid">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        <section className="portfolio" id="portfolio">
          <div className="pageShell portfolio__inner">
            <div className="portfolio__copy">
              <h2>Tools and assets made around practical Blender production.</h2>
              <Link className="buttonPrimary buttonPrimary--dark" href="https://superhivemarket.com/creators/orcavia">
                Open Superhive creator page
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
