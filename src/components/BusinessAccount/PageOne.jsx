/* eslint-disable react/prop-types */
import Button from "../LandingPage/components/Button";
export default function PageOne({ handleNext, formData, setformData }) {
  return (
    <>
      <h1 className="font-nanum text-center text-2xl font-bold mt-5 lg:mt-10 lg:text-2xl ">
        Business Registration Form
      </h1>
      <div className="pl-7 lg:px-9">
        <div className="flex mt-9">
          <h2 className="">Business Information</h2>
          <p className="text-brickRed">*</p>
        </div>
        <div className=" space-y-7 flex flex-col mb-10 ">
          <input
            type="text"
            name="businessName"
            placeholder="Business name"
            value={formData.businessName}
            onChange={(e) => {
              setformData({ ...formData, businessName: e.target.value });
            }}
            className="bg-inputGrey mt-3 w-[320px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px]"
          />
          <input
            type="email"
            name="businessEmail"
            value={formData.businessEmail}
            placeholder="Business email address"
            onChange={(e) => {
              setformData({ ...formData, businessEmail: e.target.value });
            }}
            className="bg-inputGrey w-[320px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px]"
          />
          <input
            type="text"
            name="businessPhoneNumber"
            placeholder="Business phone number"
            value={formData.businessPhoneNumber}
            onChange={(e) => {
              setformData({ ...formData, businessPhoneNumber: e.target.value });
            }}
            className="bg-inputGrey w-[320px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px]"
          />

          <input
            type="text"
            name="industrySector"
            placeholder="Industry/Sector"
            value={formData.industrySector}
            onChange={(e) => {
              setformData({ ...formData, industrySector: e.target.value });
            }}
            className="bg-inputGrey w-[320px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px] "
          />
          <label htmlFor="Date of establishment">Date of establishment</label>
          <input
            type="date"
            name="establishmentDate"
            placeholder="Date of establishment"
            value={formData.establishmentDate}
            onChange={(e) => {
              setformData({ ...formData, establishmentDate: e.target.value });
            }}
            className="bg-inputGrey w-[320px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px] "
          />
          <Button
            text="Next"
            variant="bg-purple w-[200px] text-center py-2 px-2 lg:mx-auto text-white font-naunum mt-10  "
            onClick={handleNext}
          />
        </div>
      </div>
    </>
  );
}
