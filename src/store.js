import { bugReducer } from "./reducer";
import { createStore } from "redux";

export const store = createStore(bugReducer);
