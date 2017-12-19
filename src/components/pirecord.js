/**
 * Created by jccho on 2017. 12. 14..
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity,AlertIOS,Alert,Platform,ScrollView } from 'react-native';
import { Container, Header, Body, Content, Footer,Item, Icon, Input,Button,Spinner } from 'native-base';
import HTML from 'react-native-render-html';

import {pivalueFormStyle} from '../style/pivalue';

import pi from '../config/pi_config'
import renderIf from 'render-if'




export default class pirecord extends Component {

    constructor(){
        super();

    }



    render() {
        return (
            <Container>
                <Header style={pivalueFormStyle.headerLayout}>
                    <TouchableOpacity onPress={Actions.pop} style={{flex:.2, alignItems: 'flex-start'}}>
                        <View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:12,color:'#fff'}}> back </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:.6, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize:16,color:'#fff'}}>파이값 보기</Text>
                    </View>
                    <View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>
                    </View>
                </Header>

                <Content style={{padding:10}}>



                </Content>
            </Container>
        );


    }
}



