import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { compose, graphql } from 'react-apollo';

import {
  NAVIGATION_QUERY,
  NAVIGATION_UPDATE,
} from '../../data/graphql/Navigation.graphql';

class Compositor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
    };

    Navigation.events().bindComponent(this);
  }

  // Keeps track of the currently visible screen
  componentDidAppear() {
    this.setState({ isVisible: true });
  }

  componentDidDisappear() {
    this.setState({ isVisible: false });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.isVisible) {
      // Check if we are displaying an in-app error notification
      if (nextProps.Navigation.showError) {
        // TODO Error message is pulled from redux store and showed to User
        return true;
      }
      // Check if we're to perform a pop
      if (nextProps.Navigation.isPop) {
        Navigation.pop(nextProps.componentId);
        return this.props.updateNavigation({
          variables: {
            isPop: false,
          },
        });
      }
      // Otherwise, if next screen is different from current, push or reset
      if (nextProps.Navigation.screen !== this.props.Navigation.screen) {
        if (nextProps.Navigation.isReset) {
          Navigation.setStackRoot(
            nextProps.componentId,
            nextProps.Navigation.screen,
          );
        } else {
          Navigation.push(nextProps.componentId, nextProps.Navigation.screen);
        }
        return true;
      }
    }

    return false;
  }

  navigate(screen, isReset) {
    const { Navigation } = this.props;
    const stringifiedScreen = JSON.stringify(screen);
    let newBackstack = Navigation.backstack;
    newBackstack.push(Navigation.screen);
    newBackstack = newBackstack.map(s => JSON.stringify(s));

    const nextState = Object.assign({}, this.props.Navigation, {
      screen: stringifiedScreen,
      isReset,
      backstack: isReset ? [] : newBackstack,
      isPop: false,
      showError: false,
    });

    delete nextState.__typename;

    return this.props.updateNavigation({
      variables: {
        ...nextState,
      },
    });
  }

  pop() {
    const { Navigation } = this.props;
    const poppedBackstack = Navigation.backstack.map(s => JSON.stringify(s));
    const poppedScreen = poppedBackstack.pop();
    const nextState = Object.assign({}, Navigation, {
      screen: poppedScreen ? poppedScreen : JSON.stringify(Navigation.screen),
      isReset: false,
      backstack: poppedBackstack,
      isPop: true,
      showError: false,
    });

    return this.props.updateNavigation({
      variables: {
        ...nextState,
      },
    });
  }

  renderChildren = () => {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        screen: this.props.Navigation.screen,
        backstack: this.props.Navigation.backstack,
        isReset: this.props.Navigation.isReset,
        isPop: this.props.Navigation.isPop,
        showError: this.props.Navigation.showError,
        push: screen => this.navigate(screen, false),
        resetTo: screen => this.navigate(screen, true),
        pop: () => this.pop(),
      });
    });
  };

  render() {
    return <View style={{ flex: 1 }}>{this.renderChildren()}</View>;
  }
}

export default compose(
  graphql(NAVIGATION_QUERY, {
    props: ({ data: { Navigation } }) => ({
      Navigation: {
        ...Navigation,
        screen: !!Navigation.screen
          ? JSON.parse(Navigation.screen)
          : Navigation.screen,
        backstack: Navigation.backstack.map(s => JSON.parse(s)),
      },
    }),
  }),
  graphql(NAVIGATION_UPDATE, { name: 'updateNavigation' }),
)(Compositor);
