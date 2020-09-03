export default (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: action.payload,
      };

    case "CHANGE_BASE_THEME":
      return {
        ...state,
        baseTheme: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
