import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const Post = ({ id, header, body, transitionItem, comments }) => {
  const appContext = useContext(AppContext);
  const { showComments } = appContext;

  return (
    <motion.div
      className="h-auto mt-2 mb-2 max-w-lg p-2 rounded-sm border"
      variants={transitionItem}
    >
      <h1 className="font-semibold text-lg mb-4">{header}</h1>
      <p className="mb-2">{body}</p>
      <div className="flex justify-end text-blue-500">
        <div className="flex items-center">
          <span>{comments.length}</span>
          <i
            className="far fa-comment-alt ml-1 cursor-pointer"
            id={id}
            onClick={(e) => showComments(e.target.id)}
          ></i>
        </div>
      </div>
    </motion.div>
  );
};

export default Post;
