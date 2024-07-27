import ArrowBack from "../images/arrow-back.png";
import CopyIcon from "../images/copy-icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import AbcCard from "../images/abc-card.png";
import PopupDetails from "./popupsDetail"

const AddmoneyPage = () => {

    const [copyText,setCopyText]=useState('')

    const handleCopy=()=>{
        navigator.clipboard.writeText(copyText)
        alert("copied")
    }

    const [buttonPopup, setButtonPopup] = useState (false);

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
            
            <div className="my-6 mx-20 py-2 px-8 rounded-[16px] bg-white">
                <div className="flex flex-row justify-between gap-8">
                    <div className="grid flex w-full md:w-1/2 py-6 px-12">
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
                    <div className="w-full flex-wrap md:w-1/2 px-[120px] mb-6">
                        <div className="pt-4">
                            <img src={AbcCard} alt="" className="atmcard-img" />
                        </div>
                        <div className="bg-gray py-8 bg-bgaddmoney rounded-[16px] px-4 mt-6">
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
                                        <button onClick={() => setButtonPopup(true)} type="button" 
                                            className="px-4 py-4 text-[12px] font-medium text-white bg-primary rounded-[10px]">
                                            AddMoney
                                        </button>
                                    </div>
                                </div>
                                    
                            </form>
                            <hr />

                            <div className="flex gap-2 justify-between mt-4">
                                <div>
                                    <button type="button" 
                                            className="px-9 py-3 text-[12px] font-medium text-white bg-primary rounded-[10px]">
                                            ₦200
                                    </button>
                                </div>
                                <div>
                                    <button type="button" 
                                        className="px-8 py-3 text-[12px] font-medium text-white bg-primary rounded-[10px]">
                                        ₦1,000
                                    </button>
                                </div>
                                <div>
                                    <button type="button" 
                                        className="px-8 py-3 text-[12px] font-medium text-white bg-primary rounded-[10px]">
                                        ₦2,000
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-2 justify-between mt-4">
                                <div>
                                    <button type="button" 
                                        className="px-8 py-3 text-[12px] font-medium text-white bg-primary rounded-[10px]">
                                        ₦3,000
                                    </button>
                                </div>
                                <div>
                                    <button type="button" 
                                        className="px-8 py-3 text-[12px] font-medium text-white bg-primary rounded-[10px]">
                                        ₦5,000
                                    </button>
                                </div>
                                <div>
                                    <button type="button" 
                                        className="px-8 py-3 text-[12px] font-medium text-white bg-primary rounded-[10px]">
                                        ₦10,000
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <PopupDetails trigger={buttonPopup}>
                    <div className="rounded-[16px] border-2 border-gray">
                        <h3 className="font-semibold text-[30px] pt-4 pb-10">Confirmation</h3>
                        <div className="flex items-center justify-between px-10 py-4">
                            <div>
                                <p className="font-medium">Account Name :</p>
                            </div>
                            <div>
                                <p>William Ibe</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-10 py-4">
                            <div>
                                <p className="font-medium">Account Number :</p>
                            </div>
                            <div>
                                <p>0036363211</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-10 py-4">
                            <div>
                                <p className="font-medium">Bank Name :</p>
                            </div>
                            <div>
                                <p>Union Bank</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-10 py-4">
                            <div>
                                <p className="font-medium">Amount :</p>
                            </div>
                            <div>
                                <p>₦200,000.00</p>
                            </div>
                        </div>
                        <div className="font-semibold text-lg text-center pb-8">
                            <button type="button" 
                                className="mt-16 px-20 py-5 text-lg font-medium text-center text-white bg-primary rounded-[50px] hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <Link to="/">
                                    Add Money
                                </Link>
                            </button>
                        </div>
                    </div>
                </PopupDetails>
            </div>  
        </div>
      </>
    );
};
  
  export default AddmoneyPage;