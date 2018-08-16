/** Navigator **/
export type CompositorPropsType = {
  screen: string, // Unique string ID for each navigable component
  isReset: boolean, // Set true to clear the backstack when navigating to the new screen
  backstack: Array<string>, // Data structure to keep track of the backstack, used when popping
  isPop: boolean, // Indicates that this is a pop operation,
  showError: boolean, // Use the navigator's showInAppNotification API to display an error
};
