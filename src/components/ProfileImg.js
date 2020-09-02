import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProfileImg = ({ id, picture }) => {
  const appContext = useContext(AppContext);
  const { clickedPerson, changeClickedPerson } = appContext;

  const selected =
    clickedPerson === id ? "bg-blue-700" : "lg:hover:bg-blue-900";

  return (
    <div className={`${selected} flex justify-center`}>
      <img
        className={`rounded-full h-12 w-12 md:w-14 md:h-14 lg:h-14 lg:w-14 m-2 cursor-pointer`}
        src={picture}
        alt="thumbnail"
        id={id}
        onClick={(e) => changeClickedPerson(e.target.id)}
      />
    </div>
  );
};

export default ProfileImg;
