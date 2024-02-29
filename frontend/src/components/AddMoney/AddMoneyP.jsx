import { Link } from "react-router-dom";
import ArrowBack from "../images/arrow-back.png";


const AddMoney = () => {

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

        </div>
      
      </>
    )
}


export default AddMoney;