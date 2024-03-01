import React, { useState } from "react";
import Button from "../../LandingPage/components/Button";
import { Link } from "react-router-dom";
import SpeakIcon from "../../images/speakIcon.png";

const SendReport = () => {
  const [selectedRadio, setSelectedRadio] = useState("");

  const isRadioSelected = (value) => {
    return selectedRadio === value;
  };
  const handleRadioClick = (e) => {
    setSelectedRadio(e.target.value);
  };

  return (
    <div className="w-full h-full bg-white border border-none relative font-poppins">
      <div className="justify-center flex ">
        <h1 className="text-black font-extrabold text-2xl mt-20 justify-center flex ">
          Send Report
        </h1>
      </div>

      <div className=" flex flex-col space-y-10 justify-center mt-10 ml-[650px] absolute ">
        <div className="flex items-center">
          <input
            type="radio"
            className="w-4 h-4 cursor-pointer"
            id="Rudeness"
            value="Rudeness"
            checked={selectedRadio === "Rudeness"}
            onChange={handleRadioClick}
          />
          <label htmlFor="Rudeness" className="text-lg pl-20  ">
            Rudeness
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="radio"
            className="w-4 h-4 cursor-pointer"
            id="Stalker"
            value="Stalker"
            checked={selectedRadio === "Stalker"}
            onChange={handleRadioClick}
          />
          <label htmlFor="Stalker" className="text-lg pl-20 ">
            Stalker
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="radio"
            className="w-4 h-4 cursor-pointer"
            id="Harassment"
            value="Harassment"
            checked={selectedRadio === "Harassment"}
            onChange={handleRadioClick}
          />
          <label htmlFor="Harassment" className="text-lg pl-20">
            Harassment
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="radio"
            className="w-4 h-4 cursor-pointer"
            id="insult"
            value="insult"
            checked={selectedRadio === "insult"}
            onChange={handleRadioClick}
          />
          <label htmlFor="insult" className="text-lg pl-20">
            Deliberate Bad Insult
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="radio"
            className="w-4 h-4 cursor-pointer"
            id="Others"
            value="Others"
            checked={selectedRadio === "Others"}
            onChange={handleRadioClick}
          />
          <label htmlFor="Others" className="text-lg pl-20">
            Others
          </label>
        </div>
      </div>

      <div className="flex justify-center mt-40">
        <h1 className="mt-60 text-black font-medium text-xl mr-96">
          Please Explain
        </h1>
        <input
          type="text"
          className="w-2/4 h-2 border border-transparent border-b-gray-500 outline-none mt-72 text-black font-poppins p-5 absolute ml-20"
          placeholder="Details of the incident"
        />
      </div>

      <div className="flex justify-center items-center space-x-64 mt-36">
        <Button
          text="Report"
          url="/"
          variant="bg-white text-black md:hover:bg-violet-950 transition-all md:bg-purple items-center justify-center w-[250px] h-12 capitalize flex rounded-xl md:text-white font-semibold text-lg mt-2"
        />
        <Button
          text="Cancel"
          url="/"
          variant="bg-white text-black md:hover:bg-violet-950 transition-all md:bg-gray-300 items-center justify-center w-[250px] h-12 capitalize flex rounded-xl md:text-white font-semibold text-lg mt-2"
        />
      </div>

      <div className="flex items-end mt-16 justify-end">
        <input
          type="text"
          className="w-[495px] h-2 border border-neutral-500 outline-none rounded-t-lg text-black font-poppins p-5 -mt-5 mr-2"
          placeholder="Would you like to chat with the customer support system?"
        />
        <Link to="/chatSupport">
          <img
            src={SpeakIcon}
            className="size-14 cursor-pointer mr-10 -mt-5"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default SendReport;
