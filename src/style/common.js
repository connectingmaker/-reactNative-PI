/**
 * Created by jccho on 2017. 12. 14..
 */
import { StyleSheet } from 'react-native';

export const commonStyle = StyleSheet.create({
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
    ,footerLayout: {
        justifyContent: 'center', alignItems: 'center', backgroundColor: "#000000"
    }

    ,footerColor: {
        color:"#fff"
    }

    ,headerTitleLayout: {
        justifyContent: 'center', alignItems: 'center', backgroundColor: "#f23611", flexDirection:'row'
    }
    ,headerTitleLeft: {
        flex:0.5
        ,alignItems:'flex-start'
        ,paddingTop:10
        ,paddingBottom:10
        ,paddingLeft:10
    }

    ,headerTitleRight: {
        flex:0.5
        ,alignItems:'flex-end'
        ,paddingTop:10
        ,paddingBottom:10
        ,paddingRight:10
    }
    ,headerTitleTxt: {
        fontSize:11
        ,color:"#fff"
    }


})