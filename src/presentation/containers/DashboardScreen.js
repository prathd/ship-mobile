import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { compose, graphql } from 'react-apollo';

import { QUERY_ME } from '../../data/graphql/User.graphql';

export class Dashboard extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{(this.props.me && this.props.me.name) || 'Loading...'}</Text>
        <Text>This is the Dashboard!</Text>
      </View>
    );
  }
}

export const DashboardScreen = compose(
  graphql(QUERY_ME, {
    props: ({ data: { me } }) => ({
      me,
    }),
  }),
)(Dashboard);
