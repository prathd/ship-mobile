import gql from 'graphql-tag';

// @client

export const NAVIGATION_QUERY = gql`
  query ReadNavigation {
    Navigation @client {
      mode
      isPopScreen
      isResetRoot
      isRestoreStack
      isPushScreen
      currentRoot
    }
  }
`;

export const NAVIGATION_UPDATE = gql`
  mutation updateNavigation(
    $mode: Int
    $isPopScreen: Boolean
    $isResetRoot: Boolean
    $isRestoreStack: Boolean
    $isPushScreen: Boolean
    $currentRoot: String
  ) {
    updateNavigation (
      mode: $mode
      isPopScreen: $isPopScreen
      isResetRoot: $isResetRoot
      isRestoreStack: $isRestoreStack
      isPushScreen: $isPushScreen
      currentRoot: $currentRoot
    ) @client {
      mode
      isPopScreen
      isResetRoot
      isRestoreStack
      isPushScreen
      currentRoot
    }
  }
`;
