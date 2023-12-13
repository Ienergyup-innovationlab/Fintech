/* eslint-disable react/prop-types */
import Button from "../LandingPage/components/Button";

import Input from "./components/Input";

export default function PageOne({ handleNext, formData, setformData }) {
  const handleChange = (field, value) => {
    setformData({ ...formData, [field]: value });
  };

  return (
    <>
      <h1 className="font-nanum text-center text-2xl font-bold mt-5 lg:mt-7 lg:text-2xl ">
        Business Registration Form
      </h1>
      <div className="pl-7 lg:px-9">
        <div className="flex mt-9">
          <h2>Business Information</h2>
          <p className="text-brickRed">*</p>
        </div>
        <div className="space-y-7 flex flex-col mb-10 ">
          <Input
            type="text"
            name="businessName"
            placeholder="Business name"
            value={formData.businessName}
            onChange={(e) => handleChange("businessName", e.target.value)}
            className="mt-3"
          />
          <Input
            type="email"
            name="businessEmail"
            placeholder="Business email address"
            value={formData.businessEmail}
            onChange={(e) => handleChange("businessEmail", e.target.value)}
          />
          <Input
            type="text"
            name="businessPhoneNumber"
            placeholder="Business phone number"
            value={formData.businessPhoneNumber}
            onChange={(e) =>
              handleChange("businessPhoneNumber", e.target.value)
            }
          />
          <Input
            type="text"
            name="industrySector"
            placeholder="Industry/Sector"
            value={formData.industrySector}
            onChange={(e) => handleChange("industrySector", e.target.value)}
          />
          <label htmlFor="establishmentDate">Date of establishment</label>
          <Input
            type="date"
            name="establishmentDate"
            placeholder="Date of establishment"
            value={formData.establishmentDate}
            onChange={(e) => handleChange("establishmentDate", e.target.value)}
          />
          <Button
            text="Next"
            variant="bg-purple w-[200px] text-center py-2 px-2 lg:mx-auto text-white font-naunum mt-10"
            onClick={handleNext}
          />
        </div>
      </div>
    </>
  );
}
