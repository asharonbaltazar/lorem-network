import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useHistory } from "react-router-dom";

const ProfileImg = (props) => {
  const { id, picture } = props;
  const appContext = useContext(AppContext);
  const { clickedPerson, changeClickedPerson } = appContext;

  // Access browser history
  const history = useHistory();

  return (
    <div
      className={`${
        clickedPerson === id ? "bg-blue-700" : "lg:hover:bg-blue-900"
      } flex justify-center`}
    >
      <img
        className={`rounded-full object-cover border-2 h-12 w-12 md:w-14 md:h-14 lg:h-14 lg:w-14 m-2 cursor-pointer`}
        src={picture}
        alt="thumbnail"
        id={id}
        onClick={(e) => {
          changeClickedPerson(e.target.id);
          history.push("/");
        }}
      />
    </div>
  );
};

export default ProfileImg;
