import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const stats = [
  { id: 1, name: "Transactions every 24 hours", value: 44000 },
  { id: 2, name: "Assets under holding", value: 146590 },
  { id: 3, name: "New users annually", value: 86000 },
];

const formatNumber = (value) => {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + "m";
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1) + "k";
  }
  return value;
};

const Stats = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition =
        document.getElementById("stats-section").offsetTop;

      if (scrollPosition > elementPosition) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="stats-section"
      className="bg-[url('https://img.freepik.com/free-vector/graph-chart-with-moving-up-arrow-stock-market-financial-investment-diagram-blue-background_56104-1814.jpg?w=1060&t=st=1686019073~exp=1686019673~hmac=f1ff0dfab183842c0224770def728d23d15c37b35ceef0dae07f09e4aadc84f3')] bg-fixed bg-contain font-opensans"
    >
      <div
        className={`h-full w-full backdrop-blur-sm bg-black/30 py-24 sm:py-32 ${
          inView ? "fade-in" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p
            data-aos="fade-up"
            className="mb-28 text-3xl font-bold tracking-tight text-white sm:text-4xl w-full text-center"
          >
            Our Stats
          </p>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                data-aos="zoom-in-up"
                data-aos-delay="300"
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-white">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={5}
                      separator=","
                      formattingFn={(value) => formatNumber(value)}
                    />
                  ) : (
                    formatNumber(stat.value)
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Stats;
