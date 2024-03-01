import { BsCameraVideoFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import man1 from "../images/man1.png";

const Chatbar = () => {
  return (
    <div className="w-full h-[180px] bg-black">
      <div className="flex relative w-[800px] border border-none outline-none">
        <div className="relative flex space-x-30 space-y-30 w-full">
          <span className="flex items-center w-[130px] h-2 text-chatbar font-bold pl-8 mt-[130px] ">
            Sam Harry
          </span>
          <span className="absolute w-5 h-2 text-green-500 font-bold mt-[145px] pl-8">
            Online
          </span>
          <img
            src={man1}
            alt=""
            className=" rounded-full flex items-center w-20 h-20 mt-[130px] ml-[220px]"
          />
          <BsFillTelephoneFill
            color="white"
            className="block w-7 h-7 border border-none outline-none mt-[120px] ml-[240px]"
          />
          <BsCameraVideoFill
            color="white"
            className="block w-10 h-7 border border-none outline-none mt-[120px] ml-[-120px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbar;
