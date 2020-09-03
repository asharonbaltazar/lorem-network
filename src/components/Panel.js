import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Panel = () => {
  // Handler for the settings popup
  const [press, setPress] = useState(false);

  const themeContext = useContext(ThemeContext);
  const { changeTheme, theme } = themeContext;

  return (
    <div
      className={`flex justify-between items-center bg${theme}900 lg:sticky lg:top-0 lg:z-10`}
    >
      <div>
        <h1 className="text-2xl text-white p-2">Lorem Network</h1>
      </div>
      <div className="relative">
        <button
          className="block text-xl text-white p-2 md:hover:text-gray-300 focus:outline-none"
          onClick={() => setPress(!press)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
        {press && (
          <div
            className={`w-32 absolute right-0 bg-white rounded-lg p-4 z-20 mr-2 shadow-md`}
          >
            <p className="block px-4 pb-2 text-center">Theme</p>
            <div className="grid grid-cols-3 grid-rows-3 gap-3">
              <div
                className="w-6 h-6 bg-red-600 cursor-pointer"
                onClick={(e) => changeTheme(e.target.className)}
              ></div>
              <div
                className="w-6 h-6 bg-orange-600 cursor-pointer"
                onClick={(e) => changeTheme(e.target.className)}
              ></div>
              <div
                className="w-6 h-6 bg-yellow-600 cursor-pointer"
                onClick={(e) => changeTheme(e.target.className)}
              ></div>
              <div
                className="w-6 h-6 bg-green-600 cursor-pointer"
                onClick={(e) => changeTheme(e.target.className)}
              ></div>
              <div
                className="w-6 h-6 bg-blue-600 cursor-pointer"
                onClick={(e) => changeTheme(e.target.className)}
              ></div>
              <div
                className="w-6 h-6 bg-teal-600 cursor-pointer"
                onClick={(e) => changeTheme(e.target.className)}
              ></div>
              <div
                className="w-6 h-6 bg-indigo-600 cursor-pointer"
                onClick={(e) => changeTheme(e.target.className)}
              ></div>
              <div
                className="w-6 h-6 bg-purple-600 cursor-pointer"
                onClick={(e) => changeTheme(e.target.className)}
              ></div>
              <div
                className="w-6 h-6 bg-pink-600 cursor-pointer"
                onClick={(e) => changeTheme(e.target.className)}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Panel;
