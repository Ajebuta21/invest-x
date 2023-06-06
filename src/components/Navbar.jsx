import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "About Us", to: "/about" },
  { id: 3, name: "Crypto Trading", to: "/crypto-trading" },
  { id: 4, name: "Real Estate", to: "/real-estate" },
  { id: 5, name: "Dashboard", to: "/dashboard" },
];

const Navbar = () => {
  const [bg, setBg] = useState("bg-transparent");
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
  });
  useEffect(() => {
    if (scrollY > 0) {
      setBg("bg-white");
    } else {
      setBg("bg-transparent");
    }
  }, [scrollY]);
  return (
    <nav className={`w-full h-[8vh] text-sky-400 fixed ${bg} z-40 font-opensans`}>
      <div className="w-full px-1 md:px-8  h-full flex justify-between items-center relative">
        <button onClick={(e) => setOpen(!open)} className="p-1 lg:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
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
        <ul className="flex items-center justify-center gap-4 max-lg:hidden h-full">
          {navigation.map((item) => {
            return (
              <Link
                to={item.to}
                key={item.name}
                className={`${
                  location.pathname === item.to
                    ? "border-sky-400"
                    : "border-transparent"
                } h-full flex items-center justify-center border-b-4 w-24 text-sm`}
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
        <span className="flex items-center">
          <Link
            to="/signup"
            className="px-1.5 md:px-3 flex items-center gap-1 border-r border-sky-400 h-4/5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 max-sm:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
            <span>Sign up</span>
          </Link>
          <Link
            to="/login"
            className="px-1.5 md:px-3 flex items-center gap-1 h-4/5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 max-sm:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span>Log in</span>
          </Link>
        </span>
        <ul
          className={`lg:hidden absolute left-0 w-full bg-white/10 backdrop-blur-lg flex flex-col gap-2 p-2 transition ease-in-out duration-500 z-30 ${
            open
              ? "opacity-100 translate-y-0 top-[8vh]"
              : "opacity-0 -translate-y-full top-0"
          }`}
        >
          {navigation.map((item) => {
            return (
              <Link
                to={item.to}
                key={item.name}
                onClick={(e) => setOpen(!open)}
                className={`${
                  location.pathname === item.to
                    ? "bg-sky-400/80 backdrop-blur-lg text-white"
                    : ""
                } px-3 py-1.5 rounded-md`}
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
