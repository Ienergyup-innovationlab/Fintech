import React from "react";
import Input from "./Input";

const Messages = () => {
  return (
    <>
      <div className="w-full overflow-y-scroll border border-none overflow-x-hidden outline-none text-xl inputpg font-poppins ">
        <div className="w-full flex">
          <h2 className="border-none border text-lg p-2 items-center rounded-t-xl bg-white ml-10">
            I’m here now
          </h2>
        </div>
        <div className="w-full flex">
          <h2 className=" border-none border text-lg p-2 items-center rounded-t-xl bg-white ml-10 mt-5">
            I got two coffees here
          </h2>
        </div>
        <div className="justify-center flex">
          <h2 className="flex border-none border text-sm p-2 w-16 items-center rounded-sm mt-5">
            12:30pm
          </h2>
        </div>
        <div className="w-full flex">
          <h2 className="flex  border-none border text-lg p-2 items-center rounded-t-xl bg-white ml-10 mt-5">
            Hey! What time should I come for it later
          </h2>
        </div>
        <div className="w-full flex">
          <h2 className="flex  border-none border text-lg p-2 items-center rounded-t-xl bg-white ml-10 mt-5">
            Hey!
          </h2>
        </div>
        <div className="w-full flex">
          <h2 className="flex  border-none border text-lg p-2 items-center rounded-t-xl bg-white ml-10 mt-5">
            Are you there?
          </h2>
        </div>
        <div className="justify-center flex">
          <h2 className="flex border-none border text-sm p-2 w-16 items-center rounded-sm mt-5">
            2:30pm
          </h2>
        </div>
        <div className="w-full flex justify-end">
          <h2 className=" flex border-none border text-lg p-3 bg-purple rounded-t-xl mt-5  text-white mr-10">
            {" "}
            I will text you when I’m ready
          </h2>
        </div>

        <div className="w-full flex justify-end">
          <h2 className=" flex border-none border text-lg p-3 bg-purple rounded-t-xl mt-5  text-white mr-10">
            {" "}
            Okay?
          </h2>
        </div>
        <div className="w-full flex justify-end">
          <h2 className=" flex border-none border text-lg p-3 bg-purple rounded-t-xl mt-5  text-white mr-10">
            {" "}
            Bye!
          </h2>
        </div>
        <div className="justify-center flex">
          <h2 className="flex border-none border text-sm p-2 w-16 items-center rounded-sm mt-5">
            2:34pm
          </h2>
        </div>
        <div className="w-full flex">
          <h2 className="flex  border-none border text-lg p-2 items-center rounded-t-xl bg-white ml-10 mt-5">
            Okay, see you soon
          </h2>
        </div>
        <div className="w-full flex">
          <h2 className="flex  border-none border text-lg p-2 items-center rounded-t-xl bg-white ml-10 mt-5">
            Bye!
          </h2>
        </div>
      </div>

      <Input />
    </>
  );
};

export default Messages;
