import { NAVIGATION_QUERY } from '../graphql/Navigation.graphql';

export default {
  updateNavigation: (_, args, { cache }) => {
    const previous = cache.readQuery({ query: NAVIGATION_QUERY });

    Object.keys(args).forEach(key => args[key] == null && delete args[key]);

    const data = {
      ...previous,
      Navigation: {
        ...previous.Navigation,
        ...args,
      },
    };

    cache.writeQuery({ query: NAVIGATION_QUERY, data });
    return null;
  },
};
