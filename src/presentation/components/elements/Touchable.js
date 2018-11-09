import React from 'react';
import { Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { debounce } from 'lodash';

const withPreventDoubleClick = (WrappedComponent) => {

  class PreventDoubleClick extends React.PureComponent {

    debouncedOnPress = () => {
      this.props.onPress && this.props.onPress();
    }

    onPress = debounce(this.debouncedOnPress, 300, { leading: true, trailing: false });

    render() {
      return <WrappedComponent {...this.props} onPress={this.onPress} />;
    }
  }

  PreventDoubleClick.displayName = `withPreventDoubleClick(${WrappedComponent.displayName ||WrappedComponent.name})`
  return PreventDoubleClick;
}

const PlatformSpecificTouchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
export default withPreventDoubleClick(PlatformSpecificTouchable);
