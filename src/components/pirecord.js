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
import {MainFormStyle} from "../style/main";
import {pirecodeStyle} from "../style/pirecord";
import {keyboardStyle} from "../style/keyboard";





export default class pirecord extends Component {

    constructor(){
        super();

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
            ,piDataArr:[]

        };



    }

    componentWillMount()
    {
        this.loadData();

        BackAndroid.addEventListener('hardwareBackPress', () => Actions.pop());
    }


    _keyboardPress(value)
    {
        var piData = this.state.piData;
        var piRealData = this.state.piRealData;

        var piDataArr = this.state.piDataArr;
        var piDataCode = {};



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

            if(this.state.recordCnt <= piRealDataLength) {

                pi.pi_grade_value.map((item) => {
                    var temp = item.split("~");
                    console.log(temp);
                    console.log(piRealDataLength);
                    if(parseInt(temp[0]) >= piRealDataLength && parseInt(temp[1] <= piRealDataLength)) {
                        console.log("111");
                        return;
                    }
                });

                for(var i = 0; i < pi.pi_grade_value.length; i++) {
                    var temp = pi.pi_grade_value[i].split("~");
                    if(parseInt(temp[0]) <= piRealDataLength && parseInt(temp[1]) >= piRealDataLength) {
                        console.log(temp);

                        // var dataObject = {
                        //     "UID": this.state.uid
                        //     ,"USERNAME": this.state.username
                        //     ,"COUNTRY": this.state.country
                        //     ,"COUNTRYIMG": this.state.countryImg
                        //     ,"AGE": this.state.age
                        //     ,"GENDER":this.state.gender
                        //     ,"TIMER":this.state.TIMER
                        //     ,"CNT":this.state.CNT
                        //     ,"challenge_recordCnt" : this.state.challenge_recordCnt
                        //     ,"challenge_grade" : this.state.challenge_grade
                        //     ,"payment_start": this.state.payment_start
                        //     ,"payment_end": this.state.payment_end
                        //     ,"grade": pi.pi_grade[i]
                        //     ,"recordCnt": piRealDataLength+1
                        //     ,"keyboard":this.state.keyboard
                        // };
                        //
                        // AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(dataObject), () => {
                        //     this.setState({grade:pi.pi_grade[i],recordCnt:piRealDataLength+1});
                        // });

                        this.setState({grade:pi.pi_grade[i],recordCnt:piRealDataLength+1});



                        break;
                    }
                }


            }

            /*
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
            */

            this.setState({key1: "default", key2: "default", key3: "default", key4: "default", key5: "default", key6: "default", key7: "default", key8: "default", key9: "default", key0: "default"})
            piDataArr.push(piDataCode);
            this.setState({piDataArr:piDataArr});
        }






        this.setState({piData:piData, piRealData:piRealData});
    }

    _defaultBtn()
    {

            this.setState({
                piData:""
                , piRealData: ""
                , piDataArr:[]
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
                var keyboardUse = json.keyboard;
                var recordCnt = json.recordCnt;
                var grade = json.grade;
                var payment_start = json.payment_start;



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

                if(grade != null) {
                    if(grade == "") {
                        this.setState({grade: "Halley's Comet"});
                    } else {
                        this.setState({grade: grade});
                    }
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
                    {/*<TouchableOpacity onPress={Actions.pop} style={{flex:.2, alignItems: 'flex-start', width:"100%"}}>*/}
                        {/*<View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>*/}
                            {/*<Text style={{fontSize:12,color:'#fff'}}> BACK </Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<View style={{flex:.6, justifyContent: 'center', alignItems: 'center'}}>*/}
                        {/*<Text style={{fontSize:16,color:'#fff'}}>연 습</Text>*/}
                    {/*</View>*/}
                    {/*<TouchableOpacity onPress={() => this._defaultBtn()} style={{flex:.2, alignItems: 'flex-end', width:"100%"}}>*/}
                        {/*<View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>*/}
                            {/*<Text style={{fontSize:12,color:'#fff'}}> 초기화 </Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    <Left style={{flex:1, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Button style={commonStyle.backBtn} onPress={Actions.pop} >
                            <Title style={{fontSize:14,color:'#fff'}}> BACK </Title>
                        </Button>

                    </Left>
                    <Body style={{flex:1,  justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{fontSize:16,color:'#fff'}}>연 습</Title>
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
                            <Text style={commonStyle.headerTitleTxt}> {this.state.grade}</Text>
                        </View>
                        <View style={commonStyle.headerTitleRight}>
                            <Text style={commonStyle.headerTitleTxt}> 기록 : {this.state.recordCnt} </Text>
                        </View>
                    </View>

                    <View style={{padding:10}}>
                        <View stlye={{flex:1,flexDirection:'row'}}>
                            <View style={{flex:.5}}>
                                <Text style={pirecodeStyle.title}>π= 3.</Text>
                            </View>

                        </View>
                        <View style={{flexDirection:'column', flex:1}}>
                            <View style={{flex:0.5}}>
                                <ScrollView style={pirecodeStyle.contentsLayout} ref="scrollView" onContentSizeChange={(width,height) => this.refs.scrollView.scrollTo({y:height})}>
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




                </Content>


                            <Footer style={commonStyle.footerLayout}>
                                <View style={{flex:0.9,alignItems:'flex-end'}}>
                                    <Text style={commonStyle.footerColor}>파이값 보기</Text>
                                </View>
                                <View style={{flex:0.05}}>
                                    <TouchableOpacity onPress={Actions.Pivalue}>
                                        <View style={keyboardStyle.ButtonBg}>
                                            <Text style={keyboardStyle.ButtonTxt}> π </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:0.05}}></View>
                            </Footer>



            </Container>
        );



    }
}



