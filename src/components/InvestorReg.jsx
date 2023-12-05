






function InvestPreference() {

    return (
        <>
            <div className="grid-rows-1 investor-hero"></div>
            <div className="grid-rows-1 mt-4 justify-center px-6">
                <form>
                    <div className="pt-10">
                        <div>
                            <h1 className="block text-2xl font-semibold text-gray-800 mb-6">
                            Investment Preference <span className="text-red">*</span>
                            </h1>
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
};
    
export default InvestPreference;