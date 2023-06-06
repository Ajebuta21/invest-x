import React from "react";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <div className="w-full h-max p-8 flex flex-col gap-8">
      <div className="w-full pb-6 font-semibold text-black text-2xl">Plan</div>
      <div className="w-full h-full p-4 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10">
        <div className="w-full h-fit bg-white shadow-md py-8 px-3 rounded-md flex flex-col items-center text-sky-400 gap-1">
          <h3 className="text-xl">Bronze Plan</h3>
          <span className="w-full justify-around flex my-4">
            <div className="flex flex-col items-center gap-0">
              <h5 className="text-3xl font-semibold">
                2 <sup className="text-xl">%</sup>
              </h5>
              <span className="tracking-widest text-gray-400 text-xs">Roi</span>
            </div>
            <div className="flex flex-col items-center gap-0">
              <h5 className="text-3xl font-semibold">70</h5>
              <span className="tracking-widest text-gray-400 text-xs">
                Day(s)
              </span>
            </div>
          </span>
          <div className="flex w-full justify-between border-b border-dashed py-1 text-sm">
            <span>Min amount</span>
            <span>$500</span>
          </div>
          <div className="flex w-full justify-between border-b border-dashed py-1 text-sm">
            <span>Max amount</span>
            <span>$3,999</span>
          </div>
          <div className="flex w-full justify-between py-1 text-sm">
            <span>Total return</span>
            <span>$3,999</span>
          </div>
          <Link
            to="/plan/plan"
            className="bg-sky-400 py-1 mt-4 w-36 border border-sky-400 rounded-md text-white hover:bg-white hover:text-sky-400 shadow-md transition ease-in-out duration-300 flex justify-center"
          >
            Deposit
          </Link>
        </div>
        {/* next  */}
      </div>
    </div>
  );
};

export default Plans;
