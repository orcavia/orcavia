import React from 'react';
import ProductPage, { getProduct } from '../../components/ProductPage';

export default function DuplicatorPage() {
  return <ProductPage product={getProduct('duplicator')} />;
}
