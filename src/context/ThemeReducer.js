export default (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "CHANGE_COLORS":
      return {
        ...state,
        theme: action.payload,
      };

    case "CHANGE_BASE_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
