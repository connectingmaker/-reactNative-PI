/**
 * Created by jccho on 2017. 12. 13..
 */
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity,AlertIOS,Alert,Platform,AsyncStorage,BackAndroid } from 'react-native';
import { Container, Header, Left,Body,Right, Content, Footer,Item, Icon, Input,Button,Title } from 'native-base';

import {gradeFormStyle} from '../style/grade';
import {commonStyle} from "../style/common";
import config from "../config/config";

import renderIf from 'render-if'


export default class grade extends Component {
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
        BackAndroid.addEventListener('hardwareBackPress', () => Actions.pop());
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
                } else {
                    this.setState({challenge_recordCnt:0});
                }

                if(challenge_grade == null) {
                    this.setState({challenge_grade:"Halley's Comet"});
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
            <Container>
                <Header style={gradeFormStyle.headerLayout}>
                    {/*<TouchableOpacity onPress={Actions.pop} style={{flex:.2, alignItems: 'flex-start'}}>*/}
                        {/*<View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>*/}
                            {/*<Text style={{fontSize:12,color:'#fff'}}> BACK </Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<View style={{flex:.6, justifyContent: 'center', alignItems: 'center'}}>*/}
                        {/*<Text style={{fontSize:16,color:'#fff'}}>등급 보기</Text>*/}
                    {/*</View>*/}
                    {/*<View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>*/}
                    {/*</View>*/}
                    <Left style={{flex:1, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Button style={commonStyle.backBtn} onPress={Actions.pop} >
                            <Title style={{fontSize:14,color:'#fff'}}> BACK </Title>
                        </Button>
                    </Left>

                    <Body style={{flex:1,  justifyContent: 'center', alignItems: 'center' }}>
                     <Title style={{fontSize:16,color:'#fff'}}>등급 보기</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>

                <Content>
                    <View style={commonStyle.headerTitleLayout}>
                        <View style={commonStyle.headerTitleLeft}>
                            <TouchableOpacity onPress={Actions.Grade}>
                                <Text style={commonStyle.headerTitleTxt}> {this.state.challenge_grade}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={commonStyle.headerTitleRight}>
                            <TouchableOpacity onPress={Actions.Readerboard}>
                                <Text style={commonStyle.headerTitleTxt}> 최고기록 : {this.state.challenge_recordCnt}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={gradeFormStyle.contentsLayout}>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.5, alignItems:'flex-start'}}>
                                <Text style={gradeFormStyle.title}> 등급 </Text>
                            </View>
                            <View style={{flex:.5, alignItems:'center'}}>
                                <Text style={gradeFormStyle.title}> 소수점 자리 </Text>
                            </View>
                        </View>
                        <View style={gradeFormStyle.lingBg}></View>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.5, alignItems:'flex-start'}}>
                                <Text style={gradeFormStyle.title}> Halley’s Comet </Text>
                            </View>
                            <View style={{flex:.5, alignItems:'center'}}>
                                <Text style={gradeFormStyle.title}> 0 ~ 49 </Text>
                            </View>
                        </View>
                        <View style={gradeFormStyle.lingBg}></View>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.5, alignItems:'flex-start'}}>
                                <Text style={gradeFormStyle.title}> Moon </Text>
                            </View>
                            <View style={{flex:.5, alignItems:'center'}}>
                                <Text style={gradeFormStyle.title}> 50 ~ 99 </Text>
                            </View>
                        </View>
                        <View style={gradeFormStyle.lingBg}></View>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.5, alignItems:'flex-start'}}>
                                <Text style={gradeFormStyle.title}> Mercury </Text>
                            </View>
                            <View style={{flex:.5, alignItems:'center'}}>
                                <Text style={gradeFormStyle.title}> 100 ~ 299 </Text>
                            </View>
                        </View>
                        <View style={gradeFormStyle.lingBg}></View>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.5, alignItems:'flex-start'}}>
                                <Text style={gradeFormStyle.title}> Mars </Text>
                            </View>
                            <View style={{flex:.5, alignItems:'center'}}>
                                <Text style={gradeFormStyle.title}> 300 ~ 499 </Text>
                            </View>
                        </View>
                        <View style={gradeFormStyle.lingBg}></View>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.5, alignItems:'flex-start'}}>
                                <Text style={gradeFormStyle.title}> Venus </Text>
                            </View>
                            <View style={{flex:.5, alignItems:'center'}}>
                                <Text style={gradeFormStyle.title}> 500 ~ 999 </Text>
                            </View>
                        </View>
                        <View style={gradeFormStyle.lingBg}></View>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.5, alignItems:'flex-start'}}>
                                <Text style={gradeFormStyle.title}> Earth </Text>
                            </View>
                            <View style={{flex:.5, alignItems:'center'}}>
                                <Text style={gradeFormStyle.title}> 1000 ~ 1999 </Text>
                            </View>
                        </View>

                        <View style={gradeFormStyle.lingBg}></View>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.5, alignItems:'flex-start'}}>
                                <Text style={gradeFormStyle.title}> Neptune </Text>
                            </View>
                            <View style={{flex:.5, alignItems:'center'}}>
                                <Text style={gradeFormStyle.title}> 2000 ~ 2999 </Text>
                            </View>
                        </View>
                        <View style={gradeFormStyle.lingBg}></View>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.5, alignItems:'flex-start'}}>
                                <Text style={gradeFormStyle.title}> Uranus </Text>
                            </View>
                            <View style={{flex:.5, alignItems:'center'}}>
                                <Text style={gradeFormStyle.title}> 3000 ~ 4999 </Text>
                            </View>
                        </View>
                        <View style={gradeFormStyle.lingBg}></View>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.5, alignItems:'flex-start'}}>
                                <Text style={gradeFormStyle.title}> Saturn </Text>
                            </View>
                            <View style={{flex:.5, alignItems:'center'}}>
                                <Text style={gradeFormStyle.title}> 5000 ~ 6999 </Text>
                            </View>
                        </View>
                        <View style={gradeFormStyle.lingBg}></View>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.5, alignItems:'flex-start'}}>
                                <Text style={gradeFormStyle.title}> Jupiter </Text>
                            </View>
                            <View style={{flex:.5, alignItems:'center'}}>
                                <Text style={gradeFormStyle.title}> 7000 ~ 9999 </Text>
                            </View>
                        </View>
                        <View style={gradeFormStyle.lingBg}></View>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.5, alignItems:'flex-start'}}>
                                <Text style={gradeFormStyle.title}> Sun </Text>
                            </View>
                            <View style={{flex:.5, alignItems:'center'}}>
                                <Text style={gradeFormStyle.title}> 10000 ~  </Text>
                            </View>
                        </View>
                    </View>

                </Content>
            </Container>
        );
    }
}



