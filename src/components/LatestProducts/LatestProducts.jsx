import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, FreeMode, Autoplay } from "swiper/modules";
import LatestProductsCard from "./LatestProductsCard";

import {data} from "../../data"

const LatestProducts = () => {
  return (
    
    <div className="lg:px-10 px-6 pb-10">
      <h2 className=" text-white pb-4 text-2xl">LATEST PRODUCTS</h2>
      <Swiper
        style={{
          "--swiper-navigation-size": "30px",
          "--swiper-navigation-color": "yellow",
          "--swiper-pagination-color": "yellow",
        }}
        modules={[Pagination, Navigation, FreeMode, Autoplay]}
        freeMode
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className=" pt-14 transition-all duration-700"
      >
        {data && data.map((e)=>(
          <SwiperSlide key={e.id}>
            <LatestProductsCard  title={e.title} id={e.id} img={e.img} price={e.price} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestProducts;
