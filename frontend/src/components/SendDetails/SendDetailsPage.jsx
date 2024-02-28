import ArrowBack from "../images/arrow-back.png";
import { Link } from "react-router-dom";
import bankLogo from "../images/union-bank-logo.png";
import Popup from "./Popups";
import { useState } from "react";

const SendDetailsPage = () => {
    const [buttonPopup, setButtonPopup] = useState (false);
    return (
        <>
        <div className="px-20 pd-mobile">
            <div className="mt-6 p-8 bg-lightpurple rounded-[16px]">
                <div>
                    <Link to="/SendMoneyPage">
                        <img src={ArrowBack} alt="" />
                    </Link>
                </div>
                <div className="mt-4 text-center">
                    <div className="flex justify-center">
                        <img src={bankLogo} alt="" />
                    </div>
                    <h2 className="font-bold text-[55px] pt-4">Williams Ibe</h2>
                    <p className="font-normal text-[40px]">Union Bank</p>
                    <p className="font-normal text-[40px]">₦GN</p>
                    <h2 className="font-bold text-[55px] pt-4">200,000.00</h2>
                    <div className="font-semibold text-lg text-center mt-8">
                        <button onClick={() => setButtonPopup(true)} type="button" 
                            className="px-20 py-5 text-lg font-medium text-center text-white bg-primary rounded-[50px] hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Next
                        </button>
                    </div>
                </div>
                <Popup trigger={buttonPopup}>
                    <div className="rounded-[16px] border-2 border-gray">
                        <h3 className="font-semibold text-[30px] pt-4 pb-10">Payment</h3>
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
                                <Link to="/SuccessPage">
                                    Confirm to Pay
                                </Link>
                            </button>
                        </div>
                    </div>
                </Popup>
            </div>
        </div>
        </>
    );
};


export default SendDetailsPage;