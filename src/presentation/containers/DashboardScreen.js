import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { compose, graphql, withApollo } from 'react-apollo';

import { QUERY_ME } from '../../data/graphql/User.graphql';

export class Dashboard extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{(this.props.me && this.props.me.name) || 'Loading...'}</Text>
        <Text>This is the Dashboard!</Text>
        <TouchableOpacity onPress={() => this.props.showSide('left')}>
          <Text>Left</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.showSide('right')}>
          <Text>Right</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.logout()}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }

  logout = async () => {
    await AsyncStorage.removeItem('token');
    this.props.resetStack(0);
  };
}

export const DashboardScreen = compose(
  withApollo,
  graphql(QUERY_ME, {
    props: ({ data: { me } }) => ({
      me,
    }),
    options: {
      fetchPolicy: 'cache-and-network',
    },
  }),
)(Dashboard);
