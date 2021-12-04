import snakeReducer from "./snakeReducer";
import { combineReducers } from "redux";
import headReducer from "./headReducer";
import scoreReducer from "./scoreReducer";

const rootReducer = combineReducers({
  snake: snakeReducer,
  head: headReducer,
  score: scoreReducer,
});

export default rootReducer;
