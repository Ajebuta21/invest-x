import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line
      const result = eval(input);
      setInput(result.toString());
      setHistory((prevHistory) => [...prevHistory, result.toString()]);
    } catch (error) {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  const deleteLastCharacter = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleDecimal = () => {
    if (!input.includes(".")) {
      setInput((prevInput) => prevInput + ".");
    }
  };

  const calculatePercentage = () => {
    try {
      // eslint-disable-next-line
      const result = eval(input) / 100;
      setInput(result.toString());
      setHistory((prevHistory) => [...prevHistory, result.toString()]);
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="bg-white rounded p-4 shadow-md">
      <input
        type="text"
        value={input}
        disabled
        className="w-full bg-gray-100 mb-4 p-2 rounded"
      />
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={() => handleClick("7")}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          7
        </button>
        <button
          onClick={() => handleClick("8")}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          8
        </button>
        <button
          onClick={() => handleClick("9")}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          9
        </button>
        <button
          onClick={() => handleClick("/")}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          /
        </button>
        <button
          onClick={() => handleClick("4")}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          4
        </button>
        <button
          onClick={() => handleClick("5")}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          5
        </button>
        <button
          onClick={() => handleClick("6")}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          6
        </button>
        <button
          onClick={() => handleClick("*")}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          *
        </button>
        <button
          onClick={() => handleClick("1")}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          1
        </button>
        <button
          onClick={() => handleClick("2")}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          2
        </button>
        <button
          onClick={() => handleClick("3")}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          3
        </button>
        <button
          onClick={() => handleClick("-")}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          -
        </button>
        <button
          onClick={clearInput}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          Clear
        </button>
        <button
          onClick={() => handleClick("0")}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          0
        </button>
        <button
          onClick={calculateResult}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          =
        </button>
        <button
          onClick={() => handleClick("+")}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          +
        </button>
        <button
          onClick={deleteLastCharacter}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          Del
        </button>
        <button
          onClick={handleDecimal}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          .
        </button>
        <button
          onClick={calculatePercentage}
          className="col-span-1 p-2 bg-sky-400 text-white rounded hover:bg-white hover:text-sky-400 border border-sky-400 transition ease-in-out duration-500"
        >
          %
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-xs mb-2">History:</h3>
        <ul className="w-full bg-gray-100 h-20 overflow-auto p-2 rounded-md">
          {history.reverse().map((item, index) => (
            <li
              key={index}
              className="text-sm py-1 w-full border-b text-sky-400"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calculator;
