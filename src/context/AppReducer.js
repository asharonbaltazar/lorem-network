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

    default:
      return {
        ...state,
      };
  }
};
