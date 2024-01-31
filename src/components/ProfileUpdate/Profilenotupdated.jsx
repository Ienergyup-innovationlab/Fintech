import eclipse from "../images/group-80.png";

export const Profilenotupdated = () => {
  return (
    <div className="w-[1440px] h-[1024px] bg-white justify-center items-center flex">
      <div className="w-[1281px] h-[766px]  bg-white rounded-[30px] shadow shadow-slate-400 border border-neutral-500 flex items-center">
        <section>
          <div className="container flex flex-col md:flex-row md:w-1/2 mx-auto space-y-0 justify-center ">
            <div className="w-[343px] h-[341px] bg-white rounded-full flex text-center border border-black relative">
              <img
                className="w-[300px] h-[300px] absolute right-10 ml-[30px] pt-5 flex items-center border-radius-10px"
                src={eclipse}
                alt=""
              />
              <div className="w-[71px] h-[49px] text-black text-xl text-center font-medium font-['Poppins'] underline pt-[40px] pl-[100px] ">
                80%
              </div>
              <div className="w-[144px] h-[51px] text-black text-base font-normal font-['Poppins'] underline pt-[80px] pr-[100px] mr-[250px] ">
                Uploaded
                <br />
                Documents
              </div>
            </div>

            <div className="flex flex-col mx-auto space-y-0 md:space-y-12">
              <h2 className="w-[306px] h-[15px] text-black text-xl font-semibold font-['Poppins'] ml-[400px]">
                Profile not updated
              </h2>
              <h2 className="w-[684px] h-[81px] text-black text-lg text-center font-normal font-['Poppins'] ml-[150px] flex items-center">
                Profile not yet completed - you will need to complete all profile
                requirements <br /> in order to trade equities. On completion of your profile you
                will be notified <br />
                when your trading account is active.
              </h2>
              <div className="flex justify-center ml-[200px]">
                <button className="w-[340px] h-[70px]  bg-purple rounded-[10px] pt-5 flex justify-center text-center text-white text-xl font-medium font-['Poppins']">
                  {" "}
                  Update now{" "}
                </button>
              </div>
              <div className="text-black text-base font-normal font-['Poppins'] text-center mt-[100px] ml-[200px] ">
                Later
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profilenotupdated;
