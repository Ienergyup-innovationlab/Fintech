import { useState } from "react";
import StepTwo from "./StepTwo";
import StepOne from "./StepOne";

export default function SignUp() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="overflow-y-hidden overflow-x-hidden">
      {currentStep === 1 && <StepOne onNext={handleNext} />}
      {currentStep == 2 && <StepTwo onNext={handleNext} onPrev={handlePrev} />}
    </div>
  );
}
