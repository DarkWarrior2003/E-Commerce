import React from "react";
import img1 from "../assets/2.png";
import img2 from "../assets/4.png"
import img3 from "../assets/5.png"
const Hero = () => {
  return (
    <div className="  grid lg:grid-cols-3 gap-4  p-6 lg:p-10 text-white">
      


        <div className=" bg-[#1a1919]  rounded-t">
          <div className="bg-yellow-500 rounded-t-lg p-4  ">
            <h2 className=" text-black text-center">Browse Categories</h2>
          </div>

          <div className="flex pt-3 pb-7 px-4 flex-col">
            <a href="/" className="hover:text-gray-400 my-2">
              DSLR
            </a>
            <a href="/" className="hover:text-gray-400 my-2">
              MIRRORLESS
            </a>
            <a href="/" className="hover:text-gray-400 my-2">
              COMPACT
            </a>

            <a href="/" className="hover:text-gray-400 my-2">
              FILM
            </a>
            <a href="/" className="hover:text-gray-400 my-2">
              PROFESSIONAL
            </a>
          </div>
        </div>
        <div className=" rounded-lg relative overflow-hidden p-6 " style={{
              background:
                "linear-gradient(90deg, rgba(68,64,73,1) 0%, rgba(60,63,64,1) 0%, rgba(18,15,22,1) 100%, rgba(0,0,0,1) 100%, rgba(10,19,20,1) 100%)",
            }}><img src={img2} className="  w-[60%] absolute  -top-1 -right-11 opacity-40" alt="" />
            <div className="flex h-full gap-4 z-10 flex-col max-w-[232px]">
              <div>SPECIAL OFFER</div>
              <div className="text-[25px] save  font-medium">
                SAVE 20% ON YOUR FIRST ORDER
              </div>
              <div className=" text-[20px] pt-8 text-yellow-300">SHOP NOW</div>
            </div></div>
        <div className="grid  gap-4">
          <div
            className="   rounded-[8px] overflow-hidden relative p-6"
            style={{
              background:
                "linear-gradient(90deg, rgba(68,64,73,1) 0%, rgba(60,63,64,1) 0%, rgba(18,15,22,1) 100%, rgba(0,0,0,1) 100%, rgba(10,19,20,1) 100%)",
            }}
          >
            <div className="flex h-full gap-4 justify-center flex-col max-w-[144px]">
              <div className="text-[18px] font-medium">
                SAVE 35% ALL DSLR CAMERAS
              </div>
              <div className=" text-yellow-300">SHOP NOW</div>
            </div>
            <img
              src={img1}
              className=" w-[60%] absolute z-20 -top-10 opacity-40 -right-10"
              alt=""
            />
          </div>
          <div
            className="    rounded-[8px] overflow-hidden relative p-6"
            style={{
              background:
                "linear-gradient(90deg, rgba(68,64,73,1) 0%, rgba(60,63,64,1) 0%, rgba(18,15,22,1) 100%, rgba(0,0,0,1) 100%, rgba(10,19,20,1) 100%)",
            }}
          >
            <div className="flex h-full gap-4 justify-center flex-col max-w-[200px]">
              <div className="text-[18px] font-medium">
                SAVE 25% ALL MIRRORLESS CAMERAS
              </div>
              <div className=" text-yellow-300">SHOP NOW</div>
            </div>
            <img
              src={img3}
              className=" w-[60%] absolute z-20 opacity-40 -top-10 -right-10"
              alt=""
            />
          </div>
        </div>
      
    </div>
  );
};

export default Hero;
