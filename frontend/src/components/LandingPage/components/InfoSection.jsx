import Button from "./Button";

export default function InfoSection() {
  return (
    <section className="flex flex-col lg:flex-row w-full font-libre">
      <div className="bg-purple h-[500px] lg:h-[700px]  lg:w-[50%] p-5 lg:p-10 text-white">
        <h1 className="mt-4 w-60 text-3xl lg:text-6xl lg:w-[500px] lg:mt-28 ">
          Discover the essence of our application
        </h1>
        <p className="py-4 mt-3 font-nanum text-lg lg:leading-7 lg:max-w-xl lg:mt-7 lg:text-base  ">
          Welcome to our world of innovation and progress. Allow us to share our
          story and how it intertwines with your aspirations. Together, we can
          achieve greatness and make a difference. Join us on this exciting
          journey.
        </p>
        <div className="pt-3 pb-5 -ml-3 lg:mt-3 ">
          <Button
            text="Learn More"
            url="/aboutUs"
            variant="py-4 px-5 bg-white text-purple font-nanum antialiased"
          />
        </div>
      </div>
      <div className="lg:w-[50%]">
        <img
          src="/Hero.jpg"
          alt=""
          className="h-[300px] w-full lg:h-[700px] object-cover lg:object-cover "
        />
      </div>
    </section>
  );
}
