import ArrowBack from "../images/arrow-back.png";

import { Link } from "react-router-dom";


const AddmoneyPage = () => {

    return (
      <>
        <div className="bg-lightpurple">
            <div className="px-20 pd-mobile bg-white py-4">
                <div className="w-1/2 justify-between flex">
                    <div className="text-primary">
                        <Link to="/DashboardPage">
                            <img src={ArrowBack} alt="" />
                        </Link>
                    </div>
                    
                </div>
            </div>
            <hr />
            <div className="text-center">
                <div className="my-4 py-2 px-8 rounded-[10px]">
                    <div className="flex flex-row justify-between gap-8">
                        <div className="grid flex w-full md:w-2/5 mt-6 py-6 px-12">
                            
                        </div>
                        <div className="w-full flex-wrap md:w-3/5 mt-12 px-10">
                        
                        </div>
                    </div>
                </div>
            </div>  
        </div> 
      </>
    );
};
  
  export default AddmoneyPage;