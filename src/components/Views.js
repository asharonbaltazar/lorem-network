import React, { useContext, useEffect } from "react";
import PostList from "./PostList";
import ImgRow from "./ImgRow";
import CommentList from "./CommentList";
import { AppContext } from "../context/AppContext";

const Views = () => {
  const appContext = useContext(AppContext);
  const { getPeoplewithPosts, people, loading } = appContext;

  useEffect(() => {
    getPeoplewithPosts(5);
    //eslint-disable-next-line
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-auto">
      <ImgRow people={people} />
      <div className="flex lg:flex-row relative">
        <PostList />
        {loading ? null : <CommentList />}
      </div>
    </div>
  );
};

export default Views;
