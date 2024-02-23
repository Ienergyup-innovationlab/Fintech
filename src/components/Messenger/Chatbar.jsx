import attachicon from "../images/attach-icon.png";
import phoneicon from "../images/tel-icon.png";
import videoicon from "../images/videoicon.png";
import callicon from "../images/call-image.png";
import man1 from "../images/man1.png";
import Messages from "./Messages";
import Input from "./Input"



const Chatbar = () => {
  return (
    <div className="w-full h-[180px] bg-black">
      <div className="flex relative w-[800px] borfer outline-none">
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

          <img
            src={phoneicon}
            alt=""
            className="block w-7 h-7 border border-none outline-none mt-[120px] ml-[240px]"
          />
          <img
            src={videoicon}
            alt=""
            className="block w-10 h-7 border border-none outline-none mt-[120px] ml-[-120px]"
          />
        </div>
      </div>
  

    </div>
  );
};

export default Chatbar;
