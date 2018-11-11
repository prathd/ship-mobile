import { SCREENS } from '../data/screens';

export const stackRoot = screen => ({
  stack: {
    options: {
      topBar: {
        visible: false,
        drawBehind: true,
        animate: false,
      },
      animations: {
        push: {
          enabled: false,
        },
        pop: {
          enabled: false,
        },
      },
    },
    children: [
      {
        component: { name: screen },
      },
    ],
  },
});

export const sideMenuRoot = screen => ({
  sideMenu: {
    left: { component: { name: SCREENS.SIDE_MENU } },
    right: { component: { name: SCREENS.PREFERENCES } },
    center: {
      stack: {
        children: [
          {
            component: { name: screen },
          },
        ],
        options: {
          topBar: {
            visible: false,
            drawBehind: true,
            animate: false,
          },
          animations: {
            push: {
              enabled: false,
            },
            pop: {
              enabled: false,
            },
          },
        },
      },
    },
  },
});

export const defaultState = {
  Navigation: {
    __typename: 'Navigation',
    mode: 0, // 0 - Login/Signup (stack) | 1 - Dashboard/Message Center (sideMenu)
    side: 'center',
    isPopScreen: false,
    isResetRoot: false,
    isRestoreStack: false,
    isPushScreen: false,
    currentRoot: JSON.stringify(stackRoot(SCREENS.LOGIN)),
  },
  UserState: {
    __typename: 'UserState',
    phone: '{}',
    name: '',
    birthday: '',
    gender: 'MALE',
  },
};
