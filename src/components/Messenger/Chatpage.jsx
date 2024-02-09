import React from 'react'
import attachicon from "../images/attach-icon.png"
import man1 from "../images/man1.png"
import man2 from "../images/man2.png"
import man3 from "../images/man3.png"
import micicon from "../images/mic-icon.png"
import phoneicon from "../images/tel-icon.png"
import videoicon from "../images/videoicon.png"
import woman1 from "../images/woman1.png"
import woman2 from "../images/woman2.png"
import woman3 from "../images/woman3.png"
import emojiicon from "../images/emoji-icon.png"
import attachment from "../images/attach-icon.png"
import callicon from "../images/call-image.png"
import searchicon from "../images/search-icon.png"


function Chatpage() {
  return (
    <div className=" flex w-full h-full">
      <div className="relative top-1/2 left-1/2 bg-lime-200 transform">
        <div className="relative top-full w-[100px] h-[100px] bg-white">
          <div className="float-left  h-full border-1 border-solid border-light bg-white">
            <div className="relative w-full h-96px py-29 border border-neutral-400 bg-white">
              <input
                className="float-left w-[188px] h-12 border border-none bg-white px-15 font-poppins font-regular text-black outline-none"
                type="text"
                placeholder="Search"
              />
              {/* <img
              src={searchicon}
              alt=""
              className="block float-right w-6 h-6 border border-neutral-400 top-[100px] bg-transparent outline-none bg-none mt-3 mr-3 bg-custom"
            /> */}
              <a href=""></a>
            </div>
            <ul className=" people ml-[1px] border-1 border-solid border-light bg-white w-">
              <li className="w-full h-16 border-1 border-solid border-light cursor-pointer hover:bg-gray px-12 pt-10 pb-16">
                <img
                  className="float-left w-full h-100 mt-5 mr-20 rounded-full object-cover"
                  src={man1}
                  alt=""
                />
                <span className=" font-semibold font-poppins w-full">
                  Sam Harry
                </span>
                <span className="absolute top-16 left-80 pr-5 pb-5 w-full ">
                  2:09 PM
                </span>
                <span className="inline-block overflow-hidden w-70 whitespace-nowrap">
                  Ok, See you soon
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatpage