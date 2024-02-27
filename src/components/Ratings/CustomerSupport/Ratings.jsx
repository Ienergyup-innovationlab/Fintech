import React from "react";
import excel from "../../images/excellent.png";
import good from "../../images/good.png";
import average from "../../images/average.png";
import poor from "../../images/poor.png";
import Button from "../../LandingPage/components/Button";

const Ratings = () => {
  return (
    <div className="w-full h-auto bg-white border border-none font-poppins relative">
      <div className="flex items-center justify-center">
        <h1 className="text-black font-extrabold text-2xl mt-[71px] items-center">
          Customer Satisfaction
        </h1>
        <h2 className="text-black font-bold mt-[180px] text-sm absolute  ">
          How Do You Rate Our Service
        </h2>
      </div>
      <div className="flex justify-center space-x-20 ">
        <img
          src={excel}
          className="w-20 h-20 mt-[100px]  hover:bg-green-300 cursor-pointer "
          alt=""
        />

        <img
          src={good}
          className="w-20 h-20  mt-[100px]  hover:bg-blue-300 cursor-pointer "
          alt=""
        />

        <img
          src={average}
          className="w-20 h-20 mt-[100px]  hover:bg-yellow-200 cursor-pointer"
          alt=""
        />

        <img
          src={poor}
          className="w-20 h-20  mt-[100px] hover:bg-rose-300 cursor-pointer "
          alt=""
        />
      </div>
      <div className="flex justify-center space-x-[108px] ">
        <h1 className="text-black font-extrabold mt-10 hover:bg-violet-100 cursor-pointer hover:underline">
          Excellent
        </h1>
        <h1 className="text-black font-extrabold mt-10  hover:bg-violet-100 cursor-pointer hover:underline">
          Good
        </h1>
        <h1 className="text-black font-extrabold mt-10  hover:bg-violet-100 cursor-pointer hover:underline">
          Average
        </h1>
        <h1 className="text-black font-extrabold mt-10  hover:bg-violet-100 cursor-pointer hover:underline">
          Poor
        </h1>
      </div>
      <div className="flex relative justify-center">
        <h1 className="mt-20 text-black font-bold text-xl mr-[900px]">
          Your Review
        </h1>
        <input
          type="text"
          className="w-[1200px] h-[100px] border border-neutral-200 bg-slate-100 outline-none mt-[150px] text-black font-poppins p-5 absolute ml-20 rounded-lg"
          placeholder="What do you like or dislike about this app?"
        ></input>
      </div>
      <div className="flex justify-center">
        <h1 className="mt-[220px]  text-black font-bold text-xl ">
          Thank You For Your Feedback
        </h1>
      </div>
      <div className="flex justify-center space-x-2">
        <Button
          text="submit"
          url="/sendReport"
          variant=" bg-white text-black md:hover:bg-violet-950 transition-all md:bg-purple items-center justify-center w-[250px] h-12  capitalize flex  rounded-xl md:text-white font-semibold text-lg mt-8"
        />
        <Button
          text="Maybe Later"
          url="/"
          variant=" bg-white text-black md:hover:bg-violet-950 transition-all md:bg-purple items-center justify-center w-[250px] h-12  capitalize flex  rounded-xl md:text-white font-semibold text-lg mt-8"
        />
      </div>
    </div>
  );
};

export default Ratings;
