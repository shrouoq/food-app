import React from 'react'
import SubSlider from './../components/subSlider/SubSkider';
import ProductsTable from '../components/productsTable/ProductTable';

export default function Cart() {
  return (
    <div className='cart'>
      <SubSlider titl={'your cart'} />
      <ProductsTable />
    </div>
  )
}
