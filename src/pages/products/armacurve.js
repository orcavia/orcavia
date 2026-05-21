import React from 'react';
import ProductPage, { getProduct } from '../../components/ProductPage';

export default function ArmacurvePage() {
  return <ProductPage product={getProduct('armacurve')} />;
}
