import React, { useState } from "react";

const CattleDetails = ({ isOpen, onClose }) => {
  const [cattleType, setCattleType] = useState("");
  const [breed, setBreed] = useState("");
  const [count, setCount] = useState("");
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState("");

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ cattleType, breed, count, image, gender });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[1200px] h-[700px] p-6 shadow-2xl rounded-3xl ml-80">
        <button
          className="mb-4 text-[#4A7A4C] px-8 py-1 rounded-xl border-4 border-[#4A7A4C]"
          onClick={onClose}
        >
          BACK
        </button>
        <h2 className="text-4xl text-center font-semibold text-[#4A7A4C]">
          CATTLE DETAILS
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col m-24 w-[50%] mx-auto my-10"
        >
          <div className="mb-5 flex">
            <img src="/cattledetails1.png" alt="" className="mr-3 my-2" />
            <input
              type="text"
              value={cattleType}
              onChange={(e) => setCattleType(e.target.value)}
              className="w-full border border-[#4A7A4C] text-gray-400 rounded-xl px-3 py-4 focus:outline-none focus:ring-2 focus:ring-[#4A7A4C]"
              placeholder="Enter the Cattle Type"
            />
          </div>

          <div className="mb-5 ml-14 flex">
            <input
              type="text"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              className="w-full border border-[#4A7A4C] text-gray-400 rounded-xl px-3 py-4 focus:outline-none focus:ring-2 focus:ring-[#4A7A4C]"
              placeholder="Enter the Breed"
            />
          </div>

          <div className="mb-5 flex">
            <img src="/cattledetails2.png" alt="" className="mr-5 my-2" />
            <input
              type="text"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              className="w-full border border-[#4A7A4C] text-gray-400 rounded-xl px-3 py-4 focus:outline-none focus:ring-2 focus:ring-[#4A7A4C]"
              placeholder="Count"
            />
          </div>

          <div className="flex justify-between items-center w-72 cursor-pointer relative border border-[#4A7A4C] rounded-xl  p-1 mb-5 ml-[55px]">
            <span className=" mr-5 text-gray-400">Images</span>

            <img src="/cropdetails3.png" alt="Dosya Seç" className="ml-15" />
            <input
              type="file"
              onChange={handleImageUpload}
              className="flex justify-center items-center absolute right-0 top-0 opacity-0 w-full h-full cursor-pointer mr-[52px]"
            />
          </div>

          <div className="mb-5 flex">
            <div className="relative left-[53px] w-[91%]">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full border text-gray-400 border-[#4A7A4C] rounded-xl px-3 py-4 focus:outline-none focus:ring-2 focus:ring-[#4A7A4C] custom-combobox"
              >
                <option disabled selected hidden value="">
                  Male/Female
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <img
                src="/cattledetails3.png"
                alt="icon"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 w-6 h-6"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="uppercase col-span-2 font-medium text-[24px] md:text-[30px] bg-[#4A7A4C] text-white rounded-[8px] py-1 px-2 md:px-14"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CattleDetails;
