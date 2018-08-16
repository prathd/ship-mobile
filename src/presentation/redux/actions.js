import * as Types from './types';

// export const storeFBData = ({ data }) => ({
//   type: Types.FB_DATA_READ,
//   data,
// });

export const storeFBData = ({ data }) => dispatch =>
  dispatch({
    type: Types.FB_DATA_READ,
    data,
  });

/***************************** navigationReducer *****************************/

/**
 * Navigate to a new page, preserving the backstack.
 */
export const push = newScreen => dispatch =>
  dispatch(navigate(newScreen, false));

/**
 * Navigate to a new page and clear the backstack.
 */
export const resetTo = newScreen => dispatch =>
  dispatch(navigate(newScreen, true));

/**
 * Internal helper method for setting the redux state
 */
export const navigate = (newScreen, reset) => ({
  type: Types.SCREEN,
  screen: newScreen,
  isReset: reset,
});

/**
 * Pop the current page
 */
export const pop = () => ({
  type: Types.POP,
});

/**
 * Show error message
 */
export const showError = () => ({
  type: Types.ERROR,
});
