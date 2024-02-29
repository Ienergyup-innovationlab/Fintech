import NavbarDash from "./NavbarDashboard";
import Footer from "../Footer";
import UserImg from "../images/user-img.png";
import Mastercard from "../images/mastercard-logo.png";
import FarmtechImg from "../images/farmtech-img.png";
import NinoSpaImg from "../images/nino-spa.png";
import TelcoImg from "../images/telco.png";
import OgapoutryImg from "../images/ogapoutry.png";
import NinoSpaaTwoImg from "../images/nino-spa-two.png";
import NuttyImg from "../images/nutty.png";
import SendIcon from "../images/sendicon.png";
import WithdrawIcon from "../images/withdraw-icon.png";
import AirtimeIcon from "../images/airtime-icon.png";
import PaybillIcon from "../images/paybill-icon.png";
import MultiCardIcon from "../images/multicard-icon.png";
import EyeIcon from "../images/eyeicon.png";
import SubmitButton from "../images/submit-button.png";
import { Link } from "react-router-dom";


const DashboardPage = () => {
    return (
      <>
        <NavbarDash />
        <div className="flex flex-wrap flex-row mt-24 p-12row"> 
            <div className="grid w-full md:w-3/4 tab-width pt-12 pd-left flex">
                <div className="hello-botom">
                    <div className="user-img">
                        <img src={UserImg} alt="" />
                    </div>
                    <div className="user-txt">
                        <h3 className="text-[22px]">Hello Steve</h3>
                    </div>
                </div>
                <div className="mt-6 py-4 debt-row bg-primary rounded-[16px]">
                    <div className="card-txt flex gap-2">
                        <h3>Available Balance </h3>
                        <div className="">
                            <img src={EyeIcon} alt="" />
                        </div>
                    </div>
                    <div className="mt-6 px-12">
                        <div className="card-amunt">
                            ₦1,200,000.00
                        
                            <div className="font-semibold text-lg float-right">
                                <button type="button" 
                                    className="px-10 py-5 text-sm font-medium text-center text-primary bg-white rounded-lg hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <Link to="/AddMoneyP">
                                    + Add Money
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 py-4 px-12">
                        <img src={Mastercard} alt="" className="float-right" />
                    </div>
                </div>
                <div className="font-semibold text-lg detcardbtm">
                    <div className="flex items-center justify-between gap-4 mt-16">
                        <div className="font-semibold text-lg sm-txt">
                            <Link to="/SendMoneyPage">
                                <img src={SendIcon} alt=""  className="sm-img" /><br />
                                Send
                            </Link>
                        </div>
                        <div className="font-semibold text-lg sm-txt">
                            <Link to="/WithdrawMoneyPage">
                                <img src={WithdrawIcon} alt="" className="pl-1 sm-img" /><br />
                                Withdraw
                            </Link>
                        </div>
                        <div className="font-semibold text-lg sm-txt">
                            <img src={AirtimeIcon} alt=""  className="sm-img" /><br />
                            Airtime
                        </div>
                        <div className="font-semibold text-lg sm-txt">
                            <Link to="/billPaymentPage">
                            <img src={PaybillIcon} alt=""  className="sm-img" /><br />
                            Pay Bills
                            </Link>
                        </div>
                        <div className="font-semibold text-lg sm-txt">
                            <img src={MultiCardIcon} alt="" className="pl-3 sm-imges" /><br />
                            Multiple Cards
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/4 tab-width pt-12">
                <h3 className="text-[22px] font-semibold">Investment Listings</h3>
                <form action="/">
                    <section className="font-semibold text-lg pt-6 flex">
                        <input 
                        type='text'
                        id="search"
                        name="searcbar"
                        className="w-full border h-12 shadow p-4 rounded-full src-bg src-text mr-3"
                        required
                        aria-describedby="SearchBar"
                        placeholder=" &#xF002; Search"
                        />
                        
                        <button type="submit">
                            <img src={SubmitButton} alt="" />
                        </button>
                    </section> 
                </form>
                  
                <section className="font-semibold text-lg">
                    <div className="flex items-center justify-between gap-1 mt-16">
                        <div className="font-bold text-lg">
                            <img src={FarmtechImg} alt="" />
                        </div>
                        <div className="font-semibold text-lg">
                            Farmtech <br /><small className="sml-txt">Farmtek is an agro-tech business</small>
                        </div>
                        <div className="font-semibold text-lg">
                        <button type="button" 
                            className="px-5 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <Link to="/">
                            Invest
                            </Link>
                        </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-1 mt-12">
                        <div className="font-bold text-lg">
                            <img src={NinoSpaImg} alt="" />
                        </div>
                        <div className="font-semibold text-lg">
                            Nina Spa and Salons <br /><small className="sml-txt">We offer salon and spa services</small>
                        </div>
                        <div className="font-semibold text-lg">
                        <button type="button" 
                            className="px-5 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Invest
                        </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-1 mt-12">
                        <div className="font-bold text-lg">
                            <img src={TelcoImg} alt="" />
                        </div>
                        <div className="font-semibold text-lg">
                            Telco Communications <br /><small className="sml-txt">Dealers in all kind of phones <br />and gadgets</small>
                        </div>
                        <div className="font-semibold text-lg">
                        <button type="button" 
                            className="px-5 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Invest
                        </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-1 mt-12">
                        <div className="font-bold text-lg">
                            <img src={OgapoutryImg} alt="" />
                        </div>
                        <div className="font-semibold text-lg">
                            Oge Poultry <br /><small className="sml-txt">We sell chickens and feed  </small>
                        </div>
                        <div className="font-semibold text-lg">
                        <button type="button" 
                            className="px-5 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Invest
                        </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-1 mt-12">
                        <div className="font-bold text-lg">
                            <img src={NinoSpaaTwoImg} alt="" />
                        </div>
                        <div className="font-semibold text-lg">
                            Nina Spa and Salons <br /><small className="sml-txt">We offer salon and spa services</small>
                        </div>
                        <div className="font-semibold text-lg">
                        <button type="button" 
                            className="px-5 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Invest
                        </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-1 mt-12">
                        <div className="font-bold text-lg">
                            <img src={NuttyImg} alt="" />
                        </div>
                        <div className="font-semibold text-lg">
                            Nutty’s and more <br /><small className="sml-txt">We sell all kind of nuts <br />like groundnut, cashew nut, etc</small>
                        </div>
                        <div className="font-semibold text-lg">
                        <button type="button" 
                            className="px-5 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Invest
                        </button>
                        </div>
                    </div>
                </section>
                
            </div>
        </div>
        <Footer />
      </>
    );
  };
  
  export default DashboardPage;