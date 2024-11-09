import React, { useState } from "react";
import YieldRate from "../components/YieldRate";
import CropDetails from "../components/CropDetails";

const FarmAnalytics = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="w-[99%] h-full bg-white rounded-[25px] p-4 md:py-3 md:px-10 flex flex-col gap-4 md:gap-10">
      <div className="w-full flex flex-col gap-4 bg-white rounded-[25px] p-5 m-5 md:px-10 md:py-3 md:gap-10 h-[99%]">
        <div className="flex justify-between items-center">
          <h2 className="text-[38px] text-[#4A7A4C] font-bold">Farm 1</h2>
          <button
            onClick={openModal}
            className="text-[23px] text-white bg-[#4A7A4C] flex justify-center items-end py-1 px-2 md:py-2 md:px-5 rounded-[6px] gap-2 md:text-[23px]"
          >
            {" "}
            + Add Crop
          </button>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <YieldRate
            name="Nitrogen"
            evaluation="Good"
            value="20%"
            evalColor="#00A707"
            titleClass="text-2xl font-bold"
          />
          <YieldRate
            name="Phosphorus"
            evaluation="Good"
            value="8%"
            evalColor="#00A707"
            titleClass="text-2xl font-bold"
          />
          <YieldRate
            name="Potassium"
            evaluation="Good"
            value="13%"
            evalColor="#00A707"
            titleClass="text-2xl font-bold"
          />
        </div>

        <div className="grid md:grid-cols-2 md:grid-rows-[1fr,75px] place-items-center gap-4">
          <div className="flex flex-col gap-4 items-start w-full md:w-[300px]">
            <YieldRate
              name="Humidity"
              evaluation="Good"
              value="15%"
              evalColor="#00A707"
              titleClass="text-2xl font-bold"
            />
            <YieldRate
              name="Soil Hydration"
              evaluation="High"
              value="40%"
              evalColor="#A10000"
              titleClass="text-2xl font-bold"
            />
            <YieldRate
              name="PH Value"
              evaluation="Low"
              value="4"
              evalColor="#C5B100"
              titleClass="text-2xl font-bold"
            />
          </div>

          <div className="relative">
            <img
              src="/farm 1 pic.png"
              alt="farm"
              className="object-fill h-full w-full max-h-[363px]"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex gap-2">
                <img
                  src="/leftarrow.png"
                  alt="left"
                  className="cursor-pointer"
                />
                <img
                  src="/rightarrow.png"
                  alt="right"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:col-span-2">
            <div className="flex justify-center items-center py-1 px-4 border-2 border-[#4A7A4C] rounded-[61px] md:gap-2 lg:gap-4">
              <div className="flex gap-2 justify-center items-center">
                <div className="w-[25px]">
                  <img src="/crop.png" alt="crop" />
                </div>
                <span className="md:text-[32px] font-bold text-[#4A7A4C]">
                  Crop:
                </span>
              </div>
              <span className="md:text-[32px] font-semibold shrink-0">
                Wheat
              </span>
            </div>

            <div className="flex justify-center items-center py-1 px-3 border-2 border-[#4A7A4C] rounded-[61px] md:gap-2 lg:gap-4">
              <div className="flex gap-1 justify-center items-center">
                <div className="w-[25px]">
                  <img src="/area.png" alt="area" />
                </div>
                <span className="md:text-[32px] font-bold text-[#4A7A4C]">
                  Area:
                </span>
              </div>
              <span className="font-semibold shrink-0 md:text-[32px]">
                25 Acres
              </span>
            </div>
          </div>
        </div>

        <div className="w-3/4 text-center rounded-[12px] border-[5px] self-center border-[#4A7A4C] md:text-[32px]">
          <span className="text-[24px] font-bold text-[#4A7A4C]">
            Efficacy Rating
          </span>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-[16px] p-5 w-[90%] md:w-[50%] relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-[#4A7A4C] text-[20px]"
            >
              X
            </button>
            <CropDetails onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmAnalytics;
