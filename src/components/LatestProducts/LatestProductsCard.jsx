import React from 'react'
import { Link } from 'react-router-dom'

const LatestProductsCard = (props) => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      
    });
  };
  return (
    <div >
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
          <Link to={`/product/${props.id}`}>
          <img
            src={props.img}
            alt=""
            className="w-[160px] h-[160px] hover:scale-110 duration-300 transition-all"
            onClick={scrollToTop}
            />
            </Link>
        </div>
        <div className="flex flex-col p-6 gap-4">
          <div className=" text-yellow-400">{props.category}</div>
          <div className="text-white">
            {props.title}
          </div>
          <div className="text-yellow-400">${props.price}</div>
        </div>
      </div>
    </div>
  )
}

export default LatestProductsCard
