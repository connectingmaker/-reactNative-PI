/**
 * Created by jccho on 2017. 12. 14..
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity,AlertIOS,Alert,Platform,ScrollView } from 'react-native';
import { Container, Header, Body, Content, Footer,Item, Icon, Input,Button,Spinner,Left,Right } from 'native-base';
import HTML from 'react-native-render-html';

import {commonStyle} from '../style/common';

import pi from '../config/pi_config'
import renderIf from 'render-if'
import {MainFormStyle} from "../style/main";
import {pivalueFormStyle} from "../style/pivalue";




export default class pirecord extends Component {

    constructor(){
        super();

    }



    render() {
        return (
            <Container>
                <Header style={commonStyle.headerLayout}>
                    <TouchableOpacity onPress={Actions.pop} style={{flex:.2, alignItems: 'flex-start'}}>
                        <View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:12,color:'#fff'}}> BACK </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:.6, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize:16,color:'#fff'}}>연습</Text>
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

                    <View style={{padding:10}}>
                        <View>
                            <Text style={pivalueFormStyle.title}>π= 3.</Text>
                        </View>

                        <ScrollView style={pivalueFormStyle.contentsLayout}>

                            <HTML html="123123" />


                        </ScrollView>
                    </View>





                </Content>
            </Container>
        );


    }
}



