/**
 * Created by jccho on 2017. 12. 14..
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    View, Text, Image, StyleSheet, TouchableOpacity, AlertIOS, Alert, Platform, ScrollView, AsyncStorage,
    BackAndroid
} from 'react-native';
import { Container, Header, Left, Body, Right,Content, Footer,Item, Icon, Input,Button,Spinner,Title } from 'native-base';
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
            uid:""
            ,username:""
            ,country:""
            ,countryImg:""
            ,age:""
            ,gender:""
            ,keyboard:"mobile"
            ,timer:""
            ,challenge_recordCnt:""
            ,challenge_grade:""
            ,payment_start:""
            ,payment_end:""
            ,cnt:""
        };

    }

    componentWillMount()
    {
        this.loadData();
        BackAndroid.addEventListener('hardwareBackPress', () => Actions.pop());
    }

    loadData()
    {

        AsyncStorage.getItem(config.STORE_KEY).then((value) => {
            var json = eval("("+value+")");
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
                var cnt = json.CNT;
                var grade = json.grade;


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
                    if(keyboard == "") {
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

                if(cnt != null) {
                    this.setState({cnt:cnt});
                }

                if(grade != null) {
                    this.setState({grade:grade});
                }

                console.log(json);

            }
        }).then(res => {
        });

    }

    _mobileClick()
    {
        this.setState({keyboard:"mobile"})
    }

    _pcClick()
    {
        this.setState({keyboard:"pc"})
    }

    _save()
    {

        var dataObject = {
            UID : this.state.uid
            ,USERNAME : this.state.username
            ,COUNTRY : this.state.country
            ,COUNTRYIMG : this.state.countryImg
            ,AGE : this.state.age
            ,GENDER : this.state.gender
            ,TIMER : this.state.timer
            ,CNT : this.state.cnt
            ,keyboard:this.state.keyboard
            ,grade:this.state.grade
            ,challenge_grade:this.state.challenge_grade
            ,challenge_recordCnt:this.state.challenge_recordCnt
            ,payment_start:this.state.payment_start
            ,payment_end:this.state.payment_end
        }
        console.log(dataObject);

        AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(dataObject), () => {
            //alert("저장되었습니다.");
            Actions.pop();
        });
    }

    render() {
        return (
            <Container>
                <Header style={commonStyle.headerLayout}>
                    {/*<TouchableOpacity onPress={Actions.pop} style={{flex:.2, alignItems: 'flex-start',height:50}}>*/}
                        {/*<View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>*/}
                            {/*<Text style={{fontSize:12,color:'#fff'}}> BACK </Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<View style={{flex:.6, justifyContent: 'center', alignItems: 'center'}}>*/}
                        {/*<Text style={{fontSize:16,color:'#fff'}}>키패드 설정</Text>*/}
                    {/*</View>*/}
                    {/*<View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>*/}
                    {/*</View>*/}
                    <Left style={{flex:1, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Button style={commonStyle.backBtn} onPress={Actions.pop} >
                            <Title style={{fontSize:14,color:'#fff'}}> BACK </Title>
                        </Button>
                    </Left>

                    <Body style={{flex:1,  justifyContent: 'center', alignItems: 'center' }}>
                    <Title style={{fontSize:16,color:'#fff'}}>키패드 설정</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>

                <Content>
                    <View style={keyboardStyle.bodyContents}>
                        <View style={keyboardStyle.keyboardLayout}>
                            <View style={keyboardStyle.keyboardLayoutFlex}>
                                {renderIf(this.state.keyboard == "mobile")(
                                <Button style={keyboardStyle.useBtnOn} onPress={() => this._mobileClick()}>
                                    <View style={{flex:0.1}}>
                                        <Image source={require('../../assets/img/icon/btn_icon_on.png')} resizeMode={'contain'} style={{width: 15, height: 15}}></Image>
                                    </View>
                                    <View style={{flex:0.9, paddingLeft:10}}>
                                        <Text style={keyboardStyle.useBtnTextOn}>모바일 키패드</Text>
                                    </View>
                                </Button>
                                )}

                                {renderIf(this.state.keyboard == "pc")(
                                    <Button style={keyboardStyle.useBtn} onPress={() => this._mobileClick()}>
                                        <View style={{flex:0.1}}>
                                            <Image source={require('../../assets/img/icon/btn_icon_off.png')} resizeMode={'contain'} style={{width: 15, height: 15}}></Image>
                                        </View>
                                        <View style={{flex:0.9, paddingLeft:10}}>
                                            <Text style={keyboardStyle.useBtnText}>모바일 키패드</Text>
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
                                {renderIf(this.state.keyboard == "pc")(
                                    <Button style={keyboardStyle.useBtnOn} onPress={() => this._pcClick()}>
                                        <View style={{flex:0.1}}>
                                            <Image source={require('../../assets/img/icon/btn_icon_on.png')} resizeMode={'contain'} style={{width: 15, height: 15}}></Image>
                                        </View>
                                        <View style={{flex:0.9, paddingLeft:10}}>
                                            <Text style={keyboardStyle.useBtnTextOn}>컴퓨터 키패드</Text>
                                        </View>
                                    </Button>
                                )}

                                {renderIf(this.state.keyboard == "mobile")(
                                    <Button style={keyboardStyle.useBtn} onPress={() => this._pcClick()}>
                                        <View style={{flex:0.1}}>
                                            <Image source={require('../../assets/img/icon/btn_icon_off.png')} resizeMode={'contain'} style={{width: 15, height: 15}}></Image>
                                        </View>
                                        <View style={{flex:0.9, paddingLeft:10}}>
                                            <Text style={keyboardStyle.useBtnText}>컴퓨터 키패드</Text>
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



