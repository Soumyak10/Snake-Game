const initialState = [
  [8, 4],
  [8, 5],
];

const snakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_HEAD":
      let newState = [...state];
      newState.shift();
      newState.push(action.payload);
      console.log(action.payload);
      return [...state, action.payload];
    //   let newState = JSON.parse(JSON.stringify(state));
    //   newState.push(action.payload);
    //   // console.log("pushed", newState);
    //   return newState;
    default:
      return state;
  }
};

export default snakeReducer;
