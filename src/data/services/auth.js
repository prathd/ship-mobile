import { AsyncStorage } from 'react-native';

export const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
};
