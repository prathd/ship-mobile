import gql from 'graphql-tag';

export const SIGNUP = gql`
  mutation signup(
    $phoneNumberId: ID!
    $name: String!
    $birthday: DateTime!
    $gender: Gender!
    $email: String!
    $password: String!
    $agreeTOC: Boolean!
  ) {
    signup(
      phoneNumberId: $phoneNumberId
      name: $name
      birthday: $birthday
      gender: $gender
      email: $email
      password: $password
      agreeTOC: $agreeTOC
    ) {
      token
      user {
        id
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($phoneNumberId: ID!, $password: String!) {
    login(phoneNumberId: $phoneNumberId, password: $password) {
      token
      user {
        id
        stage
      }
    }
  }
`;

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
