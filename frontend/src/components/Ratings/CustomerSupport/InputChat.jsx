import React, { useRef } from "react";
import { BsSend } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { BsMic } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import EmojiPicker from "emoji-picker-react";
import { data } from "autoprefixer";
import { useState, ChangeEvent } from "react";

const InputChat = () => {
  const fileRef = useRef();
  function selectFile() {
    fileRef.current.click();
  }

  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setText(text + emoji);
  };

  return (
    <div className="w-[1200px] h-20 bg-white absolute flex mt-[720px] border border-gray-300 cursor-pointer">
      <input
        type="text"
        className="rounded-full w-[800px] h-10 bg-gray-200 m-5 pl-10 "
        placeholder="Type a message..."
      />
      <input
        ref={fileRef}
        type="file"
        onClick={selectFile}
        className=" w-0 h-0  border border-none mt-7 ml-10 hidden "
      />

      <GrAttachment
        onClick={selectFile}
        className="flex w-6 h-6 border border-none mt-7 ml-10 "
      />

      <BsMic className="flex w-7 h-7 border border-none outline-none mt-7  ml-20 " />

      <BsSend className="flex w-6 h-6 border border-none outline-none mt-7 ml-20 " />

      <GrEmoji
        className="w-4 h-4 border border-none outline-none flex mt-8 ml-[-1080px]"
        onClick={() => setShowEmoji(!showEmoji)}
      />
      <div className=" z-30 fixed bottom-20 p-2">
        {showEmoji && (
          <EmojiPicker
            data={data}
            emojiSize={20}
            onEmojiClick={addEmoji}
            maxFrequentRows={0}
          />
        )}
      </div>
    </div>
  );
};

export default InputChat;
