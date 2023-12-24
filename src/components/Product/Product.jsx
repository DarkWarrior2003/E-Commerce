import React from 'react'
// import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import { data } from '../../data';
const Product = () => {
    
    const {productID} = useParams();
    const product = data.find((e)=> e.id=== Number(productID))
    
  return (
    <div>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
