// @flow strict

import { Platform, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: Dimensions.get('window').width,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  overlay: {
    position: 'absolute',
    bottom: 75,
  },
  phoneView: {
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    borderRadius: 25,
    borderWidth: 3,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  phoneText: {
    color: '#FFFFFF',
  },
});
