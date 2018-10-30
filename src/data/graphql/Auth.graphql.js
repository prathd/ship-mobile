import gql from 'graphql-tag';

export const LOGIN_WITH_PHONE_NUMBER = gql`
  mutation loginWithPhoneNumber($phone: String!, $countryCode: Int!) {
    loginWithPhoneNumber(phone: $phone, countryCode: $countryCode) {
      id
      phone
      countryCode
      verified
    }
  }
`;

export const VERIIFY_PHONE_NUMBER = gql`
  mutation verifyPhoneNumber($id: ID!, $code: Int!) {
    verifyPhoneNumber(id: $id, code: $code) {
      id
      phone
      countryCode
      verified
    }
  }
`;

// @client

export const PHONE_QUERY = gql`
  query ReadPhone {
    phone @client {
      id
      phone
      countryCode
      verified
    }
  }
`;

export const SAVE_PHONE_LOCALLY = gql`
  mutation savePhoneLocally(
    $id: ID
    $phone: String
    $countryCode: Int
    $verified: Boolean
  ) {
    savePhoneLocally(
      id: $id
      phone: $phone
      countryCode: $countryCode
      verified: $verified
    ) @client {
      id
      phone
      countryCode
      verified
    }
  }
`;
