import React from 'react'
import ArrowBack from "../images/arrow-back.png";

const TransactionHistory = () => {
  return (
    <>
      <div className="mt-12 px-20 pd-mobile">
        <div className="font-poppins justify-center flex">
          <Link to="/DashboardPage">
            <img src={ArrowBack} alt="" />
          </Link>
          <h1 className="text-4xl text-primary">Transaction History</h1>
        </div>
      </div>
    </>
  );
}

export default TransactionHistory