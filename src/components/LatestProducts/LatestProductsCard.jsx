import React from "react";
import { Link } from "react-router-dom";

const LatestProductsCard = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link to={`/product/${props.title}`}>
      <div
        className="  cursor-pointer h-[260px] lg:h-[400px] rounded-[8px] overflow-hidden relative"
        style={{
          background:
            "linear-gradient(90deg, rgba(28,27,29,1) 0%, rgba(18,15,15,1) 80%, rgba(18,15,22,1) 100%, rgba(0,0,0,1) 100%, rgba(10,19,20,1) 100%)",
        }}
      >
        <div className=" w-full lg:h-[200px] flex items-center justify-center relative">
          <div className="absolute bg-yellow-400 text-black text-[12px] font-extrabold uppercase  top-4 right-4 px-2 rounded-full z-10]">
            new
          </div>
          <img
            src={props.img}
            alt=""
            className="lg:w-[160px] lg:h-[160px] w-[120px] h-[120px] hover:scale-110 duration-300 transition-all"
            onClick={scrollToTop}
          />
        </div>
        <div className="flex flex-col p-3 lg:p-6 gap-4">
          <div className=" text-yellow-400">{props.category}</div>
          <div className="text-white lg:text-xl text-xs">
            {props.title.substring(0, 35)}...
          </div>
          <div className="text-yellow-400">${props.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default LatestProductsCard;
