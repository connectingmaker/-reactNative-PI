/**
 * Created by jccho on 2017. 12. 14..
 */

import { StyleSheet } from 'react-native';

export const MainFormStyle = StyleSheet.create({
    headerLayout: {
        justifyContent: 'center', alignItems: 'center', backgroundColor: "#f23611"

    }
    ,headerContent:{
        fontSize: 15 , color:"#fff",fontWeight:'bold'
    }
    ,backgroundImage: {
            flex: 1,
            position: 'absolute',
            resizeMode: 'cover',
            width: 100,
            height: 100,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center'
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
        ,justifyContent: 'center'
        ,alignItems: 'center'
    }
    ,contentsButtonText: {
        color:"#3e3e3e"
        ,fontSize:18
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

