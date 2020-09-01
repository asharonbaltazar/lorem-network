import React, { useContext } from "react";
import Comment from "./Comment";
import { AppContext } from "../context/AppContext";

const CommentList = () => {
  const appContext = useContext(AppContext);
  const { loading, comments } = appContext;

  return (
    <div className="w-full p-2 lg:stick lg:top-0">
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
  );
};

export default CommentList;
