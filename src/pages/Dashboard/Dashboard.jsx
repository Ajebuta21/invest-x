import React from "react";
import { Link } from "react-router-dom";
import BitcionChart from "../../components/Admin/BitcionChart";
import Deposit from "../../components/modal/Deposit";
import Withdrawal from "../../components/modal/Withdrawal";

const Dashboard = () => {
  return (
    <div className="w-full h-max p-8 flex flex-col gap-8 max-sm:pb-28">
      <div className="w-full pb-6 font-semibold text-black text-2xl">
        Dashboard
      </div>
      <span className="w-full grid grid-cols-3 gap-8 max-lg:grid-cols-1">
        <div className="w-full bg-white shadow-md rounded-xl relative px-4 flex flex-col h-48">
          <div className="absolute -top-2 left-4 flex justify-center items-center rounded-md bg-sky-400 text-white w-16 h-16 shadow-sm shadow-sky-400/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>
          </div>
          <div className="w-full h-12 flex items-center justify-end px-2 text-gray-400">
            Your Balance
          </div>
          <div className="w-full h-2/3 flex border-b border-dashed items-center justify-end px-4 font-semibold text-black text-4xl">
            $ 1,200
          </div>
          <div className="w-full h-1/3 flex  items-center justify-center px-4 font-semibold text-gray-400 text-sm gap-4">
            <Deposit />
            <Withdrawal />
          </div>
        </div>
        <div className="w-full bg-white shadow-md rounded-xl relative px-4 flex flex-col h-48">
          <div className="absolute -top-2 left-4 flex justify-center items-center rounded-md bg-fuchsia-400 text-white w-16 h-16 shadow-sm shadow-fuchsia-400/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
              />
            </svg>
          </div>
          <div className="w-full h-12 flex items-center justify-end px-2 text-gray-400">
            Active plans
          </div>
          <div className="w-full h-2/3 flex border-b border-dashed items-center justify-end px-4 font-semibold text-black text-4xl">
            0
          </div>
          <div className="w-full h-1/3 flex  items-center justify-center px-4 font-semibold text-gray-400 text-sm">
            <Link
              to="/plans"
              className="bg-fuchsia-400 py-1.5 w-36 border border-fuchsia-400 rounded-md text-white hover:bg-white hover:text-fuchsia-400 shadow-md transition ease-in-out duration-300 flex justify-center"
            >
              Create new plan
            </Link>
          </div>
        </div>
        <BitcionChart />
      </span>
      <div className="w-full max-sm:h-72 bg-white shadow-md rounded-xl px-4 flex flex-col py-4">
        <div className="py-2 font-semibold text-sky-400 text-lg">
          Your transactions
        </div>
        <div className="w-full h-96 overflow-auto text-xs md:text-base text-gray-400">
          <div className="w-full max-sm:w-[70vh] flex border-b text-sky-400">
            <div className="w-1/5 p-1">Amount</div>
            <div className="w-1/5 p-1">Type</div>
            <div className="w-1/5 p-1">Status</div>
            <div className="w-2/5 p-1 text-right">Date</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">$1,000</div>
            <div className="w-1/5 p-1">Withdrawal</div>
            <div className="w-1/5 p-1">Pending</div>
            <div className="w-2/5 p-1 text-right">10/06/2023 to 11:30PM</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">$1,000</div>
            <div className="w-1/5 p-1">Withdrawal</div>
            <div className="w-1/5 p-1">Pending</div>
            <div className="w-2/5 p-1 text-right">10/06/2023 to 11:30PM</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">$1,000</div>
            <div className="w-1/5 p-1">Withdrawal</div>
            <div className="w-1/5 p-1">Pending</div>
            <div className="w-2/5 p-1 text-right">10/06/2023 to 11:30PM</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">$1,000</div>
            <div className="w-1/5 p-1">Withdrawal</div>
            <div className="w-1/5 p-1">Pending</div>
            <div className="w-2/5 p-1 text-right">10/06/2023 to 11:30PM</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">$1,000</div>
            <div className="w-1/5 p-1">Withdrawal</div>
            <div className="w-1/5 p-1">Pending</div>
            <div className="w-2/5 p-1 text-right">10/06/2023 to 11:30PM</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">$1,000</div>
            <div className="w-1/5 p-1">Withdrawal</div>
            <div className="w-1/5 p-1">Pending</div>
            <div className="w-2/5 p-1 text-right">10/06/2023 to 11:30PM</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">$1,000</div>
            <div className="w-1/5 p-1">Withdrawal</div>
            <div className="w-1/5 p-1">Pending</div>
            <div className="w-2/5 p-1 text-right">10/06/2023 to 11:30PM</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">$1,000</div>
            <div className="w-1/5 p-1">Withdrawal</div>
            <div className="w-1/5 p-1">Pending</div>
            <div className="w-2/5 p-1 text-right">10/06/2023 to 11:30PM</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">$1,000</div>
            <div className="w-1/5 p-1">Withdrawal</div>
            <div className="w-1/5 p-1">Pending</div>
            <div className="w-2/5 p-1 text-right">10/06/2023 to 11:30PM</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">$1,000</div>
            <div className="w-1/5 p-1">Withdrawal</div>
            <div className="w-1/5 p-1">Pending</div>
            <div className="w-2/5 p-1 text-right">10/06/2023 to 11:30PM</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">$1,000</div>
            <div className="w-1/5 p-1">Withdrawal</div>
            <div className="w-1/5 p-1">Pending</div>
            <div className="w-2/5 p-1 text-right">10/06/2023 to 11:30PM</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">$1,000</div>
            <div className="w-1/5 p-1">Withdrawal</div>
            <div className="w-1/5 p-1">Pending</div>
            <div className="w-2/5 p-1 text-right">10/06/2023 to 11:30PM</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">$1,000</div>
            <div className="w-1/5 p-1">Withdrawal</div>
            <div className="w-1/5 p-1">Pending</div>
            <div className="w-2/5 p-1 text-right">10/06/2023 to 11:30PM</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">$1,000</div>
            <div className="w-1/5 p-1">Withdrawal</div>
            <div className="w-1/5 p-1">Pending</div>
            <div className="w-2/5 p-1 text-right">10/06/2023 to 11:30PM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
