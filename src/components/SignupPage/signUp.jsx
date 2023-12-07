import { Link } from "react-router-dom";

function signUp() {
  return (
    <div className=" bg-purple md:bg-sbg  min-h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center pb-20">
      <h2 className=" md:text-4xl  text-xl font-semibold md:text-black text-white font-poppins capitalize pb-4">
        Register new account
      </h2>
      <p className="hidden md:flex text-center mx-auto  text-base font-semibold">
        Fundcraft has various categories of users.
        <br /> Kindly select who you would like to sign up as
      </p>
      <Link to="/InvestorRegistration">
        <button className=" bg-white text-black md:hover:bg-violet-950 transition-all md:bg-purple items-center justify-center w-[350px] h-12  capitalize flex  rounded-xl md:text-white font-semibold text-lg mt-5">
          investor account
        </button>
      </Link>
      <button className=" bg-white text-black md:hover:bg-violet-950 transition-all md:bg-purple items-center justify-center w-[350px] h-12  capitalize flex  rounded-xl md:text-white font-semibold text-lg mt-5">
        Business account
      </button>
      <button className=" bg-white text-black md:hover:bg-violet-950 transition-all md:bg-purple items-center justify-center w-[350px] h-12  capitalize flex  rounded-xl md:text-white font-semibold text-lg mt-5">
        Regular account
      </button>
    </div>
  );
}

export default signUp;
