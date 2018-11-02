export const defaultState = {
  Navigation: {
    __typename: 'Navigation',
    screen: JSON.stringify({
      component: {
        name: `navigation.app.LoginScreen`,
      },
    }),
    isReset: false,
    backstack: [],
    isPop: false,
    showError: false,
  },
  UserState: {
    __typename: 'UserState',
    phone: '{}',
    name: '',
    birthday: '',
    gender: 'MALE',
  },
};
