import qrcode from "../images/openmoji_qr-code.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Authenticate = () => {
  
    const [copyText,setCopyText]=useState('')
    const handleCopy=()=>{
        navigator.clipboard.writeText(copyText)
        alert("copied")
    }

    const [otp, setOtp] = useState(""); //OTP input state

    const navigateTo = useNavigate();

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

     // Requests user mail using api endpoint
    const handleVerifyBtn = async () => {
        try {
        // Stores recieved email
        const { token } = location.state;

        // Requests OTP
        const response = await authApi.post("/verify-sign-up-otp", { otp }, {
            headers: {
            Authorization: `Bearer ${token}`
            }
        });

        console.log(`Verification successful`, response.data);

        // Redirect to verified email page if successful
        navigateTo({ pathname: "/" });
        } catch (error) {
        console.error(`Verification failed:`, error);
        }
    };


    return (
        <div className='main'>
          <h1 className="block text-3xl font-bold text-center text-gray-800 mb-12 mt-14">Two Factor Authentication</h1>
          <p className="text-xl text-black font-normal text-center mb-10 p-text">Set up two factor authentication</p>
          <p className="text-xl text-black font-normal text-center mb-10 p-text">Two-factor authentication protects your account by <br />
          requiring an additional code when you log in on a device <br />
          we don't recognize. To set up Two factor authentication <br />
          scan this QR Code in your authenticator or copy the key <br />
          and paste it in the authentication app.
          </p>
          <div className='badges'>
          <img src={qrcode} alt="scancode" />
          </div>

          <p className="mt-4 mb-4 text-black">
          <div className="hr-sect p-text">Or</div>
          </p>
          <div className="mb-10">
            <input value={copyText} onChange={(e)=>setCopyText(e.target.value)} 
            className="rounded-l border border-grey text-black txtfield py-2 px-2"
            placeholder="1WTM LZXE UWU4 EQOR OZDB NQBH BKPY PK3P"/>
            <button onClick={handleCopy} className="px-6 rounded-r border border-grey py-2">Copy</button>
          </div>

          <small className="mb-2 text-left">Verification Code</small>
          <div className="flex gap-2 justify-center mb-4">
                <input
                  onChange={handleOtpChange}
                  value={otp}
                  type="text"
                  name="otpValue"
                  maxLength={1}
                  pattern="[0-9]"
                  inputMode="numeric"
                  className="border border-grey rounded-md h-10 md:h-16 w-10 md:w-16 md:text-4xl text-center text-black-100 dark:text-white bg-white-50 dark:bg-black shadow-lg"
                />
                <input
                  onChange={handleOtpChange}
                  value={otp}
                  type="text"
                  name="otpValue"
                  maxLength={1}
                  pattern="[0-9]"
                  inputMode="numeric"
                  className="border border-grey rounded-md h-10 md:h-16 w-10 md:w-16 md:text-4xl text-center text-black-100 dark:text-white bg-white-50 dark:bg-black shadow-lg"
                />
                <input
                  onChange={handleOtpChange}
                  value={otp}
                  type="text"
                  name="otpValue"
                  maxLength={1}
                  pattern="[0-9]"
                  inputMode="numeric"
                  className="border border-grey rounded-md h-10 md:h-16 w-10 md:w-16 md:text-4xl text-center text-black-100 dark:text-white bg-white-50 dark:bg-black shadow-lg"
                />
                <input
                  onChange={handleOtpChange}
                  value={otp}
                  type="text"
                  name="otpValue"
                  maxLength={1}
                  pattern="[0-9]"
                  inputMode="numeric"
                  className="border border-grey rounded-md h-10 md:h-16 w-10 md:w-16 md:text-4xl text-center text-black-100 dark:text-white bg-white-50 dark:bg-black shadow-lg"
                />
                <input
                  onChange={handleOtpChange}
                  value={otp}
                  type="text"
                  name="otpValue"
                  maxLength={1}
                  pattern="[0-9]"
                  inputMode="numeric"
                  className="border border-grey rounded-md h-10 md:h-16 w-10 md:w-16 md:text-4xl text-center text-black-100 dark:text-white bg-white-50 dark:bg-black shadow-lg"
                />
                <input
                  onChange={handleOtpChange}
                  value={otp}
                  type="text"
                  name="otpValue"
                  maxLength={1}
                  pattern="[0-9]"
                  inputMode="numeric"
                  className="border border-grey rounded-md h-10 md:h-16 w-10 md:w-16 md:text-4xl text-center text-black-100 dark:text-white bg-white-50 dark:bg-black shadow-lg"
                />
              
            </div>

            <small className="mt-4 text-primary">Do you need help?</small>
            <button
                onClick={handleVerifyBtn}
                type="button"
                className="bg-primary px-4 md:px-0 py-4 md:py-4 text-white font-semibold rounded-md md:rounded-[10px] txtfield self-center my-10"
            >
                Sign Up
            </button>
        </div>
    );
};


const AuthenticationPage = () => {
  return (
    <>
      <Authenticate />
    </>
  );
};

export default AuthenticationPage;