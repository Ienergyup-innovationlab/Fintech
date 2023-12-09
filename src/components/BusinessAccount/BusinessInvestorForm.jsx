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

  // To be used later for submitting the form
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  // };

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
          {step == 1 && <PageOne handleNext={handleNext} />}
          {step == 2 && (
            <PageTwo handleNext={handleNext} handlePrevious={handlePrevious} />
          )}
        </form>
      </div>
    </div>
  );
}
