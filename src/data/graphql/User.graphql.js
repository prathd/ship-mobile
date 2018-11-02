import gql from 'graphql-tag';

export const CREATE_USER = gql`
  mutation createUser(
    $phoneNumberId: ID!
    $name: String!
    $birthday: DateTime!
    $gender: Gender!
    $email: String!
    $password: String!
  ) {
    signup(
      phoneNumberId: $phoneNumberId
      name: $name
      birthday: $birthday
      gender: $gender
      email: $email
      password: $password
    ) {
      token
      user {
        id
      }
    }
  }
`;

// @client

export const QUERY_USER_STATE = gql`
  query readUserState {
    UserState @client {
      phone
      name
      birthday
      gender
    }
  }
`;

export const UPDATE_USER_STATE = gql`
  mutation updateUserState(
    $phone: String
    $name: String
    $birthday: String
    $gender: String
  ) {
    updateUserState(
      phone: $phone
      name: $name
      birthday: $birthday
      gender: $gender
    ) @client {
      phone
      name
      birthday
      gender
    }
  }
`;
