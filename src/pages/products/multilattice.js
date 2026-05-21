import React from 'react';
import ProductPage, { getProduct } from '../../components/ProductPage';

export default function MultilatticePage() {
  return <ProductPage product={getProduct('multilattice')} />;
}
