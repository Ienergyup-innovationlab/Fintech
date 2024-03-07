import ArrowBack from "../images/arrow-back.png";
import CopyIcon from "../images/copy-icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import AbcCard from "../images/abc-card.png";

const AddmoneyPage = () => {

    const [copyText,setCopyText]=useState('')

    const handleCopy=()=>{
        navigator.clipboard.writeText(copyText)
        alert("copied")
    }

    return (
      <>
        <div className="bg-lightpurple pb-4">
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
            
                <div className="my-12 mx-20 py-2 px-8 rounded-[16px] bg-white">
                    <div className="flex flex-row justify-between gap-8">
                        <div className="grid flex w-full md:w-1/2 mt-6 py-6 px-12">
                            <div className="border-dotted border-4 border-primary pl-4">
                                <p>Account No:</p>
                                <div className="flex gap-2">
                                    <p className="text-md font-semibold mt-2" value={copyText} onChange={(e)=>setCopyText(e.target.value)}>0987654321</p>
                                    <img src={CopyIcon} alt=""  onClick={handleCopy} />
                                </div>
                                <p className="text-md font-semibold mt-4">Bank Name:</p>
                                <p className="text-lg font-semibold mt-2 text-primary">Fundcraft BIP</p>
                                <p className="text-md font-semibold mt-4">Account Name:</p>
                                <p className="text-lg font-semibold mt-2 text-primary">Osaro Jnr</p>
                            </div>
                            <p className="text-md font-semibold mt-4">How to transfer to your Fundcraft Account?</p>
                            <div className="mt-4 text-gray-600">
                                <div className="list-num">
                                    <span>1</span> Login to your bank app
                                </div>
                                <div className="list-num">
                                    <span>2</span> Select <b>“Transfer Money”</b> or <b>“Send Money”</b>
                                </div>
                                <div className="list-num">
                                    <span>3</span> Select <b>Fundcraft BIP</b> as the bank
                                </div>
                                <div className="list-num">
                                    <span>4</span> Enter your <b>Fundcraft BIP</b> account number
                                </div>
                                <div className="list-num">
                                    <span>5</span> Confirm <b>transactions details</b> and enter your <b>PIN</b> to complete payment
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex-wrap md:w-1/2 px-10">
                            <div className="pt-12">
                                <img src={AbcCard} alt="" />
                            </div>
                            <div className="bg-gray py-8 px-6">
                                <form>
                                    <div className="flex gap-2">
                                        <p className="font-bold text-lg">₦</p>
                                        
                                        <input
                                            type="text"
                                            id="amtWithdraw"
                                            name="amtWithdraw"
                                            className="py-3 rounded-lg w-full px-2 bg-grey border border-transparent mb-6 text-black"
                                            required
                                            aria-describedby="amtWithdraw-error"
                                            placeholder="Enter 100-99,999,999"
                                        />
                                        
                                        <div>
                                            <button type="button" 
                                                className="px-4 py-4 text-[12px] font-medium text-white bg-primary rounded-[10px]">
                                                AddMoney
                                            </button>
                                        </div>
                                     </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        
      </>
    );
};
  
  export default AddmoneyPage;