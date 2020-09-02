import React, { useContext, useEffect } from "react";
import PostList from "./PostList";
import ImgRow from "./ImgRow";
import CommentList from "./CommentList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useMediaPredicate } from "react-media-hook";

const Views = () => {
  const appContext = useContext(AppContext);
  const { getPeoplewithPosts, showComments, people, loading } = appContext;

  // Media query
  const laptopSize = useMediaPredicate("(min-width: 770px)");

  useEffect(() => {
    getPeoplewithPosts(5);
    if (loading) showComments(1);
    //eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="flex flex-col lg:flex-row h-auto">
        <ImgRow people={people} />
        <div className="flex lg:flex-row relative w-full">
          {loading ? null : (
            <Route exact path="/" render={(props) => <PostList />} />
          )}
          {loading ? null : laptopSize ? (
            <CommentList />
          ) : (
            <Route path="/comments" component={CommentList} />
          )}
        </div>
      </div>
    </Router>
  );
};

export default Views;
