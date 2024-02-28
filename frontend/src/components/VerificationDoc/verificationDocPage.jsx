import { Link } from "react-router-dom";

export const VerificationDoc = () => {
  return (
    <>
      <div className="md:bg-sbg  min-h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center pb-20">
        <form>
            <div className="pt-10">

              <div>
                <h1 className="block text-2xl font-semibold text-gray-800 mb-6 mt-6 px-12">
                Verification Documents <span className="text-red">*</span>
                </h1>
              </div>
              <section className="w-full flex flex-col file-input bg-grey">
                <input
                  type="file"
                  id="idcard"
                  name="identificationCard"
                  className="rounded-lg border border-transparent text-black"
                  required
                  aria-describedby="idCard-error"
                />
                <span className='button'>Choose</span>
                <span className='label' data-js-label>Passport / Driver License. </span>
              </section>
              <div className="mb-6">
                <small>Upload Pdf</small>
              </div>

              <section className="w-full flex flex-col file-input bg-grey">
                <input
                  type="file"
                  id="utilityBill"
                  name="utility"
                  className="rounded-lg border border-transparent text-black"
                  required
                  aria-describedby="utilityBill-error"
                />
                <span className='button'>Choose</span>
                <span className='label' data-js-label>Utility bills / Bank Statements </span>
              </section>
              <div className="mb-6">
                <small>Upload Pdf</small>
              </div>

              <section className="w-full flex flex-col mt-12">
                <button
                  type="submit"
                  className="p-4 inline-flex justify-center items-center rounded-lg border border-transparent bg-primary text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800"
                >
                <Link to="/financialDocInvestor">
                  Next
                </Link>
                </button>
              </section>
            </div>
        </form>
      </div>
    </>
  );
};

const VerificationDocPage = () => {
  return (
    <>
      <VerificationDoc />
    </>
  );
};

export default VerificationDocPage;
