/**
 * Created by jccho on 2017. 12. 14..
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity,AlertIOS,Alert,Platform,ScrollView,AsyncStorage } from 'react-native';
import { Container, Header, Body, Content, Footer,Item, Icon, Input,Button,Spinner } from 'native-base';
import HTML from 'react-native-render-html';


import {commonStyle} from "../style/common";
import {keyboardStyle} from "../style/keyboard";

import pi from '../config/pi_config'
import config from '../config/config'
import renderIf from 'render-if'




export default class keyboard extends Component {

    constructor(){
        super();
        this.state = {
            keyboard:""
        };

    }

    componentWillMount()
    {
        this.loadData();
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

    _pcClick()
    {
        this.setState({keyboard:"pc"})
    }

    _mobileClick()
    {
        this.setState({keyboard:"mobile"})
    }

    _save()
    {
        var dataObject = {
            "KEYBOARD": this.state.keyboard
        };

        AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(dataObject), () => {
            alert("저장되었습니다.");
        });
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
                                {renderIf(this.state.keyboard == "pc")(
                                <Button style={keyboardStyle.useBtnOn} onPress={() => this._pcClick()}>
                                    <View style={{flex:0.1}}>
                                        <Image source={require('../../assets/img/icon/btn_icon_on.png')} resizeMode={'contain'} style={{width: 15, height: 15}}></Image>
                                    </View>
                                    <View style={{flex:0.9, paddingLeft:10}}>
                                        <Text style={keyboardStyle.useBtnTextOn}>컴퓨터 키패드 설정</Text>
                                    </View>
                                </Button>
                                )}

                                {renderIf(this.state.keyboard == "mobile")(
                                    <Button style={keyboardStyle.useBtn} onPress={() => this._pcClick()}>
                                        <View style={{flex:0.1}}>
                                            <Image source={require('../../assets/img/icon/btn_icon_off.png')} resizeMode={'contain'} style={{width: 15, height: 15}}></Image>
                                        </View>
                                        <View style={{flex:0.9, paddingLeft:10}}>
                                            <Text style={keyboardStyle.useBtnText}>컴퓨터 키패드 설정</Text>
                                        </View>
                                    </Button>
                                )}

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


                        <View style={{flex:0.04}}>
                        </View>

                        <View style={keyboardStyle.keyboardLayout}>
                            <View style={keyboardStyle.keyboardLayoutFlex}>
                                {renderIf(this.state.keyboard == "mobile")(
                                    <Button style={keyboardStyle.useBtnOn} onPress={() => this._mobileClick()}>
                                        <View style={{flex:0.1}}>
                                            <Image source={require('../../assets/img/icon/btn_icon_on.png')} resizeMode={'contain'} style={{width: 15, height: 15}}></Image>
                                        </View>
                                        <View style={{flex:0.9, paddingLeft:10}}>
                                            <Text style={keyboardStyle.useBtnTextOn}>모바일 키패드 설정</Text>
                                        </View>
                                    </Button>
                                )}

                                {renderIf(this.state.keyboard == "pc")(
                                    <Button style={keyboardStyle.useBtn} onPress={() => this._mobileClick()}>
                                        <View style={{flex:0.1}}>
                                            <Image source={require('../../assets/img/icon/btn_icon_off.png')} resizeMode={'contain'} style={{width: 15, height: 15}}></Image>
                                        </View>
                                        <View style={{flex:0.9, paddingLeft:10}}>
                                            <Text style={keyboardStyle.useBtnText}>모바일 키패드 설정</Text>
                                        </View>
                                    </Button>
                                )}

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

                <TouchableOpacity onPress={() => this._save()}>
                <Footer style={commonStyle.footerLayout}>
                    <View>
                        <Text style={commonStyle.footerColor}>SAVE</Text>
                    </View>
                </Footer>
                </TouchableOpacity>
            </Container>
        );


    }
}



