import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Post from "./Post";
import { AppContext } from "../context/AppContext";

const PostList = () => {
  const appContext = useContext(AppContext);
  const { people, loading, clickedPerson } = appContext;

  // Animation parameters
  const transitionList = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    hidden: {
      opacity: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const transitionItem = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -20 },
  };

  return (
    <motion.div
      className="sm:w-full sm:justify-center md:w-2/4 lg:w-5/12 p-2"
      initial="hidden"
      animate="visible"
      variants={transitionList}
    >
      <h1 className="font-bold">
        {loading
          ? null
          : `${people[clickedPerson].name.first.toUpperCase()}'S TIMELINE`}{" "}
      </h1>
      {/* {loading
        ? null
        : people[clickedPerson].posts.map((post) => (
            <Post
              key={post.id}
              header={post.title}
              body={post.body}
              transitionItem={transitionItem}
            />
          ))} */}
    </motion.div>
  );
};

export default PostList;
