import React, { useState } from "react";

const FarmDetails = ({ isOpen, onClose }) => {
  const [farmName, setFarmName] = useState("");
  const [farmSize, setFarmSize] = useState("");
  const [image, setImage] = useState(null);
  const [cropType, setCropType] = useState("");

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ farmName, farmSize, image, cropType });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white ml-80 w-[1200px] h-[700px] p-6 shadow-2xl rounded-3xl">
        <button
          className="mb-4 text-[#4A7A4C] px-8 py-1 rounded-xl border-4 border-[#4A7A4C]"
          onClick={onClose}
        >
          BACK
        </button>
        <h2 className="text-4xl text-center font-semibold text-[#4A7A4C] mb-4">
          FARM DETAILS
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center m-10 w-[50%] mx-auto "
        >
          <div className="mb-10 flex w-[100%]">
            <img src="/farmdetails1.png" alt="" className="mr-8 my-1" />
            <input
              type="text"
              value={farmName}
              onChange={(e) => setFarmName(e.target.value)}
              className="w-full border border-[#4A7A4C] text-gray-400 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#4A7A4C]"
              placeholder="Farm Name"
            />
          </div>

          <div className="mb-10 flex w-[100%]">
            {" "}
            <img src="/farmdetails2.png" alt="" className="mr-10 my-1" />
            <input
              type="text"
              value={farmSize}
              onChange={(e) => setFarmSize(e.target.value)}
              className="w-full border border-[#4A7A4C] text-gray-400 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#4A7A4C]"
              placeholder="Farm Size (in acres)"
            />
          </div>

          <div className="flex justify-between items-center w-[300px] cursor-pointer relative border border-[#4A7A4C] rounded-xl right-[62px] p-2 px-3 py-2 mb-10">
            <span className="mr-10 text-gray-400">Farm Image</span>

            <img
              src="/farmdetails3.png"
              alt="Dosya Seç"
              className="ml-16 mx-15"
            />
            <input
              type="file"
              onChange={handleImageUpload}
              className="flex justify-center items-center absolute right-0 top-0 opacity-0 w-full h-full cursor-pointer"
            />
          </div>

          <div className="mb-20 flex w-[100%]">
            <img src="/farmdetails4.png" alt="" className="mr-10 my-1" />
            <select
              value={cropType}
              onChange={(e) => setCropType(e.target.value)}
              className="w-full border text-gray-400 border-[#4A7A4C] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4A7A4C] custom-combobox"
            >
              <option disabled selected hidden value="">
                Crop Type
              </option>
              <option value="wheat">Wheat</option>
              <option value="corn">Corn</option>
              <option value="rice">Rice</option>
            </select>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="uppercase col-span-2 font-medium text-[24px] md:text-[25px] bg-[#4A7A4C] text-white rounded-[8px] py-2 px-2 md:px-14"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FarmDetails;
