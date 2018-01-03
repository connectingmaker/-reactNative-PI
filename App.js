/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {Scene, Router, Modal, Actions} from 'react-native-router-flux';
import { StyleSheet, Platform, AsyncStorage, View, Text ,BackAndroid} from 'react-native';


import Main from './src/components/main';
import Keyboard from './src/components/keyboard';
import Grade from './src/components/grade';
import Pivalue from './src/components/pivalue';
import Pirecord from './src/components/pirecord';
import Pichallenge from './src/components/pichallenge';
import Pisection from './src/components/pisection';
import Idsetting from './src/components/idsetting';
import Readerboard from './src/components/readerboard';
import config from './src/config/config';

export default class App extends Component<{}> {
  constructor(){
    super();
    this.state ={
        logged:false
        ,logout:true
        ,loading:false
        ,uid:""
        ,token:""
    };
      console.log(Platform.OS);
      console.log(Platform.Version);
  }

    componentWillReceiveProps(nextProps)
    {
        console.log("로그아웃 componentWillReceiveProps");
        console.log(nextProps);
    }



    componentWillUnmount(){
        BackAndroid.removeEventListener('hardwareBackPress', () => {
            if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
              console.log("ok");
                this.navigator.pop();
                return true;
            }
            return false;
        });
    }




    render() {

    return (
        <Router>
          <Modal>
            <Scene key="root">
              <Scene key="Main" component={Main} initial={true} uid={this.state.uid} hideNavBar={true} />

            </Scene>
              <Scene key="Keyboard" component={Keyboard} title="키패드 설정" uid={this.state.uid} schema="modal" hideNavBar={true} wrapRouter={true}/>
              <Scene key="Grade" component={Grade} title="등급" uid={this.state.uid} schema="modal" hideNavBar={true}  wrapRouter={true}/>
              <Scene key="Pivalue" component={Pivalue} title="파이값" uid={this.state.uid} schema="modal" hideNavBar={true} wrapRouter={true}/>
              <Scene key="Pirecord" component={Pirecord} title="연습" uid={this.state.uid} schema="modal" hideNavBar={true} wrapRouter={true}/>
              <Scene key="Pichallenge" component={Pichallenge} title="도전" uid={this.state.uid} schema="modal" hideNavBar={true} wrapRouter={true}/>
              <Scene key="Pisection" component={Pisection} title="구간연습" uid={this.state.uid} schema="modal" hideNavBar={true} wrapRouter={true}/>
              <Scene key="Idsetting" component={Idsetting} title="아이디" uid={this.state.uid} schema="modal" hideNavBar={true} wrapRouter={true}/>
              <Scene key="Readerboard" component={Readerboard} title="리더보드" uid={this.state.uid} schema="modal" hideNavBar={true} wrapRouter={true}/>
          </Modal>
        </Router>
    );

  }
}

