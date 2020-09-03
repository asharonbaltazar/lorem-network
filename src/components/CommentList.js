import React, { useContext } from "react";
import Comment from "./Comment";
import { AppContext } from "../context/AppContext";
import { Route } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";
import { useHistory } from "react-router-dom";

const CommentList = () => {
  const appContext = useContext(AppContext);
  const { comments, clickedPerson, people } = appContext;

  // Media query
  const laptopSize = useMediaPredicate("(min-width: 770px)");

  // Browser history
  const history = useHistory();

  // Close button
  const PhoneButtons = () => (
    <div className="w-full flex justify-between">
      <h1 className="font-bold mb-2">
        REPLIES TO {people[clickedPerson].name.first.toUpperCase()}'S POST
      </h1>

      <svg
        className="h-6 h-6 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => history.push("/")}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );

  return (
    <Route
      render={(props) => (
        <div className="md:w-2/4 p-2 h-auto">
          {laptopSize ? (
            <h1 className="font-bold mb-2">REPLIES</h1>
          ) : (
            <PhoneButtons />
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
