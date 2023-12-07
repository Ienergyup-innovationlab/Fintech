import { useState } from "react";
import { Progress } from "@material-tailwind/react";


function InvestPreference() {
    const [Business, setBusinessType] = useState("Business Type");
  
    const handleChange = (event) => {
      setBusinessType(event.target.value)
    }
    return (
        <>
            <div className="grid-rows-1 mt-4 justify-center px-6">
                <form>
                    <div className="pt-10">
                        <div>
                            <h1 className="block text-2xl font-semibold text-gray-800 mb-6">
                            Investment Preference <span className="text-red">*</span>
                            </h1>
                        </div>
                        <select value={Business} onChange={handleChange} className="py-4 border-2 border border-transparent rounded-lg w-full px-2 bg-grey mb-10">
                            <option value=" ">Business Type</option>
                            <option value="BusinessType">Business Type</option>
                            <option value="Business Type">Business Type</option>
                        </select>
                        <select value={Business} onChange={handleChange} className="py-4 border-2 border border-transparent rounded-lg w-full px-2 bg-grey mb-4">
                            <option value=" ">Investment Amount Range</option>
                            <option value="Business Type">Business Type</option>
                            <option value="Business Type">Business Type</option>
                        </select>
                        <p className="text-2x1 pt-10 pb-4">Risk Tolerance</p>
                        <Progress
                        value={50}
                        size="lg"
                        className="border border-gray-900/10 bg-primary p-1.5"
                        />
                        <div className="flex flex-md justify-center gap-8">
                            <div><p className="text-2x1 pt-2 pb-4">Conservative</p></div>
                            <div><p className="text-2x1 pt-2 pb-4">Moderate</p></div>
                            <div><p className="text-2x1 pt-2 pb-4">Aggressive </p></div>
                        </div>
                        <div>
                            <h1 className="block text-2xl font-semibold text-gray-800 mb-6 mt-6">
                            Financial Information <span className="text-red">*</span>
                            </h1>
                        </div>
                        <section className="w-full flex flex-col">
                            <input
                            type="text"
                            id="netWort"
                            name="netWort"
                            className="py-4 border-2 rounded-lg w-full px-2 border border-transparent bg-grey mb-10 text-black"
                            required
                            aria-describedby="networt-error"
                            placeholder="Net Worth"
                            />
                        </section>

                        <section className="w-full flex flex-col">
                            <input
                            type="text"
                            id="investExp"
                            name="investExp"
                            className="py-4 border-2 rounded-lg w-full px-2 bg-grey border border-transparent mb-10 text-black"
                            required
                            aria-describedby="investExp-error"
                            placeholder="Investment Experience"
                            />
                        </section>

                        <section className="w-full flex flex-col">
                            <input
                            type="text"
                            id="sourceFound"
                            name="sourceFound"
                            className="py-4 border-2 rounded-lg w-full px-2 bg-grey border border-transparent mb-10 text-black"
                            required
                            aria-describedby="sourceFound-error"
                            placeholder="Source Of Funds"
                            />
                        </section>

                        <section className="w-full flex flex-col mt-12">
                            <button
                            type="submit"
                            className="p-4 inline-flex justify-center items-center rounded-lg border border-transparent bg-primary text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800"
                            >
                            Next
                            </button>
                        </section>
                    </div>
                    
                </form>
            </div>
        
        
        </>

    );
}
    
export default InvestPreference;

