import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity,Easing, BackAndroid, BackHandler, Platform, ToastAndroid, AppState,AsyncStorage,Button} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Item, Icon, Input, Tab, Tabs, TabHeading,Left,Body,Right,Title} from 'native-base';


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
                            <Image source={require('../../assets/img/main/circle_img.png')} resizeMode={'contain'} style={{width:92, height:92}}/>
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

const MainFormStyle = StyleSheet.create({
    headerLayout: {
        justifyContent: 'center', alignItems: 'center', backgroundColor: "#f23611"

    }
    ,headerContent:{
        fontSize: 15 , color:"#fff",fontWeight:'bold'
    }
    ,contentsLayout: {
        width: "100%"
        ,paddingTop:10
        ,paddingBottom:10
        ,paddingLeft:20
        ,paddingRight:20
        ,backgroundColor:"#f6f6f6"

    }
    ,contentsHeaderLayout: {
        width: "100%"
        ,height:200
        ,paddingTop:5
        ,paddingBottom:5
        ,backgroundColor:"#fff"
        ,shadowColor: "rgba(0,0,0,23)"
        ,shadowOffset: { width: 0, height: 1 }
        ,shadowOpacity: 0.3
    }
    ,contentsButtonLayout: {
        width: "100%"
        ,height:50
        ,paddingTop:10
        ,paddingBottom:10
        ,backgroundColor:"#fff"
        ,shadowColor: "rgba(0,0,0,23)"
        ,shadowOffset: { width: 0, height: 1 }
        ,shadowOpacity: 0.3
    }
    ,contentsSize: {
        fontSize:13
        ,lineHeight:25
    }
    ,boldFont: {
        color:"#f23611"
        ,fontWeight: 'bold'

    }
    ,lingBg: {
        backgroundColor:"rgba(127,127,127,0.3)"
        ,height:1
        ,marginTop:10
        ,marginBottom:10

    }
    ,buttonStyle: {
        fontSize:15
        ,borderWidth:1
        ,borderColor:"#979797"
        ,backgroundColor:"#09C"

    }

})