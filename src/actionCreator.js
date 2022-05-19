import { BugAdded, BugRemoved, BugResolved } from "./actionType.js";

export const bugAddedAction = (desciptor) => {
  return {
    type: BugAdded,
    payload: {
      desciptor,
    },
  };
};

export const bugRemovedAction = (id) => {
  return {
    type: BugRemoved,
    payload: {
      id,
    },
  };
};

export const BugResolvedAction = (id) => {
  return {
    type: BugResolved,
    payload: {
      id,
    },
  };
};
