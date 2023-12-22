import React from 'react'
import { FaYoutube, FaInstagram, FaFacebookSquare, FaCopyright } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-[#101010] flex items-center p-8 lg:p-14 gap-6 flex-col '>
      <p className='text-white text-[18px]  lg:text-2xl '>SUBSCRIBE TO OUR NEWS LETTER</p>
      <p className=' text-gray-500 text-xs text-center lg:text-sm pb-8'>BE THE FIRST TO GET THE LATEST NEWS ABOUT TRENDS, PROMOTION AND MUCH MORE</p>
      <div className=" ">
        <div className="relative  flex items-stretch">
          <input
            type="search"
            className="m-0 relative w-[15em] lg:w-[30em]  placeholder-[#797878] placeholder:text-sm    bg-white text-black mr-2 block flex-auto rounded-[4px] border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary "
            placeholder="Your Email Address"
            aria-label="Search"
            aria-describedby="button-addon1"
          />

          <button
            className="relative z-[2] py-3  flex items-center rounded-[4px] bg-yellow-500 px-6  text-xs font-medium uppercase  text-[#151414] shadow-md transition duration-150 ease-in-out active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <p className=' font-bold'>Join</p>
          </button>
        </div>
      </div>
      <div className='flex gap-8 lg:gap-14  items-center'>
        <p className='text-[#4b4949] text-center text-[14px]'>Return Policy</p>
        <p className='text-[#4b4949] text-center text-[14px]'>Tracking Your Order</p>
        <p className='text-[#4b4949] text-center text-[14px]'>Shipping & Delivery</p>
      </div>
      <div className='flex text-white gap-8 text-[15px] pt-8 items-center'>
        <FaYoutube/>
        <FaInstagram/>
        <FaXTwitter/>
        <FaFacebookSquare/>
      </div>
      <span className=' w-full border-[0.5px] border-gray-700 '></span>
      <p className='lg:text-sm text-[8px] gap-1 flex text-gray-500'>Copyright <FaCopyright/>  PHOTOLAND 2023. All Rights Reserved</p>
    </div>
  )
}

export default Footer
