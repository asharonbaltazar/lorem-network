import React from "react";
import ProfileImg from "./ProfileImg";

const ImgRow = () => {
  return (
    <div className="bg-blue-700 w-full flex flex-row items-center sm:sticky sm:top-0 lg:flex-col lg:w-24">
      <ProfileImg />
      <ProfileImg />
    </div>
  );
};

export default ImgRow;
