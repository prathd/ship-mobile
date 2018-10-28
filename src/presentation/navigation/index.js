// @flow strict

import { registerScreens } from './screens';
import { registerListeners } from './listeners';

export const initializeNavigation = async () => {
  await registerScreens();
  await registerListeners();
};
