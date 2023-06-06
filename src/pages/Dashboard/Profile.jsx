import React from "react";
import profile from "../../profile.png";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="w-full h-max p-8 flex flex-col gap-8">
      <div className="w-full pb-6 font-semibold text-black text-2xl">
        User Profile
      </div>
      <div className="w-full h-fit bg-white shadow-md rounded-xl px-4 flex flex-col relative py-4 mb-10">
        <img
          src={profile}
          alt="null"
          className="w-24 h-24 rounded-full absolute left-2 -top-8 shadow-lg"
        />
        <div className="w-full flex max-sm:flex-col gap-4">
          <div className="w-full h-full">
            <p className="w-full pl-24 font-semibold text-2xl">Ajebo</p>
            <p className="w-full pl-24 text-gray-400">ELvis Lucky</p>
            <span className="mt-12 w-full flex justify-center items-center gap-4 md:gap-8">
              <Link
                to="/profile/edit"
                className="bg-sky-400 py-1.5 w-36 border border-sky-400 rounded-md text-white hover:bg-white hover:text-sky-400 shadow-md transition ease-in-out duration-300 flex items-center justify-center gap-1"
              >
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
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
                Edit
              </Link>
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
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                Delete
              </button>
            </span>
          </div>
          <div className="w-full h-full flex flex-col gap-3">
            <div class="px-4 sm:px-0">
              <h3 class="text-base font-semibold leading-7 text-gray-900">
                User Information
              </h3>
              <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Your personal details .
              </p>
            </div>
            <div class="mt-6 border-t border-gray-100">
              <dl class="divide-y divide-gray-100">
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Full name
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Elvis Lucky
                  </dd>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Username
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Ajebo
                  </dd>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    elvislucky420@gmail.com
                  </dd>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Date of birth
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    14/04/1999
                  </dd>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Age
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    24
                  </dd>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Gender
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Male
                  </dd>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">
                    Country
                  </dt>
                  <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Nigeria
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit bg-white shadow-md rounded-xl px-4 flex flex-col relative py-4">
        <div className="py-2 font-semibold text-sky-400 text-lg">
          Your active suscriptions
        </div>
        <div className="w-full h-48 overflow-auto text-xs md:text-base text-gray-400">
          <div className="w-full max-sm:w-[70vh] flex border-b text-sky-400">
            <div className="w-1/5 p-1">Title</div>
            <div className="w-1/5 p-1">Amount</div>
            <div className="w-1/5 p-1">Roi</div>
            <div className="w-1/5 p-1">Duration Left</div>
            <div className="w-1/5 p-1 text-right">Returns</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">Bronze</div>
            <div className="w-1/5 p-1">$2,000</div>
            <div className="w-1/5 p-1">2%</div>
            <div className="w-1/5 p-1">264 days</div>
            <div className="w-1/5 p-1 text-right">$40</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">Bronze</div>
            <div className="w-1/5 p-1">$2,000</div>
            <div className="w-1/5 p-1">2%</div>
            <div className="w-1/5 p-1">264 days</div>
            <div className="w-1/5 p-1 text-right">$40</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">Bronze</div>
            <div className="w-1/5 p-1">$2,000</div>
            <div className="w-1/5 p-1">2%</div>
            <div className="w-1/5 p-1">264 days</div>
            <div className="w-1/5 p-1 text-right">$40</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">Bronze</div>
            <div className="w-1/5 p-1">$2,000</div>
            <div className="w-1/5 p-1">2%</div>
            <div className="w-1/5 p-1">264 days</div>
            <div className="w-1/5 p-1 text-right">$40</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">Bronze</div>
            <div className="w-1/5 p-1">$2,000</div>
            <div className="w-1/5 p-1">2%</div>
            <div className="w-1/5 p-1">264 days</div>
            <div className="w-1/5 p-1 text-right">$40</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">Bronze</div>
            <div className="w-1/5 p-1">$2,000</div>
            <div className="w-1/5 p-1">2%</div>
            <div className="w-1/5 p-1">264 days</div>
            <div className="w-1/5 p-1 text-right">$40</div>
          </div>
          <div className="w-full max-sm:w-[70vh] flex border-b text-gray-400">
            <div className="w-1/5 p-1">Bronze</div>
            <div className="w-1/5 p-1">$2,000</div>
            <div className="w-1/5 p-1">2%</div>
            <div className="w-1/5 p-1">264 days</div>
            <div className="w-1/5 p-1 text-right">$40</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
