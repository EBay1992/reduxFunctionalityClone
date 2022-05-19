//! this one is store from redux:
// import { store } from "./store";

//! this one the my own:
import { myStore as store } from "./myRedux";

import {
  bugAddedAction,
  bugRemovedAction,
  BugResolvedAction,
} from "./actionCreator";

const currentStoreStatus = store.getState();
console.log(currentStoreStatus);

// subscribe to changes in store; and return a function to unsubscribe
const unsubscribe = store.subscribe(() =>
  console.log("store has been modified.", store.getState())
);

//add bug to store
store.dispatch(bugAddedAction("Bug 1"));
//remove bug from store
store.dispatch(bugRemovedAction(1));

//by unsubscribe from store the console log will stop
unsubscribe();

store.dispatch(bugAddedAction("Bug 1"));
store.dispatch(BugResolvedAction(2));

console.log(store.getState());
