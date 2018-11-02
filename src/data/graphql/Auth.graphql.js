import gql from 'graphql-tag';

export const LOGIN_WITH_PHONE_NUMBER = gql`
  mutation loginWithPhoneNumber(
    $phone: String!
    $cca2: String!
    $countryCode: Int!
  ) {
    loginWithPhoneNumber(
      phone: $phone
      cca2: $cca2
      countryCode: $countryCode
    ) {
      id
      phone
      cca2
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
      cca2
      countryCode
      verified
    }
  }
`;
