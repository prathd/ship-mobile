// @flow strict

import { registerScreens } from './screens';
import { registerListeners } from './listeners';

export const initializeNavigation = async () => {
  const token = await registerScreens();
  await registerListeners(token);
};
