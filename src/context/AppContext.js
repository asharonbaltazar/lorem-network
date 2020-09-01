import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial State
const initialState = {
  people: [],
  loading: true,
  clickedPerson: 0,
  comments: [],
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  // Get people
  const getPeoplewithPosts = async (numPeople = 10, numPosts = 10) => {
    // Create fake posts
    const JSONposts = await axios.get(
      `http://jsonplaceholder.typicode.com/posts?_limit=${numPosts * 10}`
    );

    // Create fake people
    const people = [];
    let multiplier = 1;
    for (let i = 1; i <= numPeople; i++) {
      const person = await axios.get(
        "https://randomuser.me/api/?nat=us,dk,fr,gb&inc=gender,name,picture"
      );

      // Filter out relevant posts to userId
      let posts = JSONposts.data.filter((post) => {
        return post.userId === i;
      });

      // Create fake comments to fake posts
      const comments = [];
      for (let i = 1; i <= numPosts; i++) {
        const comment = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${
            i * multiplier
          }/comments`
        );
        comments.push(comment.data);
      }

      // Match fake posts with their respective fake comments
      posts = posts.map((post, index) => {
        return {
          post,
          comments: comments[index],
        };
      });

      people.push({
        ...person.data.results[0],
        posts,
      });
      multiplier += 10;
    }
    dispatch({ type: "LOAD_PEOPLE", payload: people });
  };

  // Change the clicked person
  const changeClickedPerson = (id) => {
    dispatch({ type: "CHANGE_CLICKED_PERSON", payload: +id });
  };

  // Get comments id
  const showComments = (id) => {
    console.log(state.people[state.clickedPerson].posts);
    // dispatch({ type: "SHOW_COMMENTS", payload: +id });
  };

  return (
    <AppContext.Provider
      value={{
        people: state.people,
        loading: state.loading,
        clickedPerson: state.clickedPerson,
        comments: state.comments,
        getPeoplewithPosts,
        changeClickedPerson,
        showComments,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
