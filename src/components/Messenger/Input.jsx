import EmojiPicker from "emoji-picker-react";
import { GrEmoji } from "react-icons/gr";
import { GrAttachment } from "react-icons/gr";
import { BsSend } from "react-icons/bs";
import { BsMic } from "react-icons/bs";
import { data } from "autoprefixer";
import { useState } from "react";

const Input = () => {
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

      {file && (
        <GrAttachment
          className="flex float-left w-6 h-6 border border-none  mt-5 ml-[-600px]"
          type="file"
          data={data}
          onChange={handleFile}
        />
      )}

      <BsMic className="flex float-right w-7 h-7 border border-none outline-none mt-4 mr-10" />

      <GrEmoji
        className="flex float-left w-4 h-4 border border-none outline-none mt-7 ml-[-530px]"
        onClick={() => setShowEmoji(!showEmoji)}
      />
      {showEmoji && (
        <EmojiPicker
          data={data}
          emojiSize={20}
          onEmojiClick={addEmoji}
          maxFrequentRows={0}
        />
      )}
    </div>
  );
};

export default Input;
