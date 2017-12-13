import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, StyleSheet, TouchableOpacity,Easing, BackAndroid, BackHandler, Platform, ToastAndroid, AppState,AsyncStorage} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Item, Icon, Input, Button, Tab, Tabs, TabHeading,Left,Body,Right,Title} from 'native-base';


export default class Main extends Component {
    render() {
        return (
            <Container style={{marginLeft:-5}}>

                <Body>
                    <View>
                        <Text>아이디</Text>
                    </View>
                    <View>
                        <Text>키패드</Text>
                    </View>
                    <View>
                        <Text>등급</Text>
                    </View>
                    <View>
                        <Text>파이값</Text>
                    </View>
                    <View>
                        <Text>연습</Text>
                    </View>
                    <View>
                        <Text>도전</Text>
                    </View>
                    <View>
                        <Text>구간연습</Text>
                    </View>
                    <View>
                        <Text>리더보드</Text>
                    </View>
                </Body>
            </Container>
        );
    }
}