/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Scene, Router, Modal, Actions} from 'react-native-router-flux';
import { StyleSheet, Platform, AsyncStorage, View, Text } from 'react-native';


import Main from './src/components/main';

export default class App extends Component<{}> {
  render() {
    return (
        <Router>
          <Modal>
            <Scene key="root">

              <Scene key="Main" component={Main} initial={true} hideNavBar={true} />

            </Scene>
          </Modal>
        </Router>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
