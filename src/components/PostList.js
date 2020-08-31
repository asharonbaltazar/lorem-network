import React from "react";
import Post from "./Post";

const PostList = () => {
  return (
    <div className="sm:w-full sm:justify-center md:w-2/4 lg:w-5/12 p-2">
      <h1 className="font-bold">PETER'S TIMELINE</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default PostList;
