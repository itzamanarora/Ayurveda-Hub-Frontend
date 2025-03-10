import React from 'react'
import Product_card from '../../Components/Products/Product_card'
import './products.css';
import Loading_ProductCard from '../../Components/Loading/Products Card/Loading_ProductCard';
import Mid_Bar from '../../Components/Mid-bar/Mid_Bar';
import Pagination from '../../Components/Pagination/Pagination';
import Line from '../../Components/Mid-bar/Line';
import Mid_Bar_Sale  from '../../Components/Mid-bar/Mid_Bar_Sale';

function Skin() {
  return (
    <>
      <Mid_Bar_Sale text={'Use Code FIRST50 - & get Flat 50% OFF on your first Order!'} />
      <Mid_Bar text={'Items Loading'} />
      <div className='outer-container'>
        <p></p>
        <div className='product-section'>
          <Loading_ProductCard />
          <Loading_ProductCard />
          <Loading_ProductCard />
          <Loading_ProductCard />
          <Loading_ProductCard />
          <Loading_ProductCard />
          <Product_card />
          <Product_card />
          <Product_card />
          <Product_card />
        </div>
        <Line />
        <div className='pagination'>
          <Pagination currentPage={1} totalPages={4} onPageChange={10} />
        </div>
      </div>
    </>
  )
}

export default Skin