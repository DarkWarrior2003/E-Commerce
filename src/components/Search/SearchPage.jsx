import React from 'react'
import { useLocation } from 'react-router-dom'
import { data } from '../../data';
import LatestProductsCard from '../LatestProducts/LatestProductsCard';
const SearchPage = () => {
  const location = useLocation();
  const searchParms = new URLSearchParams(location.search);
  const searchTerm = searchParms.get('query');
  
  
  const product = data.filter((e)=> e.title.toLowerCase().includes(searchTerm.toLowerCase()))
  console.log(product);
  return (
    <div className="container p-3 lg:p-8 mx-auto">
        <h2 className="text-white pb-4">Showing Producsts For {searchTerm.substring(0,1).toUpperCase().concat(searchTerm.substring(1))}</h2>
    <div className="grid grid-cols-2 gap-[10px] lg:gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3">
      {product && product.map((e)=>(
        <div key={e.id}>
        <LatestProductsCard
          title={e.title}
          id={e.id}
          img={e.img}
          price={e.price}
        />
      </div>
      ))}
    </div>
    </div>
  )
}

export default SearchPage
