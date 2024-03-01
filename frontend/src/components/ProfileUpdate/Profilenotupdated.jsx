import eclipse from "../images/group-80.png";

export const Profilenotupdated = () => {
  return (
    <div className="w-full h-auto mt-10 bg-white justify-center items-center font-['Poppins'] flex">
      <div className="w-[1281px] h-[766px]  bg-white rounded-[30px] shadow shadow-slate-400 border border-neutral-500 flex items-center">
        <section>
          <div className="container flex flex-col md:flex-row md:w-1/2 mx-auto space-y-2 justify-center ">
            <div className="w-[343px] h-[341px] bg-white rounded-full flex text-center border border-black relative">
              <img
                className="w-[300px] h-[300px] absolute right-10 ml-[30px] pt-5 flex items-center border-radius-10px"
                src={eclipse}
                alt=""
              />
              <div className=" text-xl text-center font-medium  underline pt-[40px] pl-[100px] ">
                80%
              </div>
              <div className="text-base font-normal underline pt-[80px] pr-[100px]  ">
                Uploaded
                <br />
                Documents
              </div>
            </div>

            <div className="flex flex-col mx-auto space-y-0 md:space-y-12">
              <h2 className="w-full text-black text-xl font-semibold ml-[400px]">
                Profile not updated
              </h2>
              <h2 className="w-full text-black text-lg text-center font-normal font-['Poppins'] ml-[150px] flex items-center">
                Profile not yet completed - you will need to complete all
                profile requirements in order to trade equities. On
                completion of your profile you will be notified 
                when your trading account is active.
              </h2>
              <div className="flex justify-center ml-[300px]">
                <button className="w-[340px] h-[70px]  bg-purple rounded-[10px] pt-5 flex justify-center text-center text-white text-xl font-medium ">
                  {" "}
                  Update now{" "}
                </button>
              </div>
              <div className="text-black text-center mt-[100px] ml-[300px] ">
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
