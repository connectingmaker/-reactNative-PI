/**
 * Created by jccho on 2017. 12. 14..
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    View, Text, Image, StyleSheet, TouchableOpacity, AlertIOS, Alert, Platform, ScrollView,AsyncStorage, BackAndroid, NativeModules, TouchableHighlight
} from 'react-native';
import { Container, Header, Body, Content, Footer,Item, Icon, Input,Button,Spinner,Left,Right,Title } from 'native-base';
import HTML from 'react-native-render-html';
import Modal from 'react-native-modal'

import InAppBilling from 'react-native-billing';


import config from "../config/config";
import pi from '../config/pi_config'
import renderIf from 'render-if'

import {commonStyle} from '../style/common';
import {MainFormStyle} from "../style/main";
import {pirecodeStyle} from "../style/pirecord";
import {keyboardStyle} from "../style/keyboard";
import iapReceiptValidator from 'iap-receipt-validator';

const { InAppUtils } = NativeModules;



if(Platform.OS === 'android') {
    new InAppBilling("MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAh3RXVAsdcShkIGhOdcQHzpf1S3zLX17lJbPGLEGzTE00JN+TCfDJ/DwW1wLK8/T0tod2TgBBYNxYSbvN+UeZXADMwEBoojZwXU3Tp/KVZazy5cEk0EgR/fclFBuOf5fq4RIV0YBDKCfPkv2pZQti96fBF50+DNn9VSqvdfyopFZUf69c4LWitkITzTU1jwyn95JF9pdSqDcZrMoWs4PcV3DnkRvsMrnrh8JsgHKCm0xy2Lumn4b2LbSBO5AhOZVv17gbsj94LqhA+VUjX2rJxvTuMN1X4q7r9IVii+xJFSjbtjbs+eaRwcjqd5uwP1XgikYNnIHqSFcjHrDK3N+22wIDAQAB");
}

var now_timestamp = new Date().getTime();
var next_date = new Date();
next_date.setDate(next_date.getMonth() + 1);
var next_timestemp = new Date(next_date).getTime();

var productId = "product1000";


const password = 'a0df903145d34474bea481dda4aba823'; // Shared Secret from iTunes connect
const production = false; // use sandbox or production url for validation
const validateReceipt = iapReceiptValidator(password, production);



export default class pisection extends Component {


    constructor(){
        super();
        /*
        keyboard:"pc"
            ,uid:""
            ,username:""
            ,country:""
            ,countryImg:""
            ,age:""
            ,gender:""
            ,challenge_recordCnt:""
            ,challenge_grade:""
            ,piData:""
            ,piRealData:""
            ,recordCnt:0
            ,grade:"Halley's Comet"
            ,payment_start : ""
            ,payment_end: ""
            */

        this.state = {
            keyboard:"mobile"
            ,uid:""
            ,username:""
            ,country:""
            ,countryImg:""
            ,age:""
            ,gender:""
            ,challenge_recordCnt:""
            ,challenge_grade:""
            ,piData:""
            ,piRealData:""
            ,recordCnt:0
            ,grade:"Halley's Comet"
            ,payment_start : ""
            ,payment_end: ""
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
            ,isModalVisible2:false
            ,isModalVisible3:false
            ,payment_start:0
            ,payment_end:0
            ,test:"상태"
            ,start_pi:0
            ,end_pi:0
            ,startYN:"N"
            ,piDataArr:[]
            ,section_grade:"Halley's Comet"
            ,section_Cnt:0
        };




    }

    componentDidMount() {

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
        BackAndroid.addEventListener('hardwareBackPress', () => Actions.pop());


    }


    _keyboardPress(value)
    {
        if(this.state.startYN == "N") {
            this.setState({isModalVisible3:true});
            return;
        }
        var piData = this.state.piData;
        var piRealData = this.state.piRealData;

        var piDataArr = this.state.piDataArr;
        var piDataCode = {};


        /*
        if(piRealDataLength != 0) {
            piRealDataLength = piRealDataLength - 1;
        }
        */
        var piRealDataLength = piRealData.length + (parseInt(this.state.start_pi));

        if(piDataArr.length == 0) {
            //piData = "<span style='color:#fff;border:1px solid #fff;font-size:1.6em;'>"+value+"</span><span></span>";
            piDataCode = {color:"#fff", value:value};
            piRealData = value.toString();
        } else {

            if(piRealDataLength > 5) {
                piRealDataLength = piRealData.length;
                var tempLength = piRealDataLength + 1;
                if (tempLength % 10 == 0) {
                    if(tempLength % 100 == 0) {
                        if(tempLength % 1000 == 0) {
                            if(tempLength % 1000 == 0) {
                                //piData += "<b style='color:#f0ff00;font-size:1.6em;'>"+value+"</b>";
                                piDataCode = {color:"#f0ff00", value:value};
                            }
                            //piData += "<b style='color:#0066ff;font-size:1.6em;'>"+value+"</b>";
                        } else {
                            //piData += "<b style='color:#ff0000;font-size:1.6em;'>" + value + "</b>";
                            piDataCode = {color:"#ff0000", value:value};
                        }

                    } else {
                        //piData += "<b style='color:#f0ff00;font-size:1.6em;'>"+value+"</b>";
                        piDataCode = {color:"#f0ff00", value:value};
                    }

                } else {
                    //piData += "<span style='color:#fff;font-size:1.6em;'>"+value+"</span>";
                    piDataCode = {color:"#fff", value:value};
                }
            } else {
                //piData += "<span style='color:#fff;font-size:1.6em;'>"+value+"</span>";
                piDataCode = {color:"#fff", value:value};
            }
            piRealData += value.toString();
        }






        if(pi.pi_config[piRealDataLength] != value) {
            switch (parseInt(pi.pi_config[piRealDataLength])) {
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
            var plus = piDataArr.length + (parseInt(this.state.start_pi)) + 1;
            this.setState({section_Cnt: plus});


            if(this.state.section_Cnt <= piRealDataLength) {
                /*
                pi.pi_grade_value.map((item) => {
                    var temp = item.split("~");
                    console.log(temp);
                    console.log(piRealDataLength);
                    if (parseInt(temp[0]) >= piRealDataLength && parseInt(temp[1] <= piRealDataLength)) {
                        console.log("111");
                        return;
                    }
                });
                */


                for (var i = 0; i < pi.pi_grade_value.length; i++) {
                    var temp = pi.pi_grade_value[i].split("~");


                    if (parseInt(temp[0]) <= piRealDataLength && parseInt(temp[1]) >= piRealDataLength) {
                        this.setState({section_grade: pi.pi_grade[i], section_Cnt: plus});
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
            this.setState({key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"})
            piDataArr.push(piDataCode);
            this.setState({piDataArr:piDataArr});
        }




        this.setState({piData:piData, piRealData:piRealData});
    }

    _defaultBtn()
    {
        console.log("초기화");
        this.setState({
            piData:"<span></span>"
            , piRealData: ""
            , grade:pi.pi_grade[0]
            , recordCnt:0
            , key1: "default"
            , key2: "default"
            , key3: "default"
            , key4: "default"
            , key5: "default"
            , key6: "default"
            , key7: "default"
            , key8: "default"
            , key9: "default"
            , key0: "default"
            , startYN:"N"
            ,piDataArr:[]
            ,section_grade:"Halley's Comet"
            ,section_Cnt:0

        });
        console.log(this.state);
    }

    loadData()
    {

        AsyncStorage.getItem(config.STORE_KEY).then((value) => {
            var json = eval("("+value+")");
            console.log(json);
            if(json!=null) {



                var username = json.USERNAME;
                var country = json.COUNTRY;
                var countryImg = json.COUNTRYIMG;
                var age = json.AGE;
                var gender = json.GENDER;
                var uid = json.UID;
                var challenge_recordCnt = json.challenge_recordCnt;
                var challenge_grade = json.challenge_grade;


                var keyboardUse = json.KEYBOARD;
                var recordCnt = json.recordCnt;
                var grade = json.grade;
                var payment_start = json.payment_start;
                var payment_end = json.payment_end;
                //alert(payment_start);
                console.log(payment_start);


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

                if(uid != null) {
                    this.setState({uid:uid});
                }

                if(username != null) {
                    this.setState({username:username});
                }
                if(country != null) {
                    this.setState({country:country});
                }

                if(countryImg != null) {
                    this.setState({countryImg:countryImg});
                }


                if(age != null) {
                    this.setState({age:age});
                }

                if(gender != null) {
                    this.setState({gender:gender});
                }

                if(challenge_recordCnt != null) {
                    this.setState({challenge_recordCnt:challenge_recordCnt});
                }

                if(challenge_grade != null) {
                    this.setState({challenge_grade:challenge_grade});
                }

                if(payment_start != null) {
                    this.setState({payment_start:payment_start});
                }

                if(payment_end != null) {
                    this.setState({payment_end:payment_end});
                }




            } else {
                this.setState({keyboard: "pc"})
            }

            if(grade != null) {
                this.setState({grade:grade});
            }


            this.setState({test:payment_start + ":::" + payment_end});


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
        if(parseInt(this.state.start_pi) >= parseInt(this.state.end_pi)) {
            this.setState({isModalVisible2:true});
            return;
        }
        this.setState({
            isModalVisible: false
            ,startYN:"Y"
        })
    }

    _sectionClose() {
        this.setState({
            isModalVisible: false
            ,startYN:"N"
        })
    }




    // To be sure the service is close before opening it
    async _pay() {
        if(Platform.OS == "ios") {
            return new Promise(async(resolve, reject) => {
                var productIdentifiers = 'com.piking.app.';


                InAppUtils.purchaseProduct(productIdentifiers, (error, response) => {
                    // NOTE for v3.0: User can cancel the payment which will be available as error object here.
                    if(error){
                        this.setState({test:error});
                    } else {
                        if (response && response.productIdentifier) {
                            this.setState({test:response.transactionIdentifier});
                            //Alert.alert('Purchase Successful', 'Your Transaction ID is ' + response.transactionIdentifier);
                            //unlock store here.
                        }
                    }
                });

            });
            /*
            var productIdentifier = 'com.piking.app.1000';
            InAppUtils.purchaseProduct(productIdentifier, (error, response) => {
npm i --save iap-receipt-validator
                if(error) {
                    this.setState({test:error});
                } else if(response && response.productIdentifier) {
                    this.setState({test:"결제성공"});
                    Alert.alert('Purchase Successful', 'Your Transaction ID is ' + response.transactionIdentifier);
                }
            });
            */


        } else {


            //var productId = "android.test.purchased";
            /*
            this.setState({test:"시도"});
            await InAppBilling.open();
            this.setState({test:"준비"});
            try {
                if (!await InAppBilling.isPurchased(productId)) {
                    await this.setState({test:"결제"});
                    const details = await InAppBilling.purchase(productId);

                    console.log('You purchased: ', details);
                } else {
                    await InAppBilling.consumePurchase(productId);
                    await this.setState({test:"결제2"});
                    const details = await InAppBilling.purchase(productId);

                    console.log('You purchased: ', details);
                }


            } catch (err) {
                this.setState({test:"결제에러"});
                console.log(err);

            } finally {
                await InAppBilling.consumePurchase(productId);
                await InAppBilling.close();
            }
            */

            await InAppBilling.open().
            then(() => InAppBilling.purchase(productId))
                .then((details) => {

                    return InAppBilling.getProductDetails(productId);
                })
                .then((productDetails) => {


                    var timestamp = new Date().getTime();
                    var next_date2 = new Date();
                    next_date2.setDate(next_date2.getMonth() + 1);
                    var timestemp2 = new Date(next_date2).getTime();


                    var dataObject = {
                        "UID": this.state.uid
                        ,"USERNAME": this.state.username
                        ,"COUNTRY": this.state.country
                        ,"COUNTRYIMG": this.state.countryImg
                        ,"AGE": this.state.age
                        ,"GENDER":this.state.gender
                        ,"keyboard":this.state.keyboard
                        ,"challenge_recordCnt" : this.state.challenge_recordCnt
                        ,"challenge_grade" : this.state.challenge_grade
                        ,"payment_start": timestamp
                        ,"payment_end": timestemp2
                        ,"grade": this.state.grade
                        ,"recordCnt": this.state.recordCnt
                    };

                    this.setState({payment_start:timestamp, payment_end:timestemp2});


                    AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(dataObject));




                    InAppBilling.consumePurchase(productId);
                    return InAppBilling.close();
                })
                .catch((error) => {
                    this.setState({
                        test: error
                    });
                });




            //this.setState({test:"종료"});








        }
    }

    _close2()
    {
        this.setState({isModalVisible2:false});
    }

    _close3()
    {
        this.setState({isModalVisible3:false});
    }




    render() {
        if(Platform.OS == "android") {
            //const paymentCheck = InAppBilling.isPurchased(productId);
        }
        return (
            <Container>
                <Header style={commonStyle.headerLayout}>
                    <Left style={{flex:1, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Button style={commonStyle.backBtn} onPress={Actions.pop} >
                            <Title style={{fontSize:14,color:'#fff'}}> BACK </Title>
                        </Button>
                    </Left>

                    <Body style={{flex:1,  justifyContent: 'center', alignItems: 'center' }}>
                    <Title style={{fontSize:16,color:'#fff'}}>구간 연습</Title>
                    </Body>

                    <Right style={{flex:1, justifyContent: 'center', alignItems: 'flex-end'}}>
                        <Button style={commonStyle.defaultBtn} onPress={() => this._defaultBtn()} >
                            <Title style={{fontSize:14,color:'#fff',paddingLeft:35}}> 초기화 </Title>
                        </Button>
                    </Right>


                </Header>

                <Content>
                    <View style={commonStyle.headerTitleLayout}>
                        <View style={commonStyle.headerTitleLeft}>
                            <Text style={commonStyle.headerTitleTxt}> {this.state.section_grade}</Text>
                        </View>
                        <View style={commonStyle.headerTitleRight}>
                            <Text style={commonStyle.headerTitleTxt}> 최고기록 : {this.state.section_Cnt} </Text>
                        </View>
                    </View>

                    <View style={{padding:10}}>
                        <View>
                            <Text style={pirecodeStyle.title}>π= 3.</Text>
                        </View>
                        <View style={{flexDirection:'column', flex:1}}>
                            <View style={{flex:0.5}}>
                                <ScrollView style={pirecodeStyle.contentsLayout} style={pirecodeStyle.contentsLayout} ref="scrollView" onContentSizeChange={(width,height) => this.refs.scrollView.scrollTo({y:height})}>
                                    <Text style={{fontSize:20, paddingBottom:20}}>
                                        {
                                            this.state.piDataArr.map((data, index)=> {
                                                return (
                                                    <Text key={index} style={{color:data.color, fontSize:20}}>
                                                        {data.value}
                                                    </Text>
                                                )
                                            })
                                        }
                                    </Text>
                                </ScrollView>
                            </View>

                            <View style={{flex:0.5, paddingTop:20}}>


                                {/*PC*/}
                                {renderIf(this.state.keyboard == "mobile")(
                                    <View>
                                        <View style={keyboardStyle.keyboardView}>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>

                                                    {renderIf(this.state.key1 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(1)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>1</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key1 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(1)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>1</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key1 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(1)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>1</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}


                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key2 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(2)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>2</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key2 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(2)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>2</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key2 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(2)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>2</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key3 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(3)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key3 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(3)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key3 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(3)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}
                                                </View>
                                            </View>

                                        </View>
                                        <View style={keyboardStyle.keyboardView}>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>

                                                    {renderIf(this.state.key4 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(4)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>4</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key4 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(4)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>4</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key4 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(4)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>4</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key5 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(5)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>5</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key5 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(5)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>5</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key5 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(5)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>5</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key6 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(6)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>6</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key6 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(6)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>6</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key6 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(6)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>6</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}
                                                </View>
                                            </View>

                                        </View>
                                        <View style={keyboardStyle.keyboardView}>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key7 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(7)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>7</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key7 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(7)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>7</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key7 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(7)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>7</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key8 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(8)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>8</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key8 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(8)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>8</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key8 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(8)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>8</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key9 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(9)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>9</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key9 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(9)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>9</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key9 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(9)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>9</Text>
                                                            </View>
                                                        </TouchableHighlight>
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
                                                        <TouchableHighlight onPress={() => this._keyboardPress(0)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>0</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key0 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(0)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>0</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key0 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(0)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>0</Text>
                                                            </View>
                                                        </TouchableHighlight>
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
                                {renderIf(this.state.keyboard == "pc")(
                                    <View>
                                        <View style={keyboardStyle.keyboardView}>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>

                                                    {renderIf(this.state.key7 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(7)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>7</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key7 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(7)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>7</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key7 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(7)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>7</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}



                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key8 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(8)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>8</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key8 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(8)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>8</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key8 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(8)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>8</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key9 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(9)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>9</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key9 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(9)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>9</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key9 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(9)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>9</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}
                                                </View>
                                            </View>

                                        </View>
                                        <View style={keyboardStyle.keyboardView}>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key4 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(4)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>4</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key4 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(4)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>4</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key4 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(4)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>4</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key5 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(5)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>5</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key5 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(5)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>5</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key5 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(5)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>5</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key6 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(6)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>6</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key6 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(6)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>6</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key6 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(6)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>6</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}
                                                </View>
                                            </View>

                                        </View>
                                        <View style={keyboardStyle.keyboardView}>

                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key1 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(1)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>1</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key1 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(1)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>1</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key1 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(1)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>1</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}
                                                </View>
                                            </View>

                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key2 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(2)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>2</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key2 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(2)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>2</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key2 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(2)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>2</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={{flex:0.02}}>
                                            </View>
                                            <View style={{ flex:0.32}}>
                                                <View style={keyboardStyle.keyboardButtonLayout}>

                                                    {renderIf(this.state.key3 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(3)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key3 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(3)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key3 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(3)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>3</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}
                                                </View>
                                            </View>


                                        </View>

                                        <View style={keyboardStyle.keyboardView}>
                                            <View style={{ flex:0.66}}>

                                                <View style={keyboardStyle.keyboardButtonLayout}>
                                                    {renderIf(this.state.key0 == "default")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(0)} style={keyboardStyle.keyboardButton} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>0</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key0 == "N")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(0)} style={keyboardStyle.keyboardButtonNot} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>0</Text>
                                                            </View>
                                                        </TouchableHighlight>
                                                    )}

                                                    {renderIf(this.state.key0 == "Y")(
                                                        <TouchableHighlight onPress={() => this._keyboardPress(0)} style={keyboardStyle.keyboardButtonOk} underlayColor="#afabab">
                                                            <View>
                                                                <Text style={keyboardStyle.keyboardButtonTxt}>0</Text>
                                                            </View>
                                                        </TouchableHighlight>
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
                                    <Input placeholder="시작 자리 수" keyboardType = 'numeric' onChangeText={(text) => this.setState({start_pi: text})} value={this.state.start_pi} />
                                </Item>
                            </View>

                            <View style={{width:"100%", justifyContent: 'center', alignItems: 'center', paddingLeft:20, paddingRight:20,marginTop:10}}>
                                <Item regular>
                                    <Input placeholder="끝 자리 수" keyboardType = 'numeric' onChangeText={(text) => this.setState({end_pi: text})} value={this.state.end_pi} />
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


                    <Modal isVisible={this.state.isModalVisible2}>

                        <View style={{backgroundColor:"#fff", height:200, paddingTop:20}}>
                            <View style={{width:"100%", justifyContent: 'center', alignItems: 'flex-start', paddingLeft:40, paddingRight:40,marginTop:10, paddingBottom:20}}>
                                <View>
                                    <Text style={{fontSize:16, fontWeight:'bold'}}>시작 자리 수보다 끝 자리 수가 작습니다.</Text>
                                    <Text style={{fontSize:16, fontWeight:'bold' ,paddingTop:10}}>확인하시고 끝 자리 수를 시작 자리 수보다 크게 설정해 주세요.</Text>


                                </View>
                            </View>

                            <View style={{width:"100%",flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft:20, paddingRight:20,marginTop:10, paddingBottom:20}}>

                                <View style={{width:"100%",paddingLeft:5}}>
                                    <Button style={{width:"100%", justifyContent: 'center', alignItems: 'center'}} onPress={() => this._close2()}>
                                        <Text style={{color:"#fff"}}>확 인</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    <Modal isVisible={this.state.isModalVisible3}>

                        <View style={{backgroundColor:"#fff", height:150, paddingTop:20}}>
                            <View style={{width:"100%", justifyContent: 'center', alignItems: 'flex-start', paddingLeft:40, paddingRight:20,marginTop:10, paddingBottom:20}}>
                                <View>
                                    <Text style={{fontSize:20, fontWeight:'bold'}}>구간설정을 해주세요.</Text>
                                </View>
                            </View>

                            <View style={{width:"100%",flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft:20, paddingRight:20,marginTop:10, paddingBottom:20}}>

                                <View style={{width:"100%",paddingLeft:5}}>
                                    <Button style={{width:"100%", justifyContent: 'center', alignItems: 'center'}} onPress={() => this._close3()}>
                                        <Text style={{color:"#fff"}}>확 인</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </Modal>



                </Content>

                {renderIf(this.state.startYN == "N")(
                <TouchableOpacity onPress={() => this._sectionPopup()}>
                    <Footer style={{backgroundColor:"#000"}}>

                        {/*<TouchableOpacity onPress={() => this._pay()}>*/}

                        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:12,color:'#fff'}}>구간 설정</Text>
                        </View>



                    </Footer>
                </TouchableOpacity>
                )}

                {renderIf(this.state.startYN == "Y")(
                        <Footer style={{backgroundColor:"#000"}}>

                            {/*<TouchableOpacity onPress={() => this._pay()}>*/}

                            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize:16,color:'#fff'}}>구 간 : {this.state.start_pi} ~ {this.state.end_pi}</Text>
                            </View>



                        </Footer>
                )}

                {/*{renderIf(now_timestamp <= this.state.payment_start && now_timestamp >= this.state.payment_end)(*/}
                {/*<TouchableOpacity onPress={() => this._sectionPopup()}>*/}
                {/*<Footer style={{backgroundColor:"#000"}}>*/}

                    {/*/!*<TouchableOpacity onPress={() => this._pay()}>*!/*/}
                    {/*<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>*/}
                        {/*<Text style={{fontSize:12,color:'#fff'}}>구간 설정</Text>*/}
                    {/*</View>*/}


                {/*</Footer>*/}
                {/*</TouchableOpacity>*/}
                {/*)}*/}


                {/*{renderIf((now_timestamp >= this.state.payment_start && now_timestamp <= this.state.payment_end) || (this.state.payment_start == 0 || this.state.payment_end == 0))(*/}
                    {/*<TouchableOpacity onPress={() => this._pay()}>*/}
                        {/*<Footer style={{backgroundColor:"#000"}}>*/}

                            {/*/!*<TouchableOpacity onPress={() => this._pay()}>*!/*/}
                            {/*<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>*/}
                                {/*<Text style={{fontSize:12,color:'#fff'}}>구간 설정</Text>*/}
                            {/*</View>*/}


                        {/*</Footer>*/}
                    {/*</TouchableOpacity>*/}
                {/*)}*/}
            </Container>
        );


    }
}



