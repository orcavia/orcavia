import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const socials = [
  { label: 'ArtStation', href: 'https://www.artstation.com/orcavia', icon: 'artstation' },
  { label: 'Superhive', href: 'https://superhivemarket.com/creators/orcavia', icon: 'superhive' },
  { label: 'YouTube', href: 'https://www.youtube.com/@orcavia9123', icon: 'youtube' },
  { label: 'Email', href: 'mailto:mutar.orcavia@gmail.com', icon: 'email' },
];

const products = [
  {
    name: 'Easeam',
    href: 'https://superhivemarket.com/products/easeam',
    docsHref: 'https://orcavia.github.io/Easeam-doc/',
    eyebrow: 'UV tools',
    summary: 'Fast seam marking and unwrap workflow tools for Blender, including flat-area seams, edge loops, tube seams, sharp-edge seams, and Y-verts seam detection.',
    accent: 'red',
  },
  {
    name: 'ShadingMod',
    href: 'https://superhivemarket.com/products/shadingmod',
    eyebrow: 'Shading repair',
    summary: 'A compact toolbox for fixing common mesh shading issues, smoothing normals, and cleaning hard-surface presentation inside Blender.',
    accent: 'silver',
  },
  {
    name: 'QuickMod',
    href: 'https://superhivemarket.com/products/quickmod',
    eyebrow: 'Modifier workflow',
    summary: 'Quick modal access to everyday modifiers such as Array, Bevel, Mirror, Remesh, Screw, Solidify, Wireframe, Boolean, Curve, Lattice, and more.',
    accent: 'blue',
  },
  {
    name: 'MirrorPro',
    href: 'https://superhivemarket.com/products/mirrorpro',
    eyebrow: 'Modeling utility',
    summary: 'One-click mirroring and symmetrizing in any axis direction with an interactive gizmo for faster hard-surface and asset modeling.',
    accent: 'teal',
  },
  {
    name: 'Duplicator',
    href: 'https://superhivemarket.com/products/duplicator',
    eyebrow: 'Object duplication',
    summary: 'Duplicate objects with array, circular, and helper workflows, plus tools for separating arrayed objects and randomizing transforms.',
    accent: 'amber',
  },
  {
    name: 'Armacurve',
    href: 'https://superhivemarket.com/products/armacurve---easy-rig-curve-object',
    eyebrow: 'Curve rigging',
    summary: 'Instant curve rigging tools for converting curves to bones, quick Bezier curve rigs, and adding helper objects to curve points.',
    accent: 'violet',
  },
  {
    name: 'MultiLattice',
    href: 'https://superhivemarket.com/products/multilattice',
    eyebrow: 'Deformation setup',
    summary: 'One-click lattice setup for object and edit mode, including grouped multi-object lattice deformation and quick lattice adjustment.',
    accent: 'green',
  },
];

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
        {product.docsHref && (
          <Link className="cardLink cardLink--docs" href={product.docsHref}>
            <Icon name="docs" />
            Documentation
          </Link>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <Layout
      title="Blender Add-ons and Portfolio"
      description="Orcavia product front page for Blender add-ons, 3D assets, and portfolio links."
    >
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

        <section className="section pageShell" id="products">
          <div className="sectionHeader">
            <p className="eyebrow">Products</p>
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
