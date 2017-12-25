import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity,Easing, BackAndroid, BackHandler, Platform, ToastAndroid, AppState,AsyncStorage,Button,ImageBackground} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Item, Icon, Input, Tab, Tabs, TabHeading,Left,Body,Right,Title} from 'native-base';

import PercentageCircle from 'react-native-percentage-circle';
import { MainFormStyle } from '../style/main.js';
import config from "../config/config";
import pi from "../config/pi_config";

export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            challenge_recordCnt:0
            ,challenge_per:0
            ,challenge_grade:"Halley's Comet"
        };

    }

    componentWillMount()
    {
        this.loadData();
    }
    loadData()
    {
        AsyncStorage.getItem(config.STORE_KEY).then((value) => {
            var json = eval("("+value+")");
            if(json!=null) {

                var challenge_recordCnt = json.challenge_recordCnt;
                var challenge_grade = json.challenge_grade;


                if(challenge_recordCnt != null) {
                    this.setState({challenge_recordCnt:challenge_recordCnt});

                    for(var i = 0; i < pi.pi_grade_value.length; i++) {
                        var temp = pi.pi_grade_value[i].split("~");
                        if(parseInt(temp[0]) <= challenge_recordCnt && parseInt(temp[1]) >= challenge_recordCnt) {
                            var per = Math.round((challenge_recordCnt / parseInt(temp[1])) * 100);
                            var dataObject = {
                                "challenge_grade": pi.pi_grade[i]
                                ,"challenge_recordCnt": challenge_recordCnt
                            };

                            AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(dataObject), () => {
                                this.setState({challenge_grade:pi.pi_grade[i],challenge_recordCnt:challenge_recordCnt, challenge_per: per});
                            });



                            break;
                        }
                    }
                }

            } else {
            }

            if(challenge_grade != null) {
                this.setState({challenge_grade:challenge_grade});
            }


        }).then(res => {
        });
    }


    render() {
        return (

            <Container style={{marginLeft:-5}}>
                <Header style={MainFormStyle.headerLayout}>
                    <Left style={{flex:1}}>
                        <TouchableOpacity onPress={Actions.Grade}>
                            <Text style={MainFormStyle.headerContent}> {this.state.challenge_grade}</Text>
                        </TouchableOpacity>
                    </Left>
                    <Right style={{flex:1}}>
                        <TouchableOpacity onPress={Actions.Readerboard}>
                            <Text style={MainFormStyle.headerContent}> 최고기록 : {this.state.challenge_recordCnt}</Text>
                        </TouchableOpacity>
                    </Right>

                </Header>
                <Content style={MainFormStyle.contentsLayout}>
                    <View style={MainFormStyle.contentsHeaderLayout}>
                        <View style={{alignItems: 'center',justifyContent:'center',paddingTop:20}}>
                            <Text style={MainFormStyle.boldFont}>{this.state.challenge_grade}</Text>
                        </View>

                        <View style={{alignItems: 'center',justifyContent:'center',paddingTop:20,paddingBottom:20}}>
                            <PercentageCircle radius={40} percent={30} borderWidth={5}>
                            </PercentageCircle>
                            <View style={{alignItems: 'center',justifyContent:'center',paddingTop:20}}>
                                <Text style={MainFormStyle.boldFont}>최고기록 : {this.state.challenge_recordCnt}</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{paddingTop:10}}>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Idsetting} title="아이디 설정" color="#3e3e3e"></Button>
                                </View>
                            </View>
                            <View style={{flex:0.04}}></View>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Keyboard} title="키패드 설정" color="#3e3e3e"></Button>
                                </View>
                            </View>
                        </View>

                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Grade} title="등급 보기" color="#3e3e3e"></Button>
                                </View>
                            </View>
                            <View style={{flex:0.04}}></View>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Pivalue} title="파이값 보기" color="#3e3e3e"></Button>
                                </View>
                            </View>
                        </View>

                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Pirecord} title="연 습" color="#3e3e3e"></Button>
                                </View>
                            </View>
                            <View style={{flex:0.04}}></View>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Pichallenge} title="도 전" color="#3e3e3e"></Button>
                                </View>
                            </View>
                        </View>


                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Pisection} title="구간 연습" color="#3e3e3e"></Button>
                                </View>
                            </View>
                            <View style={{flex:0.04}}></View>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Readerboard} title="리더 보드" color="#3e3e3e"></Button>
                                </View>
                            </View>
                        </View>
                    </View>



                </Content>

            </Container>
        );
    }
}

