import Button from "../LandingPage/components/Button";

function signUp() {
  return (
    <div className=" bg-purple md:bg-sbg  min-h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center pb-20">
      <h2 className=" md:text-4xl  text-xl font-semibold md:text-black text-white font-nanum capitalize pb-4">
        Register new account
      </h2>
      <p className="hidden md:flex text-center mx-auto  text-base font-semibold">
        Fundcraft has various categories of users.
        <br /> Kindly select who you would like to sign up as
      </p>
      <Button
        text="Investor account"
        url="/InvestorRegistration"
        variant=" bg-white text-black md:hover:bg-violet-950 transition-all md:bg-purple items-center justify-center w-[350px] h-12  capitalize flex  rounded-xl md:text-white font-semibold text-lg mt-5"
      />
      <Button
        text="Business account"
        url="/InvestorRegistration"
        variant=" bg-white text-black md:hover:bg-violet-950 transition-all md:bg-purple items-center justify-center w-[350px] h-12  capitalize flex  rounded-xl md:text-white font-semibold text-lg mt-5"
      />
      <Button
        text="Regular account"
        url="/InvestorRegistration"
        variant=" bg-white text-black md:hover:bg-violet-950 transition-all md:bg-purple items-center justify-center w-[350px] h-12  capitalize flex  rounded-xl md:text-white font-semibold text-lg mt-5"
      />
    </div>
  );
}

export default signUp;
