import gql from 'graphql-tag';

// @client

export const NAVIGATION_QUERY = gql`
  query ReadNavigation {
    Navigation @client {
      screen
      isReset
      backstack
      isPop
      showError
    }
  }
`;

export const NAVIGATION_UPDATE = gql`
  mutation updateNavigation(
    $screen: String
    $isReset: Boolean
    $backstack: [String]
    $isPop: Boolean
    $showError: Boolean
  ) {
    updateNavigation(
      screen: $screen
      isReset: $isReset
      backstack: $backstack
      isPop: $isPop
      showError: $showError
    ) @client {
      screen
      isReset
      backstack
      isPop
      showError
    }
  }
`;
