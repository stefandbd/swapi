import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import Dashboard from './components/Dashboard';
import ListPeopleItem from './components/ListPeopleItem';
import DetailsView from './components/DetailsView';


export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = createStackNavigator({
  Dashboard: { screen: Dashboard, navigationOptions: { header: null } },
  ListPeopleItem: {
    screen: ListPeopleItem,
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#fff' },
  },
  DetailsView: { screen: DetailsView },
});
