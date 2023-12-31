import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {
  const navigate = useNavigate()
  const [searchTerm, setsearchTerm] = useState("");
  const handlesearch = (e)=>{
    setsearchTerm(e.target.value);
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    
    if(searchTerm.length>0){
      navigate(`/search?query=${searchTerm}`);
      document.querySelector('input').value="";
      setsearchTerm("");
    }
  }
  const handleclick = (e)=>{
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  }
  return (
    <>
     <div className="hidden lg:block">
          <div   className="relative  flex  flex-wrap items-stretch">
            <input
              type="search"
              onKeyDown={handleclick}
              onChange={handlesearch}
              className="relative  m-0 w-[40em]   bg-white text-black -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary "
              placeholder="Search for a product..."
              aria-label="Search"
              aria-describedby="button-addon1"
            />

            <button
              className="relative z-[2] flex items-center rounded-r bg-yellow-500 px-6  text-xs font-medium uppercase  text-[#151414] shadow-md transition duration-150 ease-in-out active:bg-primary-800 active:shadow-lg"
              type="button"
              onClick={handleSubmit}
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <h2 className="text-white pb-3 lg:text-xl text-xs">
          Need Help? Call 123456789
        </h2>
        <div className="lg:hidden px-4 pb-4  block ">
        <div className="relative   flex items-stretch">
          <input
            type="search"
            onKeyDown={handleclick}
            onChange={handlesearch}
            className="m-0 relative w-[15em] lg:w-[30em]  placeholder-[#797878] placeholder:text-sm    bg-white text-black mr-2 block flex-auto rounded-[4px] border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary "
            placeholder="Search for a product"
            aria-label="Search"
            aria-describedby="button-addon1"
          />

          <button
            className="relative z-[2] py-3  flex items-center rounded-[4px] bg-yellow-500 px-6  text-xs font-medium uppercase  text-[#151414] shadow-md transition duration-150 ease-in-out active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            onClick={handleSubmit}
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchForm
