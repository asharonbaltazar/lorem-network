import React from "react";
import PostList from "./PostList";
import ImgRow from "./ImgRow";
import CommentList from "./CommentList";

const Views = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <ImgRow />
      <div className="flex lg:flex-row overflow-hidden">
        <PostList />
        <CommentList />
      </div>
    </div>
  );
};

export default Views;
