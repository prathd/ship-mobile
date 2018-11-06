import { SCREENS } from '../../data/screens';

export const defaultState = {
  Navigation: {
    __typename: 'Navigation',
    side: 'center',
    currentTabIndex: 0,
    isPush: false,
    isPop: false,
    isResetStack: false,
    isResetNavigator: false,
    left: JSON.stringify({
      component: { name: SCREENS.SIDE_MENU },
    }),
    center: JSON.stringify({
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: { name: SCREENS.LOGIN },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Only Tab',
                  icon: require('../../presentation/images/ship.png')
                },
                sideMenu: {
                  right: {
                    visible: false,
                    enabled: false,
                  },
                  left: {
                    visible: false,
                    enabled: false,
                  },
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                  animate: false,
                },
                animations: {
                  push: {
                    enable: false,
                  },
                  pop: {
                    enable: false,
                  },
                },
              },
            },
          },
        ],
        options: {
          bottomTabs: {
            currentTabIndex: 0,
            visible: false,
            drawBehind: true,
            animate: false,
          },
        },
      },
    }),
    right: JSON.stringify({
      component: { name: SCREENS.PREFERENCES },
    }),
  },
  UserState: {
    __typename: 'UserState',
    phone: '{}',
    name: '',
    birthday: '',
    gender: 'MALE',
  },
};

export const withToken = Navigation => {
  const center = JSON.parse(Navigation.center);
  delete center['stack'];

  return {
    ...Navigation,
    center: JSON.stringify({
      ...center,
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: { name: SCREENS.DASHBOARD },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Tab 1',
                  icon: require('../../presentation/images/ship.png')
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                  animate: false,
                },
                animations: {
                  push: {
                    enable: false,
                  },
                  pop: {
                    enable: false,
                  },
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: { name: SCREENS.MESSAGE_CENTER },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Tab 2',
                  icon: require('../../presentation/images/ship.png'),
                },
                topBar: {
                  visible: false,
                  drawBehind: true,
                  animate: false,
                },
                animations: {
                  push: {
                    enable: false,
                  },
                  pop: {
                    enable: false,
                  },
                },
              },
            },
          },
        ],
        options: {
          bottomTabs: {
            currentTabIndex: 0,
            visible: false,
            drawBehind: true,
            animate: false,
          },
        },
      },
    }),
  };
};
