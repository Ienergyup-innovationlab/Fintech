/* eslint-disable react/prop-types */
import Button from "../LandingPage/components/Button";

export default function StepOne({ onNext }) {
  return (
    <div>
      <div className="bg-purple min-h-screen">
        <div className="flex items-center justify-center flex-col pt-20 onboard1 font-nanum">
          <img
            src="/onboard1.png"
            alt=""
            className="w-72 h-72 lg:w-96 lg:h-96"
          />
          <h1 className="mt-9  text-white text-3xl">Business Investment</h1>
          <p className="pl-5 lg:p-0 mt-11 max-w-lg leading-8 text-slade text-xl">
            An investment in knowledge pays the best interest. Goodness is the
            only investment that never fails. We must shift our thinking away
            from short-term gain toward long-term investment and sustainability,
            and always have the next generations in mind with every decision we
            make.
          </p>
          <div className="mt-8 space-x-10">
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
