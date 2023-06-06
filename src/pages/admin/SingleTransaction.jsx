import React from "react";

const SingleTransaction = () => {
  return (
    <div className="w-full h-max p-8 flex flex-col gap-8">
      <div className="w-full pb-6 font-semibold text-black text-2xl">
        Transaction details
      </div>
      <span className="w-full gap-6 flex max-sm:flex-col">
        <div className="w-full h-full bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-gray-400">
          <h4 className="text-sky-400 text-left w-full mb-4">Details</h4>
          <div className="w-full flex justify-between items-center border-b border-dashed py-1">
            <span>Amount:</span>
            <span>$1,000</span>
          </div>
          <div className="w-full flex justify-between items-center border-b border-dashed py-1">
            <span>Type:</span>
            <span>Withdrawal</span>
          </div>
          <div className="w-full flex justify-between items-center border-b border-dashed py-1">
            <span>Payment Method:</span>
            <span>Btc</span>
          </div>
          <div className="w-full flex justify-between items-center border-b border-dashed py-1">
            <span>Transaction Id:</span>
            <span>jsfjksdjkgjhsjkk3jdhfhd78fhfjj</span>
          </div>
          <div className="w-full flex justify-between items-center border-b border-dashed py-1">
            <span>Bitcoin Address:</span>
            <span>1ErchhajGW253FAGaaBSD8ndhdh</span>
          </div>
          <div className="w-full flex justify-between items-center border-b border-dashed py-1">
            <span>Status:</span>
            <span>Pending</span>
          </div>
        </div>
        <div className="w-full h-fit bg-white shadow-md rounded-xl p-6 flex flex-col items-center z-0">
          <h4 className="text-sky-400 text-left w-full mb-4">
            Payment screenshot
          </h4>
          <img
            src="https://i.stack.imgur.com/gZDLe.png"
            alt=""
            className="w-fit h-96 hover:scale-150 transition ease-in-out duration-500 z-20"
          />
        </div>
      </span>
      <div className="w-full h-fit bg-white shadow-md rounded-xl p-6 p flex flex-col gap-4 items-center">
        <h4 className="text-sky-400 text-left w-full mb-4">
          Change transaction status
        </h4>
        <span className="w-full flex justify-center items-center gap-4 md:gap-8">
          <button className="bg-green-400 py-1.5 w-36 border border-green-400 rounded-md text-white hover:bg-white hover:text-green-400 shadow-md transition ease-in-out duration-300 flex items-center justify-center gap-1">
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
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            Confirm
          </button>
          <button className="bg-red-500 py-1.5 w-36 border border-red-500 rounded-md text-white hover:bg-white hover:text-red-500 shadow-md transition ease-in-out duration-300 flex items-center justify-center gap-1">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Reject
          </button>
        </span>
      </div>
    </div>
  );
};

export default SingleTransaction;
