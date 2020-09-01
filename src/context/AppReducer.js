export default (state, action) => {
  switch (action.type) {
    case "LOAD_PEOPLE":
      return {
        ...state,
        people: action.payload,
        loading: false,
      };

    case "CHANGE_CLICKED_PERSON":
      return {
        ...state,
        clickedPerson: action.payload,
      };

    case "SHOW_COMMENTS":
      return {
        ...state,
        comments: state.people[state.clickedPerson].posts.filter(
          (post) => post.post.id === action.payload
        )[0].comments,
      };

    default:
      return {
        ...state,
      };
  }
};
