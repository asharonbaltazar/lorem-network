import React, { useContext } from "react";
import ProfileImg from "./ProfileImg";

const ImgRow = ({ people }) => {
  return (
    <div className="bg-blue-800 w-full flex flex-row content-center overflow-auto sm:sticky sm:top-0 lg:flex-col lg:w-24">
      {people.map((person, index) => (
        <ProfileImg key={index} id={index} picture={person.picture["medium"]} />
      ))}
    </div>
  );
};

export default ImgRow;
