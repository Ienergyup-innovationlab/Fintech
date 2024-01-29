import iconVerify from "../images/icon-verify.png";

const AuthenticateVerify = () => {

    return (
        <div className='main'>
            <h1 className="block text-3xl font-bold text-center text-gray-800 mb-20 mt-20">Two Factor Authentication</h1>
        
            <div className='mb-20'>
                <img className="icon-height" src={iconVerify} alt="icon-Verify" />
            </div>

            <h1 className="block text-3xl font-bold text-center text-gray-800 mb-8">Two-factor Authentication Verified</h1>

            <button
                type="button"
                className="bg-primary px-4 md:px-0 py-4 md:py-4 text-white font-semibold rounded-md md:rounded-[10px] txtfield self-center"
            >
                Done
            </button>
        </div>
    );

};


const VerifiedPage = () => {
  return (
    <>
      <AuthenticateVerify />
    </>
  );
};

export default VerifiedPage;