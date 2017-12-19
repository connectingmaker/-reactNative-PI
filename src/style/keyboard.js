/**
 * Created by jccho on 2017. 12. 14..
 */
import { StyleSheet } from 'react-native';

export const keyboardStyle = StyleSheet.create({
    bodyContents: {
        width:"100%"
        ,justifyContent: 'center'
        ,alignItems:'center'
        ,flexDirection: 'row'
        ,paddingLeft:10
        ,paddingRight:10

    }
    ,useBtn: {
        backgroundColor:"#ffffff"
        ,shadowColor: "rgba(0,0,0,23)"
        ,shadowOffset: { width: 0, height: 1 }
        ,shadowOpacity: 0.3
        ,width:"100%"
        ,paddingLeft: 20
    }
    ,contentslayout: {
        flex:1,flexDirection: 'row'
    }
    ,keyboardLayout: {
        justifyContent: 'center', width:"50%", paddingTop:10, flex:0.49
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
        ,justifyContent: 'center'
    }
    ,keyboardButtonTxt: {
        color:"#fff"
    }
})