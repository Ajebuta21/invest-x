import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Carousel = () => {
  const slides = [
    {
      title: "Welcome to Invest-X",
      description:
        "Unlock the potential of Bitcoin and embark on a journey towards financial freedom with Invest. We are a trusted and reliable platform dedicated to providing you with a seamless and secure experience in the world of Bitcoin investments.",
    },
    {
      title: "Your Premier Bitcoin Investment Platform",
      description:
        "Invest-X is your all-in-one solution for entering the exciting world of Bitcoin investments. With our cutting-edge platform and expert guidance, we provide you with the tools and resources to capitalize on the immense potential of cryptocurrencies, hether you're a novice investor or a seasoned pro.",
    },
    {
      title: "Thinking of investing in bitcoin?",
      description:
        "Well we are the premier destination for individuals looking to grow their wealth through Bitcoin investments. With our innovative platform and comprehensive tools, we provide you with a secure and seamless experience to harness the potential of cryptocurrencies. ",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Change slide every 10 seconds

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, []);

  //   const { title, description, buttonLabel, buttonLink } = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-[url('https://w.forfun.com/fetch/11/112b72fb1040e70c2caf0fc775ec57f6.jpeg?w=1470&r=0.5625')] bg-fixed bg-center max-md:bg-[url('https://w.forfun.com/fetch/11/112b72fb1040e70c2caf0fc775ec57f6.jpeg?h=900&r=0.5')]">
      <div className="flex w-full h-full justify-center">
        <div className="h-full w-full backdrop-blur-sm bg-black/80">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="mx-auto flex flex-col items-center justify-center h-full px-4 md:px-24 lg:px-48">
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-tight text-sky-400 sm:text-2xl">
                    {slide.title}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-white">
                    {slide.description}
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                      data-aos="zoom-in"
                      data-aos-delay="300"
                      data-aos-duration="700"
                      to="/signup"
                      className="rounded-md bg-sky-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 z-20"
                    >
                      Get Started
                    </Link>
                    <a
                      href="#C2"
                      className="text-sm font-semibold leading-6 text-white"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
        <button
          onClick={prevSlide}
          className="hover:text-gray-500 text-white font-bold py-2 px-4 rounded-l"
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
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
        <button
          onClick={nextSlide}
          className="hover:text-gray-500 text-white font-bold py-2 px-4 rounded-r"
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
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div> */}
    </div>
  );
};

export default Carousel;
