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
            ,recordCnt:0
            ,grade:"Halley's Comet"
            ,key1:"default"
            ,key2:"default"
            ,key3:"default"
            ,key4:"default"
            ,key5:"default"
            ,key6:"default"
            ,key7:"default"
            ,key8:"default"
            ,key9:"default"
            ,key0:"default"
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

        /*
        if(piRealDataLength != 0) {
            piRealDataLength = piRealDataLength - 1;
        }
        */
        var piRealDataLength = piRealData.length;
        if(piData == "") {
            piData = "<span style='color:#fff;border:1px solid #fff;'>"+value+"</span><span></span>";
            piRealData = value.toString();
        } else {

            if(piRealDataLength > 5) {
                piRealDataLength = piRealData.length;
                var tempLength = piRealDataLength - 1;
                if (tempLength % 10 == 0) {
                    if(tempLength % 100 == 0) {
                        if(tempLength % 1000 == 0) {
                            if(tempLength % 1000 == 0) {
                                piData += "<b style='color:#f0ff00;'>"+value+"</b>";
                            }
                            piData += "<b style='color:#0066ff;'>"+value+"</b>";
                        } else {
                            piData += "<b style='color:#ff0000;'>" + value + "</b>";
                        }

                    } else {
                        piData += "<b style='color:#f0ff00;'>"+value+"</b>";
                    }

                } else {
                    piData += "<span style='color:#fff;'>"+value+"</span>";
                }
            } else {
                piData += "<span style='color:#fff;'>"+value+"</span>";
            }
            piRealData += value.toString();
        }






        if(pi.pi_config[piRealDataLength] != value) {
            switch (value) {
                case 1:
                    this.setState({key1: "N", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"})
                    break;
                case 2:
                    this.setState({key1: "default", key2: "N", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"})
                    break;
                case 3:
                    this.setState({key1: "default", key2: "default", key3: "N", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"})
                    break;
                case 4:
                    this.setState({key1: "default", key2: "default", key3: "default", key4: "N", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"})
                    break;
                case 5:
                    this.setState({key1: "default", key2: "default", key3: "default", key4: "default", key5: "N", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"})
                    break;
                case 6:
                    this.setState({key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "N", key7: "default", key8: "default", key9: "default", key0: "default"})
                    break;
                case 7:
                    this.setState({key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "N", key8: "default", key9: "default", key0: "default"})
                    break;
                case 8:
                    this.setState({key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "N", key9: "default", key0: "default"})
                    break;
                case 9:
                    this.setState({key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "N", key0: "default"})
                    break;
                case 0:
                    this.setState({key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "N"})
                    break;
            }
            return;
        }

        if(pi.pi_config[piRealDataLength] == value) {

            if(this.state.recordCnt <= piRealDataLength) {
                /*
                pi.pi_grade_value.map((item) => {
                    var temp = item.split("~");
                    console.log(temp);
                    console.log(piRealDataLength);
                    if(parseInt(temp[0]) >= piRealDataLength && parseInt(temp[1] <= piRealDataLength)) {
                        console.log("111");
                        return;
                    }
                });
                */
                for(var i = 0; i < pi.pi_grade_value.length; i++) {
                    var temp = pi.pi_grade_value[i].split("~");
                    if(parseInt(temp[0]) <= piRealDataLength && parseInt(temp[1]) >= piRealDataLength) {

                        var dataObject = {
                            "grade": pi.pi_grade[i]
                            ,"recordCnt": piRealDataLength+1
                        };

                        AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(dataObject), () => {
                            this.setState({grade:pi.pi_grade[i],recordCnt:piRealDataLength+1});
                        });



                        break;
                    }
                }


            }


            switch (value) {
                case 1:
                    this.setState({key1: "Y", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"})
                    break;
                case 2:
                    this.setState({key1: "default", key2: "Y", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"})
                    break;
                case 3:
                    this.setState({key1: "default", key2: "default", key3: "Y", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"})
                    break;
                case 4:
                    this.setState({key1: "default", key2: "default", key3: "default", key4: "Y", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"})
                    break;
                case 5:
                    this.setState({key1: "default", key2: "default", key3: "default", key4: "default", key5: "Y", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"})
                    break;
                case 6:
                    this.setState({key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "Y", key7: "default", key8: "default", key9: "default", key0: "default"})
                    break;
                case 7:
                    this.setState({key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "Y", key8: "default", key9: "default", key0: "default"})
                    break;
                case 8:
                    this.setState({key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "Y", key9: "default", key0: "default"})
                    break;
                case 9:
                    this.setState({key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "Y", key0: "default"})
                    break;
                case 0:
                    this.setState({key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "Y"})
                    break;
            }
        }




        this.setState({piData:piData, piRealData:piRealData});
    }

    _defaultBtn()
    {
        var dataObject = {
            "grade": pi.pi_grade[0]
            ,"recordCnt": 0
        };
        AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(dataObject), () => {
            this.setState({piData:"", piRealData: "", grade:pi.pi_grade[0],recordCnt:0, key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"});

        });
    }

    loadData()
    {
        AsyncStorage.getItem(config.STORE_KEY).then((value) => {
            var json = eval("("+value+")");
            console.log(json);
            if(json!=null) {

                var keyboardUse = json.KEYBOARD;
                var recordCnt = json.recordCnt;
                var grade = json.grade;


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

                if(recordCnt != null) {
                    this.setState({recordCnt:recordCnt});
                }

            } else {
                this.setState({keyboard: "pc"})
            }

            if(grade != null) {
                this.setState({grade:grade});
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
                    <TouchableOpacity onPress={() => this._defaultBtn()} style={{flex:.2, alignItems: 'flex-end'}}>
                        <View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:12,color:'#fff'}}> 초기화 </Text>
                        </View>
                    </TouchableOpacity>
                </Header>

                <Content>
                    <View style={commonStyle.headerTitleLayout}>
                        <View style={commonStyle.headerTitleLeft}>
                            <Text style={commonStyle.headerTitleTxt}> {this.state.grade}</Text>
                        </View>
                        <View style={commonStyle.headerTitleRight}>
                            <Text style={commonStyle.headerTitleTxt}> 최고기록 : {this.state.recordCnt} </Text>
                        </View>
                    </View>

                    <View style={{padding:10}}>
                        <View>
                            <Text style={pirecodeStyle.title}>π= 3.</Text>
                        </View>
                        <View style={{flexDirection:'column', flex:1}}>
                            <View style={{flex:0.5}}>
                                <ScrollView style={pirecodeStyle.contentsLayout}>
                                    <HTML html={this.state.piData} uri="" />
                                </ScrollView>
                            </View>

                            <View style={{flex:0.5}}>


                                {/*PC*/}
                                {renderIf(this.state.keyboard == "pc")(
                                    <View>
                                        <View style={keyboardStyle.keyboardView}>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key1 == "default")(
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(1)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>1</Text>
                                                    </Button>
                                                    )}

                                                    {renderIf(this.state.key1 == "N")(
                                                        <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(1)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>1</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key1 == "Y")(
                                                        <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(1)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>1</Text>
                                                        </Button>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key2 == "default")(
                                                        <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(2)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>2</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key2 == "N")(
                                                        <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(2)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>2</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key2 == "Y")(
                                                        <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(2)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>2</Text>
                                                        </Button>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key3 == "default")(
                                                        <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(3)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key3 == "N")(
                                                        <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(3)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key3 == "Y")(
                                                        <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(3)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                        </Button>
                                                    )}
                                                </View>
                                            </View>

                                        </View>
                                        <View style={keyboardStyle.keyboardView}>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>

                                                    {renderIf(this.state.key4 == "default")(
                                                        <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(4)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>4</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key4 == "N")(
                                                        <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(4)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>4</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key4 == "Y")(
                                                        <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(4)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>4</Text>
                                                        </Button>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key5 == "default")(
                                                        <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(5)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>5</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key5 == "N")(
                                                        <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(5)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>5</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key5 == "Y")(
                                                        <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(5)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>5</Text>
                                                        </Button>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key6 == "default")(
                                                        <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(6)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>6</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key6 == "N")(
                                                        <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(6)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>6</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key6 == "Y")(
                                                        <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(6)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>6</Text>
                                                        </Button>
                                                    )}
                                                </View>
                                            </View>

                                        </View>
                                        <View style={keyboardStyle.keyboardView}>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>

                                                    {renderIf(this.state.key7 == "default")(
                                                        <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(7)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>7</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key7 == "N")(
                                                        <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(7)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>7</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key7 == "Y")(
                                                        <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(7)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>7</Text>
                                                        </Button>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key8 == "default")(
                                                        <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(8)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>8</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key8 == "N")(
                                                        <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(8)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>8</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key8 == "Y")(
                                                        <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(8)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>8</Text>
                                                        </Button>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key9 == "default")(
                                                        <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(9)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>9</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key9 == "N")(
                                                        <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(9)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>9</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key9 == "Y")(
                                                        <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(9)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>9</Text>
                                                        </Button>
                                                    )}
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
                                                    {renderIf(this.state.key0 == "default")(
                                                        <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(0)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>0</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key0 == "N")(
                                                        <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(0)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>0</Text>
                                                        </Button>
                                                    )}

                                                    {renderIf(this.state.key0 == "Y")(
                                                        <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(0)}>
                                                            <Text style={keyboardStyle.keyboardButtonTxt}>0</Text>
                                                        </Button>
                                                    )}
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

                                                {renderIf(this.state.key7 == "default")(
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(7)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>7</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key7 == "N")(
                                                    <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(7)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>7</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key7 == "Y")(
                                                    <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(7)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>7</Text>
                                                    </Button>
                                                )}



                                            </View>
                                        </View>
                                        <View style={{flex:0.02}}>
                                        </View>
                                        <View style={{ flex:0.32}}>
                                            <View style={keyboardStyle.keyboardButtonLayout}>
                                                {renderIf(this.state.key8 == "default")(
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(8)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>8</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key8 == "N")(
                                                    <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(8)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>8</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key8 == "Y")(
                                                    <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(8)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>8</Text>
                                                    </Button>
                                                )}
                                            </View>
                                        </View>
                                        <View style={{flex:0.02}}>
                                        </View>
                                        <View style={{ flex:0.32}}>
                                            <View style={keyboardStyle.keyboardButtonLayout}>
                                                {renderIf(this.state.key9 == "default")(
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(9)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>9</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key9 == "N")(
                                                    <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(9)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>9</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key9 == "Y")(
                                                    <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(9)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>9</Text>
                                                    </Button>
                                                )}
                                            </View>
                                        </View>

                                    </View>
                                    <View style={keyboardStyle.keyboardView}>
                                        <View style={{ flex:0.32}}>
                                            <View style={keyboardStyle.keyboardButtonLayout}>

                                                {renderIf(this.state.key4 == "default")(
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(4)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>4</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key4 == "N")(
                                                    <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(4)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>4</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key4 == "Y")(
                                                    <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(4)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>4</Text>
                                                    </Button>
                                                )}
                                            </View>
                                        </View>
                                        <View style={{flex:0.02}}>
                                        </View>
                                        <View style={{ flex:0.32}}>
                                            <View style={keyboardStyle.keyboardButtonLayout}>
                                                {renderIf(this.state.key5 == "default")(
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(5)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>5</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key5 == "N")(
                                                    <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(5)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>5</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key5 == "Y")(
                                                    <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(5)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>5</Text>
                                                    </Button>
                                                )}
                                            </View>
                                        </View>
                                        <View style={{flex:0.02}}>
                                        </View>
                                        <View style={{ flex:0.32}}>
                                            <View style={keyboardStyle.keyboardButtonLayout}>
                                                {renderIf(this.state.key6 == "default")(
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(6)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>6</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key6 == "N")(
                                                    <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(6)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>6</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key6 == "Y")(
                                                    <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(6)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>6</Text>
                                                    </Button>
                                                )}
                                            </View>
                                        </View>

                                    </View>
                                    <View style={keyboardStyle.keyboardView}>
                                        <View style={{ flex:0.32}}>
                                            <View style={keyboardStyle.keyboardButtonLayout}>

                                                {renderIf(this.state.key3 == "default")(
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(3)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key3 == "N")(
                                                    <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(3)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key3 == "Y")(
                                                    <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(3)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                    </Button>
                                                )}
                                            </View>
                                        </View>
                                        <View style={{flex:0.02}}>
                                        </View>
                                        <View style={{ flex:0.32}}>
                                            <View style={keyboardStyle.keyboardButtonLayout}>
                                                {renderIf(this.state.key2 == "default")(
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(2)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key2 == "N")(
                                                    <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(2)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key2 == "Y")(
                                                    <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(2)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                    </Button>
                                                )}
                                            </View>
                                        </View>
                                        <View style={{flex:0.02}}>
                                        </View>
                                        <View style={{ flex:0.32}}>
                                            <View style={keyboardStyle.keyboardButtonLayout}>
                                                {renderIf(this.state.key1 == "default")(
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(1)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>1</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key1 == "N")(
                                                    <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(1)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>1</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key1 == "Y")(
                                                    <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(1)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>1</Text>
                                                    </Button>
                                                )}
                                            </View>
                                        </View>

                                    </View>

                                    <View style={keyboardStyle.keyboardView}>
                                        <View style={{ flex:0.66}}>

                                            <View style={keyboardStyle.keyboardButtonLayout}>
                                                {renderIf(this.state.key1 == "default")(
                                                    <Button style={keyboardStyle.keyboardButton} onPress={() => this._keyboardPress(0)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>0</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key1 == "N")(
                                                    <Button style={keyboardStyle.keyboardButtonNot} onPress={() => this._keyboardPress(0)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>0</Text>
                                                    </Button>
                                                )}

                                                {renderIf(this.state.key1 == "Y")(
                                                    <Button style={keyboardStyle.keyboardButtonOk} onPress={() => this._keyboardPress(0)}>
                                                        <Text style={keyboardStyle.keyboardButtonTxt}>0</Text>
                                                    </Button>
                                                )}
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



