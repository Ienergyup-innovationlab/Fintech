/* eslint-disable react/prop-types */
import Button from "../LandingPage/components/Button";
import Logo from "/Logo.png";
import { Link } from "react-router-dom";

export default function StepOne({ onNext }) {
  return (
    <div>
      <div className="bg-purple min-h-screen">
        {/* Hero Section */}
        <div className="hero hidden md:flex flex-row pt-5 pl-4 justify-around items-center w-full">
          <div>
            <Link to="/" className={`flex items-center gap-x-1`}>
              <img
                src={Logo}
                alt="Company logo"
                className="w-12 h-12 md:w-10 md:h-10 lg:w-14 lg:h-14"
              />
              <h1 className="text-lg lg:text-xl font-semibold text-white">
                FundCraft
              </h1>
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <h2 className="px-3 text-xl text-white capitalize font-semibold cursor-pointer">
              invest
            </h2>
            <h2 className="px-3 text-xl text-white capitalize font-semibold cursor-pointer">
              learn
            </h2>
            <h2 className="px-3 text-xl text-white capitalize font-semibold cursor-pointer">
              loan
            </h2>
          </div>

          <div className="">
            <Button
              text="Login"
              variant="bg-white py-2 px-3 text-xl"
              url="/login"
            />
            <Button
              text="Signup"
              variant="bg-white py-2 px-3 mx-2 text-xl"
              url="/signUp"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex items-center justify-center md:justify-evenly flex-col md:flex-row-reverse pt-20 md:pt-10 onboard1 font-nanum ">
          <img
            src="/onboard1.png"
            alt=""
            className="w-72 h-72 md:w-[400px] md:h-[400px]"
          />

          <h1 className="mt-5 text-white text-3xl md:hidden">
            Business Investment
          </h1>
          <div className="flex flex-col md:justify-start justify-center items-center md:items-start">
            <h1 className="hidden md:block capitalize text-4xl font-nanum text-start text-white ">
              {" "}
              <span className=" text-5xl font-extrabold">best</span> place to{" "}
              <br />
              <span className="text-5xl font-extrabold">invest</span>
            </h1>
            <p className="pl-5 lg:p-0 mt-11 max-w-lg text-slade md:w-[350px]">
              An investment in knowledge pays the best interest. Goodness is the
              only investment that never fails. We must shift our thinking away
              from short-term gain toward long-term investment and
              sustainability, and always have the next generations in mind with
              every decision we make.
            </p>
            <div className="mt-8 md:hidden">
              <Button
                text="Next"
                variant="bg-white py-2 px-3 text-xl "
                onClick={onNext}
              />
            </div>
            <div className="hidden md:flex text-center mt-5">
              <Button
                text="Get started"
                variant="bg-white py-2 px-3 text-xl w-60"
                url="/signUp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
