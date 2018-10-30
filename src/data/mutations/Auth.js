import { PHONE_QUERY } from '../graphql/Auth.graphql';

export default {
  savePhoneLocally: (_, { id, phone, countryCode, verified }, { cache }) => {
    const previous = cache.readQuery({ query: PHONE_QUERY });
    const next = { id, phone, countryCode, verified };

    Object.keys(next).forEach(key => next[key] == null && delete next[key]);

    const data = {
      ...previous,
      phone: {
        ...previous.phone,
        ...next,
      },
    };

    cache.writeQuery({ query: PHONE_QUERY, data });
    return data.phone;
  },
};
