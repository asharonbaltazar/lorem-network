import React from "react";
import Comment from "./Comment";

const CommentList = () => {
  return (
    <div className="w-full pr-2">
      <h1 className="font-bold mt-2 mb-2">REPLIES</h1>
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentList;
