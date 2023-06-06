import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaBitcoin } from "react-icons/fa";

const BitcionChart = () => {
  const [price, setPrice] = useState(0);
  const [change, setChange] = useState(0);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true"
        );
        const { bitcoin } = response.data;
        setPrice(bitcoin.usd);
        setChange(bitcoin.usd_24h_change);
        setLastUpdated(new Date(bitcoin.last_updated_at * 1000)); // Convert timestamp to Date object
      } catch (error) {
        console.log("Error fetching Bitcoin data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full bg-white shadow-md rounded-xl relative px-4 flex flex-col h-48">
      <div className="flex justify-center items-center flex-col gap-1 w-full h-full text-sm border-b border-dashed">
        <FaBitcoin className="text-orange-400 text-8xl absolute -top-4 right-4" />
        <h2 className=" w-full text-gray-400 mb-2 flex justify-between items-center">
          Bitcoin Price
        </h2>
        <p className="w-full  font-semibold text-black text-4xl">
          ${price.toFixed(2)}
        </p>
        <p
          className={`w-full ${
            change >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          24h Change: {change.toFixed(2)}%
        </p>
      </div>
      <div className="h-1/3 w-full flex  items-center justify-center px-4 font-semibold text-gray-400 text-sm">
        {lastUpdated && (
          <p className="w-full text-center">
            Last Updated at {lastUpdated.toLocaleTimeString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default BitcionChart;
