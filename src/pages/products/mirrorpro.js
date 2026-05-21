import React from 'react';
import ProductPage, { getProduct } from '../../components/ProductPage';

export default function MirrorproPage() {
  return <ProductPage product={getProduct('mirrorpro')} />;
}
