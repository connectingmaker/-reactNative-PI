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
import Modal from 'react-native-modal'

import { NativeModules } from 'react-native'


import config from "../config/config";
import pi from '../config/pi_config'
import renderIf from 'render-if'

import {commonStyle} from '../style/common';
import {MainFormStyle} from "../style/main";
import {pirecodeStyle} from "../style/pirecord";
import {keyboardStyle} from "../style/keyboard";

const { InAppUtils } = NativeModules

import InAppBilling from 'react-native-billing';


export default class pisection extends Component {

    constructor(){
        super();
        this.state = {
            keyboard:"pc"
            ,piData:""
            ,piRealData:""
            ,challenge_recordCnt:0
            ,challenge_grade:"Halley's Comet"
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
            ,isModalVisible:false
            ,payment_start:""
            ,payment_end:""
        };

    }

    _paymentCheck()
    {
        /*
        var products = [
            'com.piking.app',
        ];
        console.log("OK");

        InAppUtils.loadProducts(products, (error, products) => {
            console.log(error);
            console.log(products);
        });
        */


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

            if(this.state.challenge_recordCnt <= piRealDataLength) {
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
                            "challenge_grade": pi.pi_grade[i]
                            ,"challenge_recordCnt": piRealDataLength+1
                        };

                        AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(dataObject), () => {
                            this.setState({challenge_grade:pi.pi_grade[i],challenge_recordCnt:piRealDataLength+1});
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
            "challenge_grade": pi.pi_grade[0]
            ,"challenge_recordCnt": 0
        };
        AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(dataObject), () => {
            this.setState({piData:"", piRealData: "", challenge_grade:pi.pi_grade[0],challenge_recordCnt:0, key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"});

        });
    }

    loadData()
    {
        AsyncStorage.getItem(config.STORE_KEY).then((value) => {
            var json = eval("("+value+")");
            if(json!=null) {

                var keyboardUse = json.KEYBOARD;
                var challenge_recordCnt = json.challenge_recordCnt;
                var challenge_grade = json.challenge_grade;


                switch (keyboardUse) {
                    case "pc":
                        this.setState({keyboard: "pc"})
                        break;
                    case "mobile":
                        this.setState({keyboard: "mobile"})
                        break;
                    default:
                        this.setState({keyboard: "pc"})
                        break;
                }

                if(challenge_recordCnt != null) {
                    this.setState({challenge_recordCnt:challenge_recordCnt});
                }

            } else {
                this.setState({keyboard: "pc"})
            }

            if(challenge_grade != null) {
                this.setState({challenge_grade:challenge_grade});
            }

            if(json.payment_start != null) {
                this.setState({payment_start:json.payment_start});
            }

            if(json.payment_end != null) {
                this.setState({payment_end:json.payment_end});
            }


        }).then(res => {
        });
    }

    _sectionPopup() {
        this.setState({
            isModalVisible: true
        })
    }

    _sectionStart()
    {
        this.setState({
            isModalVisible: false
        })
    }

    _sectionClose() {
        this.setState({
            isModalVisible: false
        })
    }

    // To be sure the service is close before opening it
    async _pay() {
        if(Platform.OS == "ios") {
            alert("IOS");
            var productIdentifier = 'com.piking.app';
            InAppUtils.purchaseProduct(productIdentifier, (error, response) => {
                // NOTE for v3.0: User can cancel the payment which will be available as error object here.
                if(response && response.productIdentifier) {
                    Alert.alert('Purchase Successful', 'Your Transaction ID is ' + response.transactionIdentifier);
                    //unlock store here.
                }
            });
        } else {

            var productId = "android.test.purchased";
            //var productId = "product1000";
            await InAppBilling.close();
            try {
                await InAppBilling.open();

                if (!await InAppBilling.isPurchased(productId)) {
                    const details = await InAppBilling.purchase(productId);
                    alert("You purchased:"+details);
                    //console.log('You purchased: ', details);
                }
                const transactionStatus = await InAppBilling.getPurchaseTransactionDetails(productId);
                console.log('Transaction Status', transactionStatus);
                const productDetails = await InAppBilling.getProductDetails(productId);
                //console.log(productDetails);
                alert(productDetails);
            } catch (err) {
                alert("오류발생");
                console.log(err);
            } finally {
                await InAppBilling.consumePurchase(productId);
                await InAppBilling.close();
            }

        }
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
                        <Text style={{fontSize:16,color:'#fff'}}>구간 연습</Text>
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
                            <Text style={commonStyle.headerTitleTxt}> {this.state.challenge_grade}</Text>
                        </View>
                        <View style={commonStyle.headerTitleRight}>
                            <Text style={commonStyle.headerTitleTxt}> 최고기록 : {this.state.challenge_recordCnt} </Text>
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

                            <View style={{flex:0.5, paddingTop:20}}>


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

                    <Modal isVisible={this.state.isModalVisible}>

                        <View style={{backgroundColor:"#fff", height:280}}>
                            <View style={{width:"100%", justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{color:"#000", paddingTop:10, paddingBottom:10, fontSize:20, fontWeight:"bold" ,marginTop:10}}>구간설정</Text>
                            </View>
                            <View style={{width:"100%", justifyContent: 'center', alignItems: 'center', paddingLeft:20, paddingRight:20,marginTop:10}}>
                                <Item regular>
                                    <Input placeholder="시작 자리 수" />
                                </Item>
                            </View>

                            <View style={{width:"100%", justifyContent: 'center', alignItems: 'center', paddingLeft:20, paddingRight:20,marginTop:10}}>
                                <Item regular>
                                    <Input placeholder="끝 자리 수" />
                                </Item>
                            </View>
                            <View style={{width:"100%",flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft:20, paddingRight:20,marginTop:10, paddingBottom:20}}>
                                <View style={{width:"50%", paddingRight:5}}>
                                <Button style={{width:"100%", justifyContent: 'center', alignItems: 'center'}} onPress={() => this._sectionClose()}>
                                    <Text style={{color:"#fff"}}>닫기</Text>
                                </Button>
                                </View>
                                <View style={{width:"50%",paddingLeft:5}}>
                                <Button style={{width:"100%", justifyContent: 'center', alignItems: 'center'}} onPress={() => this._sectionStart()}>
                                    <Text style={{color:"#fff"}}>시작</Text>
                                </Button>
                                </View>
                            </View>
                        </View>
                    </Modal>



                </Content>
                <TouchableOpacity onPress={() => this._pay()}>
                {/*<TouchableOpacity onPress={() => this._sectionPopup()}>*/}
                <Footer style={{backgroundColor:"#000"}}>

                    {/*<TouchableOpacity onPress={() => this._pay()}>*/}
                    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize:12,color:'#fff'}}>구간 설정</Text>
                    </View>


                </Footer>
                </TouchableOpacity>
            </Container>
        );


    }
}



