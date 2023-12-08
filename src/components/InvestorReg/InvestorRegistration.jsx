import { Link } from "react-router-dom";
export const InvestorReg = () => {
  return (
    <>
      <div className=" md:bg-sbg  min-h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center pb-20">
        <div className="grid-rows-1 investor-hero"></div>
        <div className="grid-rows-1 mt-4" id="ellipse">
          <form>
            <div className="pt-10">
              <div>
                <h1 className="md:text-4xl  text-xl font-semibold md:text-black text-black font-poppins capitalize pb-4">
                  INVESTOR REGISTRATION 
                  FORM
                </h1>
              </div>

              <div>
                <h1 className="block text-2xl font-semibold text-gray-800 mb-6 mt-6">
                  Personal Information <span className="text-red">*</span>
                </h1>
              </div>
              <section className="w-full flex flex-col">
                <input
                  type="text"
                  id="fullName"
                  name="names"
                  className="py-4  rounded-lg w-full px-2 border border-transparent bg-grey mb-10 text-black"
                  required
                  aria-describedby="fullName-error"
                  placeholder="&#xf007; &nbsp; Full Name"
                />
              </section>

              <section className="w-full flex flex-col">
                <input
                  type="email"
                  id="emailAdd"
                  name="email"
                  className="py-4  rounded-lg w-full px-2 bg-grey border border-transparent mb-10 text-black"
                  required
                  aria-describedby="emailAddress-error"
                  placeholder="&#xf0e0; &nbsp; Email Address"
                />
              </section>

              <section className="w-full flex flex-col">
                <input
                  type="phone"
                  id="phoneNum"
                  name="phone"
                  className="py-4  rounded-lg w-full px-2 bg-grey border border-transparent mb-10 text-black"
                  required
                  aria-describedby="phoneNumber-error"
                  placeholder="&#x260E; &nbsp; Phone Number"
                />
              </section>

              <section className="w-full flex flex-col">
                <input
                  type="text"
                  id="homeAdd"
                  name="homeAddress"
                  className="py-4  rounded-lg w-full px-2 border border-transparent bg-grey mb-10 text-black"
                  required
                  aria-describedby="fhomeAddress-error"
                  placeholder="&#61461; &nbsp; Residential Address"
                />
              </section>

              <section className="w-full flex flex-col mt-12">
                <button
                  type="submit"
                  className="p-4 inline-flex justify-center items-center rounded-lg border border-transparent bg-primary text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-base dark:focus:ring-offset-gray-800"
                >
                <Link to="/InvestmentPreference">
                  Next
                </Link>
                </button>
              </section>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const InvestorRegistration = () => {
  return (
    <>
      <InvestorReg />
    </>
  );
};

export default InvestorRegistration;
