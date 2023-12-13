/* eslint-disable react/prop-types */
import Button from "../LandingPage/components/Button";
import RangeSlider from "./components/RangeSlider";
import Input from "./components/Input";
import FileInput from "./components/FileInput";

export default function PageTwo({
  handlePrevious,
  formData,
  setFormData,
  handleSubmit,
}) {
  const handleFileChange = (field) => (file) => {
    setFormData({ ...formData, [field]: file });
  };

  const handleChange = (field) => (value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <>
      <div className="pl-7 lg:px-9">
        <h2 className="mt-9">
          Financial Information <span className="text-brickRed">*</span>
        </h2>

        <div className="flex flex-col mb-10">
          <FileInput
            label="Upload Profit or Revenue"
            accept="application/pdf"
            value={formData.revenueProfit}
            onChange={handleFileChange("revenueProfit")}
          />

          <Input
            type="text"
            placeholder="Tax Identification Number"
            value={formData.taxIdentificationNumber}
            onChange={handleChange("taxIdentificationNumber")}
            className="my-3"
          />

          <Input
            type="text"
            placeholder="Purpose of Investment (e.g Expansion)"
            value={formData.purposeOfInvestment}
            onChange={handleChange("purposeOfInvestment")}
            className="my-3 text-sm"
          />

          <span className="text-xs text-gray-500">
            Equity Available for Investors (%)
          </span>
          <RangeSlider formData={formData} setFormData={setFormData} />

          <FileInput
            label="Business Registration"
            accept="application/pdf"
            value={formData.businessRegistration}
            onChange={handleFileChange("businessRegistration")}
          />

          <FileInput
            label="Licenses and Permits"
            accept="application/pdf"
            value={formData.licensesAndPermits}
            onChange={handleFileChange("licensesAndPermits")}
          />

          <FileInput
            label="Account statement"
            accept="application/pdf"
            value={formData.accountStatement}
            onChange={handleFileChange("accountStatement")}
          />

          <div className="flex items-center justify-around mr-12 lg:mr-20">
            <Button
              text="Previous"
              variant="bg-purple w-[100px] text-center py-2 px-2 mx-auto text-white font-naunum mt-10"
              onClick={handlePrevious}
            />
            <Button
              text="Submit"
              variant="bg-purple w-[100px] text-center py-2 px-2 mx-auto text-white font-naunum mt-10"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
}
