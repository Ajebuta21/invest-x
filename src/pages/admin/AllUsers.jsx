import React from 'react'

const AllUsers = () => {
  return (
    <div className="w-full h-max p-8 flex flex-col gap-8">
      <div className="w-full pb-6 font-semibold text-black text-2xl">
        All Users
      </div>
      <div className="w-full h-[67vh] bg-white shadow-md rounded-xl px-4 flex flex-col py-4 overflow-auto">
        <div className="w-full max-sm:w-[80vh] py-3 border-b flex justify-between items-center">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col items-start gap-1 text-gray-900">
            <span className="font-semibold text-sm">Elvis Lucky</span>
            <span className="text-xs">elvislucky420@gmail.com</span>
          </div>
          <p className="text-gray-700">$12,000</p>
          <div className="flex flex-col items-start gap-1 text-gray-900">
            <span className="text-sm font-semibold">Role</span>
            <span className="text-xs">Site Admin</span>
          </div>
          <div
            to="/profile/edit"
            className="bg-sky-400 text-sm py-1.5 w-32 border border-sky-400 rounded-md text-white hover:bg-white hover:text-sky-400 shadow-md transition ease-in-out duration-300 flex items-center justify-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
            Switch role
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllUsers