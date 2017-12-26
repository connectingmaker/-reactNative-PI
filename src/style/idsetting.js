/**
 * Created by jccho on 2017. 12. 22..
 */
import { StyleSheet } from 'react-native';

export const idFormStyle = StyleSheet.create({
    headerLayout: {
        justifyContent: 'center', alignItems: 'center', backgroundColor: "#222222"
    }
    ,headerLayout2: {
        justifyContent: 'center', alignItems: 'center', backgroundColor: "#DA4211"

    }
    ,contentheaderLayout: {
        justifyContent: 'center', alignItems: 'center', backgroundColor: "#f23611"

    }
    ,contentheaderContent:{
        fontSize: 15 , color:"#fff",fontWeight:'bold'
    }
    ,bodyLayout : {
        width: "100%"
    }
    ,contentsLayout: {
        width: "100%"
        ,marginTop:10
        ,paddingTop:10
        ,paddingBottom:10
        ,paddingLeft:20
        ,paddingRight:20
        ,backgroundColor:"#fff"
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
        ,width:150
        ,height:40
        ,borderBottomColor: '#4d4d4d'
        ,borderBottomWidth: 1
        ,backgroundColor: "#ffffff"
    }
    ,title:{
        justifyContent: 'center'
        ,alignItems: 'center'
        ,marginTop:12

    }
    ,instructions: {
        fontSize: 12,
        textAlign: 'center',
        color: '#888',
        marginBottom: 5
    }
    ,data: {
        padding: 15,
        marginTop: 10,
        backgroundColor: '#ddd',
        borderColor: '#888',
        borderWidth: 1,
        color: '#777'
    }

    ,lingBg: {
        backgroundColor:"rgba(127,127,127,0.3)"
        ,height:1
        ,marginTop:10
        ,marginBottom:10

    }
    ,body: {
        width: 300,
        backgroundColor: '#ffffff',
        maxHeight: 300,
        borderRadius: 5,
        overflow: 'hidden',
    }
    ,option: {
        width: 300,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        flexDirection: 'row',
    }


})