import React from "react";
import Calculator from "../../components/Admin/Calculator";

const CalcPage = () => {
  return (
    <div className="w-full h-max p-8 flex flex-col gap-8 items-center">
      <div className="w-full pb-6 font-semibold text-black text-2xl">
        Calculator
      </div>
          <div className="w-full md:w-2/3 lg:w-1/3 h-full flex flex-col">
              <Calculator/>
      </div>
    </div>
  );
};

export default CalcPage;
