import ArrowBack from "../images/arrow-back.png";
import { useState } from "react";
import BankLogo from "../images/bank-logo.png";


const SendmoneyPage = () => {
    const [SelectBank, setBankName] = useState("Bank Name");

    const handleChange = (event) => {
        setBankName(event.target.value);
    };

    return (
      <>
         <div className="mt-12 px-20 pd-mobile">
            <div className="w-1/2 justify-between flex">
                <div className="text-primary">
                    <img src={ArrowBack} alt="" />
                </div>
                <div className="text-primary">
                    <h3 className="text-[30px] font-bold">Send money</h3>
                </div>
            </div>
            <div className="mt-10 p-8 bg-lightpurple">
                <div className="flex flex-row justify-between gap-8">
                    <div className="grid flex-wrap w-full md:w-1/2 mt-6 py-12 bg-primary text-center rounded-[16px]">
                        <div className="card-txt font-semibold">
                            <h3>Available Balance </h3>
                        </div>
                        <div className="mt-6">
                            <div className="card-amunt font-bold">
                                $200.00
                            </div>
                            <div className="font-semibold text-lg mt-8">
                                <button type="button" 
                                    className="px-10 py-5 text-lg font-medium text-center text-primary bg-white rounded-[50px] hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    + Add Money
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex-wrap  md:w-1/2 mt-6 py-10 px-12 bg-white border-2 border-lightgrey rounded-[16px]">
                        <form>
                            <section className="w-full">
                                <input
                                    type="text"
                                    id="netWort"
                                    name="netWort"
                                    className="py-4 rounded-[16px] w-full px-6 border-2 border-gray bg-white mb-6 text-gray"
                                    required
                                    aria-describedby="Enter 10-digit Account Number Error"
                                    placeholder="Enter 10-digit Account Number"
                                />
                            </section>
                            <select
                                value={SelectBank}
                                onChange={handleChange}
                                className="py-4 rounded-[16px] border-2 border-gray w-full px-6 bg-white mb-6 text-gray"
                                >
                                <option value="select">Select Bank</option>
                                <option value="Access Bank Plc">Access Bank Plc</option>
                                <option value="GTCO Bank Plc">GTCO Bank Plc</option>
                                <option value="Zenith Bank Plc">Zenith Bank Plc</option>
                                <option value="First Bank">First Bank of Nigeria</option>
                            </select>
                            <section className="w-full">
                                <input
                                    type="text"
                                    id="netWort"
                                    name="netWort"
                                    className="py-4 rounded-[16px] w-full px-6 border-2 border-gray bg-white mb-6 text-gray"
                                    required
                                    aria-describedby="Account Name Error"
                                    placeholder="Account Name"
                                />
                            </section>
                            <div className="font-semibold text-lg text-center">
                                <button type="button" 
                                    className="px-20 py-5 text-lg font-medium text-center text-white bg-primary rounded-[50px] hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Next
                                </button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            
                <div className="w-full bg-white rounded-[16px] mt-10 py-6">
                    <h2 className="text-[30px] font-bold pl-20">Transactions History</h2>
                    <div className="flex mt-6">
                        <div className="flex flex-col">
                            <div className="w-full">
                                <div className="border-b border-gray-200 shadow">
                                    <table className="w-full divide-y divide-green-400">
                                        <thead className="w-full bg-gray-50">
                                            <tr>
                                                <th className="px-[109px] py-2 text-xs text-gray-500">
                                                    Reference
                                                </th>
                                                <th className="px-[109px] py-2 text-xs text-gray-500">
                                                    Date
                                                </th>
                                                <th className="px-[109px] py-2 text-xs text-gray-500">
                                                    Name
                                                </th>
                                                <th className="px-[109px] py-2 text-xs text-gray-500">
                                                    Bank
                                                </th>
                                                <th className="px-[109px] py-2 text-xs text-gray-500">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-300">
                                            <tr className="text-center">
                                                <td className="px-6 py-4 text-sm text-blue-600">
                                                    #FA201
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">
                                                    01/09/22
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500">Williams Ibe</div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500 flex">
                                                    <img src={BankLogo} alt="" className="mr-2"/> Union Bank
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button type="button" 
                                                        className="px-4 py-2 text-sm font-medium text-center text-successtext bg-success hover:bg-blue-800">
                                                        Done
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="text-center">
                                                <td className="px-6 py-4 text-sm text-blue-600">
                                                    #FA202
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">
                                                    01/09/22
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500">Williams Ibe</div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500 flex">
                                                <img src={BankLogo} alt="" className="mr-2"/> Union Bank
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button type="button" 
                                                        className="px-4 py-2 text-sm font-medium text-center text-successtext bg-success hover:bg-blue-800">
                                                        Done
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="text-center">
                                                <td className="px-6 py-4 text-sm text-blue-600">
                                                    #FA203
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">
                                                    01/09/22
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500">Williams Ibe</div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500 flex">
                                                    <img src={BankLogo} alt="" className="mr-2"/> Union Bank
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button type="button" 
                                                        className="px-6 py-2 text-sm font-medium text-center text-failtext bg-fail hover:bg-blue-800">
                                                        Fail
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="text-center">
                                                <td className="px-6 py-4 text-sm text-blue-600">
                                                    #FA204
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">
                                                    01/09/22
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500">Williams Ibe</div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500 flex">
                                                    <img src={BankLogo} alt="" className="mr-2"/> Union Bank
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button type="button" 
                                                        className="px-4 py-2 text-sm font-medium text-center text-successtext bg-success hover:bg-blue-800">
                                                        Done
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr className="text-center">
                                                <td className="px-6 py-4 text-sm text-blue-600">
                                                    #FA204
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900">
                                                    01/09/22
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500">Williams Ibe</div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500 flex">
                                                    <img src={BankLogo} alt="" className="mr-2"/> Union Bank
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button type="button" 
                                                        className="px-6 py-2 text-sm font-medium text-center text-failtext bg-fail hover:bg-blue-800">
                                                        fail
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>   
      </>
    );
};
  
  export default SendmoneyPage;