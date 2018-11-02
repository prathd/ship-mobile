import { NAVIGATION_QUERY } from '../graphql/Navigation.graphql';

export default {
  updateNavigation: (
    _,
    { screen, isReset, backstack, isPop, showError },
    { cache },
  ) => {
    const previous = cache.readQuery({ query: NAVIGATION_QUERY });
    const next = { screen, isReset, backstack, isPop, showError };

    Object.keys(next).forEach(key => next[key] == null && delete next[key]);

    const data = {
      ...previous,
      Navigation: {
        ...previous.Navigation,
        ...next,
      },
    };

    cache.writeQuery({ query: NAVIGATION_QUERY, data });
    return null;
  },
};
