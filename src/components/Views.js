import React, { useContext, useEffect } from "react";
import { BarLoader } from "react-spinners";
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
    //eslint-disable-next-line
  }, []);

  const loadingStyles = loading
    ? "flex h-64 justify-center items-center"
    : "flex flex-col lg:flex-row h-auto";

  return (
    <Router>
      <div className={loadingStyles}>
        <ImgRow people={people} />
        <div
          className={`flex lg:flex-row ${
            loading ? "justify-center" : ""
          } relative w-full`}
        >
          {loading ? (
            <div className="h-full">
              <p>Fetching data. Please wait</p>
              <BarLoader width={"100%"} />
            </div>
          ) : (
            <>
              <Route exact path="/" render={(props) => <PostList />} />
              {laptopSize ? (
                <CommentList />
              ) : (
                <Route path="/comments" component={CommentList} />
              )}
            </>
          )}
        </div>
      </div>
    </Router>
  );
};

export default Views;
