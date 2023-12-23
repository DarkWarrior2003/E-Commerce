import React from "react";
import { data } from "../../data";
import LatestProductsCard from "../LatestProducts/LatestProductsCard";
const ShopCategory = (props) => {
  return (
    <div className="container p-3 lg:p-8 mx-auto">
        <h2 className="text-white pb-4">Showing Producsts on {props.category}</h2>
      <div className="grid grid-cols-2 gap-[10px] lg:gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3">
        
        {data &&
          data.map((e) =>
            props.category === e.category ? (
              
              <div key={e.id}>
                <LatestProductsCard
                  title={e.title}
                  id={e.id}
                  img={e.img}
                  price={e.price}
                />
              </div>
            ) : (
              <div></div>
            )
          )}
      </div>
    </div>
  );
};

export default ShopCategory;
