import ArrowBack from "../images/arrow-back.png";
import { Link } from "react-router-dom";
import bankLogo from "../images/union-bank-logo.png";

const SendDetailsPage = () => {
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
                    <p className="font-normal text-[40px]">USD</p>
                    <h2 className="font-bold text-[55px] pt-4">79.00</h2>
                    <div className="font-semibold text-lg text-center mt-8">
                        <button type="button" 
                            className="px-20 py-5 text-lg font-medium text-center text-white bg-primary rounded-[50px] hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <Link to="/">
                                Next
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};


export default SendDetailsPage;