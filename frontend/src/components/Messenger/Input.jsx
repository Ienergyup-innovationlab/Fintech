import EmojiPicker from "emoji-picker-react";
import { GrEmoji } from "react-icons/gr";
import { GrAttachment } from "react-icons/gr";
import { BsSend } from "react-icons/bs";
import { BsMic } from "react-icons/bs";
import { data } from "autoprefixer";
import { useState, useRef } from "react";

const Input = () => {

  const fileRef = useRef()
  function selectFile() {
   fileRef.current.click()
  }; 

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
    <div className="h-16 w-full bg-white cursor-pointer border border-none">
      <input
        className=" float-left flex items-center pl-10 rounded-full h-10 w-[540px] mt-4 ml-[70px] border border-slate-300 bg-gray-300 px-5 font-poppins text-black font-regular outline-none"
        //type={text}
        placeholder="Type Message"
        value={Text}
        onChange={(e) => setText(e.target.value)}
      />

      <BsSend className="flex float-right w-6 h-6 border border-none outline-none mt-5 mr-10" />

      <input
        type="file"
        className=" float-left w-0 h-0 border border-none  mt-5 ml-[-640px] hidden "
        ref={fileRef}
        onClick={selectFile}
      />

      <GrAttachment
        className="flex float-left w-6 h-6 border border-none  mt-5 ml-[-600px]"
        onClick={selectFile}
      />

      <BsMic className="flex float-right w-7 h-7 border border-none outline-none mt-4 mr-10" />

      <GrEmoji
        className="flex float-left w-4 h-4 border border-none outline-none mt-7 ml-[-530px]"
        onClick={() => setShowEmoji(!showEmoji)}
      />
      <div className=" z-30 fixed bottom-24 p-3">
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

export default Input;
