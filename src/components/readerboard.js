/**
 * Created by jccho on 2017. 12. 14..
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity,AlertIOS,Alert,Platform,ScrollView,ListView,AsyncStorage} from 'react-native';
import { Container, Header, Body, Content, Footer,Item, Icon, Input,Button,Spinner,Left,Right } from 'native-base';
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
            ,uid : ""
            ,challenge_recordCnt:0
            ,challenge_per:0
            ,challenge_grade:"Halley's Comet"
            ,dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };



    }

    componentWillMount()
    {
        this.loadData();
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
                console.log("리더보드 데이");
                console.log(responseData);
                this.setState({dataSource:this.state.dataSource.cloneWithRows(responseData)});
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
            })
            .catch((err) => {
                console.log(err);
            });




    }

    readerBoard(obj)
    {
        return (
            <View>


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
                        <Text style={readerboardFormStyle.title}> {TimeFormatter(obj.TIMER)} </Text>
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
                    <TouchableOpacity onPress={Actions.pop} style={{flex:.2, alignItems: 'flex-start'}}>
                        <View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:12,color:'#fff'}}> BACK </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:.6, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize:16,color:'#fff'}}>리더 보드</Text>
                    </View>
                    <View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>
                    </View>
                </Header>

                <Content style={{padding:10}}>
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
                    <View>
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
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => this.readerBoard(rowData) }
                    />
                </Content>
            </Container>
        );

    }
}



