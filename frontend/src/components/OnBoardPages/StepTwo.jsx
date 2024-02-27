/* eslint-disable react/prop-types */
import Button from "../LandingPage/components/Button";

export default function OnBoardPage2({ onPrev }) {
  return (
    <div>
      <div className="bg-purple min-h-screen">
        <div className="flex items-center justify-center flex-col pt-20 onboard1 font-nanum">
          <img
            src="/Agreement.png"
            alt=""
            className="w-64 h-64 lg:w-96 lg:h-96   "
          />
          <h1 className="mt-9 font-bold  text-center text-white text-3xl  ">
            Best Place To Invest
          </h1>
          <div className="mt-11 space-y-9 flex flex-col item-center justify-center">
            <Button
              text="Register"
              variant="bg-white py-2 rounded-lg w- text-center w-80 hover:text-purple  px-3 text-xl"
              url="/signUp"
            />
            <Button
              text="Sign In"
              variant="bg-white py-2 rounded-lg text-center hover:text-purple  px-3 text-xl"
              url="/login"
            />
            <div className="max-w-md mx-auto">
              <Button
                text="Prev"
                variant="bg-white py-2 text-center w-4 px-3 w-24 text-xl"
                onClick={onPrev}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
