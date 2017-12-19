/**
 * Created by jccho on 2017. 12. 14..
 */
import { StyleSheet } from 'react-native';

export const keyboardStyle = StyleSheet.create({
    bodyContents: {
        width:"70%"
    }
    ,useBtn: {
        backgroundColor:"#ffffff"
        ,shadowColor: "rgba(0,0,0,23)"
        ,shadowOffset: { width: 0, height: 1 }
        ,shadowOpacity: 0.3
        ,width:"100%"
        ,paddingLeft: 20
    }
    ,keyboardLayoutFlex: {
        width:"100%"

    }

    // ,keyboardView: {
    //     flexDirection: 'row', flex:1
    // }
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