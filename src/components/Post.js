import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";
import { ThemeContext } from "../context/ThemeContext";

const Post = ({ id, header, body, transitionItem, comments }) => {
  const appContext = useContext(AppContext);
  const { showComments } = appContext;

  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  // Media query
  const laptopSize = useMediaPredicate("(min-width: 770px)");

  return (
    <motion.div
      id={id}
      className="h-auto w-full mt-2 mb-2 lg:max-w-lg p-2 rounded-sm border"
      variants={transitionItem}
    >
      <h1 className="font-semibold text-lg mb-4">{header}</h1>
      <p className="mb-2">{body}</p>
      <div className={`flex justify-end text${theme.colors}500`}>
        <div className="flex items-center">
          <span>{comments.length}</span>
          {laptopSize ? (
            <i
              className="far fa-comment-alt ml-1 cursor-pointer"
              id={id}
              onClick={(e) => showComments(e.target.id)}
            />
          ) : (
            <Link
              id={id}
              to="/comments"
              onClick={(e) => showComments(e.target.id)}
            >
              <i className="far fa-comment-alt ml-1 cursor-pointer" id={id} />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Post;
