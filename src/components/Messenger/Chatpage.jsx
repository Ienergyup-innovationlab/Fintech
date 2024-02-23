import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

function Chatpage() {
  return (
    <div className="  bg-white flex items-center justify-center">
      <div className=" flex border border-none w-[1200px] h-[750px] mt-10 relative ">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Chatpage;
