import React from "react";
import farmtechimg from "../images/farmtech-img.png";
import documentimg from "../images/documenttext.png";
import { Link } from "react-router-dom";
import Button from "../LandingPage/components/Button";

const FarmTech = () => {
  return (
    <div className="w-[1440px] h-[1024px] font-poppins">
      <div className="w-auto h-auto relative flex items-center  bg-white">
        <div className="left-[620px] absolute flex items-start ">
          <p className="mt-[43px] text-3xl font-bold ">Farmtech</p>
          <Button
            url="/EditPage"
            variant="ml-[417px] mt-[43px] py-3 px-2 text-xl text-center w-20 text-white"
            text="Edit"
          />

          {/* <p className="ml-[317px] mt-[43px] underline ">Schedule a meeting</p> */}
        </div>
        <div className="w-[182px] h-[182px] top-[117px] left-[617px] absolute bg-white border border-neutral-400 rounded-full ">
          <img className="rounded-full w-[182px] h-[182px]" src={farmtechimg} />
          <p className="text-black font-poppins font-bold text-2xl mt-10">
            N3,000,000
          </p>
          <p className="text-black font-normal">Get 15% interest back</p>
        </div>
        {/* <div className=" flex items-center absolute">
          <p className="text-black font-poppins font-bold text-2xl ">
            N3,000,000
          </p>
          <p className="text-black font-normal">Get 15% interest back</p>
        </div> */}
        <div className="w-[262px] h-[36px] left-[99px] top-[448px] ">
          <p className="absolute text-black underline w-[289px] h-[23px] left-[99px] top-[448px] font-bold text-2xl ">
            About the business
          </p>
        </div>
        <p className="w-[1242px] h-[30px] top-[498px] left-[99px] absolute text-black font-normal text-lg text-left">
          Farmtech is an agro-tech business that connects farmers to consumers.
          We sell all kind of food produce, proteins and so on.
        </p>
        <div className="w-[305px] h-[23px] left-[99px] top-[571px] absolute">
          <p className="underline font-bold text-2xl">Purpose of investment</p>
        </div>
        <p className="w-[781px] h-[30px] top-[630px] left-[99px] absolute text-black font-normal text-lg text-left">
          Farmtech needs investment to be able to expand and reach a wider
          audience
        </p>
        <div className="w-[306px] h-[23px] left-[99px] top-[687px] absolute">
          <p className="text-black font-bold text-2xl underline">
            Documents Uploaded
          </p>
        </div>
        <div className="w-[150px] h-[150px] top-[757px] left-[99px] absolute flex gap-[46px] center">
          <img className="" src={documentimg} />
          <img className="" src={documentimg} />
          <img className="" src={documentimg} />
          <img className="" src={documentimg} />
          <img className="" src={documentimg} />
        </div>
      </div>
    </div>
  );
};

export default FarmTech;
