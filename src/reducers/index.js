import snakeReducer from "./snakeReducer";
import { combineReducers } from "redux";
import headReducer from "./headReducer";

const rootReducer = combineReducers({ snake: snakeReducer, head: headReducer });

export default rootReducer;
