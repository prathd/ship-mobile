import { Navigation } from 'react-native-navigation';
import WelcomeScreen from './WelcomeScreen';
import SecondScreen from './SecondScreen';

export const registerScreens = () => {
  Navigation.registerComponent(`navigation.app.WelcomeScreen`, () => WelcomeScreen);
  Navigation.registerComponent(`navigation.app.SecondScreen`, () => SecondScreen);
}
