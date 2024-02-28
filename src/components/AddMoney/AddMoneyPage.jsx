import ArrowBack from "../images/arrow-back.png";

import { Link } from "react-router-dom";
import PayPal from "../images/paypal.png";
import Rectangle from "../images/Rectangle.png";
import Mastercard from "../images/mastercard.png";
import CreditCard from "../images/credit-card.png";
import GoogleWallet from "../images/wallet-card.png"; 
import AmazonPay from "../images/pay-card.png";
import LibraPay from "../images/libary-pay.png";
import PaypalCard from "../images/paypal-card.png";

const AddmoneyPage = () => {

    return (
      <>
         <div className="mt-4 px-20 pd-mobile">
            <div className="w-1/2 justify-between flex">
                <div className="text-primary">
                    <Link to="/DashboardPage">
                        <img src={ArrowBack} alt="" />
                    </Link>
                </div>
                
            </div>
            <div className="my-4 py-2 px-8 bg-lightpurple rounded-[10px]">
                <div className="flex flex-row justify-between gap-8">
                    <div className="grid flex w-full md:w-2/5 mt-6 py-6 px-12">
                        <div className="text-primary text-center mb-6">
                            <h3 className="text-[24px] font-bold">Payment Method</h3>
                        </div>
                        <div className="flex flex-row justify-between gap-4">
                            <div><img src={Rectangle} alt="" /></div>
                            <div><img src={PayPal} alt="" /></div>
                            <div><img src={Mastercard} alt="" /></div>
                        </div>
                        <div className="mt-10">
                            <div className="text-primary mb-6">
                                <h3 className="text-[24px] font-bold">Other Payment Methods</h3>
                            </div>
                            <div className="flex mb-2">
                                <div className="pr-8"><img src={CreditCard} alt="" /></div>
                                <p className="text-[20px] font-normal">Credit / Debit Card</p>
                            </div>
                            <div className="flex mb-2">
                                <div className="pr-8"><img src={GoogleWallet} alt="" /></div>
                                <p className="text-[20px] font-normal">Google Wallet</p>
                            </div>
                            <div className="flex mb-2">
                                <div className="pr-8"><img src={AmazonPay} alt="" /></div>
                                <p className="text-[20px] font-normal">Amazon Pay</p>
                            </div>
                            <div className="flex mb-2">
                                <div className="pr-8"><img src={LibraPay} alt="" /></div>
                                <p className="text-[20px] font-normal">Libra Pay</p>
                            </div>
                            <div className="flex mb-2">
                                <div className="pr-8"><img src={PaypalCard} alt="" /></div>
                                <p className="text-[20px] font-normal">PayPal</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-full flex-wrap md:w-3/5 mt-12 px-10">
                        <form>
                            <div className=" py-10 px-20 bg-primary border-2 border-primary rounded-[16px]">
                                <section className="w-full">
                                    <p className="text-[20px] font-normal text-white">CREDIT CARD NUMBER</p>
                                    <input
                                        type="number"
                                        name="price"
                                        step=".01"
                                        id="amount"
                                        className="py-4 rounded-[8px] w-full px-6 border-2 border-gray bg-white mb-6 text-gray"
                                        required
                                        aria-describedby="XXXX XXXX XXXX XXXX"
                                        placeholder="XXXX XXXX XXXX XXXX"
                                    />
                                </section>
                                <section className="w-full">
                                    <div className="flex gap-8">
                                        <div className="w-full">
                                            <p className="text-[20px] font-normal text-white">EXPIRES (MM/YY)</p>
                                            <input
                                                type="text"
                                                id="netWort"
                                                name="netWort"
                                                className="py-4 rounded-[8px] w-full px-6 border-2 border-gray bg-white mb-6 text-gray"
                                                required
                                                aria-describedby="12/06/2027"
                                                placeholder="12/06/2027"
                                            />
                                        </div>
                                        <div className="w-full">
                                            <p className="text-[20px] font-normal text-white">CVV</p>
                                            <input
                                                type="text"
                                                id="netWort"
                                                name="netWort"
                                                className="py-4 rounded-[8px] w-full px-6 border-2 border-gray bg-white mb-6 text-gray"
                                                required
                                                aria-describedby="789"
                                                placeholder="789"
                                            />
                                        </div>
                                    </div>
                                </section>
                                
                                <section className="w-full">
                                    <p className="text-[20px] font-normal text-white">NAME</p>
                                    <input
                                        type="text"
                                        id="netWort"
                                        name="netWort"
                                        className="py-4 rounded-[8px] w-full px-6 border-2 border-gray bg-white mb-6 text-gray"
                                        required
                                        aria-describedby="Account Name Error"
                                        placeholder="Mohammed Suleimon"
                                    />
                                </section>
                                <section className="w-full flex flex-col mt-2 bg-formcolor p-4 ">
                                    <div className="round">
                                        <input type="checkbox" 
                                        id="checkbox" 
                                        required
                                        />
                                        <label htmlFor="checkbox"></label>
                                    </div>
                                    <span className="sp-text items-center text-lg md:text-base text-white">Remember me</span>
                                </section>
                            </div>
                            <div className="font-semibold text-lg text-center mt-8">
                                <button type="button" 
                                    className="px-20 py-4 text-[26px] font-medium text-center text-white bg-primary rounded-[12px] hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <Link to="/SuccessPage">
                                        Pay N80,000.00
                                    </Link>
                                </button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>   
      </>
    );
};
  
  export default AddmoneyPage;