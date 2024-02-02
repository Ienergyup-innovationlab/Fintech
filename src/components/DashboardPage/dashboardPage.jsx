import NavbarDash from "./NavbarDashboard";
import Footer from "../Footer";
import UserImg from "../images/user-img.png";
import DebtCard from "../images/card.png";
import FarmtechImg from "../images/farmtech-img.png";



const DashboardPage = () => {
    return (
      <>
        <NavbarDash />
        <div className="flex flex-wrap flex-row mt-24 p-12row"> 
            <div className="grid w-full md:w-3/4 pt-12 pd-left flex">
                <div>
                    <div className="user-img">
                        <img src={UserImg} alt="" />
                    </div>
                    <div className="user-txt">
                        <h3>Hello Steve</h3>
                    </div>
                </div>
                <div className="mt-6 py-8 debt-row">
                    <img src={DebtCard} alt="" className="detcard" />
                </div>
                <div className="font-semibold text-lg">
                    <div className="flex items-center justify-between gap-4 mt-16">
                        <div className="font-bold text-lg">
                            <img src={FarmtechImg} alt="" /><br />
                            Send
                        </div>
                        <div className="font-semibold text-lg">
                            <img src={FarmtechImg} alt="" /><br />
                            Withdraw
                        </div>
                        <div className="font-semibold text-lg">
                            <img src={FarmtechImg} alt="" /><br />
                            Airtime
                        </div>
                        <div className="font-semibold text-lg">
                            <img src={FarmtechImg} alt="" /><br />
                            Pay Bills
                        </div>
                        <div className="font-semibold text-lg">
                            <img src={FarmtechImg} alt="" /><br />
                            Multiple Cards
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/4 pt-12">
                
                <form action="/">
                    <section className="font-semibold text-lg pt-6">
                        <input 
                        type='text'
                        id="search"
                        name="searcbar"
                        className="w-full border h-12 shadow p-4 rounded-full src-bg src-text"
                        required
                        aria-describedby="SearchBar"
                        placeholder="Search"
                        />
                        
                        <button type="submit">
                            {/* <svg className="text-teal-400 h-5 w-5 absolute top-3.5 right-3 fill-current"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                                x="0px" y="0px" viewBox="0 0 56.966 56.966"
                                style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve">
                                <path
                                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z">
                                </path>
                            </svg> */}
                        </button>
                    </section> 
                </form>
                  
                <section className="font-semibold text-lg">
                    <div className="flex items-center justify-between gap-1 mt-16">
                        <div className="font-bold text-lg">
                            <img src={FarmtechImg} alt="" />
                        </div>
                        <div className="font-semibold text-lg">
                            Farmtech <br /><small className="sml-txt">Farmtek is an agro-tech business</small>
                        </div>
                        <div className="font-semibold text-lg">
                        <button type="button" 
                            className="px-5 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Invest
                        </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-1 mt-12">
                        <div className="font-bold text-lg">
                            <img src={FarmtechImg} alt="" />
                        </div>
                        <div className="font-semibold text-lg">
                            Farmtech <br /><small className="sml-txt">Farmtek is an agro-tech business</small>
                        </div>
                        <div className="font-semibold text-lg">
                        <button type="button" 
                            className="px-5 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Invest
                        </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-1 mt-12">
                        <div className="font-bold text-lg">
                            <img src={FarmtechImg} alt="" />
                        </div>
                        <div className="font-semibold text-lg">
                            Farmtech <br /><small className="sml-txt">Farmtek is an agro-tech business</small>
                        </div>
                        <div className="font-semibold text-lg">
                        <button type="button" 
                            className="px-5 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Invest
                        </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-1 mt-12">
                        <div className="font-bold text-lg">
                            <img src={FarmtechImg} alt="" />
                        </div>
                        <div className="font-semibold text-lg">
                            Farmtech <br /><small className="sml-txt">Farmtek is an agro-tech business</small>
                        </div>
                        <div className="font-semibold text-lg">
                        <button type="button" 
                            className="px-5 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Invest
                        </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-1 mt-12">
                        <div className="font-bold text-lg">
                            <img src={FarmtechImg} alt="" />
                        </div>
                        <div className="font-semibold text-lg">
                            Farmtech <br /><small className="sml-txt">Farmtek is an agro-tech business</small>
                        </div>
                        <div className="font-semibold text-lg">
                        <button type="button" 
                            className="px-5 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Invest
                        </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-1 mt-12">
                        <div className="font-bold text-lg">
                            <img src={FarmtechImg} alt="" />
                        </div>
                        <div className="font-semibold text-lg">
                            Farmtech <br /><small className="sml-txt">Farmtek is an agro-tech business</small>
                        </div>
                        <div className="font-semibold text-lg">
                        <button type="button" 
                            className="px-5 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Invest
                        </button>
                        </div>
                    </div>
                </section>
                
            </div>
        </div>
        <Footer />
      </>
    );
  };
  
  export default DashboardPage;