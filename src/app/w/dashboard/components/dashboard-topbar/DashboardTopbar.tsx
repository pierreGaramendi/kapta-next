"use client";

import { FaBell, FaChevronDown } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export const DashboardTopbar = () => {
  return (
    <header className="rounded-md flex flex-row p-2 justify-between">
      <div>
        <h1 className="font-bold">Home</h1>
        <h2>Monitor all of your projects and tasks here</h2>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
          <FaBell size={20} />
        </button>
        <button className="text-gray-400 hover:text-indigo-500 transition-colors duration-200">
          <IoMdSettings size={25} />
        </button>
        <div className="flex items-center space-x-2">
          <img
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};
