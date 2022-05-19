import { bugReducer as reducer } from "./reducer";

export const myStore = {
  _state: null,
  _isSubscribed: false,
  _listener: null,
  _isFirstTime: true,

  getState: function () {
    if (this._isFirstTime) {
      const newState = reducer(undefined, { type: "initalized" });
      this._state = newState;
      this._isFirstTime = false;
    }

    return this._state;
  },

  dispatch: function (action) {
    const state = this.getState();
    const newState = reducer(state, action);
    this._state = newState;
    if (this._isSubscribed) this._listener();
  },

  subscribe: function (listener) {
    this._isSubscribed = true;
    this._listener = listener;
    return this.unsubscribe.bind(this);
  },

  unsubscribe: function () {
    this._isSubscribed = false;
  },
};
