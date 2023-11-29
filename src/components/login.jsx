import loginicon from "./images/loginIcon.png";
import fbicon from "./images/facebook.png";
import googleicon from "./images/google.png";
import AppleIcon from "@mui/icons-material/Apple";

function login() {
  return (
    <div className=" ">
      <div className=" mt-20 md:mt-3 flex  flex-col items-center justify-center ">
        <div className=" flex flex-col items-center justify-between mt-4 md:mt-3 ">
          <img src={loginicon} alt="login icon" />
          <h2 className=" uppercase md:text-3xl font-bold font-libri mt-5">
            sign in
          </h2>
        </div>
        <div className=" inputs mt-3 ">
          <form className=" items-center justify-center flex">
            <div>
              <h2 className=" font-semibold text-lg  ml-3">Email</h2>
              <input
                className=" w-[310px] border-2 rounded-xl border-slate-600 h-12 text-xl pl-3"
                type="text"
                name="email"
              />
              <h2 className=" font-semibold text-lg  ml-3">Password</h2>
              <input
                className=" w-[310px] border-2 rounded-xl border-slate-600 h-12 text-xl pl-3"
                type="text"
                name="email"
              />
              <h4 className=" text-end text-slate-500 text-lg  font-medium">
                Forgotten password?
              </h4>
            </div>
          </form>
        </div>
        <button className="Login bg-violet-600 items-center justify-center w-[310px] h-14 flex mx-auto rounded-xl text-white font-bold text-xl mt-3">
          Login
        </button>
        <p className=" text-center mt-3 text-slate-500 text-lg  font-medium mb-2">
          Dont have an account? <span className=" text-red-500"> Signup</span>{" "}
          <br /> or continue with
        </p>
        <div className="socials flex items-center justify-evenly mb-10 md:justify-center ">
          <img src={googleicon} alt="" className=" px-2" />
          <img src={fbicon} alt="" className=" px-2  pr-5" />
          <AppleIcon />
        </div>
      </div>
    </div>
  );
}

export default login;
