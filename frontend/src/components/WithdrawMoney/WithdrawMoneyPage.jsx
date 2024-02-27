import ArrowBack from "../images/arrow-back.png";
import { Link } from "react-router-dom";
import RequestMoneyLogo from "../images/Request Money.png";
import BankBuilding from "../images/Bank Building.png";
import MarkLogo from "../images/mark-logo.png";


const WithdrawmoneyPage = () => {

    return (
      <>
         <div className="mt-12 px-20 pd-mobile">
            <div className="w-1/2 justify-between flex">
                <div className="text-primary">
                    <Link to="/DashboardPage">
                        <img src={ArrowBack} alt="" />
                    </Link>
                </div>
                <div className="text-primary">
                    <h3 className="text-[30px] font-bold">Withdraw Money</h3>
                </div>
            </div>
            <div className="mt-10">
                <div className="flex flex-row justify-between gap-8 bg-lightpurple py-16 px-8 rounded-[6px]">
                    <div className="grid flex-wrap w-full md:w-1/2 py-20 bg-primary text-center rounded-[16px]">
                        <div className="card-txt font-semibold">
                            <h3>Available Balance </h3>
                        </div>
                        <div className="mt-6">
                            <div className="card-amunt font-bold">
                                ₦1,200,000.00
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex-wrap  md:w-1/2 py-20 px-12 bg-white border-2 border-lightgrey rounded-[16px]">
                        <form>
                            <section className="w-full mt-10">
                                <input
                                    type="number"
                                    name="price"
                                    step=".01"
                                    id="amount"
                                    className="py-4 rounded-[16px] w-full px-6 border-2 border-gray bg-white mb-6 text-gray"
                                    required
                                    aria-describedby="Enter The Amount"
                                    placeholder="Amount to withdraw"
                                />
                            </section>
                            
                        </form>
                        
                    </div>
                </div>
            
                <div className="flex w-full bg-white rounded-[16px] mt-4 py-6">
                    <img src={RequestMoneyLogo} alt="" className="pr-6" />
                    <h2 className="text-[30px] font-bold">Withdraw money to</h2>
                </div>

                <div className="bg-lightpurple py-16 px-8 rounded-[6px]">
                    <div className="w-full">
                        <div className="bg-white border-2 border-primary flex flex-row justify-between rounded-[50px] px-10">
                            <div className="py-2 text-[16px]">
                                <img src={BankBuilding} alt="" />
                            </div>
                            <div className="py-2 text-[16px] font-bold pt-4">
                                Primary Bank Account
                            </div>
                            <div className="py-2 text-[16px] font-bold pt-4">
                                **** **** **** **** 5729
                            </div>
                            <div className="py-2 text-[16px] pt-4">
                                <img src={MarkLogo} alt="" />
                            </div>
                        </div>
                        <div className="font-semibold text-lg text-center mt-8 flex justify-end">
                            <button type="button" 
                                className="px-20 py-4 text-[26px] font-medium text-center text-white bg-primary rounded-[12px] hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <Link to="/">
                                    + Add Beneficiary
                                </Link>
                            </button>
                        </div>
                        <div className="font-semibold text-lg text-center mt-8 flex justify-center">
                            <button type="button" 
                                className="px-20 py-4 text-[26px] font-medium text-center text-white bg-primary rounded-[12px] hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <Link to="/WithdrawSuccessfulPage">
                                    Confirm Withdraw
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
      </>
    );
};
  
  export default WithdrawmoneyPage;