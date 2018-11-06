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
    // only accept prop changes from currently visible component
    if (nextState.isVisible) {
      // show/hide side menu if nextProps.side differs
      if (nextProps.Navigation.side !== this.props.Navigation.side) {
        if (nextProps.Navigation.side === 'center') {
          Navigation.mergeOptions(nextProps.componentId, {
            sideMenu: {
              [nextProps.Navigation.side]: { visible: false },
            },
          });
        }

        Navigation.mergeOptions(nextProps.componentId, {
          sideMenu: {
            [nextProps.Navigation.side]: { visible: true },
          },
        });
      }

      // check if center tabs are being toggled
      if (
        nextProps.Navigation.currentTabIndex !==
        this.props.Navigation.currentTabIndex
      ) {
        Navigation.mergeOptions('center', {
          bottomTabs: {
            currentTabIndex: nextProps.Navigation.currentTabIndex,
          },
        });
      }

      // check if screen is to be pushed
      if (nextProps.Navigation.isPush) {
        const { children } = nextProps.Navigation.center.bottomTabs.children[
          nextProps.Navigation.currentTabIndex
        ].stack;
        Navigation.push(nextProps.componentId, children[children.length - 1]);
        return this.props.updateNavigation({
          variables: { isPush: false },
        });
      }

      // check if resetting
      if (nextProps.Navigation.isResetStack) {
        const { children } = nextProps.Navigation.center.bottomTabs.children[
          nextProps.Navigation.currentTabIndex
        ].stack;
        Navigation.setStackRoot(nextProps.componentId, children[0]);
        return this.props.updateNavigation({
          variables: { isResetStack: false },
        });
      }

      // reset entire navigator (center)
      if (nextProps.Navigation.isResetNavigator) {
        const { left, center, right } = nextProps.Navigation;
        Navigation.setRoot({
          root: {
            sideMenu: {
              left,
              center,
              right,
            },
          },
        });

        this.props.updateNavigation({
          variables: { isResetNavigator: false },
        });
      }

      // check if screen is to be popped
      if (nextProps.Navigation.isPop) {
        Navigation.pop(nextProps.componentId);
        return this.props.updateNavigation({
          variables: { isPop: false },
        });
      }
    }

    return false;
  }

  render() {
    return <View style={{ flex: 1 }}>{this.renderChildren()}</View>;
  }

  renderChildren = () => {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        side: this.props.Navigation.side,
        showSide: side => this.setVisibleSide(side),
        hideSide: () => this.setVisibleSide('center'),
        toggleActiveTab: () => this.toggleActiveTab(),
        pop: () => this.pop(),
        push: screen => this.navigate(screen, false),
        resetStack: screen => this.navigate(screen, true),
        resetNavigator: bottomTabs => this.resetNavigator(bottomTabs),
      });
    });
  };

  setVisibleSide = side => {
    return this.props.updateNavigation({
      variables: { side },
    });
  };

  pop = () => {
    const { center, currentTabIndex } = this.props.Navigation;
    center.bottomTabs.children[currentTabIndex].pop();

    return this.props.updateNavigation({
      variables: {
        center: JSON.stringify(center),
        isPop: true,
      },
    });
  };

  navigate = (screen, isResetStack) => {
    const { center, currentTabIndex } = this.props.Navigation;
    if (isResetStack) {
      center.bottomTabs.children[currentTabIndex].stack.children = [];
    }

    center.bottomTabs.children[currentTabIndex].stack.children.push(screen);

    return this.props.updateNavigation({
      variables: {
        center: JSON.stringify(center),
        isResetStack,
        isPush: !isResetStack,
      },
    });
  };

  resetNavigator = bottomTabs => {
    const { center } = this.props.Navigation;
    center.bottomTabs = bottomTabs;

    return this.props.updateNavigation({
      variables: {
        center: JSON.stringify(center),
        isResetNavigator: true,
      },
    });
  };

  toggleActiveTab = () => {
    return this.props.updateNavigation({
      variables: {
        currentTabIndex: this.props.Navigation.currentTabIndex ? 0 : 1,
      },
    });
  };
}

export default compose(
  graphql(NAVIGATION_QUERY, {
    props: ({ data: { Navigation } }) => ({
      Navigation: {
        ...Navigation,
        left: Navigation.left && JSON.parse(Navigation.left),
        center: JSON.parse(Navigation.center),
        right: Navigation.right && JSON.parse(Navigation.right),
      },
    }),
  }),
  graphql(NAVIGATION_UPDATE, { name: 'updateNavigation' }),
)(Compositor);
