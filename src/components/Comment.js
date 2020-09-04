import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Comment = ({ body, email, name }) => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  return (
    <div className="p2 mb-4 mt-4">
      <h3
        className={`font-medium ${
          theme.baseTheme === "bg-white" ? "text-gray-700" : "text-gray-100"
        } `}
      >
        {email}
      </h3>
      <p className="text-base px-4">{body}</p>
    </div>
  );
};

export default Comment;
