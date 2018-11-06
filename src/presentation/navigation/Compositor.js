import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { compose, graphql } from 'react-apollo';

import {
  NAVIGATION_QUERY,
  NAVIGATION_UPDATE,
} from '../../data/graphql/Navigation.graphql';
import { SCREENS } from '../../data/screens';
import { defaultState, sideMenuRoot } from '../../defaults/defaultState';

class Compositor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
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
    const {
      isPopScreen,
      isResetRoot,
      isRestoreStack,
      isPushScreen,
      currentRoot,
    } = nextProps.Navigation;

    if (nextState.isVisible) {
      // pop if isPopScreen is true
      if (isPopScreen) {
        Navigation.pop(this.props.componentId);
        this.props.updateNavigation({ variables: { isPopScreen: false } });
      }

      // push if isPushScreen is true
      if (isPushScreen) {
        const { children } = currentRoot.stack;
        Navigation.push(this.props.componentId, children[children.length - 1]);
        this.props.updateNavigation({ variables: { isPushScreen: false } });
      }

      // reset root if isResetRoot
      if (isResetRoot) {
        Navigation.setRoot({ root: currentRoot });
        this.props.updateNavigation({ variables: { isResetRoot: false } });
      }

      return true;
    }

    return false;
  }

  render() {
    return <View style={{ flex: 1 }}>{this.renderChildren()}</View>;
  }

  renderChildren = () => {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        push: (screen, options = {}) => this.push(screen, options),
        pop: () => this.pop(),
        resetStack: (mode = 0) => this.resetStack(mode),
      });
    });
  };

  push = (screen, options) => {
    const { currentRoot } = this.props.Navigation;
    currentRoot.stack.children.push({
      component: {
        name: screen,
        options: {
          topBar: {
            visible: false,
            drawBehind: true,
            animate: false,
          },
          animations: {
            push: {
              enable: false,
            },
            pop: {
              enable: false,
            },
          },
          ...options,
        },
      },
    });

    this.props.updateNavigation({
      variables: {
        currentRoot: JSON.stringify(currentRoot),
        isPushScreen: true,
      },
    });
  };

  pop = () => {
    const { currentRoot } = this.props.Navigation;
    currentRoot.stack.children.pop();
    this.props.updateNavigation({
      variables: {
        isPopScreen: true,
        currentRoot: JSON.stringify(currentRoot),
      },
    });
  };

  resetStack = (mode) => {
    // LOGIN/SIGNUP
    if (mode === 0) {
      this.props.updateNavigation({
        variables: {
          mode,
          isResetRoot: true,
          currentRoot: defaultState.Navigation.currentRoot,
        }
      });
    }

    // DASHBOARD
    if (mode === 1) {
      this.props.updateNavigation({
        variables: {
          mode,
          isResetRoot: true,
          currentRoot: JSON.stringify(sideMenuRoot(SCREENS.DASHBOARD)),
        }
      });
    }

    // MESSAGE CENTER
    if (mode === 2) {
      this.props.updateNavigation({
        variables: {
          mode,
          isResetRoot: true,
          currentRoot: JSON.stringify(sideMenuRoot(SCREENS.MESSAGE_CENTER)),
        }
      });
    }
  };
}

export default compose(
  graphql(NAVIGATION_QUERY, {
    props: ({ data: { Navigation } }) => ({
      Navigation: {
        ...Navigation,
        currentRoot: JSON.parse(Navigation.currentRoot),
      },
    }),
  }),
  graphql(NAVIGATION_UPDATE, { name: 'updateNavigation' }),
)(Compositor);
