import snakeReducer from "./snakeReducers";
import { combineReducers } from "redux";
import headReducer from "./headReducers";

const rootReducer = combineReducers({ snake: snakeReducer, head: headReducer });

export default rootReducer;
