/**
 * Created by jccho on 2017. 12. 14..
 */
import {Dimensions, StyleSheet} from 'react-native';
const { width, height } = Dimensions.get('window');


export const keyboardStyle = StyleSheet.create({
    bodyContents: {
        width:"100%"
        ,justifyContent: 'center'
        ,alignItems:'center'
        ,flexDirection: 'row'
        ,paddingLeft:5
        ,paddingRight:5
        ,paddingTop:100

    }
    ,useBtn: {
        backgroundColor:"#ffffff"
        ,shadowColor: "rgba(0,0,0,23)"
        ,shadowOffset: { width: 0, height: 1 }
        ,shadowOpacity: 0.3
        ,width:"100%"
        ,paddingLeft: 20

    }
    ,useBtnOn: {
        backgroundColor:"#da4211"
        ,shadowColor: "rgba(0,0,0,23)"
        ,shadowOffset: { width: 0, height: 1 }
        ,shadowOpacity: 0.3
        ,width:"100%"
        ,paddingLeft: 20
    }
    ,useBtnText: {
        color:"#000"
    }
    ,useBtnTextOn: {
        color:"#fff"
    }
    ,contentslayout: {
        flex:1,flexDirection: 'row'
    }
    ,keyboardLayout: {
        justifyContent: 'center', width:"50%", paddingTop:10, flex:0.43
    }
    ,keyboardLayoutFlex: {
        width:"100%"
        ,paddingBottom:5
    }

    ,keyboardView: {
        flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:0
    }
    ,keyboardButtonLayout: {
        width:"100%"
    }
    ,keyboardButton: {
        backgroundColor:"#404040"
        ,width:"100%"
        ,height:(height / 10)
        ,justifyContent: 'center'
    }

    ,keyboardButtonNot: {
        // backgroundColor:"#f23611"
        backgroundColor:"#ff7c80"
        ,width:"100%"
        ,height:(height / 10)
        ,justifyContent: 'center'
    }

    ,keyboardButtonOk: {
        // backgroundColor:"#00a2ff"
        backgroundColor:"#afabab"
        ,width:"100%"
        ,height:(height / 10)
        ,justifyContent: 'center'
    }


    ,keyboardButtonTxt: {
        color:"#fff"
        ,fontWeight:"bold"
        ,fontSize:14
    }
})