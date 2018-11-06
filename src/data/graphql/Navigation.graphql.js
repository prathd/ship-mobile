import gql from 'graphql-tag';

// @client

export const NAVIGATION_QUERY = gql`
  query ReadNavigation {
    Navigation @client {
      side
      left
      center
      right
      currentTabIndex
      isPush
      isPop
      isResetStack
      isResetNavigator
    }
  }
`;

export const NAVIGATION_UPDATE = gql`
  mutation updateNavigation(
    $side: String
    $left: String
    $center: String
    $right: String
    $currentTabIndex: Int
    $isPush: Boolean
    $isPop: Boolean
    $isResetStack: Boolean
    $isResetNavigator: Boolean
  ) {
    updateNavigation(
      side: $side
      left: $left
      center: $center
      right: $right
      currentTabIndex: $currentTabIndex
      isPush: $isPush
      isPop: $isPop
      isResetStack: $isResetStack
      isResetNavigator: $isResetNavigator
    ) @client {
      side
      left
      center
      right
      currentTabIndex
      isPush
      isPop
      isResetStack
      isResetNavigator
    }
  }
`;
