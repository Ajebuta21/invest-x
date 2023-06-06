import React from "react";
import { Link} from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full h-[130vh] bg-[url('https://cdn.pixabay.com/photo/2017/02/08/09/50/gold-2048295_1280.jpg')] bg-fixed bg-center">
      <div className="w-full backdrop-blur-sm bg-black/80 h-full flex justify-center items-center px-4">
        <form className="w-full md:w-2/3 lg:w-1/3 bg-white px-2 py-10 rounded-md shadow-lg flex flex-col gap-2 items-center text-sky-400 text-sm">
          <Link to="/" className=" flex gap-1 items-center">
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
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />
            </svg>
            <span className="text-lg">Invest-X</span>
          </Link>
          <h2 className="text-center text-2xl font-semibold leading-9 tracking-tight text-gray-500">
            Sign in to your account
          </h2>
          <div className="w-full flex gap-2">
            <div className="w-full relative group">
              <label className="text-xs pl-4">First name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 border rounded-md outline-none group-focus-within:border-sky-400"
              />
            </div>
            <div className="w-full relative group">
              <label className="text-xs pl-4">Last name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border rounded-md outline-none group-focus-within:border-sky-400"
              />
            </div>
          </div>
          <div className="w-full relative group">
            <label className="text-xs pl-4">Email Address</label>
            <input
              type="text"
              placeholder="Email"
              className="w-full p-2 border rounded-md outline-none group-focus-within:border-sky-400"
            />
          </div>
          <div className="w-full relative group">
            <label className="text-xs pl-4">Username</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border rounded-md outline-none group-focus-within:border-sky-400"
            />
          </div>
          <div className="w-full relative group">
            <label className="text-xs pl-4">Date of birth</label>
            <input
              type="date"
              className="w-full p-2 border rounded-md outline-none group-focus-within:border-sky-400"
            />
          </div>
          <div className="w-full relative group">
            <label className="text-xs pl-4">Gender</label>
            <select className="w-full p-2 border rounded-md outline-none group-focus-within:border-sky-400 appearance-none">
              <option value={""} disabled selected>
                --Select your gender--
              </option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <div className="w-full relative group">
            <label className="text-xs pl-4">Country</label>
            <select className="w-full p-2 border rounded-md outline-none group-focus-within:border-sky-400 appearance-none">
              <option value={""} disabled selected>
                --Select your gender--
              </option>
              <option value="United States of America">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kindgom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Nigeria">Nigeria</option>
            </select>
          </div>
          <div className="w-full flex gap-2">
            <div className="w-full relative group">
              <label className="text-xs pl-4">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded-md outline-none group-focus-within:border-sky-400"
              />
            </div>
            <div className="w-full relative group">
              <label className="text-xs pl-4">Confirm password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-2 border rounded-md outline-none group-focus-within:border-sky-400"
              />
            </div>
          </div>
          <button className="w-full p-2 bg-gradient-to-b from-sky-300 to-sky-400 shadow-md rounded-md text-white hover:from-sky-200 hover:to-sky-300 transition ease-in-out duration-300">
            Create Account
          </button>
          <p className="text-xs">
            Already have an account?{" "}
            <Link to="/login" className="text-gray-500">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
