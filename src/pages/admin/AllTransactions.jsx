import React from "react";
import { Link } from "react-router-dom";

const AllTransactions = () => {
  return (
    <div className="w-full h-max p-8 flex flex-col gap-8">
      <div className="w-full pb-6 font-semibold text-black text-2xl">
        All transactions
      </div>
      <div className="w-full h-full bg-white shadow-md rounded-xl px-4 flex flex-col py-4">
        <div className="w-full h-96 overflow-auto text-xs md:text-base text-gray-400">
          <div className="w-full max-sm:w-[65vh] flex border-b text-sky-400">
            <div className="w-1/4 p-1">Amount</div>
            <div className="w-1/4 p-1">Type</div>
            <div className="w-1/4 p-1">Status</div>
            <div className="w-1/4 p-1 text-right">Date</div>
          </div>
          <Link
            to="/transactions/transaction"
            className="w-full max-sm:w-[70vh] flex border-b text-gray-400"
          >
            <div className="w-1/4 p-1">$1,000</div>
            <div className="w-1/4 p-1">Withdrawal</div>
            <div className="w-1/4 p-1">Pending</div>
            <div className="w-1/4 p-1 text-right">10/06/2023 to 11:30PM</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllTransactions;
