import React from "react";

const Comment = ({ body, email, name }) => {
  return (
    <div className="p2 mb-4 mt-4">
      <h3 className="font-medium text-gray-700">{email}</h3>

      <p className="text-base px-4">{body}</p>
    </div>
  );
};

export default Comment;
