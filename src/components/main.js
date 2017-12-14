import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity,Easing, BackAndroid, BackHandler, Platform, ToastAndroid, AppState,AsyncStorage,Button,ImageBackground} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Item, Icon, Input, Tab, Tabs, TabHeading,Left,Body,Right,Title} from 'native-base';


import { MainFormStyle } from '../style/main.js';

export default class Main extends Component {
    render() {
        return (

            <Container style={{marginLeft:-5}}>
                <Header style={MainFormStyle.headerLayout}>
                    <Left style={{flex:1}}>
                        <TouchableOpacity onPress={Actions.Grade}>
                            <Text style={MainFormStyle.headerContent}> Halley's Comet</Text>
                        </TouchableOpacity>
                    </Left>
                    <Right style={{flex:1}}>
                        <TouchableOpacity onPress={Actions.Readerboard}>
                            <Text style={MainFormStyle.headerContent}> 최고기록 : 0 </Text>
                        </TouchableOpacity>
                    </Right>

                </Header>
                <Content style={MainFormStyle.contentsLayout}>
                    <View style={MainFormStyle.contentsHeaderLayout}>
                        <View style={{alignItems: 'center',justifyContent:'center',paddingTop:40}}>
                            <Text style={MainFormStyle.boldFont}>Halley's Comet</Text>
                        </View>

                        <View style={{alignItems: 'center',justifyContent:'center',paddingTop:20,paddingBottom:20}}>
                            <ImageBackground source={require('../../assets/img/main/circle_img.png')} resizeMode={'contain'} style={{width:92,height:92}}>
                                <Text></Text>
                                {/*{this.props.children}*/}

                            </ImageBackground>
                        </View>

                    </View>
                    <View style={{paddingTop:10}}>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Idsetting} title="아이디 설정" color="#3e3e3e"></Button>
                                </View>
                            </View>
                            <View style={{flex:0.04}}></View>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Keyboard} title="키패드 설정" color="#3e3e3e"></Button>
                                </View>
                            </View>
                        </View>

                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Grade} title="등급보기" color="#3e3e3e"></Button>
                                </View>
                            </View>
                            <View style={{flex:0.04}}></View>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Pivalue} title="파이값 보기" color="#3e3e3e"></Button>
                                </View>
                            </View>
                        </View>

                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Pirecord} title="연습" color="#3e3e3e"></Button>
                                </View>
                            </View>
                            <View style={{flex:0.04}}></View>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Pichallenge} title="도전" color="#3e3e3e"></Button>
                                </View>
                            </View>
                        </View>


                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Pisection} title="구간연습" color="#3e3e3e"></Button>
                                </View>
                            </View>
                            <View style={{flex:0.04}}></View>
                            <View style={{flex:0.48}}>
                                <View style={MainFormStyle.contentsButtonLayout}>
                                    <Button onPress={Actions.Readerboard} title="리더보드" color="#3e3e3e"></Button>
                                </View>
                            </View>
                        </View>
                    </View>



                </Content>

            </Container>
        );
    }
}

