/**
 * Created by jccho on 2017. 12. 14..
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity,AlertIOS,Alert,Platform,ScrollView } from 'react-native';
import { Container, Header, Body, Content, Footer,Item, Icon, Input,Button,Spinner } from 'native-base';
import HTML from 'react-native-render-html';


import {commonStyle} from "../style/common";
import {keyboardStyle} from "../style/keyboard";

import pi from '../config/pi_config'
import renderIf from 'render-if'




export default class keyboard extends Component {

    constructor(){
        super();

    }



    render() {
        return (
            <Container>
                <Header style={commonStyle.headerLayout}>
                    <TouchableOpacity onPress={Actions.pop} style={{flex:.2, alignItems: 'flex-start'}}>
                        <View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:12,color:'#fff'}}> back </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:.6, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize:16,color:'#fff'}}>키보드 설정</Text>
                    </View>
                    <View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>
                    </View>
                </Header>

                <Content>
                    <View style={keyboardStyle.bodyContents}>
                        <View style={keyboardStyle.keyboardLayout}>
                            <View style={keyboardStyle.keyboardLayoutFlex}>
                                <Button style={keyboardStyle.useBtn}>

                                    <Text>컴퓨터 키패드 설정</Text>
                                </Button>

                            </View>

                            <View style={keyboardStyle.keyboardView}>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>

                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>1</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{flex:0.02}}>
                                </View>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>
                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>2</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{flex:0.02}}>
                                </View>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>
                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                        </Button>
                                    </View>
                                </View>

                            </View>
                            <View style={keyboardStyle.keyboardView}>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>

                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>4</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{flex:0.02}}>
                                </View>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>
                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>5</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{flex:0.02}}>
                                </View>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>
                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>6</Text>
                                        </Button>
                                    </View>
                                </View>

                            </View>
                            <View style={keyboardStyle.keyboardView}>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>

                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>7</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{flex:0.02}}>
                                </View>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>
                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>8</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{flex:0.02}}>
                                </View>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>
                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>9</Text>
                                        </Button>
                                    </View>
                                </View>

                            </View>

                            <View style={keyboardStyle.keyboardView}>
                                <View style={{ flex:0.32}}>

                                </View>
                                <View style={{flex:0.02}}>
                                </View>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>
                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>0</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{flex:0.02}}>
                                </View>
                                <View style={{ flex:0.32}}>
                                </View>

                            </View>
                        </View>




                        <View style={keyboardStyle.keyboardLayout}>
                            <View style={keyboardStyle.keyboardLayoutFlex}>
                                <Button style={keyboardStyle.useBtn}>

                                    <Text>핸드폰 키패드 설정</Text>
                                </Button>

                            </View>

                            <View style={keyboardStyle.keyboardView}>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>

                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>7</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{flex:0.02}}>
                                </View>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>
                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>8</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{flex:0.02}}>
                                </View>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>
                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>9</Text>
                                        </Button>
                                    </View>
                                </View>

                            </View>
                            <View style={keyboardStyle.keyboardView}>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>

                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>4</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{flex:0.02}}>
                                </View>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>
                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>5</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{flex:0.02}}>
                                </View>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>
                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>6</Text>
                                        </Button>
                                    </View>
                                </View>

                            </View>
                            <View style={keyboardStyle.keyboardView}>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>

                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{flex:0.02}}>
                                </View>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>
                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>2</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{flex:0.02}}>
                                </View>
                                <View style={{ flex:0.32}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>
                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>1</Text>
                                        </Button>
                                    </View>
                                </View>

                            </View>

                            <View style={keyboardStyle.keyboardView}>
                                <View style={{ flex:0.66}}>
                                    <View style={keyboardStyle.keyboardButtonLayout}>
                                        <Button style={keyboardStyle.keyboardButton}>
                                            <Text style={keyboardStyle.keyboardButtonTxt}>0</Text>
                                        </Button>
                                    </View>
                                </View>
                                <View style={{flex:0.02}}>
                                </View>
                                <View style={{ flex:0.32}}>
                                </View>

                            </View>
                        </View>
                    </View>




                </Content>

                <Footer>
                    <View>

                    </View>
                </Footer>
            </Container>
        );


    }
}



