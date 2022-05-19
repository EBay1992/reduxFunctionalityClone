import { BugAdded, BugRemoved, BugResolved } from "./actionType";

const initalState = [];

export const bugReducer = (state = initalState, action) => {
  switch (action.type) {
    case BugAdded:
      return [
        ...state,
        {
          id: ++initalState.length,
          description: action.payload.desciptor,
          isResolved: false,
        },
      ];
    case BugRemoved:
      return state.filter((bug) => bug.id !== action.payload.id);

    case BugResolved:
      return state.map((bug) =>
        bug.id === action.payload.id ? { ...bug, isResolved: true } : bug
      );
    default:
      return state;
  }
};
