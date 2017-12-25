/**
 * Created by jccho on 2017. 12. 13..
 */
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity,AlertIOS,Alert,Platform } from 'react-native';
import { Container, Header, Body, Content, Footer,Item, Icon, Input,Button } from 'native-base';

import {gradeFormStyle} from '../style/grade';
import {commonStyle} from "../style/common";

import renderIf from 'render-if'


export default class grade extends Component {



    render() {
        return (
            <Container>
                <Header style={gradeFormStyle.headerLayout}>
                    <TouchableOpacity onPress={Actions.pop} style={{flex:.2, alignItems: 'flex-start'}}>
                        <View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:12,color:'#fff'}}> BACK </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:.6, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize:16,color:'#fff'}}>등급 보기</Text>
                    </View>
                    <View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>
                    </View>
                </Header>

                <Content>
                    <View style={commonStyle.headerTitleLayout}>
                        <View style={commonStyle.headerTitleLeft}>
                            <Text style={commonStyle.headerTitleTxt}> Halley's Comet</Text>
                        </View>
                        <View style={commonStyle.headerTitleRight}>
                            <Text style={commonStyle.headerTitleTxt}> 최고기록 : 0 </Text>
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



