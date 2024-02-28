import loginicon from "../images/loginIcon.png";
import fbicon from "../images/facebook.png";
import googleicon from "../images/google.png";
import lgicon from "../images/Frame 43.jpg";
import AppleIcon from "@mui/icons-material/Apple";

function login() {
  return (
    <div className=" ">
      <div className=" mt-20 md:mt-0 flex  flex-col md:flex-row items-center justify-center  ">
        <div className=" flex flex-col  items-center justify-between mt-4 md:mt-0 ">
          <img src={loginicon} alt="login icon" className=" flex md:hidden" />
          <img
            src={lgicon}
            alt="login icon"
            className=" hidden md:flex h-screen w-[500px] justify-start items-start pr-10"
          />
          <h2 className=" uppercase md:text-3xl font-bold font-libri mt-5 md:hidden">
            sign in
          </h2>
        </div>
        <div>
          <div className=" inputs mt-3 ">
            <form className=" items-center justify-center flex ">
              <div>
                <h2 className="hidden md:flex  text-2xl capitalize ml-5 mb-4 font-poppins font-extrabold">
                  welcome to fundcraft
                </h2>
                <h2 className=" font-semibold  text-lg md:text-sm ml-3 ">
                  Email
                </h2>
                <input
                  className=" w-[310px] border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
                  type="text"
                  name="email"
                />
                <h2 className=" font-semibold text-lg md:text-sm  ml-3 mt-2">
                  Password
                </h2>
                <input
                  className=" w-[310px] border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
                  type="text"
                  name="email"
                />
                <h4 className=" text-end text-slate-500  text-lg  font-medium cursor-pointer">
                  Forgotten password?
                </h4>
              </div>
            </form>
          </div>
          <button className="Login bg-violet-600 items-center justify-center w-[310px] h-14 flex mx-auto rounded-xl text-white font-bold text-xl mt-3">
            Login
          </button>
          <p className=" text-center mt-3 text-slate-500 md:text-black text-lg  font-medium mb-2">
            Dont have an account?{" "}
            <span className=" text-red-500 cursor-pointer"> Signup</span> <br />{" "}
            or continue with
          </p>
          <div className="socials flex items-center justify-evenly mb-10 md:justify-center ">
            <img src={googleicon} alt="" className=" px-2 pr-5" />
            <img src={fbicon} alt="" className=" px-2  pr-5" />
            <AppleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
