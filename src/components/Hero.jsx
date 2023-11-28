import Button from "./Button";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center font-libre">
      <img
        src="/hero2.jpg"
        alt=""
        className="h-[800px] object-cover  w-full  sm:bg-contain "
      />
      <div className="absolute text-white text-center">
        <h1 className="text-[80px] -mt-28 text-black font-[700] lg:text-9xl ">
          Fintech
        </h1>
        <p className="text-[35px] max-w-md mx-auto mt-8 text-black lg:text-5xl lg:max-w-3xl font-[700]">
          Business Investor Platform
        </p>
        <p className="text-2xl mt-10 text-white lg:text-2xl font-[700]">
          The best and optimal way to invest
        </p>
        <div className="mt-10">
          <Button text="Learn More" url="/aboutUs" variant="py-5 px-7" />
        </div>
      </div>
    </div>
  );
}
