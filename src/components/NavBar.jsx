import React from "react";
import SearchForm from "./Search/SearchForm";

const NavBar = () => {
  return (
    <div className="bg-[#131313]">
      <div className="p-4 lg:px-8 flex-col flex lg:flex-row items-center justify-between ">
        <a href="/">
          <h2 className="text-2xl font-medium text-white">
            PHOTO<span className=" text-yellow-400">LAND</span>
          </h2>
        </a>

        <SearchForm/>
        
      </div>
      
    </div>
  );
};

export default NavBar;
