/**
 * Created by jccho on 2017. 12. 14..
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    View, Text, Image, StyleSheet, TouchableOpacity, AlertIOS, Alert, Platform, ScrollView, ListView, AsyncStorage,
    BackAndroid
} from 'react-native';
import { Container, Header, Body, Content, Footer,Item, Icon, Input,Button,Spinner,Left,Right,Title } from 'native-base';
import TimeFormatter from 'minutes-seconds-milliseconds';

import HTML from 'react-native-render-html';

import {pivalueFormStyle} from '../style/pivalue';


import config from '../config/config';
import pi from '../config/pi_config'
import renderIf from 'render-if'
import {readerboardFormStyle} from "../style/readerboard";
import {commonStyle} from "../style/common";




export default class readerboard extends Component {

    constructor(){
        super();
        this.state = {
            loaded: false
            ,challenge_recordCnt:0
            ,challenge_grade:"Halley's Comet"
            ,dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };



    }

    componentWillMount()
    {
        this.loadData();
        BackAndroid.addEventListener('hardwareBackPress', () => Actions.pop({ refresh: {refresh:true} }));
    }

    componentDidMount()
    {
    }

    componentWillUnmount()
    {
    }


    loadData()
    {
        console.log("리더보드 데이터");
        var object = {};
        fetch(config.SERVER_URL+"/leaderboard/topmember", object)
            .then((response) => response.json())
            .then((responseData) =>
            {
                this.setState({dataSource:this.state.dataSource.cloneWithRows(responseData)});
                AsyncStorage.getItem(config.STORE_KEY).then((value) => {
                    var json = eval("("+value+")");
                    if(json!=null) {

                        // var challenge_recordCnt = json.challenge_recordCnt;
                        // var challenge_grade = json.challenge_grade;
                        var username = json.USERNAME;
                        var country = json.COUNTRY;
                        var countryImg = json.COUNTRYIMG;
                        var age = json.AGE;
                        var gender = json.GENDER;
                        var uid = json.UID;

                        var keyboardUse = json.KEYBOARD;
                        var challenge_recordCnt = json.challenge_recordCnt;
                        var challenge_grade = json.challenge_grade;



                        if(challenge_recordCnt != null) {
                            this.setState({challenge_recordCnt:challenge_recordCnt});

                            for(var i = 0; i < pi.pi_grade_value.length; i++) {
                                var temp = pi.pi_grade_value[i].split("~");
                                if(parseInt(temp[0]) <= challenge_recordCnt && parseInt(temp[1]) >= challenge_recordCnt) {
                                    var per = Math.round((challenge_recordCnt / parseInt(temp[1])) * 100);

                                    this.setState({challenge_grade:pi.pi_grade[i],challenge_recordCnt:challenge_recordCnt, challenge_per: per});

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
            })
            .catch((err) => {
                console.log(err);
            });




    }

    readerBoard(obj)
    {
        return (
            <View style={{backgroundColor:"#fff"}}>


                <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                    <View style={{flex:.1, alignItems:'center'}}>
                        <Text style={readerboardFormStyle.title}> {obj.SEQ} </Text>
                    </View>
                    <View style={{flex:.3, alignItems:'center'}}>
                        <Text style={readerboardFormStyle.title}> {obj.USERNAME} </Text>
                    </View>
                    <View style={{flex:.2, alignItems:'center'}}>
                        <Text style={readerboardFormStyle.title}> {obj.COUNTRY} </Text>
                    </View>
                    <View style={{flex:.2, alignItems:'center'}}>
                        <Text style={readerboardFormStyle.title}> {obj.CNT} pt </Text>
                    </View>
                    <View style={{flex:.2, alignItems:'center'}}>
                        {/*<Text style={readerboardFormStyle.title}> {TimeFormatter(obj.TIMER)} </Text>*/}
                        <Text style={readerboardFormStyle.title}> {obj.TIMER} sec </Text>
                    </View>
                </View>
                <View style={readerboardFormStyle.lingBg}></View>
            </View>
        );
    }

    render() {
        return (
            <Container>
                <Header style={readerboardFormStyle.headerLayout}>
                    <Left style={{flex:1, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Button style={commonStyle.backBtn} onPress={Actions.pop} >
                            <Title style={{fontSize:14,color:'#fff'}}> BACK </Title>
                        </Button>
                    </Left>

                    <Body style={{flex:1,  justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{fontSize:16,color:'#fff'}}>랭 킹</Title>
                    </Body>
                    <Right style={{flex:1,  justifyContent: 'center', alignItems: 'center' }}></Right>
                </Header>

                <Content style={{padding:10,backgroundColor:"#fff"}}>
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
                    <View style={readerboardFormStyle.headercontetLayout}>
                        <Text>Ranking</Text>
                    </View>
                    <View style={{backgroundColor:"#fff"}}>
                        <View style={readerboardFormStyle.lingBg}></View>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:10, paddingBottom:5}}>
                            <View style={{flex:.1, alignItems:'center'}}>
                                <Text style={readerboardFormStyle.title}> TOP </Text>
                            </View>
                            <View style={{flex:.3, alignItems:'center'}}>
                                <Text style={readerboardFormStyle.title}> USERNAME </Text>
                            </View>
                            <View style={{flex:.2, alignItems:'center'}}>
                                <Text style={readerboardFormStyle.title}> COUNTRY </Text>
                            </View>
                            <View style={{flex:.2, alignItems:'center'}}>
                                <Text style={readerboardFormStyle.title}> RECORD </Text>
                            </View>
                            <View style={{flex:.2, alignItems:'center'}}>
                                <Text style={readerboardFormStyle.title}> TIMER </Text>
                            </View>
                        </View>
                    </View>
                    <View style={readerboardFormStyle.lingBg}></View>
                    <ListView style={{backgroundColor:"#fff"}}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this.readerBoard(rowData) }
                    />
                </Content>
            </Container>
        );

    }
}



