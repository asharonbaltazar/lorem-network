import React, { useState, useContext, useEffect } from "react";
import Switch from "react-switch";
import { ThemeContext } from "../context/ThemeContext";

const Panel = () => {
  const themeContext = useContext(ThemeContext);
  const { changeColors, theme, changeBaseTheme } = themeContext;

  // Handler for the settings popup
  const [press, setPress] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(theme.baseTheme === "bg-black" ? true : false);
  }, [theme.baseTheme]);

  const textColor =
    theme.baseTheme === "bg-white" ? "text-black" : "text-white";
  const panelColor =
    theme.baseTheme === "bg-white" ? "bg-white" : "bg-gray-900";

  return (
    <div
      className={`flex justify-between items-center bg${theme.colors}900 lg:sticky lg:top-0 lg:z-10`}
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
            className={`w-48 lg:w-32 absolute right-0 ${panelColor} rounded-lg p-4 z-20 mr-2 shadow-md`}
          >
            <p className={`block px-4 pb-2 text-center ${textColor}`}>Colors</p>
            <div className="grid grid-cols-3 grid-rows-3 gap-3">
              <div
                className="h-12 w-12 lg:w-6 lg:h-6 bg-red-600 cursor-pointer"
                onClick={(e) => changeColors(e.target.className)}
              ></div>
              <div
                className="h-12 w-12 lg:w-6 lg:h-6 bg-orange-600 cursor-pointer"
                onClick={(e) => changeColors(e.target.className)}
              ></div>
              <div
                className="h-12 w-12 lg:w-6 lg:h-6 bg-yellow-600 cursor-pointer"
                onClick={(e) => changeColors(e.target.className)}
              ></div>
              <div
                className="h-12 w-12 lg:w-6 lg:h-6 bg-green-600 cursor-pointer"
                onClick={(e) => changeColors(e.target.className)}
              ></div>
              <div
                className="h-12 w-12 lg:w-6 lg:h-6 bg-blue-600 cursor-pointer"
                onClick={(e) => changeColors(e.target.className)}
              ></div>
              <div
                className="h-12 w-12 lg:w-6 lg:h-6 bg-teal-600 cursor-pointer"
                onClick={(e) => changeColors(e.target.className)}
              ></div>
              <div
                className="h-12 w-12 lg:w-6 lg:h-6 bg-indigo-600 cursor-pointer"
                onClick={(e) => changeColors(e.target.className)}
              ></div>
              <div
                className="h-12 w-12 lg:w-6 lg:h-6 bg-purple-600 cursor-pointer"
                onClick={(e) => changeColors(e.target.className)}
              ></div>
              <div
                className="h-12 w-12 lg:w-6 lg:h-6 bg-pink-600 cursor-pointer"
                onClick={(e) => changeColors(e.target.className)}
              ></div>
            </div>
            <div className="mt-4">
              <label htmlFor="icon-switch">
                <p className={`block px-4 pb-2 text-center ${textColor}`}>
                  Theme
                </p>
                <Switch
                  checked={toggle}
                  onChange={() => {
                    setToggle(!toggle);
                    changeBaseTheme(toggle);
                  }}
                  onColor="#2d3748"
                  offColor="#edf2f7"
                  onHandleColor="#fff"
                  offHandleColor="#fff"
                  handleDiameter={20}
                  boxShadow="0px 1px 2px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 2x rgba(0, 0, 0, 0.2)"
                  uncheckedIcon={
                    <div className="flex justify-center items-center h-full">
                      <svg
                        className={`w-6 h-6 text${theme.colors}500`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                  }
                  checkedIcon={
                    <div className="flex justify-center items-center text-white h-full">
                      <svg
                        className={`w-6 h-6 text${theme.colors}300`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                      </svg>
                    </div>
                  }
                  className="react-switch"
                  id="icon-switch"
                />
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Panel;
