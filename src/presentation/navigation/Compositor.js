// @flow strict

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { push, resetTo, pop } from '../redux/actions';
import type { CompositorPropsType } from '../flowTypes';

type State = {
  isVisible: boolean,
};

class Compositor extends Component<CompositorPropsType, State> {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };

    Navigation.events().registerCommandListener(
      this.onNavigatorEvent.bind(this),
    );
  }

  /**
   * If a backstack is present, it is possible to trigger push/pop/reset multiple times.
   * This keeps track of the currently visible screen and ensures that only it currently executes navigation.
   */
  onNavigatorEvent(event) {
    switch (event.id) {
      case 'didAppear':
        this.setState({ isVisible: true });
        break;
      case 'didDisappear':
        this.setState({ isVisible: false });
        break;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.isVisible) {
      // Check if we are displaying an in-app error notification
      if (nextProps.showError) {
        // TODO Error message is pulled from redux store and showed to User
        return true;
      }
      // Check if we're to perform a pop
      if (nextProps.isPop) {
        Navigation.pop(nextProps.componentId);
        return true;
      }
      // Otherwise, if next screen is different from current, push or reset
      if (nextProps.screen !== this.props.screen) {
        if (nextProps.isReset) {
          Navigation.setStackRoot(nextProps.componentId, nextProps.screen);
        } else {
          Navigation.push(nextProps.componentId, nextProps.screen);
        }
        return true;
      }
    }
    return false;
  }

  /**
   * Copy props to all child nodes
   */
  renderChildren = () => {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        screen: this.props.screen,
        backstack: this.props.backstack,
        isReset: this.props.isReset,
        isPop: this.props.isPop,
        push: this.props.push,
        resetTo: this.props.resetTo,
        pop: this.props.pop,
      });
    });
  };

  render() {
    return <View style={{ flex: 1 }}>{this.renderChildren()}</View>;
  }
}

const mapStateToProps = state => {
  return {
    screen: state.navigationReducer.screen,
    backstack: state.navigationReducer.backstack,
    isReset: state.navigationReducer.isReset,
    isPop: state.navigationReducer.isPop,
    showError: state.navigationReducer.showError,
  };
};

const mapDispatchToProps = dispatch => {
  // We do not call these directly from Compositor; instead here we use this.props.navigator.
  // These methods update the redux store and then Compositor actually responds to that navigation request.
  // We wrap these in mapDispatchToProps for the purpose of passing these actions to the child component.
  return {
    push: screen => dispatch(push(screen)),
    resetTo: screen => dispatch(resetTo(screen)),
    pop: () => dispatch(pop()),
  };
};

const reduxContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Compositor);

export default reduxContainer;
