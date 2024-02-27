import React from "react";
import { BsSearch } from "react-icons/bs";

const Navbarchat = () => {
  return (
    <div className="w-full h-[180px] bg-sidebarbg">
      <div className=" flex relative w-[500px] h-16px py-4px border border-none">
        <input
          className="float-left w-198px h-20 mt-20 border border-none bg-inherit px-5 font-poppins text-white font-regular outline-none"
          type="text"
          placeholder="Search"
        />
        <BsSearch
          color="white"
          className="block float-right w-7 h-7 border border-none outline-none mt-[100px]"
        />
        <a href="#"></a>
      </div>
    </div>
  );
};

export default Navbarchat;
