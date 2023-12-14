import { Link } from "react-router-dom";

export const FinancialDoc = () => {
  return (
    <>
      <div className="md:bg-sbg  min-h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center pb-20">
        <form>
            <div className="pt-10 px-4">

              <div>
                <h1 className="block text-2xl font-semibold text-center text-gray-800 mb-6 mt-6">
                Financial Documents <br />For Investors
                </h1>
              </div>
              <section className="w-full flex flex-col file-input bg-grey">
                <input 
                type='file'
                id="PassportPhoto"
                name="Photo"
                className="rounded-lg border border-transparent text-black"
                required
                aria-describedby="PassportPhoto-error"
                />
                <span className='button'>Choose</span>
                <span className='label' data-js-label>Upload Passport Photo</span>
              </section>
              <div className="mb-6">
                <small>Upload Img</small>
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
                <span className='label' data-js-label>Utility Bill</span>
              </section>
              <div className="mb-6">
                <small>Upload Pdf</small>
              </div>

              <section className="w-full flex flex-col file-input bg-grey">
                <input
                  type="file"
                  id="licencePermits"
                  name="licenceP"
                  className="rounded-lg border border-transparent text-black"
                  required
                  aria-describedby="licencePermits-error"
                />
                <span className='button'>Choose</span>
                <span className='label' data-js-label>Licenses and Permits</span>
              </section>
              <div className="mb-6">
                <small>Upload Pdf</small>
              </div>

              <section className="w-full flex flex-col file-input bg-grey">
                <input
                  type="file"
                  id="accountStatement"
                  name="accountState"
                  className="rounded-lg border border-transparent text-black"
                  required
                  aria-describedby="accountStatement-error"
                />
                <span className='button'>Choose</span>
                <span className='label' data-js-label>Account Statement</span>
              </section>
              <div className="mb-6">
                <small>Upload Pdf</small>
              </div>

              <section className="w-full flex flex-col file-input bg-grey">
                <input
                  type="file"
                  id="articleAssociation"
                  name="articleAss"
                  className="rounded-lg border border-transparent text-black"
                  required
                  aria-describedby="articleAssociation-error"
                />
                <span className='button'>Choose</span>
                <span className='label' data-js-label>Articles of Association</span>
              </section>
              <div className="mb-6">
                <small>Upload Pdf</small>
              </div>

              <section className="w-full flex flex-col file-input bg-grey">
                <input
                  type="file"
                  id="shareHolderAgree"
                  name="shareHolder"
                  className="rounded-lg border border-transparent text-black"
                  required
                  aria-describedby="shareHolderAgree-error"
                />
                <span className='button'>Choose</span>
                <span className='label' data-js-label>Shareholders Agreement</span>
              </section>
              <div className="mb-6">
                <small>Upload Pdf</small>
              </div>

              <section className="w-full flex flex-col file-input bg-grey">
                <input
                  type="file"
                  id="kiidDetails"
                  name="kiid"
                  className="rounded-lg border border-transparent text-black"
                  required
                  aria-describedby="kiidDetails-error"
                />
                <span className='button'>Choose</span>
                <span className='label' data-js-label>KIID (key Investor Information Document)</span>
              </section>
              <div className="mb-6">
                <small>Upload Pdf</small>
              </div>

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
