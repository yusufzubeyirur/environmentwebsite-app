import React, { useState } from "react";
import CattleDetails from "../components/CattleDetails";

const LiveStock = () => {
  const [isCattleDetailsVisible, setIsCattleDetailsVisible] = useState(false);
  const [stocks, setStocks] = useState([
    {
      type: "Goat",
      count: 33,
      breed: 3,
      males: 15,
      females: 15,
      backgroundImage: "/Rectangle 39.png",
      imageCount: 5,
    },
    {
      type: "Cow",
      count: 30,
      breed: 3,
      males: 19,
      females: 8,
      backgroundImage: "/Rectangle 40.png",
      imageCount: 2,
    },
  ]);

  const toggleCattleDetails = () => {
    setIsCattleDetailsVisible(!isCattleDetailsVisible);
  };

  return (
    <div className="w-[99%] h-full bg-white rounded-[25px] p-4 md:py-3 md:px-10 flex flex-col gap-4 md:gap-10">
      <div className="w-full flex flex-col gap-4 bg-white rounded-[25px] p-5 m-5 md:px-10 md:py-3 md:gap-10 h-[99%] ">
        <div className="flex justify-between items-center">
          <h2 className="text-[50px] text-[#4A7A4C] font-bold">
            Manage Livestock
          </h2>
          <div className="flex gap-2 lg:gap-4 text-sm sm:text-base text-center ">
            <button className="text-[23px] text-white bg-[#4A7A4C] flex justify-center items-end py-1 px-2 md:py-2 md:px-5 rounded-[6px] gap-2 md:text-[23px]">
              <div>
                <img src="/view live.png" alt="viewlive" />
              </div>
              View Live
            </button>
            <button
              onClick={toggleCattleDetails}
              className="text-[23px] text-white bg-[#4A7A4C] flex justify-center items-center py-1 px-2 md:py-2 md:px-5 rounded-[6px] gap-2 md:text-[23px]"
            >
              + Add Cattle
            </button>
          </div>
        </div>
        <div className="flex justify-end gap-2 lg:gap-6">
          <button className="bg-[#4A7A4C] text-white flex justify-center items-center p-1 lg:py-2 lg:px-4 rounded-[6px] md:gap-4 font-bold lg:text-[23px]">
            <span className="font-semibold text-sm lg:text-[30px]">
              {" "}
              <span className="flex justify-center items-center">
                Total:{" "}
                <span className="ml-10 text-3xl">
                  {stocks.reduce((acc, stock) => acc + stock.count, 0)}
                </span>
              </span>
            </span>
          </button>
          <button className="bg-[#4A7A4C] text-white flex justify-center items-center p-3 lg:py-2 lg:px-4 rounded-[6px] md:gap-4 font-bold lg:text-[23px]">
            <div className="w-[45px]">
              <img src="/area2.png" alt="area" />
            </div>
            <span>Area:</span>
            <span className="font-semibold text-sm lg:text-[30px]">
              25 Acres
            </span>
          </button>
        </div>
        <div className="flex flex-col justify-stretch md:flex-row md:justify-start items-stretch gap-7 font-bold text-[23px] h-[65%]">
          {stocks.map((stock, index) => (
            <div
              key={index}
              className="flex flex-col justify-between text-[#4A7A4C] shadow-[0_0_27px_rgba(0,0,0,0.2)] md:w-1/3 lg:w-1/4 rounded-[16px] py-3 px-5 gap-2 text-lg lg:text-[30px]"
            >
              <h2 className="text-[25px] lg:text-[30px]">{stock.type}</h2>
              <div className="text-[20px]">
                <h3 className="mb-4">Count: {stock.count}</h3>
                <h3 className="mb-4">Breed: {stock.breed}</h3>
                <h3 className="mb-4">Males: {stock.males}</h3>
                <h3 className="mb-4">Females: {stock.females}</h3>
              </div>
              <div className="relative">
                <img
                  src={stock.backgroundImage}
                  alt={stock.type}
                  className="object-fill h-full w-full max-h-[200px] lg:max-h-[550px]"
                />
                <span className="absolute top-1/2 font-extrabold -translate-y-1/2 left-1/2 -translate-x-1/2 text-[61px] text-white ">
                  +{stock.imageCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isCattleDetailsVisible && (
        <CattleDetails
          isOpen={isCattleDetailsVisible}
          onClose={toggleCattleDetails}
        />
      )}
    </div>
  );
};

export default LiveStock;
