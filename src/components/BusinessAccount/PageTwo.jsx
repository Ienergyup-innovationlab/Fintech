/* eslint-disable react/prop-types */
import Button from "../LandingPage/components/Button";
import RangeSlider from "./components/RangeSlider";
export default function PageTwo({
  handleSubmit,
  handlePrevious,
  formData,
  setformData,
}) {
  return (
    <>
      <div className="pl-7 lg:px-9">
        <h2 className="mt-9 ">
          Financial Information <span className="text-brickRed">*</span>
        </h2>

        <div className="flex flex-col mb-10 ">
          <label htmlFor="Investment Proposal" className="pt-4">
            Upload Profit or Revenue <span className="text-brickRed ">*</span>
          </label>

          <input
            className="block  bg-inputGrey w-[335px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px] text-sm my-3 "
            accept="application/pdf"
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              setformData({
                ...formData,
                revenueProfit: file,
              });
            }}
          />

          {/* <input
            type="file"
            name="upload"
            accept="application/pdf"
            onChange={(e) => {
              const file = e.target.files[0];
              setformData({
                ...formData,
                revenueProfit: file,
              });
            }}
            className="bg-inputGrey mt-3 w-[335px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px] text-sm my-3 "
          /> */}

          <span className="text-xs text-gray-500">
            *Files Supported: pdf only
          </span>

          <input
            type="text"
            placeholder="Tax Identification Number"
            value={formData.taxIdentificationNumber}
            onChange={(e) => {
              setformData({
                ...formData,
                taxIdentificationNumber: e.target.value,
              });
            }}
            className="bg-inputGrey w-[335px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px] my-3"
          />
          <label htmlFor="Investment Proposal">
            Investment Proposal <span className="text-brickRed">*</span>
          </label>
          <input
            type="text"
            placeholder="Purpose of Investment (e.g Expansion) "
            value={formData.purposeOfInvestment}
            onChange={(e) => {
              setformData({ ...formData, purposeOfInvestment: e.target.value });
            }}
            className="bg-inputGrey w-[335px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px] my-3 text-sm"
          />
          <span className="text-xs text-gray-500">
            Equity Available for Investors (%)
          </span>

          <RangeSlider formData={formData} setformData={setformData} />

          <label htmlFor="Legal" className="mt-5">
            Legal <span className="text-brickRed ">*</span>
          </label>

          <input
            type="file"
            name="upload"
            accept="application/pdf"
            placeholder="Business Registration"
            value={formData.businessRegistration}
            onChange={(e) => {
              setformData({
                ...formData,
                businessRegistration: e.target.value,
              });
            }}
            className="bg-inputGrey mt-3 w-[335px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px] text-sm my-3 "
          />
          <span className="text-xs text-gray-500">
            *Files Supported: pdf only
          </span>

          <input
            type="file"
            name="upload"
            accept="application/pdf"
            placeholder="Licenses and Permits"
            value={formData.licensesAndPermits}
            onChange={(e) => {
              setformData({ ...formData, licensesAndPermits: e.target.files });
            }}
            className="bg-inputGrey mt-3 w-[335px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px] text-sm my-3 "
          />
          <span className="text-xs text-gray-500">
            *Files Supported: pdf only
          </span>

          <label htmlFor="Legal" className="mt-5">
            Banking Information <span className="text-brickRed ">*</span>
          </label>

          <input
            type="file"
            name="upload"
            accept="application/pdf"
            placeholder="Account statement"
            value={formData.accountStatement}
            onChange={(e) => {
              setformData({ ...formData, accountStatement: e.target.files });
            }}
            className="bg-inputGrey mt-3 w-[335px] h-[56px] p-5 focus:outline-none focus:ring focus:ring-purple lg:w-[600px] text-sm my-3 "
          />
          <span className="text-xs text-gray-500">
            *Files Supported: pdf only
          </span>

          <div className="flex items-center justify-around mr-12 lg:mr-20">
            <Button
              text="Previous"
              variant="bg-purple w-[100px] text-center py-2 px-2 mx-auto text-white font-naunum mt-10 "
              onClick={handlePrevious}
            />
            <Button
              text="Submit"
              variant="bg-purple w-[100px] text-center py-2 px-2 mx-auto text-white font-naunum mt-10 "
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
}
