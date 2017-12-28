/**
 * Created by jccho on 2017. 12. 14..
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity,AlertIOS,Alert,Platform,ScrollView,WebView } from 'react-native';
import { Container, Header, Body, Content, Footer,Item, Icon, Input,Button,Spinner } from 'native-base';
import HTML from 'react-native-render-html';

import {pivalueFormStyle} from '../style/pivalue';


import pi from '../config/pi_config'
import renderIf from 'render-if'




export default class pivalue extends Component {

    constructor(){
        super();
        this.state = {
            piData: ""
            ,loadding:false
        }


    }

    componentWillMount()
    {
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
        var piArr = Array.from(pi.pi_config);
        this.setState({piData:piArr});

    }

    _piText()
    {

    }

    minus()
    {

    }

    plus()
    {

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
                        <TouchableOpacity onPress={Actions.pop} style={{flex:.2, alignItems: 'flex-start'}}>
                            <View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize:12,color:'#fff'}}> Back </Text>
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

                        <WebView source={require('../webapp/pivalue.html')} style={{width:"100%", height:350}}></WebView>

                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:0.6}}>
                                <Text style={pivalueFormStyle.fontStyleTitle}>그룹핑 : 1 </Text>
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


    }
}



