import loginicon from "./images/loginIcon.png";
import fbicon from "./images/facebook.png";
import googleicon from "./images/google.png";
import AppleIcon from "@mui/icons-material/Apple";

function login() {
  return (
    <div className=" ">
      <div className=" flex flex-col items-center justify-between mt-4">
        <img src={loginicon} alt="login icon" />
        <h2 className=" uppercase text-3xl font-bold mt-5">sign in</h2>
      </div>
      <div className=" inputs mt-6 ">
        <form className=" items-center justify-center flex">
          <div>
            <h2 className=" font-semibold text-lg font-nanum ml-3">Email</h2>
            <input
              className=" w-[310px] border-2 rounded-xl border-slate-600 h-14 text-xl pl-3"
              type="text"
              name="email"
            />
            <h2 className=" font-semibold text-lg font-nanum ml-3">Password</h2>
            <input
              className=" w-[310px] border-2 rounded-xl border-slate-600 h-14 text-xl pl-3"
              type="text"
              name="email"
            />
            <h4 className=" text-end text-slate-500 text-lg font-nanum font-medium">
              Forgotten password?
            </h4>
          </div>
        </form>
      </div>
      <button className="Login bg-purple-600 items-center justify-center w-[310px] h-14 flex mx-auto rounded-xl text-white font-bold font-font1 text-xl mt-3">
        Login
      </button>
      <p className=" text-center mt-3 text-slate-500 text-lg font-nanum font-medium mb-2">
        Dont have an account? <span className=" text-red-500"> Signup</span>{" "}
        <br /> or continue with
      </p>
      <div className="socials flex items-center justify-evenly mb-10 ">
        <img src={googleicon} alt="" />
        <img src={fbicon} alt="" />
        <AppleIcon />
      </div>
    </div>
  );
}

export default login;
