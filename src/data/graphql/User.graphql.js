import gql from 'graphql-tag';

export const QUERY_ME = gql`
  {
    me {
      id
      email
      name
      birthday
      gender
      number {
        phone
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
