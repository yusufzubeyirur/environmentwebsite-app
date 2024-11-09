import React, { useState } from "react";

const CropDetails = ({ onClose }) => {
  const [formData, setFormData] = useState({
    cropName: "",
    soilType: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file ? URL.createObjectURL(file) : "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-opacity-0 flex justify-center items-center z-50 ">
      <div className="bg-white ml-80 w-[1200px] h-[700px] p-6 shadow-2xl rounded-3xl">
        <button
          className="uppercase mb-4 text-[#4A7A4C] px-5 py-1 rounded-xl border-4 border-[#4A7A4C]"
          onClick={onClose}
        >
          Back
        </button>
        <h2 className="uppercase text-4xl text-center font-semibold text-[#4A7A4C] mb-4">
          Crop Details
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col m-20 w-[50%] mx-auto"
        >
          <div className="mb-10 flex">
            <img src="/cropdetails1.png" alt="" className="mr-10" />
            <select
              name="cropName"
              value={formData.cropName}
              onChange={handleChange}
              className="w-full border text-gray-400 border-[#4A7A4C] rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A7A4C]"
            >
              <option disabled hidden value="">
                Select Crop
              </option>
              <option value="wheat">Wheat</option>
              <option value="corn">Corn</option>
              <option value="rice">Rice</option>
            </select>
          </div>

          <div className="mb-10 flex">
            <img src="/cropdetails2.png" alt="" className="mr-10" />
            <input
              type="text"
              name="soilType"
              value={formData.soilType}
              onChange={handleChange}
              className="w-full border border-[#4A7A4C] text-gray-400 rounded-xl px-3 py-4 focus:outline-none focus:ring-2 focus:ring-[#4A7A4C]"
              placeholder="Enter soil type"
            />
          </div>

          <div className="flex items-center w-72 cursor-pointer relative border border-[#4A7A4C] rounded-xl ml-[86px] p-1 mb-40">
            <span className="mr-10 text-gray-400">Add Image</span>
            <img src="/cropdetails3.png" alt="Dosya Seç" className="ml-16" />
            <input
              type="file"
              onChange={handleImageUpload}
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
            />
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

export default CropDetails;
