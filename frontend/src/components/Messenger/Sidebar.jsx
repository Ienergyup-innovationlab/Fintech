import React from "react";
import Navbarchat from "./Navbarchat";
import man1 from "../images/man1.png";
import man2 from "../images/man2.png";
import man3 from "../images/man3.png";
import woman1 from "../images/woman1.png";
import woman2 from "../images/woman2.png";
import woman3 from "../images/woman3.png";

const Sidebar = () => {
  return (
    <div className=" bg-white font-poppins  border border-none w-[400px] relative overflow-y-auto overflow-x-hidden">
      <Navbarchat />
        <section className="w-full flex justify-center">
          <ul className="w-[360px] h-[116px] mt-5 border border-none p-10 flex float-left items-center bg-white hover:rounded-3xl hover:bg-slate-100">
            <li className="relative w-full ml-10">
              <img
                src={man1}
                alt=""
                className="rounded-full w-16 h-16 ml-[-70px] top-[213px] flex float-left"
              />
              <span className="w-[112px] h-[30px] mt-2 ml-2 font-semibold absolute">
                Sam Harry
              </span>
              <span className="w-[12px] h-[30px] mt-2 ml-[200px] text-sm  absolute">
                12:30pm
              </span>
              <span className="w-[180px] h-[30px] mt-10  pl-2 text-sm   absolute">
                Okay, see you soon...
              </span>
            </li>
          </ul>
        </section>

        <section className="w-full flex justify-center float-left">
          <ul className="w-[360px] h-[116px] mt-5 border border-none p-10 flex float-left items-center bg-white hover:rounded-3xl hover:bg-slate-100">
            <li className="relative w-full ml-10">
              <img
                src={man2}
                alt=""
                className="rounded-full w-16 h-16 ml-[-70px] top-[213px] flex float-left"
              />
              <span className="w-[132px] h-[30px] mt-2 ml-2 text-black font-bold absolute">
                Emmanuel Joe
              </span>
              <span className="w-[12px] h-[30px] mt-2 ml-[200px] text-black text-sm  absolute">
                12:30pm
              </span>
              <span className="w-[180px] h-[30px] mt-10  pl-2 text-black text-sm  absolute">
                Lets see how it goes.
              </span>
            </li>
          </ul>
        </section>
        <section className="w-full flex justify-center float-left">
          <ul className="w-[360px] h-[116px] mt-5 border border-none p-10 flex float-left items-center bg-white hover:rounded-3xl hover:bg-slate-100">
            <li className="relative w-full ml-10">
              <img
                src={woman1}
                alt=""
                className="rounded-full w-16 h-16 ml-[-70px] top-[213px] flex float-left"
              />
              <span className="mt-2 ml-2 text-black font-bold absolute">
                Anita Gabriel
              </span>
              <span className="w-[12px] h-[30px] mt-2 ml-[200px] text-black text-sm absolute">
                12:30pm
              </span>
              <span className="w-[180px] h-[30px] mt-10  pl-2 text-black text-sm  absolute">
                Will talk to you later
              </span>
            </li>
          </ul>
        </section>
        <section className="w-full flex justify-center float-left">
          <ul className="w-[360px] h-[116px] mt-5 border border-none p-10 flex float-left items-center bg-white hover:rounded-3xl hover:bg-slate-100">
            <li className="relative w-full ml-10">
              <img
                src={woman2}
                alt=""
                className="rounded-full w-16 h-16 ml-[-70px] top-[213px] flex float-left"
              />
              <span className="w-[112px] h-[30px] mt-2 ml-2 text-black font-bold absolute">
                Juliet Effiong
              </span>
              <span className="w-[12px] h-[30px] mt-2 ml-[200px] text-black text-sm  absolute">
                12:30pm
              </span>
              <span className="w-full h-[35px]  mt-10  pl-2 text-black text-sm  absolute overflow-scroll overflow-x-hidden overflow-y-hidden scroll-smooth ">
                We will reach out to the affected parties. <br /> That is if
                they are ready to address things <br />
              </span>
            </li>
          </ul>
        </section>
        <section className="w-full flex justify-center float-left ">
          <ul className="w-[360px] h-[116px] mt-5 border border-none p-10 flex float-left items-center bg-white hover:rounded-3xl hover:bg-slate-100">
            <li className="relative w-full ml-10">
              <img
                src={man3}
                alt=""
                className="rounded-full w-16 h-16 ml-[-70px] top-[213px] flex float-left"
              />
              <span className="w-[112px] h-[30px] mt-2 ml-2 text-black font-bold  absolute">
                Peter Sam
              </span>
              <span className="w-[12px] h-[30px] mt-2 ml-[200px] text-black text-sm   absolute">
                12:30pm
              </span>
              <span className="w-[300px] h-[30px] mt-10  pl-2 text-black text-sm   absolute">
                When we check out the bad <br />
                line they push out there.
              </span>
            </li>
          </ul>
        </section>
        <section className="w-full flex justify-center float-left ">
          <ul className="w-[360px] h-[116px] mt-5 border border-none p-10 flex float-left items-center bg-white hover:rounded-3xl hover:bg-slate-100">
            <li className="relative w-full ml-10">
              <img
                src={woman3}
                alt=""
                className="rounded-full w-16 h-16 ml-[-70px] top-[213px] flex float-left"
              />
              <span className="w-[112px] h-[30px] mt-2 ml-2 text-black font-bold absolute">
                Mary Jen
              </span>
              <span className="w-[12px] h-[30px] mt-2 ml-[200px] text-black text-sm   absolute">
                12:30pm
              </span>
              <span className="w-[180px] h-[30px] mt-10  pl-2 text-black text-sm   absolute">
                Okay, see you soon...
              </span>
            </li>
          </ul>
        </section>
      </div>
  );
};

export default Sidebar;
