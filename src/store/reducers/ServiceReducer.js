const serviceReducer = (state = "Home", action) => {
  switch (action.type) {
    case "SET_SERVICE":
      return action.payload;
    default:
      return state;
  }
};

export default serviceReducer;
