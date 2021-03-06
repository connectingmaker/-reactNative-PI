/**
 * Created by jccho on 2017. 12. 14..
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    View, Text, Image, StyleSheet, TouchableOpacity, AlertIOS, Alert, Platform, ScrollView,
    AsyncStorage, BackAndroid, TouchableHighlight
} from 'react-native';
import { Container, Header, Body, Content, Footer,Item, Icon, Input,Button,Spinner,Left,Right,Title } from 'native-base';
import HTML from 'react-native-render-html';

import config from "../config/config";
import pi from '../config/pi_config'
import renderIf from 'render-if'

import {commonStyle} from '../style/common';
import {pirecodeStyle} from "../style/pirecord";
import {keyboardStyle} from "../style/keyboard";

import Modal from 'react-native-modal'


var timer;

export default class pichallenge extends Component {


    constructor(){
        super();

        this.state = {
            keyboard:"pc"
            ,uid:""
            ,username:""
            ,country:""
            ,countryImg:""
            ,age:""
            ,gender:""
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
            ,challenge_start:false
            ,challenge_timer:0
            ,challenge_stop:false
            ,grade:""
            ,payment_start:""
            ,payment_end:""
            ,timer:""
            ,keyboard:""
            ,piDataArr:[]
            ,isModalVisible:false
            ,isModalVisible2:false
            ,best:false
        };

    }

    componentWillMount()
    {
        this.loadData();
        BackAndroid.addEventListener('hardwareBackPress', () => Actions.pop({ refresh: {} }));
    }


    _keyboardPress(value)
    {
        var uid = this.state.uid;



        if(this.state.challenge_start == false) {
            this.setState({isModalVisible2:true});
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
        var piRealDataLength = piRealData.length;
        console.log(piRealData);

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
            this._challenge_end();
            //switch (value) {
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
                            "UID": this.state.uid
                            ,"USERNAME": this.state.username
                            ,"COUNTRY": this.state.country
                            ,"COUNTRYIMG": this.state.countryImg
                            ,"AGE": this.state.age
                            ,"GENDER":this.state.gender
                            ,"KEYBOARD":this.state.keyboard
                            ,"TIMER":this.state.timer
                            ,"challenge_recordCnt" : piRealDataLength+1
                            ,"challenge_grade" : pi.pi_grade[i]
                            ,"payment_start": this.state.payment_start
                            ,"payment_end": this.state.payment_end
                            ,"grade": this.state.grade
                            ,"recordCnt": this.state.recordCnt
                        };

                        AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(dataObject), () => {
                            this.setState({challenge_grade:pi.pi_grade[i],challenge_recordCnt: piRealDataLength+1, best:true});
                        });

                        console.log(dataObject);

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

        var dataObject = {
            "UID": this.state.uid
            ,"USERNAME": this.state.username
            ,"COUNTRY": this.state.country
            ,"COUNTRYIMG": this.state.countryImg
            ,"AGE": this.state.age
            ,"GENDER":this.state.gender
            ,"KEYBOARD":this.state.keyboard
            ,"challenge_recordCnt" : 0
            ,"challenge_grade" : pi.pi_grade[0]
            ,"TIMER":0
            ,"payment_start": this.state.payment_start
            ,"payment_end": this.state.payment_end
            ,"grade": this.state.grade
            ,"recordCnt": this.state.recordCnt
        };

        AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(dataObject), () => {
            this.setState({piData:"", piRealData: "",piDataArr:[], challenge_grade:pi.pi_grade[0],challenge_recordCnt:0, key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"});

        });
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
                var keyboard = json.keyboard;
                var payment_start = json.payment_start;
                var payment_end = json.payment_end;
                var timer = json.TIMER;


                if(uid != null) {
                    this.setState({uid:uid});
                }
                if (username != null) {
                    this.setState({username: username});
                }

                if (country != null) {
                    this.setState({country: country});
                }
                if (countryImg != null) {
                    this.setState({countryImg: countryImg});
                }
                if (age != null) {
                    this.setState({age: age});
                }
                if (gender != null) {
                    this.setState({gender: gender});
                }

                if (uid != null) {
                    this.setState({uid: uid});
                }

                if(keyboard != null) {
                    if(keyboard == undefined) {
                        this.setState({keyboard: "mobile"});
                    } else {
                        this.setState({keyboard: keyboard});
                    }
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

                if(timer != null) {
                    this.setState({timer:timer});
                }



            }
        }).then(res => {
        });

    }


    _challenge_start()
    {
        if(this.state.uid == "" || this.state.username == "")
        {
            alert("아이디 설정하고 도전을 해주세요.");
            return;
        }
        this.setState({
            challenge_start: true
            ,challenge_stop: false
        });

        timer = setInterval(() => {
            if(this.state.challenge_stop == false) {
                var challenge_timer = this.state.challenge_timer + 1;
                this.setState({challenge_timer: challenge_timer});
            }
        }, 1000);
    }

    _challenge_stop()
    {
        if(this.state.challenge_stop == false) {
            this.setState({challenge_stop: true});
        } else {
            this.setState({challenge_stop: false});
        }
    }

    _challenge_end()
    {


        clearInterval(timer);
        //alert("종료되었습니다." + this.state.challenge_timer + "초");

        //this.setState({challenge_timer:0, challenge_stop: false, challenge_start:false});

        var formData = new FormData();
        formData.append('UID', this.state.uid);
        formData.append('USERNAME', this.state.username);
        formData.append('COUNTRY', this.state.country);
        formData.append('COUNTRYIMG', this.state.countryImg);
        formData.append('AGE', this.state.age);
        formData.append('GENDER', this.state.gender);
        formData.append('TIMER', this.state.challenge_timer);
        formData.append('CNT', this.state.challenge_recordCnt);
        formData.append('GRADE', this.state.challenge_grade);


        var object = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            body:formData
        };


        fetch(config.SERVER_URL+'/member/memberInsert', object)
            .then((response) => response.json())
            .then((responseJson) => {
                var object = {
                    UID : responseJson.UID
                    ,USERNAME : responseJson.USERNAME
                    ,COUNTRY : responseJson.COUNTRY
                    ,COUNTRYIMG : responseJson.COUNTRYIMG
                    ,AGE : responseJson.AGE
                    ,GENDER : responseJson.GENDER
                    ,TIMER : responseJson.TIMER
                    ,CNT : responseJson.CNT
                    ,GRADE : responseJson.GRADE
                    ,keyboard:this.state.keyboard
                    ,grade:this.state.grade
                    ,challenge_grade:this.state.challenge_grade
                    ,challenge_recordCnt:this.state.challenge_recordCnt
                    ,payment_start:this.state.payment_start
                    ,payment_end:this.state.payment_end
                    ,keyboard:this.state.keyboard

                }

                AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(object), () => {

                    this.setState({isModalVisible:true,challenge_start:false});
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _close()
    {

        this.setState({isModalVisible:false,piDataArr:[],challenge_timer:0,piData:"",piRealData:"",best:false});
        this.setState({key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"})

    }

    _close2()
    {
        this.setState({isModalVisible2:false});
    }


    render() {
        return (
            <Container>
                <Header style={commonStyle.headerLayout}>
                    {/*<TouchableOpacity onPress={() => Actions.pop({ refresh: {refresh:true} })} style={{flex:.2, alignItems: 'flex-start'}}>*/}
                        {/*<View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>*/}
                            {/*<Text style={{fontSize:14,color:'#fff'}}> BACK </Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<View style={{flex:.6, justifyContent: 'center', alignItems: 'center'}}>*/}
                        {/*<Text style={{fontSize:16,color:'#fff'}}>도 전</Text>*/}
                    {/*</View>*/}
                    {/*<TouchableOpacity onPress={() => this._defaultBtn()} style={{flex:.2, alignItems: 'flex-end'}}>*/}
                        {/*<View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>*/}
                            {/*<Text style={{fontSize:14,color:'#fff'}}> 초기화 </Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    <Left style={{flex:1, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Button style={commonStyle.backBtn} onPress={() => Actions.pop({ refresh: {refresh:true} })} >
                            <Title style={{fontSize:14,color:'#fff'}}> BACK </Title>
                        </Button>
                    </Left>

                    <Body style={{flex:1,  justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{fontSize:16,color:'#fff'}}>도 전</Title>
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
                            <View style={{flex:0.3}}>
                                <ScrollView style={pirecodeStyle.contentsLayout} style={pirecodeStyle.contentsLayout} ref="scrollView" onContentSizeChange={(width,height) => this.refs.scrollView.scrollTo({y:height})}>
                                    <Text style={{fontSize:20 , paddingBottom:20}}>
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

                            <View style={{flex:0.7,paddingTop:20}}>


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

                        <View style={{backgroundColor:"#fff", height:240, paddingTop:20}}>
                            <View style={{width:"100%", justifyContent: 'center', alignItems: 'flex-start', paddingLeft:40, paddingRight:20,marginTop:10, paddingBottom:20}}>
                                <View>
                                    <Text style={{fontSize:20, fontWeight:'bold', paddingTop:10}}>자 릿 수 : {this.state.piRealData.length}</Text>
                                </View>
                                <View>
                                    <Text style={{fontSize:20, fontWeight:'bold', paddingTop:10}}>시 간 : {this.state.challenge_timer} 초</Text>
                                </View>

                                {renderIf(this.state.best == true)(
                                <View>
                                    <Text style={{fontSize:20, fontWeight:'bold', color:"#f23611", paddingTop:10}}>[ 최고 기록 :  {this.state.challenge_recordCnt}]</Text>
                                </View>
                                )}

                                {renderIf(this.state.best == false)(
                                    <View>
                                        <Text style={{fontSize:20, fontWeight:'bold', paddingTop:10}}>[ 최고 기록 :  {this.state.challenge_recordCnt} ]</Text>
                                    </View>
                                )}
                            </View>

                            <View style={{width:"100%",flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft:20, paddingRight:20,marginTop:10, paddingBottom:20}}>

                                <View style={{width:"100%",paddingLeft:5}}>
                                    <Button style={{width:"100%", justifyContent: 'center', alignItems: 'center'}} onPress={() => this._close()}>
                                        <Text style={{color:"#fff"}}>확 인</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </Modal>

                    <Modal isVisible={this.state.isModalVisible2}>

                        <View style={{backgroundColor:"#fff", height:150, paddingTop:20}}>
                            <View style={{width:"100%", justifyContent: 'center', alignItems: 'flex-start', paddingLeft:40, paddingRight:20,marginTop:10, paddingBottom:20}}>
                                <View>
                                    <Text style={{fontSize:20, fontWeight:'bold'}}>도전시작을 눌러주세요.</Text>
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





                </Content>
                <Footer style={{backgroundColor:"#000"}}>
                    {/*
                    <View style={{flex:0.44, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize:12,color:'#fff'}}>도전시작</Text>
                    </View>
                    <View style={{flex:0.02, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize:12,color:'#fff'}}>|</Text>
                    </View>
                    <View style={{flex:0.44, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize:12,color:'#fff'}}>기록</Text>
                    </View>
                    */}

                    {renderIf(this.state.challenge_start == false)(
                        <TouchableOpacity onPress={() => this._challenge_start()}>
                            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize:12,color:'#fff'}}>도전 시작</Text>
                            </View>
                        </TouchableOpacity>
                    )}

                    {/*{renderIf(this.state.challenge_start == true)(*/}
                    {/*<View style={{flexDirection:"row", flex:1}}>*/}
                        {/*<TouchableOpacity style={{flex:0.49, justifyContent: 'center', alignItems: 'center'}} onPress={() => this._challenge_stop()}>*/}
                            {/*{renderIf(this.state.challenge_stop == false) (*/}
                            {/*<View>*/}
                                {/*<Text style={{fontSize:12,color:'#fff'}}>일시중지</Text>*/}
                            {/*</View>*/}
                            {/*)}*/}

                            {/*{renderIf(this.state.challenge_stop == true) (*/}
                                {/*<View>*/}
                                    {/*<Text style={{fontSize:12,color:'#fff'}}>재개</Text>*/}
                                {/*</View>*/}
                            {/*)}*/}

                        {/*</TouchableOpacity>*/}
                            {/*<View style={{flex:0.02, justifyContent: 'center', alignItems: 'center'}}>*/}
                                {/*<Text style={{fontSize:12,color:'#fff'}}>|</Text>*/}
                            {/*</View>*/}

                        {/*<TouchableOpacity style={{flex:0.49, justifyContent: 'center', alignItems: 'center'}} onPress={() => this._challenge_end()}>*/}
                            {/*<View>*/}
                                {/*<Text style={{fontSize:12,color:'#fff'}}>도전완료</Text>*/}
                            {/*</View>*/}
                        {/*</TouchableOpacity>*/}
                    {/*</View>*/}
                    {/*)}*/}

                </Footer>
            </Container>


        );


    }
}



