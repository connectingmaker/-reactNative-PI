/**
 * Created by jccho on 2017. 12. 14..
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    View, Text, Image, StyleSheet, TouchableOpacity, AlertIOS, Alert, Platform, ScrollView,
    AsyncStorage
} from 'react-native';
import { Container, Header, Body, Content, Footer,Item, Icon, Input,Button,Spinner,Left,Right } from 'native-base';
import HTML from 'react-native-render-html';

import config from "../config/config";
import pi from '../config/pi_config'
import renderIf from 'render-if'

import {commonStyle} from '../style/common';
import {MainFormStyle} from "../style/main";
import {pirecodeStyle} from "../style/pirecord";
import {keyboardStyle} from "../style/keyboard";



export default class pirecord extends Component {

    constructor(){
        super();
        this.state = {
            keyboard:""
            ,piData:""
            ,piRealData:""
        };

    }

    componentWillMount()
    {
        this.loadData();
    }


    _keyboardPress(value)
    {
        var piData = this.state.piData;
        var piRealData = this.state.piRealData;
        console.log(piRealData);
        console.log(piRealData.length);
        if(piData == "") {
            piData = "<span style='color:#fff;border:1px solid #fff;'>"+value+"</span>";
            piRealData = value;
        } else {

            piData += "<span style='color:#fff;border:1px solid #fff;'>"+value+"</span>";
            piRealData += value;
        }

        this.setState({piData:piData, piRealData:piRealData});
    }



    loadData()
    {
        AsyncStorage.getItem(config.STORE_KEY).then((value) => {
            var json = eval("("+value+")");

            if(json!=null) {

                var keyboardUse = json.KEYBOARD;

                switch (keyboardUse) {
                    case "pc":
                        this.setState({keyboard: "pc"})
                        break;
                    case "mobile":
                        console.log("OK");
                        this.setState({keyboard: "mobile"})
                        break;
                    default:
                        this.setState({keyboard: "pc"})
                        break;
                }

            } else {
                this.setState({keyboard: "pc"})
            }


        }).then(res => {
        });
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
                            <Text style={pirecodeStyle.title}>π= 3.</Text>
                        </View>
                        <View style={{flexDirection:'column', flex:1}}>
                            <View style={{flex:0.5}}>
                                <ScrollView style={pirecodeStyle.contentsLayout}>
                                    <HTML html={this.state.piData} />
                                </ScrollView>
                            </View>

                            <View style={{flex:0.5}}>


                                {/*PC*/}
                                {renderIf(this.state.keyboard == "pc")(
                                    <View>
                                        <View style={keyboardStyle.keyboardView}>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>

                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(1)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>1</Text>
                                                    </Button>
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(2)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>2</Text>
                                                    </Button>
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(3)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                    </Button>
                                                </View>
                                            </View>

                                        </View>
                                        <View style={keyboardStyle.keyboardView}>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>

                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(4)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>4</Text>
                                                    </Button>
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(5)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>5</Text>
                                                    </Button>
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(6)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>6</Text>
                                                    </Button>
                                                </View>
                                            </View>

                                        </View>
                                        <View style={keyboardStyle.keyboardView}>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>

                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(7)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>7</Text>
                                                    </Button>
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(8)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>8</Text>
                                                    </Button>
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(9)}>
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
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(0)}>
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
                                )}


                                {/*MOBILE*/}
                                {renderIf(this.state.keyboard == "mobile")(
                                <View>
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
                                )}
                            </View>

                        </View>
                    </View>





                </Content>
            </Container>
        );


    }
}



