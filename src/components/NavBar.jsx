import React from "react";

const NavBar = () => {
  return (
    <div className="p-4 lg:px-8 flex items-center justify-between bg-[#131313]">
      <h2 className="text-2xl font-medium text-white">
        PHOTO<span className=" text-yellow-400">LAND</span>
      </h2>

      <div className="hidden lg:block">
        <div className="relative  flex  flex-wrap items-stretch">
          <input
            type="search"
            className="relative  m-0 w-[40em]   bg-white text-black -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary "
            placeholder="Search for a product..."
            aria-label="Search"
            aria-describedby="button-addon1"
          />

          <button
            className="relative z-[2] flex items-center rounded-r bg-yellow-500 px-6  text-xs font-medium uppercase  text-[#151414] shadow-md transition duration-150 ease-in-out active:bg-primary-800 active:shadow-lg"
            type="button"
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
      <h2 className="text-white lg:text-xl text-sm">Need Help? Call 123456789</h2>
    </div>
  );
};

export default NavBar;
