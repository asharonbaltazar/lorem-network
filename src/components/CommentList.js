import React, { useContext } from "react";
import Comment from "./Comment";
import { AppContext } from "../context/AppContext";
import { Route } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";

const CommentList = () => {
  const appContext = useContext(AppContext);
  const { comments, clickedPerson, people } = appContext;

  // Media query
  const laptopSize = useMediaPredicate("(min-width: 770px)");

  return (
    <Route
      render={(props) => (
        <div className="md:w-2/4 p-2 lg:sticky lg:top-0">
          {laptopSize ? null : (
            <h1 className="font-bold mb-2">
              REPLIES TO {people[clickedPerson].name.first.toUpperCase()}'S POST
            </h1>
          )}
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
