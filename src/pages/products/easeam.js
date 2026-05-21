import React from 'react';
import ProductPage, { getProduct } from '../../components/ProductPage';

export default function EaseamPage() {
  return <ProductPage product={getProduct('easeam')} />;
}
