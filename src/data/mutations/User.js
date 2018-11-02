import { QUERY_USER_STATE } from '../graphql/User.graphql';

export default {
  updateUserState: (_, args, { cache }) => {
    const previous = cache.readQuery({ query: QUERY_USER_STATE });
    const next = args;

    Object.keys(next).forEach(key => next[key] == null && delete next[key]);

    const data = {
      ...previous,
      UserState: {
        ...previous.UserState,
        ...next,
      },
    };

    cache.writeQuery({ query: QUERY_USER_STATE, data });
    return data.UserState;
  },
};
