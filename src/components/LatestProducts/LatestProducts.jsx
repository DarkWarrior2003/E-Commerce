import React from "react";
import img1 from "../assets/2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation} from 'swiper/modules'
const LatestProducts = () => {
  return (
    <div className="lg:px-10 px-6 pb-10">
      <h2 className=" text-white pb-4 text-2xl">LATEST PRODUCTS</h2>
      <Swiper
          style={{"--swiper-navigation-size": "30px","--swiper-navigation-color": "yellow","--swiper-pagination-color":"yellow"}}
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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
          className=" pt-14 "
        >
        <SwiperSlide>
        <div
        className="  cursor-pointer h-[362px] rounded-[8px] overflow-hidden relative"
        style={{
          background:
            "linear-gradient(90deg, rgba(28,27,29,1) 0%, rgba(18,15,15,1) 80%, rgba(18,15,22,1) 100%, rgba(0,0,0,1) 100%, rgba(10,19,20,1) 100%)",
        }}
      >
        <div className=" w-full h-[200px] flex items-center justify-center relative">
          <div className="absolute bg-yellow-400 text-black text-[12px] font-extrabold uppercase  top-4 right-4 px-2 rounded-full z-10]">
            new
          </div>
          <img
            src={img1}
            alt=""
            className="w-[160px] h-[160px] hover:scale-110 duration-300 transition-all"
          />
        </div>
        <div className="flex flex-col p-6 gap-4">
          <div className=" text-yellow-400">DSLR</div>
          <div className="text-white">
            Nikon D850 Camera DSLR 45.7MP CMOS Body
          </div>
          <div className="text-yellow-400">$199</div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
        className=" cursor-pointer h-[362px] rounded-[8px] overflow-hidden relative"
        style={{
          background:
            "linear-gradient(90deg, rgba(28,27,29,1) 0%, rgba(18,15,15,1) 80%, rgba(18,15,22,1) 100%, rgba(0,0,0,1) 100%, rgba(10,19,20,1) 100%)",
        }}
      >
        <div className=" w-full h-[200px] flex items-center justify-center relative">
          <div className="absolute bg-yellow-400 text-black text-[12px] font-extrabold uppercase  top-4 right-4 px-2 rounded-full z-10]">
            new
          </div>
          <img
            src={img1}
            alt=""
            className="w-[160px] h-[160px] hover:scale-110 duration-300 transition-all"
          />
        </div>
        <div className="flex flex-col p-6 gap-4">
          <div className=" text-yellow-400">DSLR</div>
          <div className="text-white">
            Nikon D850 Camera DSLR 45.7MP CMOS Body
          </div>
          <div className="text-yellow-400">$199</div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
        className=" cursor-pointer h-[362px] rounded-[8px] overflow-hidden relative"
        style={{
          background:
            "linear-gradient(90deg, rgba(28,27,29,1) 0%, rgba(18,15,15,1) 80%, rgba(18,15,22,1) 100%, rgba(0,0,0,1) 100%, rgba(10,19,20,1) 100%)",
        }}
      >
        <div className=" w-full h-[200px] flex items-center justify-center relative">
          <div className="absolute bg-yellow-400 text-black text-[12px] font-extrabold uppercase  top-4 right-4 px-2 rounded-full z-10]">
            new
          </div>
          <img
            src={img1}
            alt=""
            className="w-[160px] h-[160px] hover:scale-110 duration-300 transition-all"
          />
        </div>
        <div className="flex flex-col p-6 gap-4">
          <div className=" text-yellow-400">DSLR</div>
          <div className="text-white">
            Nikon D850 Camera DSLR 45.7MP CMOS Body
          </div>
          <div className="text-yellow-400">$199</div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
        className=" cursor-pointer h-[362px] rounded-[8px] overflow-hidden relative"
        style={{
          background:
            "linear-gradient(90deg, rgba(28,27,29,1) 0%, rgba(18,15,15,1) 80%, rgba(18,15,22,1) 100%, rgba(0,0,0,1) 100%, rgba(10,19,20,1) 100%)",
        }}
      >
        <div className=" w-full h-[200px] flex items-center justify-center relative">
          <div className="absolute bg-yellow-400 text-black text-[12px] font-extrabold uppercase  top-4 right-4 px-2 rounded-full z-10]">
            new
          </div>
          <img
            src={img1}
            alt=""
            className="w-[160px] h-[160px] hover:scale-110 duration-300 transition-all"
          />
        </div>
        <div className="flex flex-col p-6 gap-4">
          <div className=" text-yellow-400">DSLR</div>
          <div className="text-white">
            Nikon D850 Camera DSLR 45.7MP CMOS Body
          </div>
          <div className="text-yellow-400">$199</div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
        className=" cursor-pointer h-[362px] rounded-[8px] overflow-hidden relative"
        style={{
          background:
            "linear-gradient(90deg, rgba(28,27,29,1) 0%, rgba(18,15,15,1) 80%, rgba(18,15,22,1) 100%, rgba(0,0,0,1) 100%, rgba(10,19,20,1) 100%)",
        }}
      >
        <div className=" w-full h-[200px] flex items-center justify-center relative">
          <div className="absolute bg-yellow-400 text-black text-[12px] font-extrabold uppercase  top-4 right-4 px-2 rounded-full z-10]">
            new
          </div>
          <img
            src={img1}
            alt=""
            className="w-[160px] h-[160px] hover:scale-110 duration-300 transition-all"
          />
        </div>
        <div className="flex flex-col p-6 gap-4">
          <div className=" text-yellow-400">DSLR</div>
          <div className="text-white">
            Nikon D850 Camera DSLR 45.7MP CMOS Body
          </div>
          <div className="text-yellow-400">$199</div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
        className=" cursor-pointer h-[362px] rounded-[8px] overflow-hidden relative"
        style={{
          background:
            "linear-gradient(90deg, rgba(28,27,29,1) 0%, rgba(18,15,15,1) 80%, rgba(18,15,22,1) 100%, rgba(0,0,0,1) 100%, rgba(10,19,20,1) 100%)",
        }}
      >
        <div className=" w-full h-[200px] flex items-center justify-center relative">
          <div className="absolute bg-yellow-400 text-black text-[12px] font-extrabold uppercase  top-4 right-4 px-2 rounded-full z-10]">
            new
          </div>
          <img
            src={img1}
            alt=""
            className="w-[160px] h-[160px] hover:scale-110 duration-300 transition-all"
          />
        </div>
        <div className="flex flex-col p-6 gap-4">
          <div className=" text-yellow-400">DSLR</div>
          <div className="text-white">
            Nikon D850 Camera DSLR 45.7MP CMOS Body
          </div>
          <div className="text-yellow-400">$199</div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
        className=" cursor-pointer h-[362px] rounded-[8px] overflow-hidden relative"
        style={{
          background:
            "linear-gradient(90deg, rgba(28,27,29,1) 0%, rgba(18,15,15,1) 80%, rgba(18,15,22,1) 100%, rgba(0,0,0,1) 100%, rgba(10,19,20,1) 100%)",
        }}
      >
        <div className=" w-full h-[200px] flex items-center justify-center relative">
          <div className="absolute bg-yellow-400 text-black text-[12px] font-extrabold uppercase  top-4 right-4 px-2 rounded-full z-10]">
            new
          </div>
          <img
            src={img1}
            alt=""
            className="w-[160px] h-[160px] hover:scale-110 duration-300 transition-all"
          />
        </div>
        <div className="flex flex-col p-6 gap-4">
          <div className=" text-yellow-400">DSLR</div>
          <div className="text-white">
            Nikon D850 Camera DSLR 45.7MP CMOS Body
          </div>
          <div className="text-yellow-400">$199</div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
        className=" cursor-pointer h-[362px] rounded-[8px] overflow-hidden relative"
        style={{
          background:
            "linear-gradient(90deg, rgba(28,27,29,1) 0%, rgba(18,15,15,1) 80%, rgba(18,15,22,1) 100%, rgba(0,0,0,1) 100%, rgba(10,19,20,1) 100%)",
        }}
      >
        <div className=" w-full h-[200px] flex items-center justify-center relative">
          <div className="absolute bg-yellow-400 text-black text-[12px] font-extrabold uppercase  top-4 right-4 px-2 rounded-full z-10]">
            new
          </div>
          <img
            src={img1}
            alt=""
            className="w-[160px] h-[160px] hover:scale-110 duration-300 transition-all"
          />
        </div>
        <div className="flex flex-col p-6 gap-4">
          <div className=" text-yellow-400">DSLR</div>
          <div className="text-white">
            Nikon D850 Camera DSLR 45.7MP CMOS Body
          </div>
          <div className="text-yellow-400">$199</div>
        </div>
      </div>
        </SwiperSlide>
        
        
      </Swiper>
      
    </div>
  );
};

export default LatestProducts;
