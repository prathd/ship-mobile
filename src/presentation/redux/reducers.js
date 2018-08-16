// @flow strict

import cloneDeep from 'lodash/cloneDeep';
import * as Types from './types';

const initialState = {
  navigationReducer: {
    screen: '',
    isReset: false,
    backstack: [],
    isPop: false,
    showError: false,
  },
  registerReducer: {},
  wizardReducer: {},
};

export const navigationReducer = (
  state = initialState.navigationReducer,
  action,
) => {
  switch (action.type) {
    case Types.SCREEN:
      const { screen, isReset } = action;
      let newBackstack = state.backstack;
      newBackstack.push(screen);
      return Object.assign({}, state, {
        screen,
        isReset,
        backstack: isReset ? [screen] : newBackstack,
        isPop: false,
        showError: false,
      });
    case Types.POP:
      let poppedBackstack = state.backstack;
      poppedBackstack.pop();
      return Object.assign({}, state, {
        screen: poppedBackstack[poppedBackstack.length - 1],
        isReset: false,
        backstack: poppedBackstack,
        isPop: true,
        showError: false,
      });
    case Types.ERROR:
      return Object.assign({}, state, {
        showError: true,
      });
    default:
      return state;
  }
};

export const registerReducer = (
  state = initialState.registerReducer,
  action,
) => {
  switch (action.type) {
    case Types.FB_DATA_READ:
      let ns = cloneDeep(state);
      ns.rUser = ns.rUser
        ? Object.assign({}, ns.rUser, action.data)
        : action.data;
      return ns;
    default:
      return state;
  }
};

export const wizardReducer = (state = initialState.wizardReducer, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
