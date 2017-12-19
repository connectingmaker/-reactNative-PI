/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Scene, Router, Modal, Actions} from 'react-native-router-flux';
import { StyleSheet, Platform, AsyncStorage, View, Text } from 'react-native';


import Main from './src/components/main';
import Keyboard from './src/components/keyboard';
import Grade from './src/components/grade';
import Pivalue from './src/components/pivalue';
import Pirecord from './src/components/pirecord';
import Pichallenge from './src/components/pichallenge';
import Pisection from './src/components/pisection';
import Idsetting from './src/components/idsetting';
import Readerboard from './src/components/readerboard';

export default class App extends Component<{}> {
  render() {
    return (
        <Router>
          <Modal>
            <Scene key="root">
              <Scene key="Main" component={Main} hideNavBar={true} />
              <Scene key="Keyboard" component={Keyboard} initial={true} title="키패드 설정" hideNavBar={true} wrapRouter={true}/>
              <Scene key="Grade" component={Grade} title="등급" hideNavBar={true}  wrapRouter={true}/>
              <Scene key="Pivalue" component={Pivalue} title="파이값" hideNavBar={true} wrapRouter={true}/>
              <Scene key="Pirecord" component={Pirecord} title="연습" hideNavBar={true} wrapRouter={true}/>
              <Scene key="Pichallenge" component={Pichallenge} title="도전" hideNavBar={true} wrapRouter={true}/>
              <Scene key="Pisection" component={Pisection} title="구간연습" hideNavBar={true} wrapRouter={true}/>
              <Scene key="Idsetting" component={Idsetting} title="아이디" hideNavBar={true} wrapRouter={true}/>
              <Scene key="Readerboard" component={Readerboard} title="리더보드" hideNavBar={true} wrapRouter={true}/>
            </Scene>

          </Modal>
        </Router>
    );

  }
}

