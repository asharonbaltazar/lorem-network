import React, { useContext } from "react";
import Comment from "./Comment";
import { AppContext } from "../context/AppContext";
import { useMediaPredicate } from "react-media-hook";
import { Route } from "react-router-dom";

const CommentList = () => {
  const appContext = useContext(AppContext);
  const { loading, comments } = appContext;

  // Media query
  const phoneSize = useMediaPredicate("(min-width: 770px)");

  return (
    <Route
      render={(props) => (
        <div className="md:w-2/4 p-2 lg:sticky lg:top-0">
          <h1 className="font-bold mb-2">REPLIES</h1>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              body={comment.body}
              email={comment.email}
              name={comment.name}
            />
          ))}
        </div>
      )}
    />
  );
};

export default CommentList;
