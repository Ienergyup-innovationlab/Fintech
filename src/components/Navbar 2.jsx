import { useState } from "react";
import Button from "./Button";
import Logo from "/Logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [drop, setDrop] = useState(false);

  const handleDrop = () => {
    setDrop(!drop);
  };

  return (
    <nav className=" text-black relative bg-slade  py-3 font-libre">
      <div className="px-1  md:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-x-1">
          <img
            src={Logo}
            alt="Company logo"
            className="w-12 h-12 md:w-10 md:h-10 lg:w-14 lg:h-14"
          />
          <h1 className="text-lg lg:text-xl font-[700]">FundCraft</h1>
        </Link>
        <div className="hidden font-[700]  md:flex lg:flex items-center space-x-12 mr-28 text-lg ">
          <Link to="/aboutus">About</Link>
          <Link to="/login">Login</Link>
        </div>
        {drop ? (
          <div onClick={handleDrop} className="pr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : (
          <div className="md:hidden lg:hidden pr-5" onClick={handleDrop}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
        <div className="hidden md:block lg:block">
          <Button text="Sign Up" url="/signup" variant="py-3 px-3 text-white" />
        </div>
      </div>
      {drop && (
        <div className=" p-7 right-3 max-h-min flex flex-col space-y-6 pt-3 pl-2 text-center text-xl">
          <Link to="/aboutus">About</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </nav>
  );
}
