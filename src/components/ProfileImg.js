import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProfileImg = ({ id, picture }) => {
  const appContext = useContext(AppContext);
  const { clickedPerson, changeClickedPerson } = appContext;

  const selected = clickedPerson === id ? "bg-blue-700" : "";

  return (
    <div className={`${selected}`}>
      <img
        className={`rounded-full h-8 w-8 md:w-10 md:h-10 lg:h-12 lg:w-12 m-2 cursor-pointer`}
        src={picture}
        alt="thumbnail"
        id={id}
        onClick={(e) => changeClickedPerson(e.target.id)}
      />
    </div>
  );
};

export default ProfileImg;
