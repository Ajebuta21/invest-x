import React from "react";

const SinglePlan = () => {
  return (
    <div className="w-full h-max p-8 flex flex-col gap-8">
      <div className="w-full pb-6 font-semibold text-black text-2xl">
        Plan Details
      </div>
      <div className="w-full h-fit bg-white shadow-md rounded-xl px-4 py-12 flex max-sm:flex-col gap-4">
        <div className="w-full h-full flex flex-col justify-center gap-4 text-gray-900 font-semibold">
          <h1 className="w-full px-8 text-xl">
            This is our <span className="text-sky-400 capitalize">bronze</span>{" "}
            plan
          </h1>
          <p className="font-light px-8">
            On this plan you recieve a{" "}
            <span className="text-sky-400">
              2 <sup>%</sup>
            </span>{" "}
            return on investment which will be deposited to your account
            everyday for <span className="text-sky-400">70 days</span>
          </p>
          <p className="font-light px-8">
            After a period of <span className="text-sky-400">70 days</span> you
            will get a total return of{" "}
            <span className="text-sky-400">
              140 <sup>%</sup>
            </span>
          </p>
          <p className="font-light px-8">
            The amount that can be used to purchase this plan from a minimum of{" "}
            <span className="text-sky-400">$500</span> to a maximum amount of{" "}
            <span className="text-sky-400">$3,999</span>.
          </p>
        </div>
        <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
          <form className="w-full bg-white px-2 py-10 flex flex-col gap-2 items-center text-sky-400 text-sm">
            <h2 className="text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
              Suscribe
            </h2>
            <p className="px-6 tracking-tight text-sky-400">
              To get started with this plan enter a valid amount within the
              minimum and maximum amount:
            </p>
            <div className="w-full relative group flex rounded-md border text-gray-700">
              <div className="w-1/12 flex items-center rounded-l-md justify-center h-full bg-gray-200 p-2">
                $
              </div>
              <input
                type="text"
                placeholder="Amount"
                className="w-full rounded-r-md outline-none p-2"
              />
            </div>
            <button className="w-full p-2 bg-gradient-to-b from-sky-300 to-sky-400 shadow-md rounded-md text-white hover:from-sky-200 hover:to-sky-300 transition ease-in-out duration-300">
              Suscribe to this plan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SinglePlan;
