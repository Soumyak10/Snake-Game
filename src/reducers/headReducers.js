const initialState = [8, 5];

const headReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_HEAD":
      console.log(action.payload);
      return [...action.payload];
    default:
      return state;
  }
};

export default headReducer;
