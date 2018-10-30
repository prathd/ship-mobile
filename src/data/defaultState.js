export const defaultState = {
  navigation: {
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
  phone: {
    __typename: 'Phone',
    id: '',
    phone: '',
    countryCode: 1,
    verified: false,
  },
};
