import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdArrowBackIos } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import { FaHeadset } from "react-icons/fa";

const Navchat = () => {
  return (
    <div className="w-full h-28 bg-white border border-gray-200 ">
      <div className="flex absolute items-center mt-14 font-poppins  ">
        <MdArrowBackIos color="gray" className=" w-10 h-10 ml-5 " />
        <FaHeadset color="gray" className="w-12 h-12 ml-12" />
       
        <span className="text-2xl font-bold ml-5 w-[300px] h-12 flex ">
          Rachel
        </span>
        <span className="text-md font-normal -ml-72 w-[10px] h-2 pt-3 flex ">
          Online
        </span>
        <BsFillTelephoneFill color="gray" className="w-8 h-8 ml-[800px] -m" />
        <CiMenuKebab className="w-10 h-10 ml-20" />
      </div>
    </div>
  );
};

export default Navchat;
