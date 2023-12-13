import { useState } from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

export default function BusinessInvestorForm() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const [formData, setFormData] = useState({
    businessName: "",
    businessEmail: "",
    businessPhoneNumber: "",
    industrySector: "",
    establishmentDate: "",
    revenueProfit: null,
    taxIdentificationNumber: "",
    purposeOfInvestment: "",
    valueOfEquity: 0,
    businessRegistration: null,
    licensesAndPermits: null,
    accountStatement: null,
  });

  const handleSubmit = () => {
    const formDataJson = JSON.stringify(formData);
    const alertMessage = `Submitted form data: ${formDataJson}`;
    alert(alertMessage);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="lg:w-1/2 lg:min-h-screen">
        <img
          src="/buisness.jpg"
          alt=""
          className="h-[390px] lg:h-screen w-full object-cover rounded-br-[1000px] lg:rounded-none lg:min-h-full"
        />
      </div>

      <div className="md:w-1/2">
        <form>
          {step === 1 ? (
            <PageOne
              handleNext={handleNext}
              formData={formData}
              setFormData={setFormData}
            />
          ) : (
            <PageTwo
              formData={formData}
              setFormData={setFormData}
              handlePrevious={handlePrevious}
              handleSubmit={handleSubmit}
            />
          )}
        </form>
      </div>
    </div>
  );
}
