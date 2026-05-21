import React from 'react';
import ProductPage, { getProduct } from '../../components/ProductPage';

export default function ShadingmodPage() {
  return <ProductPage product={getProduct('shadingmod')} />;
}
