/**
 * Created by jccho on 2017. 12. 14..
 */
/**
 * Created by jccho on 2017. 12. 14..
 */
import { StyleSheet } from 'react-native';

export const pivalueFormStyle = StyleSheet.create({
    headerLayout: {
        justifyContent: 'center', alignItems: 'center', backgroundColor: "#222222"
    }
    ,headerLayout2: {
        justifyContent: 'center', alignItems: 'center', backgroundColor: "#DA4211"

    }

    ,bodyLayout : {
        width: "100%"
    }
    ,title:{
        fontSize:20
        ,fontWeight:'bold'
    }
    ,fontStyle:{
        color:"#fff",fontSize:18,lineHeight:22
    }
    ,fontStyleTitle:{
        color:'#1e37b6',fontSize:18,fontWeight:'bold',paddingTop:20,paddingLeft:20
    }
    ,contentsLayout: {
        width: "100%"
        ,marginTop:10
        ,height:300
        ,marginTop:10
        ,paddingTop:10
        ,paddingBottom:10
        ,paddingLeft:20
        ,paddingRight:20
        ,backgroundColor:"#000"
        ,shadowColor: "rgba(0,0,0,23)"
        ,shadowOffset: { width: 0, height: 1 }
        ,shadowOpacity: 0.3
    }
    ,contentsLayout2: {
        width: "100%"
        ,marginTop:10
        ,paddingTop:10
        ,paddingBottom:10
        ,paddingLeft:20
        ,paddingRight:20
        ,backgroundColor:"#f23611"
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
    ,input: {
        fontSize:12
        ,paddingTop:13
        ,paddingLeft:11
        ,paddingBottom:12
        ,height:38
        ,backgroundColor: "#ffffff"
    }

    ,lingBg: {
        backgroundColor:"rgba(127,127,127,0.3)"
        ,height:1
        ,marginTop:10
        ,marginBottom:10

    }


})