/**
 * Created by jccho on 2017. 12. 14..
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
    View, Text, Image, StyleSheet, TouchableOpacity, AlertIOS, Alert, Platform, ScrollView, WebView,
    BackAndroid
} from 'react-native';
import { Container, Header, Left, Body, Right, Content, Footer,Item, Icon, Input,Button,Spinner, Title} from 'native-base';
import HTML from 'react-native-render-html';

import {pivalueFormStyle} from '../style/pivalue';
import {commonStyle} from "../style/common";


import pi from '../config/pi_config'
import renderIf from 'render-if'




export default class pivalue extends Component {


    constructor(){
        super();
        this.state = {
            piData: ""
            ,loadding:false
            ,max:1000
            ,view:1
        }

        this.webView = null;


    }

    onMessage( event ) {
        console.log( "On Message", event.nativeEvent.data );
    }

    sendPostMessage(view, max) {
        /*
        setTimeout(() => {
            this.webView.postMessage(view+"///"+max);
        }, 1000)
        */

        this.webView.postMessage(view+"///"+max);

    }

    componentWillMount()
    {

        BackAndroid.addEventListener('hardwareBackPress', () => Actions.pop());
    }

    componentDidMount()
    {
        this.mounted = true;

        this._piText();

    }

    componentWillUnmount()
    {
        this.mounted = false;



    }

    _piValue(value)
    {
        this.setState({loadding:false});
        var piData = "";
        this.setState({piData:piArr});

    }

    _piText()
    {

    }

    minus()
    {
        if(this.state.view == 1) {
        } else {
            var view = this.state.view - 1;
            this.setState({view:view});
            this.sendPostMessage(view, this.state.max);
        }




    }

    plus()
    {
        if(this.state.view == 10) {

        } else {
            var view = this.state.view + 1;
            this.setState({view:view});
            this.sendPostMessage(view, this.state.max);

        }
    }

    max1000()
    {
        this.setState({max:1001});
        this.sendPostMessage(this.state.view, 1001);
    }

    max5000()
    {
        this.setState({max:5001});
        this.sendPostMessage(this.state.view, 5001);
    }

    max10000()
    {
        this.setState({max:10001});
        this.sendPostMessage(this.state.view, 10001);
    }

    render() {
        /*
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

                    <ScrollView style={pivalueFormStyle.contentsLayout}>


                    </ScrollView>

                    <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                        <View style={{flex:0.6}}>
                            <Text style={pivalueFormStyle.fontStyleTitle}>자리수 끊기 : 1 </Text>
                        </View>
                        <View style={{flex:0.4}}>
                            <View style={{flex:1, flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                                <View style={{flex:0.45}}>

                                    <Button bordered full style={{borderColor:"#979797"}} onPress={()=>this.minus()}>
                                        <Text> - </Text>
                                    </Button>
                                </View>

                                <View style={{flex:0.1}}>

                                </View>

                                <View style={{flex:0.45}}>
                                    <Button bordered full style={{borderColor:"#979797"}} onPress={()=>this.plus()}>
                                        <Text> + </Text>
                                    </Button>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style={{flex:1,flexDirection: 'row', paddingTop:10, paddingBottom:5,alignItems:'center',justifyContent:'center'}}>
                        <View style={{flex:0.3}}>
                            <Button bordered full style={{borderColor:"#979797",borderWidth:10,height:70,borderRadius:10}}>
                                <View style={{flex:1,alignItems:'center'}}>
                                    <Text style={{color:'#405ce7',fontSize:15,fontWeight:'bold',paddingTop:5,paddingBottom:10}}>1,000</Text>
                                    <Text>자리까지</Text>
                                </View>

                            </Button>
                        </View>

                        <View style={{flex:0.3,paddingLeft:10}}>
                            <Button bordered full style={{borderColor:"#979797",borderWidth:10,height:70,borderRadius:10}}>
                                <View style={{flex:1,alignItems:'center'}}>
                                    <Text style={{color:'#ff0018',fontSize:15,fontWeight:'bold',paddingTop:5,paddingBottom:10}}>5,000</Text>
                                    <Text>자리까지</Text>
                                </View>

                            </Button>
                        </View>

                        <View style={{flex:0.3,paddingLeft:10}}>
                            <Button bordered full style={{borderColor:"#979797",borderWidth:10,height:70,borderRadius:10}}>
                                <View style={{flex:1,alignItems:'center'}}>
                                    <Text style={{color:'#377a0e',fontSize:15,fontWeight:'bold',paddingTop:5,paddingBottom:10}}>10,000</Text>
                                    <Text>자리까지</Text>
                                </View>

                            </Button>
                        </View>
                    </View>


                </Content>
            </Container>
        );
        */
            return (
                <Container>
                    <Header style={pivalueFormStyle.headerLayout}>
                        {/*<TouchableOpacity onPress={Actions.pop} style={{flex:.2, alignItems: 'flex-start'}}>*/}
                            {/*<View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>*/}
                                {/*<Text style={{fontSize:12,color:'#fff'}}> Back </Text>*/}
                            {/*</View>*/}
                        {/*</TouchableOpacity>*/}
                        {/*<View style={{flex:.6, justifyContent: 'center', alignItems: 'center'}}>*/}
                            {/*<Text style={{fontSize:16,color:'#fff'}}>파이값 보기</Text>*/}
                        {/*</View>*/}
                        {/*<View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>*/}
                        {/*</View>*/}
                        <Left style={{flex:1, justifyContent: 'center', alignItems: 'flex-start'}}>
                            <Button style={commonStyle.backBtn} onPress={Actions.pop} >
                                <Title style={{fontSize:14,color:'#fff'}}> BACK </Title>
                            </Button>
                        </Left>

                        <Body style={{flex:1,  justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{fontSize:16,color:'#fff'}}>파이 값 보기</Title>
                        </Body>
                        <Right>

                        </Right>
                    </Header>

                    <Content style={{padding:10}}>



                        <View>
                            <Text style={pivalueFormStyle.title}>π= 3.</Text>
                        </View>

                        <WebView ref={webview => { this.webView = webview; }} source={require('../webapp/pivalue.html')} style={{width:"100%", height:350}} javaScriptEnabledAndroid={true} javaScriptEnabled={true}></WebView>

                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:0.6}}>
                                <Text style={pivalueFormStyle.fontStyleTitle}>그룹핑 : {this.state.view} </Text>
                            </View>
                            <View style={{flex:0.4}}>
                                <View style={{flex:1, flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                                    <View style={{flex:0.45}}>

                                        <Button bordered full style={{borderColor:"#979797"}} onPress={()=>this.minus()}>
                                            <Text> - </Text>
                                        </Button>
                                    </View>

                                    <View style={{flex:0.1}}>

                                    </View>

                                    <View style={{flex:0.45}}>
                                        <Button bordered full style={{borderColor:"#979797"}} onPress={()=>this.plus()}>
                                            <Text> + </Text>
                                        </Button>
                                    </View>
                                </View>
                            </View>

                        </View>

                        <View style={{flex:1,flexDirection: 'row', paddingTop:10, paddingBottom:5,alignItems:'center',justifyContent:'center'}}>
                            <View style={{flex:0.3}}>
                                <Button bordered full style={{borderColor:"#979797",borderWidth:10,height:70,borderRadius:10}} onPress={() => this.max1000()}>
                                    <View style={{flex:1,alignItems:'center'}}>
                                        <Text style={{color:'#405ce7',fontSize:15,fontWeight:'bold',paddingTop:5,paddingBottom:10}}>1,000</Text>
                                        <Text>자리까지</Text>
                                    </View>

                                </Button>
                            </View>

                            <View style={{flex:0.3,paddingLeft:10}}>
                                <Button bordered full style={{borderColor:"#979797",borderWidth:10,height:70,borderRadius:10}} onPress={() => this.max5000()}>
                                    <View style={{flex:1,alignItems:'center'}}>
                                        <Text style={{color:'#ff0018',fontSize:15,fontWeight:'bold',paddingTop:5,paddingBottom:10}}>5,000</Text>
                                        <Text>자리까지</Text>
                                    </View>

                                </Button>
                            </View>

                            <View style={{flex:0.3,paddingLeft:10}}>
                                <Button bordered full style={{borderColor:"#979797",borderWidth:10,height:70,borderRadius:10}} onPress={() => this.max10000()}>
                                    <View style={{flex:1,alignItems:'center'}}>
                                        <Text style={{color:'#377a0e',fontSize:15,fontWeight:'bold',paddingTop:5,paddingBottom:10}}>10,000</Text>
                                        <Text>자리까지</Text>
                                    </View>

                                </Button>
                            </View>
                        </View>


                    </Content>
                </Container>
            );


    }
}



