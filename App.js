import React from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { MyApp } from './src/routes/navegacion';

import { Provider }from 'react-redux';
import { store } from './src/store';


export default class App extends React.Component {
  render() {
    return (<Provider store={store}> 
              <MyApp />
            </Provider>
            );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
