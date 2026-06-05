import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import products from '../data/products';

export function getProduct(slug) {
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    throw new Error(`Unknown product slug: ${slug}`);
  }
  return product;
}

export default function ProductPage({ product }) {
  const canonical = `https://orcavia.dev/products/${product.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: 'Blender Add-on',
    operatingSystem: 'Windows, macOS, Linux',
    url: canonical,
    sameAs: product.href,
    description: product.description,
    creator: {
      '@type': 'Organization',
      name: 'Orcavia',
      url: 'https://orcavia.dev/',
    },
  };

  return (
    <Layout title={product.title} description={product.description}>
      <Head>
        <meta name="keywords" content={product.keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>
      <main className="productPage">
        <section className={`productHero productHero--${product.accent}`}>
          <div className="pageShell productHero__inner">
            <p className="eyebrow">{product.eyebrow}</p>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <div className="hero__actions">
              <Link className="buttonPrimary" href={product.href}>
                View on Superhive
              </Link>
              {product.docsHref && (
                <Link className="buttonSecondary" href={product.docsHref}>
                  {product.docsLabel || 'Open documentation'}
                </Link>
              )}
            </div>
          </div>
        </section>
        <section className="section pageShell productDetail">
          <div>
            <p className="eyebrow">Workflow</p>
            <h2>What {product.name} helps with</h2>
            <p>{product.summary}</p>
          </div>
          <ul className="featureList">
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Link className="cardLink" to="/#products">
            Back to products
          </Link>
        </section>
      </main>
    </Layout>
  );
}
