import React from "react";
import farmtechimg from "../images/farmtech-img.png";
import { Link } from "react-router-dom";
import Button from "../LandingPage/components/Button";

const edit = () => {
  return (
    <div className="flex flex-col items-center font-poppins">
      <div className="flex items-center ">
        <p className="mt-[43px] mb-20 items-center text-3xl text-center flex font-normal underline">
          Edit
        </p>
      </div>
      <div className="w-[182px] h-[182px] relative flex items-center bg-white border border-neutral-400 rounded-full ">
        <img className="rounded-full w-[182px] h-[182px]" src={farmtechimg} />
      </div>
      <form>
        <section className="w-full flex flex-col pt-10 ">
          <input
            type="text"
            id="fullName"
            name="names"
            className="py-4  rounded-lg w-[560px] px-2 border border-transparent bg-grey mb-10 text-black"
            required
            aria-describedby="fullName-error"
            placeholder="&#xf007; &nbsp; FarmTech"
          />
        </section>
        <section className="w-full flex flex-col">
          <input
            type="email"
            id="emailAdd"
            name="email"
            className="py-4  rounded-lg w-[560px] px-2 border border-transparent bg-grey mb-10 text-black"
            required
            aria-describedby="emailAddress-error"
            placeholder="&#xf0e0; &nbsp; Farmtech@gmail.com"
          />
        </section>
        <section className="w-full flex flex-col">
          <input
            type="tel"
            id="phoneNum"
            name="phone"
            className="py-4  rounded-lg w-[560px] px-2 border border-transparent bg-grey mb-10 text-black"
            required
            aria-describedby="phoneNumber-error"
            placeholder="&#x260E; &nbsp;+234 8000000001"
          />
        </section>
        <section className="w-full flex flex-col">
          <input
            type="text"
            id="homeAdd"
            name="homeAddress"
            className="py-4  rounded-lg w-[560px] px-2 border border-transparent bg-grey mb-10 text-black"
            required
            aria-describedby="homeAddress-error"
            placeholder="&#61461; &nbsp; Grandsquare, Ago Palace, Lagos, Nigeria"
          />
        </section>
        <section className="w-full flex">
          <div className="bar font-500 text-lg inline-block relative mt-15px ">
            <p>Equity Available for Investors (%)</p>
            {/* <div className="thumb relative inline-block bg-black border border-60px w-[100%] h-[20px]">
              <span className="absolute bg-purple border border-neutral-400 h-[12px] top-0 left-0 content-none w-full ">75%</span>
            </div> */}
          </div>
        </section>

        <section className="w-[300px] flex flex-col mt-12">
          <Button
            url="/"
            variant=" mt-[43px] py-3 px-2 text-xl text-center ml-[150px] w-full text-white"
            text="Delete Listing"
          />
          {/* <button
            type="submit"
            className="p-4 flex items-center font-bold justify-center ml-[200px] rounded-lg border border-transparent bg-primary text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800"
          >
            <Link to="/">Delete Listing </Link>
          </button> */}
        </section>
      </form>
    </div>
  );
};

export default edit;
