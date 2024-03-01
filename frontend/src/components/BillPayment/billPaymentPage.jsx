import { Link } from "react-router-dom";
import ArrowBack from "../images/arrow-back.png";
import Electricity from "../images/eletricity.png";
import Tv from "../images/tv.png";
import Education from "../images/education.png";
import Transportation from "../images/transportation.png";
import TravelHotel from "../images/travel.png";
import Internet from "../images/internet.png";

const billPaymentPage = () => {

    return (
      <>
        <div className="mt-4 px-20 pb-4">
            <div className="w-full justify-between flex">
                <div className="text-primary">
                    <Link to="/DashboardPage">
                        <img src={ArrowBack} alt="" />
                    </Link>
                </div>
            </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 gap-4 text-center my-12">
            <div>
                <div className="flex justify-center items-center pt-4">
                    <Link to="/PaymentMethodPage">
                    <img src={Electricity} alt="" className="bill-img" />
                    </Link>
                </div>
                <Link to="/PaymentMethodPage">
                <p className="font-bold text-lg pt-4">Electricity</p>
                </Link>
            </div>
            <div>
                <div className="flex justify-center items-center pt-4">
                    <Link to="/PaymentMethodPage">
                    <img src={Tv} alt="" className="bill-img" />
                    </Link>
                </div>
                <Link to="/PaymentMethodPage">
                <p className="font-bold text-lg pt-4">TV</p>
                </Link>
            </div>
            <div>
                <div className="flex justify-center items-center pt-4">
                    <Link to="/PaymentMethodPage">
                    <img src={Internet} alt="" className="bill-img" />
                    </Link>
                </div>
                <Link to="/PaymentMethodPage">
                <p className="font-bold text-lg pt-4">Internet</p>
                </Link>
            </div>
            <div>
                <div className="flex justify-center items-center pt-10">
                    <Link to="/PaymentMethodPage">
                    <img src={Transportation} alt="" className="bill-img" />
                    </Link>
                </div>
                <Link to="/PaymentMethodPage">
                <p className="font-bold text-lg pt-4">Transportation</p>
                </Link>
            </div>
            <div>
                <div className="flex justify-center items-center pt-10">
                    <Link to="/PaymentMethodPage">
                    <img src={Education} alt="" className="bill-img" />
                    </Link>
                </div>
                <Link to="/PaymentMethodPage">
                <p className="font-bold text-lg pt-4">Education</p>
                </Link>
            </div>
            <div>
                <div className="flex justify-center items-center pt-10">
                    <Link to="/PaymentMethodPage">
                    <img src={TravelHotel} alt="" className="bill-img" />
                    </Link>
                </div>
                <Link to="/PaymentMethodPage">
                <p className="font-bold text-lg pt-4">Travel & Hotel</p>
                </Link>
            </div>
        </div>
      </>
    );
};
  

export default billPaymentPage;