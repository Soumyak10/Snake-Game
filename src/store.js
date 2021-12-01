import rootReducer from "./reducers/index";
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducer);
export default store;
