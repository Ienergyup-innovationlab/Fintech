import Button from "../LandingPage/components/Button";
import MTN from "../images/mtnlogo.png";
import { CgProfile } from "react-icons/cg";
import ArrowBack from "../images/arrow-back.png";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { BiFootball } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { React, useState } from "react";
import Popup from "../SendDetails/Popups";

const AirtimePage = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <div className="mt-12 px-20 pd-mobile">
        <div className="font-poppins justify-center ">
          <Link to="/DashboardPage">
            <img src={ArrowBack} alt="" />
          </Link>
          
       
            <Button
              variant=" float-right block py-3 px-2 text-xl text-center w-72 h-14 text-white rounded-full bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              text="Transaction History"
              url="TransactionHistory"
            />
     

          <h1 className="justify-center flex text-4xl text-primary">
            Airtime TopUp
          </h1>
        </div>
        <div className="float-right mr-24 mt-5 "></div>
        <div className=" border border-transparent border-b-gray-300 w-full mt-20 justify-center md:justify-evenly ">
          <img src={MTN} alt="" className="rounded-full size-20" />

          <CgProfile
            color="white"
            className="border-2 bg-black w-20 h-20 float-right -mt-20 "
          />
          <h1 className="text-4xl ml-[600px] text-gray-400 -mt-5 ">
            09035687636
          </h1>
        </div>
        <div className="border-2 border-gray-300 mt-10 bg-lightpurple rounded-lg">
          <h3 className="text-primary mx-5">Top-Up</h3>
          <form className=" justify-evenly flex">
            <section>
              <input
                type="number"
                name="price"
                step="100"
                id="amount"
                required
                className="py-4 m-5 rounded-lg w-24 px-6 border-2 border-gray bg-white mb-6 text-gray"
                placeholder="100"
              />

              <input
                type="number"
                name="price"
                step="100"
                id="amount"
                required
                className="py-4 m-5 rounded-lg w-24 px-6 border-2 border-gray bg-white mb-6 text-gray"
                placeholder="100"
              />
            </section>
            <section>
              <input
                type="number"
                name="price"
                step="100"
                id="amount"
                required
                className="py-4 m-5 rounded-lg w-24 px-6 border-2 border-gray bg-white mb-6 text-gray"
                placeholder="100"
              />

              <input
                type="number"
                name="price"
                step="100"
                id="amount"
                required
                className="py-4 m-5 rounded-lg w-24 px-6 border-2 border-gray bg-white mb-6 text-gray"
                placeholder="100"
              />
            </section>
            <Button
              onClick={() => setButtonPopup(true)}
              type="button"
              text="Pay"
              id="pay"
              variant="bg-primary text-white w-14 h-10 text-center rounded-lg mt-28 mb-5 py-2 "
            />
          </form>
        </div>

        <div className="border-2 border-gray-300 mt-10 bg-lightpurple rounded-lg ">
          <h1 className="m-5 text-primary">Recommended Offers</h1>
          <div className="flex justify-evenly bg-white">
            <div className="border-2 border-gray-300 m-10 w-[300px] text-center rounded-lg">
              <h3 className="font-semibold">2.5GB / 2DAYS</h3>
              <p className="text-gray-500 text-sm">#600.00 / #10 Cash Back</p>
            </div>

            <div className="border-2 border-gray-300 m-10 w-[300px] text-center rounded-lg">
              <h3 className="font-semibold">2.5GB / 2DAYS</h3>
              <p className="text-gray-500 text-sm">#600.00 / #10 Cash Back</p>
            </div>
          </div>
        </div>

        <div className="border-2 border-gray-300 mt-10 bg-lightpurple rounded-lg ">
          <h1 className="m-5 text-primary">Fundcraft Special Offer</h1>
          <div className="flex justify-evenly bg-white">
            <div className="border-2 border-gray-300 m-10 w-[300px] text-center rounded-lg">
              <h3 className="font-semibold text-primary text-lg ">
                Data Bundle
              </h3>
              <HiOutlineArrowsRightLeft
                color="purple"
                className="size-10 ml-32 m-4 "
              />
            </div>

            <div className="border-2 border-gray-300 m-10 w-[300px] text-center rounded-lg">
              <h3 className="font-semibold text-primary text-lg">Betting</h3>
              <BiFootball color="purple" className="size-10  ml-32 m-4 " />
            </div>
          </div>
          <Popup trigger={buttonPopup}>
            <Link to=".">
              <AiOutlineCloseCircle className="size-8 float-right -mt-16 -mr-16" />
            </Link>
            <div className="rounded-[16px] border-2 border-gray">
              <h3 className="font-semibold text-[30px] pt-4 pb-10">
                Transaction Details
              </h3>
              <div className="flex items-center justify-between px-10 py-4">
                <div>
                  <p className="font-medium">Amount : </p>
                </div>
                <div>
                  <p>500</p>
                </div>
              </div>
              <div className="flex items-center justify-between px-10 py-4">
                <div>
                  <p className="font-medium">Phone Number :</p>
                </div>
                <div>
                  <p>09035673652</p>
                </div>
              </div>
              <div className="flex items-center justify-between px-10 py-4">
                <div>
                  <p className="font-medium">Network :</p>
                </div>
                <div>
                  <p>MTN Nigeria</p>
                </div>
              </div>
              <div className="font-semibold text-lg text-center pb-8">
                <button
                  type="button"
                  className="mt-16 px-20 py-5 text-lg font-medium text-center text-white bg-primary rounded-[50px] hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <Link to="/SuccessPage">Confirm to Pay</Link>
                </button>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    </>
  );
};

export default AirtimePage;
