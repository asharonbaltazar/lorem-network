import React from "react";
import { motion } from "framer-motion";

const Post = ({ header, body, transitionItem, comments }) => {
  return (
    <motion.div
      className="h-auto mt-2 mb-2  max-w-sm p-2 rounded-sm border"
      variants={transitionItem}
    >
      <h1 className="font-semibold text-lg mb-4">{header}</h1>
      <p className="mb-2">{body}</p>
      <div className="flex justify-end text-blue-500">
        <div className="flex items-center">
          <span>{comments.length}</span>
          <i className="far fa-comment-alt ml-1 cursor-pointer"></i>
        </div>
      </div>
    </motion.div>
  );
};

export default Post;
