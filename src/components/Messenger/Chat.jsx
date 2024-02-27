import React from "react";
import Chatbar from "./Chatbar";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className=" bg-chatbar border border-none justify-start relative">
      <Chatbar />
      <Messages />
    </div>
  );
};

export default Chat;
