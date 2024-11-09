import React from "react";

const YieldRate = ({ name, evaluation, value, evalColor, titleClass }) => {
  return (
    <div className="flex justify-between items-center shadow-[0_0_27px_rgba(0,0,0,0.2)] rounded-[16px] py-1 px-2 gap-1 w-full">
      <div className="flex flex-col items-start">
        <span className={`${titleClass} text-[#4A7A4C] font-bold`}>{name}</span>{" "}
        <div
          className="text-sm ml-2 border-2 rounded-[3px] px-[3px] inline-block font-bold"
          style={{ borderColor: evalColor, color: evalColor }}
        >
          {evaluation}
        </div>
      </div>
      <span className="text-[24px] font-semibold">{value}</span>
    </div>
  );
};

export default YieldRate;
