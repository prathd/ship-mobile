// @flow strict

import cloneDeep from 'lodash/cloneDeep';
import * as Types from './types';

const initialState = {};

export const registerReducer = (state = initialState, action) => {
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

export const wizardReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
