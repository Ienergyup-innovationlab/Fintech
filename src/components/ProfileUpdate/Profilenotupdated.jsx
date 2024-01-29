
export const Profilenotupdated = () => {
  return (
    <>
      <div className="w-full h-full relative bg-white flex flex-col justify-start items-start">
        <div className="w-1281 h-766 bg-white shadow-md rounded-3xl border-0.5 border-solid border-gray-700" />
        <div className="w-458 h-458 bg-white rounded-full border-0.5 border-black border-solid" />
        <div className="w-343 h-341 bg-purple-500 rounded-full" />
        <div className="text-black text-2xl font-poppins font-semibold italic break-words">
          Profile not updated
        </div>
        <div className="w-71 h-49 text-black text-2xl font-poppins font-medium underline break-words">
          80%
        </div>
        <div className="text-black text-xl font-poppins font-normal break-words">
          Profile not yet completed - you will need to complete all profile
          requirements
          <br />
          in order to trade equities. On completion of your profile, you will be
          notified
          <br />
          when your trading account is active.
        </div>
        <div className="w-144 h-51 text-black text-base font-poppins font-normal underline break-words">
          Uploaded
          <br />
          Documents
        </div>
        <div className="w-340 h-70 relative">
          <div className="w-340 h-70 left-0 top-0 absolute bg-purple-500 rounded-md" />
          <button>
          <div className="left-108 top-20 absolute text-center text-white text-2xl font-poppins font-semibold break-words">
            Update now
          </div>
          </button>
        </div>
        <div className="text-black text-base font-poppins font-normal break-words">
          Later
        </div>
      </div>
    </>
  );
};

// const Profilenotupdated = () => {
//   return (
//     <>
//       <ProfileUpdate />
//     </>
//   );
// };



export default Profilenotupdated;
