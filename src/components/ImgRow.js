import React from "react";
import ProfileImg from "./ProfileImg";

const ImgRow = ({ people, loading }) => {
  return (
    <>
      {loading ? null : (
        <div className="bg-blue-800 flex flex-row content-center sticky top-0 lg:flex-col z-10 lg:z-0 flex-shrink-0">
          {people.map((person, index) => (
            <ProfileImg
              key={index}
              id={index}
              picture={person.picture["medium"]}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ImgRow;
