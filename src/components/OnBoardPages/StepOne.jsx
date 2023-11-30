/* eslint-disable react/prop-types */
import Button from "../LandingPage/components/Button";

export default function StepOne({ onNext }) {
  return (
    <div className="overflow-y-hidden">
      <div className="bg-purple min-h-screen">
        <div className="flex items-center justify-center flex-col pt-7 onboard1 font-nanum">
          <img
            src="/onboard1.png"
            alt=""
            className="w-64 h-64 lg:w-80 lg:h-80"
          />
          <h1 className="mt-9 text-white text-2xl">Business Investment</h1>
          <p className="px-5  lg:p-0  mt-4  max-w-lg leading-8 text-slade text-base">
            An investment in knowledge pays the best interest. Goodness is the
            only investment that never fails. We must shift our thinking away
            from short-term gain toward long-term investment and sustainability,
            and always have the next generations in mind with every decision we
            make.
          </p>
          <div className="mt-8 space-x-10 ">
            <Button
              text="Next"
              variant="bg-white py-2 px-3 text-xl"
              onClick={onNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
