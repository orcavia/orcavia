import React from 'react';
import ProductPage, { getProduct } from '../../components/ProductPage';

export default function QuickmodPage() {
  return <ProductPage product={getProduct('quickmod')} />;
}
