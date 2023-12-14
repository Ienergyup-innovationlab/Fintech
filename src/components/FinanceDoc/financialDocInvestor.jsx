import { Link } from "react-router-dom";

export const FinancialDoc = () => {
  return (
    <>
      <div className=" md:bg-sbg  min-h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center pb-20">
        <form>
            <div className="pt-10">

              <div>
                <h1 className="block text-2xl font-semibold text-center text-gray-800 mb-6 mt-6">
                Financial Documents <br />For Investors
                </h1>
              </div>
              <section className="w-full flex flex-col">
                <input
                  type="file"
                  id="idcard"
                  name="identificationCard"
                  className="py-4  rounded-lg w-full px-2 border border-transparent bg-grey mb-1 text-black"
                  required
                  aria-describedby="idCard-error"
                  placeholder="Passport / Driver's License."
                />
                <small className="mb-8">Upload Pdf</small>
              </section>

              <section className="w-full flex flex-col">
                <input
                  type="file"
                  id="utilityBill"
                  name="utility"
                  className="py-4  rounded-lg w-full px-2 bg-grey border border-transparent mb-1 text-black"
                  required
                  aria-describedby="utilityBill-error"
                  placeholder="Utility bills / Bank statements"
                />
                <small className="mb-8">Upload Pdf</small>
              </section>

              <section className="w-full flex flex-col">
                <input
                  type="file"
                  id="idcard"
                  name="identificationCard"
                  className="py-4  rounded-lg w-full px-2 border border-transparent bg-grey mb-1 text-black"
                  required
                  aria-describedby="idCard-error"
                  placeholder="Passport / Driver's License."
                />
                <small className="mb-8">Upload Pdf</small>
              </section>

              <section className="w-full flex flex-col">
                <input
                  type="file"
                  id="utilityBill"
                  name="utility"
                  className="py-4  rounded-lg w-full px-2 bg-grey border border-transparent mb-1 text-black"
                  required
                  aria-describedby="utilityBill-error"
                  placeholder="Utility bills / Bank statements"
                />
                <small className="mb-8">Upload Pdf</small>
              </section>

              <section className="w-full flex flex-col">
                <input
                  type="file"
                  id="idcard"
                  name="identificationCard"
                  className="py-4  rounded-lg w-full px-2 border border-transparent bg-grey mb-1 text-black"
                  required
                  aria-describedby="idCard-error"
                  placeholder="Passport / Driver's License."
                />
                <small className="mb-8">Upload Pdf</small>
              </section>

              <section className="w-full flex flex-col">
                <input
                  type="file"
                  id="utilityBill"
                  name="utility"
                  className="py-4  rounded-lg w-full px-2 bg-grey border border-transparent mb-1 text-black"
                  required
                  aria-describedby="utilityBill-error"
                  placeholder="Utility bills / Bank statements"
                />
                <small className="mb-8">Upload Pdf</small>
              </section>

              <section className="w-full flex flex-col">
                <input
                  type="file"
                  id="utilityBill"
                  name="utility"
                  className="py-4  rounded-lg w-full px-2 bg-grey border border-transparent mb-1 text-black"
                  required
                  aria-describedby="utilityBill-error"
                  placeholder="Utility bills / Bank statements"
                />
                <small className="mb-8">Upload Pdf</small>
              </section>

              <section className="w-full flex flex-col mt-8">
                <button
                  type="submit"
                  className="p-4 inline-flex justify-center items-center rounded-lg border border-transparent bg-primary text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800"
                >
                <Link to="/">
                  Submit
                </Link>
                </button>
              </section>
              <section className="w-full flex flex-col mt-2">
                <div className="round">
                    <input type="checkbox" 
                    id="checkbox" 
                    required
                    />
                    <label htmlFor="checkbox"></label>
                </div>
                <span className="sp-text items-center text-lg md:text-base">Agree with <a href="/" className="text-primary">Terms & Condition</a></span>
              </section>
            </div>
        </form>
      </div>
    </>
  );
};

const FinancialDocInvestor = () => {
  return (
    <>
      <FinancialDoc />
    </>
  );
};

export default FinancialDocInvestor;
