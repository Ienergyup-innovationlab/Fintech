import React from "react";
import InputChat from "./InputChat";
import Navchat from "./Navchat";
import { IoIosContact } from "react-icons/io";

const chatSupport = () => {
  return (
    <div>
      <div className="flex w-full bg-white justify-center items-center mt-7">
        <div className="flex w-[1200px] h-[800px] relative bg-gray-200">
          <Navchat />
          <div className=" w-full flex absolute mt-44 justify-center ">
            <h2 className="flex border-none border text-sm p-2 w-16 items-center rounded-sm bg-gray-300 ">
              Today
            </h2>
          </div>
          <div className=" absolute w-full mt-56">
            <IoIosContact color="gray" className="w-10 h-10 ml-10" />
            <h2 className="flex w-[300px] border-none border text-lg p-2 items-center rounded-t-xl bg-white ml-28 -mt-10 ">
              Hi! How can I help you today?
            </h2>
            <h2 className="flex w-[350px] border-none border text-lg p-3 bg-purple items-center rounded-t-xl mr-20 mt-16 float-right text-white">
              {" "}
              Hi, My name is Rachel. I would like to express my disappointment
              and file a complaint
            </h2>
          </div>
          
        </div>
        <InputChat />
      </div>
    </div>
  );
};

export default chatSupport;
