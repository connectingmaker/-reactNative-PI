import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity,Easing, BackAndroid, BackHandler, Platform, ToastAndroid, AppState,AsyncStorage,Button,ImageBackground} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Item, Icon, Input, Tab, Tabs, TabHeading,Left,Body,Right,Title} from 'native-base';

import PercentageCircle from 'react-native-percentage-circle';
import { MainFormStyle } from '../style/main.js';
import config from "../config/config";
import pi from "../config/pi_config";

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            challenge_recordCnt:0,
            challenge_per:0,
            challenge_grade:"Halley's Comet",
            username:"",
            country:"",
            countryImg:"",
            age:"",
            gender:"",
            keyboardUse:"",
            payment_start:"",
            payment_end:"",
            timer:""
        };

    }

    componentWillMount()
    {
        this.loadData();
    }

    componentWillReceiveProps(nextProps)
    {
        this.loadData();
    }
    loadData()
    {


        AsyncStorage.getItem(config.STORE_KEY).then((value) => {
            var json = eval("("+value+")");
            //console.log("main");
            console.log(json);
            if(json!=null) {




                var username = json.USERNAME;
                var country = json.COUNTRY;
                var countryImg = json.COUNTRYIMG;
                var age = json.AGE;
                var gender = json.GENDER;
                var uid = json.UID;
                var challenge_recordCnt = json.challenge_recordCnt;
                var challenge_grade = json.challenge_grade;
                var keyboardUse = json.KEYBOARD;
                var payment_start = json.payment_start;
                var payment_end = json.payment_end;
                var timer = json.TIMER;
                var cnt = json.CNT;
                var grade = json.grade;
                var keyboard = "mobile";

                if(json.keyboard != undefined) {
                    keyboard = json.keyboard;
                }


                if(challenge_recordCnt != null) {
                    this.setState({challenge_recordCnt:challenge_recordCnt});

                    for(var i = 0; i < pi.pi_grade_value.length; i++) {
                        var temp = pi.pi_grade_value[i].split("~");
                        if(parseInt(temp[0]) <= challenge_recordCnt && parseInt(temp[1]) >= challenge_recordCnt) {
                            var per = Math.round((challenge_recordCnt / parseInt(temp[1])) * 100);

                            var dataObject = {
                                "UID": uid
                                ,"USERNAME": username
                                ,"COUNTRY": country
                                ,"COUNTRYIMG": countryImg
                                ,"AGE": age
                                ,"GENDER": gender
                                ,"TIMER" : timer
                                ,"CNT": cnt
                                ,"keyboard":keyboardUse
                                ,"grade":grade
                                ,"challenge_grade": pi.pi_grade[i]
                                ,"challenge_recordCnt": challenge_recordCnt
                                ,"payment_start":payment_start
                                ,"payment_end":payment_start
                                ,"keyboard":keyboard
                            };

                            console.log(dataObject);
                            AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(dataObject), () => {
                                this.setState({challenge_grade:pi.pi_grade[i],challenge_recordCnt:challenge_recordCnt, challenge_per: per});
                            });

                            if(uid != null) {
                                this.setState({uid:uid});
                            }

                            if(username != null) {
                                this.setState({username:username});
                            }
                            if(country != null) {
                                this.setState({country:country});
                            }

                            if(countryImg != null) {
                                this.setState({countryImg:countryImg});
                            }


                            if(age != null) {
                                this.setState({age:age});
                            }

                            if(gender != null) {
                                this.setState({gender:gender});
                            }

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
                        {/*<View style={{alignItems: 'center',justifyContent:'center',paddingTop:20}}>*/}
                            {/*<Text style={MainFormStyle.boldFont}>{this.state.challenge_grade}</Text>*/}
                        {/*</View>*/}

                        {/*<View style={{alignItems: 'center',justifyContent:'center',paddingTop:20,paddingBottom:20}}>*/}
                            {/*<PercentageCircle radius={40} percent={this.state.challenge_per} borderWidth={5}>*/}
                            {/*</PercentageCircle>*/}
                            {/*<View style={{alignItems: 'center',justifyContent:'center',paddingTop:20}}>*/}
                                {/*<Text style={MainFormStyle.boldFont}>최고기록 : {this.state.challenge_recordCnt}</Text>*/}
                            {/*</View>*/}
                        {/*</View>*/}
                        <View style={{alignItems: 'center',justifyContent:'center',paddingTop:20}}>
                        <Text style={MainFormStyle.boldFont}>파이킹</Text>
                        </View>
                        <View style={{alignItems: 'center',justifyContent:'center',paddingBottom:20}}>
                            <Image source={require('../../assets/img/main/180x180.png')} resizeMode={'contain'} style={{width:300,height:150}}/>
                        </View>

                    </View>
                    <View style={{paddingTop:10}}>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:0.48}}>
                                {/*<View style={MainFormStyle.contentsButtonLayout}>*/}
                                    {/*<Button onPress={Actions.Idsetting} title="아이디 설정" color="#3e3e3e"></Button>*/}
                                {/*</View>*/}

                                <TouchableOpacity onPress={Actions.Idsetting}>
                                    <View style={MainFormStyle.contentsButtonLayout}>
                                        <Text style={MainFormStyle.contentsButtonText}>아이디 설정</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:0.04}}></View>
                            <View style={{flex:0.48}}>
                                {/*<View style={MainFormStyle.contentsButtonLayout}>*/}
                                    {/*<Button onPress={Actions.Keyboard} title="키패드 설정" color="#3e3e3e"></Button>*/}
                                {/*</View>*/}

                                <TouchableOpacity onPress={Actions.Keyboard}>
                                    <View style={MainFormStyle.contentsButtonLayout}>
                                        <Text style={MainFormStyle.contentsButtonText}>키패드 설정</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:0.48}}>

                                {/*<Button onPress={Actions.Grade} title="등급 보기" color="#3e3e3e"></Button>*/}
                                <TouchableOpacity onPress={Actions.Grade}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Text style={MainFormStyle.contentsButtonText}>등급 보기</Text>
                                </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:0.04}}></View>
                            <View style={{flex:0.48}}>
                                {/*<View style={MainFormStyle.contentsButtonLayout}>*/}
                                    {/*<Button onPress={Actions.Pivalue} title="파이값 보기" color="#3e3e3e"></Button>*/}
                                {/*</View>*/}

                                <TouchableOpacity onPress={Actions.Pivalue}>
                                    <View style={MainFormStyle.contentsButtonLayout}>
                                        <Text style={MainFormStyle.contentsButtonText}>파이 값 보기</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:0.48}}>
                                {/*<View style={MainFormStyle.contentsButtonLayout}>*/}
                                    {/*<Button onPress={Actions.Pirecord} title="연 습" color="#3e3e3e"></Button>*/}
                                {/*</View>*/}

                                <TouchableOpacity onPress={Actions.Pirecord}>
                                    <View style={MainFormStyle.contentsButtonLayout}>
                                        <Text style={MainFormStyle.contentsButtonText}>연 습</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:0.04}}></View>
                            <View style={{flex:0.48}}>
                                {/*<View style={MainFormStyle.contentsButtonLayout}>*/}
                                    {/*<Button onPress={Actions.Pichallenge} title="도 전" color="#3e3e3e"></Button>*/}
                                {/*</View>*/}
                                <TouchableOpacity onPress={Actions.Pichallenge}>
                                    <View style={MainFormStyle.contentsButtonLayout}>
                                        <Text style={MainFormStyle.contentsButtonText}>도 전</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>


                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:0.48}}>
                                {/*<View style={MainFormStyle.contentsButtonLayout}>*/}
                                    {/*<Button onPress={Actions.Pisection} title="구간 연습" color="#3e3e3e"></Button>*/}
                                {/*</View>*/}

                                <TouchableOpacity onPress={Actions.Pisection}>
                                    <View style={MainFormStyle.contentsButtonLayout}>
                                        <Text style={MainFormStyle.contentsButtonText}>구간 연습</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:0.04}}></View>
                            <View style={{flex:0.48}}>
                                {/*<View style={MainFormStyle.contentsButtonLayout}>*/}
                                    {/*<Button onPress={Actions.Readerboard} title="리더 보드" color="#3e3e3e"></Button>*/}
                                {/*</View>*/}

                                <TouchableOpacity onPress={Actions.Readerboard}>
                                    <View style={MainFormStyle.contentsButtonLayout}>
                                        <Text style={MainFormStyle.contentsButtonText}>랭 킹</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                </Content>

            </Container>
        );
    }
}

