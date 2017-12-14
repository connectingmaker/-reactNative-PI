import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity,Easing, BackAndroid, BackHandler, Platform, ToastAndroid, AppState,AsyncStorage,Button} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Item, Icon, Input, Tab, Tabs, TabHeading,Left,Body,Right,Title} from 'native-base';


export default class Main extends Component {
    render() {
        return (

            <Container style={{marginLeft:-5}}>
                <Header style={MainFormStyle.headerLayout}>
                    <Text>파이킹</Text>

                </Header>
                <Content style={MainFormStyle.contentsLayout}>



                    <Button onPress={Actions.Idsetting} title="아이디" color="#841584" accessibilityLabel="Learn more about this purple button">
                        <Text>아이디</Text>
                    </Button>
                    <Button onPress={Actions.Keyboard} title="키패드" color="#841584" accessibilityLabel="Learn more about this purple button">
                        <Text>키패드</Text>
                    </Button>
                    <Button  onPress={Actions.Grade} title="등급" color="#841584" accessibilityLabel="Learn more about this purple button">
                        <Text>등</Text>
                    </Button>
                    <Button onPress={Actions.Pivalue} title="파이값" color="#841584" accessibilityLabel="Learn more about this purple button">
                        <Text>파이값</Text>
                    </Button>
                    <Button onPress={Actions.Pirecord} title="연습" color="#841584" accessibilityLabel="Learn more about this purple button">
                        <Text>연습</Text>
                    </Button>
                    <Button onPress={Actions.Pichallenge} title="도전" color="#841584" accessibilityLabel="Learn more about this purple button">
                        <Text>도전</Text>
                    </Button>
                    <Button onPress={Actions.Pisection} title="구간연습" color="#841584" accessibilityLabel="Learn more about this purple button">
                        <Text>구간연습</Text>
                    </Button>
                    <Button onPress={Actions.Readerboard} title="리더보드" color="#841584" accessibilityLabel="Learn more about this purple button">
                        <Text>리더보드</Text>
                    </Button>
                </Content>

            </Container>
        );
    }
}

const MainFormStyle = StyleSheet.create({
    headerLayout: {
        justifyContent: 'center', alignItems: 'center', backgroundColor: "#ffffff"

    }
    ,bodyLayout : {
        width: "100%"

    }
    ,contentsLayout: {
        width: "100%"
        ,paddingTop:10
        ,paddingBottom:10
        ,paddingLeft:20
        ,paddingRight:20
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
        color:"#DA4211"
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