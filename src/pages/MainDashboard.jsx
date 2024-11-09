import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import FarmDetails from "./components/FarmDetails";

const MainDashboard = () => {
  const [farmAnalytics, setFarmAnalytics] = useState(false);
  const [livestock, setLivestock] = useState(false);
  const [dashboardFarms, setDashboardFarms] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigation = (section) => {
    setFarmAnalytics(section === "farmAnalytics");
    setLivestock(section === "livestock");
    setDashboardFarms(section === "dashboardFarms");
  };

  return (
    <div className="bg-[#4A7A4C] h-screen flex overflow-hidden relative">
      <div className="w-full md:w-1/6 h-full flex flex-col gap-2">
        <div className="text-white text-center flex flex-col gap-1 justify-center items-center pt-10 px-1 relative">
          <img src="/Ellipse 1.png" alt="pic" className="" />
          <div className="leading-5">
            <h2 className="font-bold text-[19px]">Namık Korona</h2>
            <p className="font-bold text-[12px]">Farm Owner</p>
          </div>
        </div>

        <nav className="flex flex-col justify-center items-start text-center text-white font-bold md:text-[23px]">
          <ul className="w-full mt-[100px] cursor-pointer">
            <li
              className={`${
                farmAnalytics
                  ? "bg-white text-[#4A7A4C]"
                  : "bg-[#4A7A4C] text-white"
              } flex justify-start text-start h-10 mb-5`}
            >
              <Link
                to="/dashboard/farm-analytics"
                className="ml-10 block w-full h-full"
                onClick={() => handleNavigation("farmAnalytics")}
              >
                Farm Analytics
              </Link>
            </li>
            <li
              className={`${
                livestock
                  ? "bg-white text-[#4A7A4C]"
                  : "bg-[#4A7A4C] text-white"
              } flex justify-start text-start h-10 mb-5`}
            >
              <Link
                to="/dashboard/live-stock"
                className="ml-10 block w-full h-full"
                onClick={() => handleNavigation("livestock")}
              >
                Live Stock
              </Link>
            </li>
            <li
              className={`${
                dashboardFarms
                  ? "bg-white text-[#4A7A4C]"
                  : "bg-[#4A7A4C] text-white"
              } flex justify-start text-start h-10 mb-5`}
            >
              <Link
                to="/dashboard"
                className="ml-10 block w-full h-full"
                onClick={() => handleNavigation("dashboardFarms")}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex w-full justify-center items-center px-4 mt-[100px]">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-[23px] w-full text-[#4A7A4C] bg-white font-bold rounded-[6px] py-2 px-4 md:text-[23px]"
          >
            + Add Farm
          </button>
        </div>
      </div>

      {isModalOpen && (
        <FarmDetails
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <div className="w-full md:w-5/6 h-full flex flex-col gap-4 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default MainDashboard;
