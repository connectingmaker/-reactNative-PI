/**
 * Created by jccho on 2017. 12. 14..
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity,AlertIOS,Alert,Platform } from 'react-native';
import { Container, Header, Body, Content, Footer,Item, Icon, Input,Button } from 'native-base';

import {pivalueFormStyle} from '../style/pivalue';

import pi from '../config/pi_config'
import renderIf from 'render-if'




export default class pivalue extends Component {



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
                    <View>
                       <Text style={pivalueFormStyle.title}>π= 3.</Text>
                    </View>
                    <View style={pivalueFormStyle.contentsLayout}>
                        <Text style={{color:"#fff"}}>{pi.pi_config}</Text>
                    </View>



                </Content>
            </Container>
        );
    }
}



