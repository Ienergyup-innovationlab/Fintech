import ArrowBack from "../images/arrow-back.png";
import CopyIcon from "../images/copy-icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddmoneyPage = () => {

    const [copyText,setCopyText]=useState('')

    const handleCopy=()=>{
        navigator.clipboard.writeText(copyText)
        alert("copied")
    }

    return (
      <>
        <div className="bg-lightpurple">
            <div className="px-20 pd-mobile bg-white py-4 drop-shadow-md">
                <div className="w-full justify-between flex">
                    <div className="text-primary">
                        <Link to="/DashboardPage">
                            <img src={ArrowBack} alt="" />
                        </Link>
                    </div>
                    
                </div>
            </div>
            <hr  />
            <div className="">
                <div className="my-12 mx-20 py-2 px-8 rounded-[16px] bg-white">
                    <div className="flex flex-row justify-between gap-8">
                        <div className="grid flex w-full md:w-1/2 mt-6 py-6 px-12">
                            <p>Account No:</p>
                            <div className="flex gap-2">
                            <p className="text-md font-semibold mt-2" value={copyText} onChange={(e)=>setCopyText(e.target.value)}>0987654321</p>
                            <img src={CopyIcon} alt=""  onClick={handleCopy} />
                            </div>
                        </div>
                        <div className="w-full flex-wrap md:w-1/2 mt-12 px-10">
                        
                        </div>
                    </div>
                </div>
            </div>  
        </div> 
      </>
    );
};
  
  export default AddmoneyPage;