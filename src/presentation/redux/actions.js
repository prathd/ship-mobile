import * as Types from './types';

export const storeFBData = ({ data }) => ({
  type: Types.FB_DATA_READ,
  data,
});
