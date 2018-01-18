/**
 * Created by jccho on 2017. 12. 14..
 */
import React, { Component } from 'react';
import {Actions } from 'react-native-router-flux';
import {
    View, Text, AppRegistry, Image, StyleSheet, TouchableOpacity, AlertIOS, Alert, Platform, TextInput,
    AsyncStorage, BackAndroid
} from 'react-native';
import {Container, Header, Left, Body, Right, Content, Footer,Item, Icon, Input,Button,Title } from 'native-base';
import ModalSelector from 'react-native-modal-selector';



import {idFormStyle} from '../style/idsetting';
import {commonStyle} from "../style/common";


import FormData from 'FormData';
import config from "../config/config";

import renderIf from 'render-if'


export default class Idsetting extends Component {

    constructor(){
        super();
        this.state = {
            countryData: ""
            ,uid:""
            ,textInputValue: ''
            ,textInputValue2: ''
            ,textInputValue3: ''
            ,countryImg: ""
            ,username:''
            ,country:''
            ,age:''
            ,gender:''
            ,challenge_recordCnt:0
            ,challenge_grade:''
            ,keyboard:''
            ,payment_start:0
            ,payment_end:0
            ,timer:""

        }

    }

    _contryChange(option)
    {
        this.setState({textInputValue:option.label,countryImg:option.img})
    }

    componentWillMount()
    {
        this.loadData();
        BackAndroid.addEventListener('hardwareBackPress', () => Actions.pop({ refresh: {refresh:true} }));
    }
    loadData()
    {

        AsyncStorage.getItem(config.STORE_KEY).then((value) => {
            var json = eval("("+value+")");
            console.log(json);
            if(json!=null) {
                var username = json.USERNAME;
                var country = json.COUNTRY;
                var countryImg = json.COUNTRYIMG;
                var age = json.AGE;
                var gender = json.GENDER;
                var uid = json.UID;
                var challenge_recordCnt = json.challenge_recordCnt;
                var challenge_grade = json.challenge_grade;
                var keyboard = json.KEYBOARD;
                var payment_start = json.payment_start;
                var payment_end = json.payment_end;
                var timer = json.TIMER;


                if(uid != null) {
                    this.setState({uid:uid});
                }
                if (username != null) {
                    this.setState({USERNAME: username});
                    // AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(username), () => {
                    //     this.setState({USERNAME: username});
                    // });
                }

                if (country != null) {
                    this.setState({textInputValue: country});
                }
                if (countryImg != null) {
                    this.setState({countryImg: countryImg});
                }
                if (age != null) {
                    this.setState({textInputValue3: age});
                }
                if (gender != null) {
                    this.setState({textInputValue2: gender});
                }

                if (uid != null) {
                    this.setState({uid: uid});
                }

                if(keyboard != null) {
                    this.setState({keyboard:keyboard});
                }

                if(challenge_recordCnt != null) {
                    this.setState({challenge_recordCnt:challenge_recordCnt});
                }

                if(challenge_grade != null) {
                    this.setState({challenge_grade:challenge_grade});
                }

                if(payment_start != null) {
                    this.setState({payment_start:payment_start});
                }

                if(payment_end != null) {
                    this.setState({payment_end:payment_end});
                }

                if(timer != null){
                    this.setState({timer:timer});
                }



            }
        }).then(res => {
        });
    }

    _save()
    {
        // var dataObject = {
        //     "USERNAME": this.state.USERNAME
        //     ,"COUNTRY" : this.state.textInputValue
        //     ,"COUNTRYIMG" : this.state.countryImg
        //     ,"AGE" : this.state.textInputValue3
        //     ,"GENDER" : this.state.textInputValue2
        // };

        if(this.state.USERNAME == "") {
            Alert.alert(
                '',
                '사용할 이을를 입력해주세요.',
                [
                    {text: '확인', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false}
            )
            return;
        }else if(this.state.COUNTRY == ""){
            Alert.alert(
                '',
                '국적을 선택해주세요.',
                [
                    {text: '확인', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false}
            )
            return;
        }else if(this.state.AGE == ""){
            Alert.alert(
                '',
                '나이을 선택해주세요.',
                [
                    {text: '확인', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false}
            )
            return;
        }else if(this.state.GENDER == "") {
            Alert.alert(
                '',
                '성별을 선택해주세요.',
                [
                    {text: '확인', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false}
            )
            return;
        }else{



            if(this.state.challenge_timer == ""){
                this.state.challenge_timer = 0;
            }

            if(this.state.challenge_recordCnt == ""){
                this.state.challenge_recordCnt = 0;
            }

            var formData = new FormData();
            formData.append('UID', this.state.uid);
            formData.append('USERNAME', this.state.USERNAME);
            formData.append('COUNTRY', this.state.textInputValue);
            formData.append('COUNTRYIMG', this.state.countryImg);
            formData.append('AGE', this.state.textInputValue3);
            formData.append('GENDER', this.state.textInputValue2);
            formData.append('TIMER', this.state.challenge_timer);
            formData.append('CNT', this.state.challenge_recordCnt);
            var object = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                body:formData
            };

            //console.log(object);


            fetch(config.SERVER_URL+'/member/memberInsert', object)
                .then((response) => response.json())
                .then((responseJson) => {



                    var object = {
                        UID : responseJson.UID
                        ,USERNAME : responseJson.USERNAME
                        ,COUNTRY : responseJson.COUNTRY
                        ,COUNTRYIMG : responseJson.COUNTRYIMG
                        ,AGE : responseJson.AGE
                        ,GENDER : responseJson.GENDER
                        ,TIMER : responseJson.TIMER
                        ,CNT : responseJson.CNT
                        ,keyboard:this.state.keyboard
                        ,grade:responseJson.GRADE
                        ,challenge_grade:this.state.challenge_grade
                        ,challenge_recordCnt:this.state.challenge_recordCnt
                        ,payment_start:this.state.payment_start
                        ,payment_end:this.state.payment_end
                    }

                    console.log("아이디저장");
                    console.log(object);


                    AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(object), () => {
                        this.setState({
                            UID:responseJson.UID
                            ,USERNAME:responseJson.USERNAME
                            ,COUNTRY:responseJson.COUNTRY
                            ,COUNTRYIMG:responseJson.COUNTRYIMG
                            ,AGE:responseJson.AGE
                            ,GENDER:responseJson.GENDER
                        });
                        Actions.pop();
                    });


                })
                .catch((error) => {
                    console.error(error);
                });


        }

    }

    render() {
        const data = [

            { key: 1, label: 'Afghanistan', img: '../../assets/img/id/af.png' },
            { key: 2, label: 'Åland Islands', img: '../../assets/img/id/ax.png' },
            { key: 3, label: 'Albania', img: '../../assets/img/id/al.png' },
            { key: 4, label: 'Algeria', img: '../../assets/img/id/dz.png' },
            { key: 5, label: 'American Samoa', img: '../../assets/img/id/as.png' },
            { key: 6, label: 'Andorra', img: '../../assets/img/id/ad.png' },
            { key: 7, label: 'Angola', img: '../../assets/img/id/ao.png' },
            { key: 8, label: 'Anguilla', img: '../../assets/img/id/ai.png' },
            { key: 9, label: 'Antarctica', img: '../../assets/img/id/aq.png' },
            { key: 10, label: 'Antigua and Barbuda', img: '../../assets/img/id/ag.png' },
            { key: 11, label: 'Argentina', img: '../../assets/img/id/ar.png' },
            { key: 12, label: 'Armenia', img: '../../assets/img/id/am.png' },
            { key: 13, label: 'Aruba', img: '../../assets/img/id/aw.png' },
            { key: 14, label: 'Australia', img: '../../assets/img/id/au.png' },
            { key: 15, label: 'Austria', img: '../../assets/img/id/at.png' },
            { key: 16, label: 'Azerbaijan', img: '../../assets/img/id/az.png' },
            { key: 17, label: 'Bahamas', img: '../../assets/img/id/bs.png' },
            { key: 18, label: 'Bahrain', img: '../../assets/img/id/bh.png' },
            { key: 19, label: 'Bangladesh', img: '../../assets/img/id/bd.png' },
            { key: 20, label: 'Barbados', img: '../../assets/img/id/bb.png' },
            { key: 21, label: 'Belarus', img: '../../assets/img/id/by.png' },
            { key: 22, label: 'Belgium', img: '../../assets/img/id/be.png' },
            { key: 23, label: 'Belize', img: '../../assets/img/id/bz.png' },
            { key: 24, label: 'Benin', img: '../../assets/img/id/bj.png' },
            { key: 25, label: 'Bermuda', img: '../../assets/img/id/bm.png' },
            { key: 26, label: 'Bhutan', img: '../../assets/img/id/bt.png' },
            { key: 27, label: 'Bolivia', img: '../../assets/img/id/bo.png' },
            { key: 28, label: 'Bosnia and Herzegovina', img: '../../assets/img/id/ba.png' },
            { key: 29, label: 'Botswana', img: '../../assets/img/id/bw.png' },
            { key: 30, label: 'Bouvet Island', img: '../../assets/img/id/bv.png' },
            { key: 31, label: 'Brazil', img: '../../assets/img/id/br.png' },
            { key: 32, label: 'British Indian Ocean Territory', img: '../../assets/img/id/io.png' },
            { key: 33, label: 'British Virgin Islands', img: '../../assets/img/id/vg.png' },
            { key: 34, label: 'Brunei', img: '../../assets/img/id/bn.png' },
            { key: 35, label: 'Bulgaria', img: '../../assets/img/id/bg.png' },
            { key: 36, label: 'Burkina Faso', img: '../../assets/img/id/bf.png' },
            { key: 37, label: 'Burundi', img: '../../assets/img/id/bi.png' },
            { key: 38, label: 'Cambodia', img: '../../assets/img/id/kh.png' },
            { key: 39, label: 'Cameroon', img: '../../assets/img/id/cm.png' },
            { key: 40, label: 'Canada', img: '../../assets/img/id/ca.png' },
            { key: 41, label: 'Cape Verde', img: '../../assets/img/id/cv.png' },
            { key: 42, label: 'Cayman Islands', img: '../../assets/img/id/ky.png' },
            { key: 43, label: 'Central African Republic', img: '../../assets/img/id/cf.png' },
            { key: 44, label: 'Chad', img: '../../assets/img/id/td.png' },
            { key: 45, label: 'Chile', img: '../../assets/img/id/cl.png' },
            { key: 46, label: 'China', img: '../../assets/img/id/cn.png' },
            { key: 47, label: 'Christmas Island', img: '../../assets/img/id/cx.png' },
            { key: 48, label: 'Cocos (Keeling) Islands', img: '../../assets/img/id/cc.png' },
            { key: 49, label: 'Colombia', img: '../../assets/img/id/co.png' },
            { key: 50, label: 'Comoros', img: '../../assets/img/id/km.png' },
            { key: 51, label: 'Cook Islands', img: '../../assets/img/id/ck.png' },
            { key: 52, label: 'Costa Rica', img: '../../assets/img/id/cr.png' },
            { key: 53, label: 'Croatia', img: '../../assets/img/id/hr.png' },
            { key: 54, label: 'Cuba', img: '../../assets/img/id/cu.png' },
            { key: 55, label: 'Curaçao', img: '../../assets/img/id/cw.png' },
            { key: 56, label: 'Cyprus', img: '../../assets/img/id/cy.png' },
            { key: 57, label: 'Czech Republic', img: '../../assets/img/id/cz.png' },
            { key: 58, label: 'Denmark', img: '../../assets/img/id/dk.png' },
            { key: 59, label: 'Djibouti', img: '../../assets/img/id/dj.png' },
            { key: 60, label: 'Dominica', img: '../../assets/img/id/dm.png' },
            { key: 61, label: 'Dominican Republic', img: '../../assets/img/id/do.png' },
            { key: 62, label: 'DR Congo', img: '../../assets/img/id/cd.png' },
            { key: 63, label: 'Ecuador', img: '../../assets/img/id/ec.png' },
            { key: 64, label: 'Egypt', img: '../../assets/img/id/eg.png' },
            { key: 65, label: 'El Salvador', img: '../../assets/img/id/sv.png' },
            { key: 66, label: 'Equatorial Guinea', img: '../../assets/img/id/gq.png' },
            { key: 67, label: 'Eritrea', img: '../../assets/img/id/er.png' },
            { key: 68, label: 'Estonia', img: '../../assets/img/id/ee.png' },
            { key: 69, label: 'Ethiopia', img: '../../assets/img/id/et.png' },
            { key: 70, label: 'Falkland Islands', img: '../../assets/img/id/fk.png' },
            { key: 71, label: 'Faroe Islands', img: '../../assets/img/id/fo.png' },
            { key: 72, label: 'Fiji', img: '../../assets/img/id/fj.png' },
            { key: 73, label: 'Finland', img: '../../assets/img/id/fi.png' },
            { key: 74, label: 'France', img: '../../assets/img/id/fr.png' },
            { key: 75, label: 'French Guiana', img: '../../assets/img/id/gf.png' },
            { key: 76, label: 'French Polynesia', img: '../../assets/img/id/pf.png' },
            { key: 77, label: 'French Southern and Antarctic Lands', img: '../../assets/img/id/tf.png' },
            { key: 78, label: 'Gabon', img: '../../assets/img/id/ga.png' },
            { key: 79, label: 'Gambia', img: '../../assets/img/id/gm.png' },
            { key: 80, label: 'Georgia', img: '../../assets/img/id/ge.png' },
            { key: 81, label: 'Germany', img: '../../assets/img/id/de.png' },
            { key: 82, label: 'Ghana', img: '../../assets/img/id/gh.png' },
            { key: 83, label: 'Gibraltar', img: '../../assets/img/id/gi.png' },
            { key: 84, label: 'Greece', img: '../../assets/img/id/gr.png' },
            { key: 85, label: 'Greenland', img: '../../assets/img/id/gl.png' },
            { key: 86, label: 'Grenada', img: '../../assets/img/id/gd.png' },
            { key: 87, label: 'Guadeloupe', img: '../../assets/img/id/gp.png' },
            { key: 88, label: 'Guam', img: '../../assets/img/id/gu.png' },
            { key: 89, label: 'Guatemala', img: '../../assets/img/id/gt.png' },
            { key: 90, label: 'Guernsey', img: '../../assets/img/id/gg.png' },
            { key: 91, label: 'Guinea', img: '../../assets/img/id/gn.png' },
            { key: 92, label: 'Guinea-Bissau', img: '../../assets/img/id/gw.png' },
            { key: 93, label: 'Guyana', img: '../../assets/img/id/gy.png' },
            { key: 94, label: 'Haiti', img: '../../assets/img/id/ht.png' },
            { key: 95, label: 'Heard Island and McDonald Islands', img: '../../assets/img/id/hm.png' },
            { key: 96, label: 'Honduras', img: '../../assets/img/id/hn.png' },
            { key: 97, label: 'Hong Kong', img: '../../assets/img/id/hk.png' },
            { key: 98, label: 'Hungary', img: '../../assets/img/id/hu.png' },
            { key: 99, label: 'Iceland', img: '../../assets/img/id/is.png' },
            { key: 100, label: 'India', img: '../../assets/img/id/in.png' },
            { key: 101, label: 'Indonesia', img: '../../assets/img/id/id.png' },
            { key: 102, label: 'Iran', img: '../../assets/img/id/ir.png' },
            { key: 103, label: 'Iraq', img: '../../assets/img/id/iq.png' },
            { key: 104, label: 'Ireland', img: '../../assets/img/id/ie.png' },
            { key: 105, label: 'Isle of Man', img: '../../assets/img/id/im.png' },
            { key: 106, label: 'Israel', img: '../../assets/img/id/il.png' },
            { key: 107, label: 'Italy', img: '../../assets/img/id/it.png' },
            { key: 108, label: 'Ivory Coast', img: '../../assets/img/id/ci.png' },
            { key: 109, label: 'Jamaica', img: '../../assets/img/id/jm.png' },
            { key: 110, label: 'Japan', img: '../../assets/img/id/jp.png' },
            { key: 111, label: 'Jersey', img: '../../assets/img/id/je.png' },
            { key: 112, label: 'Jordan', img: '../../assets/img/id/jo.png' },
            { key: 113, label: 'Kazakhstan', img: '../../assets/img/id/kz.png' },
            { key: 114, label: 'Kenya', img: '../../assets/img/id/ke.png' },
            { key: 115, label: 'Kiribati', img: '../../assets/img/id/ki.png' },
            { key: 116, label: 'Kosovo', img: '../../assets/img/id/xk.png' },
            { key: 117, label: 'Kuwait', img: '../../assets/img/id/kw.png' },
            { key: 118, label: 'Kyrgyzstan', img: '../../assets/img/id/kg.png' },
            { key: 119, label: 'Laos', img: '../../assets/img/id/la.png' },
            { key: 120, label: 'Latvia', img: '../../assets/img/id/lv.png' },
            { key: 121, label: 'Lebanon', img: '../../assets/img/id/lb.png' },
            { key: 122, label: 'Lesotho', img: '../../assets/img/id/ls.png' },
            { key: 123, label: 'Liberia', img: '../../assets/img/id/lr.png' },
            { key: 124, label: 'Libya', img: '../../assets/img/id/ly.png' },
            { key: 125, label: 'Liechtenstein', img: '../../assets/img/id/li.png' },
            { key: 126, label: 'Lithuania', img: '../../assets/img/id/lt.png' },
            { key: 127, label: 'Luxembourg', img: '../../assets/img/id/lu.png' },
            { key: 128, label: 'Macau', img: '../../assets/img/id/mo.png' },
            { key: 129, label: 'Macedonia', img: '../../assets/img/id/mk.png' },
            { key: 130, label: 'Madagascar', img: '../../assets/img/id/mg.png' },
            { key: 131, label: 'Malawi', img: '../../assets/img/id/mw.png' },
            { key: 132, label: 'Malaysia', img: '../../assets/img/id/my.png' },
            { key: 133, label: 'Maldives', img: '../../assets/img/id/mv.png' },
            { key: 134, label: 'Mali', img: '../../assets/img/id/ml.png' },
            { key: 135, label: 'Malta', img: '../../assets/img/id/mt.png' },
            { key: 136, label: 'Marshall Islands', img: '../../assets/img/id/mh.png' },
            { key: 137, label: 'Martinique', img: '../../assets/img/id/mq.png' },
            { key: 138, label: 'Mauritania', img: '../../assets/img/id/mr.png' },
            { key: 139, label: 'Mauritius', img: '../../assets/img/id/mu.png' },
            { key: 140, label: 'Mayotte', img: '../../assets/img/id/yt.png' },
            { key: 141, label: 'Mexico', img: '../../assets/img/id/mx.png' },
            { key: 142, label: 'Micronesia', img: '../../assets/img/id/fm.png' },
            { key: 143, label: 'Moldova', img: '../../assets/img/id/md.png' },
            { key: 144, label: 'Monaco', img: '../../assets/img/id/mc.png' },
            { key: 145, label: 'Mongolia', img: '../../assets/img/id/mn.png' },
            { key: 146, label: 'Montenegro', img: '../../assets/img/id/me.png' },
            { key: 147, label: 'Montserrat', img: '../../assets/img/id/ms.png' },
            { key: 148, label: 'Morocco', img: '../../assets/img/id/ma.png' },
            { key: 149, label: 'Mozambique', img: '../../assets/img/id/mz.png' },
            { key: 150, label: 'Myanmar', img: '../../assets/img/id/mm.png' },
            { key: 151, label: 'Namibia', img: '../../assets/img/id/na.png' },
            { key: 152, label: 'Nauru', img: '../../assets/img/id/nr.png' },
            { key: 153, label: 'Nepal', img: '../../assets/img/id/np.png' },
            { key: 154, label: 'Netherlands', img: '../../assets/img/id/nl.png' },
            { key: 155, label: 'New Caledonia', img: '../../assets/img/id/nc.png' },
            { key: 156, label: 'New Zealand', img: '../../assets/img/id/nz.png' },
            { key: 157, label: 'Nicaragua', img: '../../assets/img/id/ni.png' },
            { key: 158, label: 'Niger', img: '../../assets/img/id/ne.png' },
            { key: 159, label: 'Nigeria', img: '../../assets/img/id/ng.png' },
            { key: 160, label: 'Niue', img: '../../assets/img/id/nu.png' },
            { key: 161, label: 'Norfolk Island', img: '../../assets/img/id/nf.png' },
            { key: 162, label: 'North Korea', img: '../../assets/img/id/kp.png' },
            { key: 163, label: 'Northern Mariana Islands', img: '../../assets/img/id/mp.png' },
            { key: 164, label: 'Norway', img: '../../assets/img/id/no.png' },
            { key: 165, label: 'Oman', img: '../../assets/img/id/om.png' },
            { key: 166, label: 'Pakistan', img: '../../assets/img/id/pk.png' },
            { key: 167, label: 'Palau', img: '../../assets/img/id/pw.png' },
            { key: 168, label: 'Palestine', img: '../../assets/img/id/ps.png' },
            { key: 169, label: 'Panama', img: '../../assets/img/id/pa.png' },
            { key: 170, label: 'Papua New Guinea', img: '../../assets/img/id/pg.png' },
            { key: 171, label: 'Paraguay', img: '../../assets/img/id/py.png' },
            { key: 172, label: 'Peru', img: '../../assets/img/id/pe.png' },
            { key: 173, label: 'Philippines', img: '../../assets/img/id/ph.png' },
            { key: 174, label: 'Pitcairn Islands', img: '../../assets/img/id/pn.png' },
            { key: 175, label: 'Poland', img: '../../assets/img/id/pl.png' },
            { key: 176, label: 'Portugal', img: '../../assets/img/id/pt.png' },
            { key: 177, label: 'Puerto Rico', img: '../../assets/img/id/pr.png' },
            { key: 178, label: 'Qatar', img: '../../assets/img/id/qa.png' },
            { key: 179, label: 'Republic of the Congo', img: '../../assets/img/id/cg.png' },
            { key: 180, label: 'Réunion', img: '../../assets/img/id/re.png' },
            { key: 181, label: 'Romania', img: '../../assets/img/id/ro.png' },
            { key: 182, label: 'Russia', img: '../../assets/img/id/ru.png' },
            { key: 183, label: 'Rwanda', img: '../../assets/img/id/rw.png' },
            { key: 184, label: 'Saint Barthélemy', img: '../../assets/img/id/bl.png' },
            { key: 185, label: 'Saint Kitts and Nevis', img: '../../assets/img/id/kn.png' },
            { key: 186, label: 'Saint Lucia', img: '../../assets/img/id/lc.png' },
            { key: 187, label: 'Saint Martin', img: '../../assets/img/id/mf.png' },
            { key: 188, label: 'Saint Pierre and Miquelon', img: '../../assets/img/id/pm.png' },
            { key: 189, label: 'Saint Vincent and the Grenadines', img: '../../assets/img/id/vc.png' },
            { key: 190, label: 'Samoa', img: '../../assets/img/id/ws.png' },
            { key: 191, label: 'San Marino', img: '../../assets/img/id/sm.png' },
            { key: 192, label: 'São Tomé and Príncipe', img: '../../assets/img/id/st.png' },
            { key: 193, label: 'Saudi Arabia', img: '../../assets/img/id/sa.png' },
            { key: 194, label: 'Senegal', img: '../../assets/img/id/sn.png' },
            { key: 195, label: 'Serbia', img: '../../assets/img/id/rs.png' },
            { key: 196, label: 'Seychelles', img: '../../assets/img/id/sc.png' },
            { key: 197, label: 'Sierra Leone', img: '../../assets/img/id/sl.png' },
            { key: 198, label: 'Singapore', img: '../../assets/img/id/sg.png' },
            { key: 199, label: 'Sint Maarten', img: '../../assets/img/id/sx.png' },
            { key: 200, label: 'Slovakia', img: '../../assets/img/id/sk.png' },
            { key: 201, label: 'Slovenia', img: '../../assets/img/id/si.png' },
            { key: 202, label: 'Solomon Islands', img: '../../assets/img/id/sb.png' },
            { key: 203, label: 'Somalia', img: '../../assets/img/id/so.png' },
            { key: 204, label: 'South Africa', img: '../../assets/img/id/za.png' },
            { key: 205, label: 'South Georgia', img: '../../assets/img/id/gs.png' },
            { key: 206, label: 'South Korea', img: '../../assets/img/id/kr.png' },
            { key: 207, label: 'South Sudan', img: '../../assets/img/id/ss.png' },
            { key: 208, label: 'Sri Lanka', img: '../../assets/img/id/lk.png' },
            { key: 209, label: 'Sudan', img: '../../assets/img/id/sd.png' },
            { key: 210, label: 'Suriname', img: '../../assets/img/id/sr.png' },
            { key: 211, label: 'Svalbard and Jan Mayen', img: '../../assets/img/id/sj.png' },
            { key: 212, label: 'Swaziland', img: '../../assets/img/id/sz.png' },
            { key: 213, label: 'Sweden', img: '../../assets/img/id/se.png' },
            { key: 214, label: 'Switzerland', img: '../../assets/img/id/ch.png' },
            { key: 215, label: 'Syria', img: '../../assets/img/id/sy.png' },
            { key: 216, label: 'Taiwan', img: '../../assets/img/id/tw.png' },
            { key: 217, label: 'Tajikistan', img: '../../assets/img/id/tj.png' },
            { key: 218, label: 'Tanzania', img: '../../assets/img/id/tz.png' },
            { key: 219, label: 'Thailand', img: '../../assets/img/id/th.png' },
            { key: 220, label: 'Timor-Leste', img: '../../assets/img/id/tl.png' },
            { key: 221, label: 'Togo', img: '../../assets/img/id/tg.png' },
            { key: 222, label: 'Tokelau', img: '../../assets/img/id/tk.png' },
            { key: 223, label: 'Tonga', img: '../../assets/img/id/to.png' },
            { key: 224, label: 'Trinidad and Tobago', img: '../../assets/img/id/tt.png' },
            { key: 225, label: 'Tunisia', img: '../../assets/img/id/tn.png' },
            { key: 226, label: 'Turkey', img: '../../assets/img/id/tr.png' },
            { key: 227, label: 'Turkmenistan', img: '../../assets/img/id/tm.png' },
            { key: 228, label: 'Turks and Caicos Islands', img: '../../assets/img/id/tc.png' },
            { key: 229, label: 'Tuvalu', img: '../../assets/img/id/tv.png' },
            { key: 230, label: 'Uganda', img: '../../assets/img/id/ug.png' },
            { key: 231, label: 'Ukraine', img: '../../assets/img/id/ua.png' },
            { key: 232, label: 'United Arab Emirates', img: '../../assets/img/id/ae.png' },
            { key: 233, label: 'United Kingdom', img: '../../assets/img/id/gb.png' },
            { key: 234, label: 'United States', img: '../../assets/img/id/us.png' },
            { key: 235, label: 'United States Minor Outlying Islands', img: '../../assets/img/id/um.png' },
            { key: 236, label: 'United States Virgin Islands', img: '../../assets/img/id/vi.png' },
            { key: 237, label: 'Uruguay', img: '../../assets/img/id/uy.png' },
            { key: 238, label: 'Uzbekistan', img: '../../assets/img/id/uz.png' },
            { key: 239, label: 'Vanuatu', img: '../../assets/img/id/vu.png' },
            { key: 240, label: 'Vatican City', img: '../../assets/img/id/va.png' },
            { key: 241, label: 'Venezuela', img: '../../assets/img/id/ve.png' },
            { key: 242, label: 'Vietnam', img: '../../assets/img/id/vn.png' },
            { key: 243, label: 'Wallis and Futuna', img: '../../assets/img/id/wf.png' },
            { key: 244, label: 'Western Sahara', img: '../../assets/img/id/eh.png' },
            { key: 245, label: 'Yemen', img: '../../assets/img/id/ye.png' },
            { key: 246, label: 'Zambia', img: '../../assets/img/id/zm.png' },
            { key: 247, label: 'Zimbabwe', img: '../../assets/img/id/zw.png' }

        ];

        const age = [
            {key: 10, label:'10'},
            {key: 11, label:'11'},
            { key: 12, label: '12' },
            { key: 13, label: '13' },
            { key: 14, label: '14' },
            { key: 15, label: '15' },
            { key: 16, label: '16' },
            { key: 17, label: '17' },
            { key: 18, label: '18' },
            { key: 19, label: '19' },
            { key: 20, label: '20' },
            { key: 21, label: '21' },
            { key: 22, label: '22' },
            { key: 23, label: '23' },
            { key: 24, label: '24' },
            { key: 25, label: '25' },
            { key: 26, label: '26' },
            { key: 27, label: '27' },
            { key: 28, label: '28' },
            { key: 29, label: '29' },
            { key: 30, label: '30' },
            { key: 31, label: '31' },
            { key: 32, label: '32' },
            { key: 33, label: '33' },
            { key: 34, label: '34' },
            { key: 35, label: '35' },
            { key: 36, label: '36' },
            { key: 37, label: '37' },
            { key: 38, label: '38' },
            { key: 39, label: '39' },
            { key: 40, label: '40' },
            { key: 41, label: '41' },
            { key: 42, label: '42' },
            { key: 43, label: '43' },
            { key: 44, label: '44' },
            { key: 45, label: '45' },
            { key: 46, label: '46' },
            { key: 47, label: '47' },
            { key: 48, label: '48' },
            { key: 49, label: '49' },
            { key: 50, label: '50' },
            { key: 51, label: '51' },
            { key: 52, label: '52' },
            { key: 53, label: '53' },
            { key: 54, label: '54' },
            { key: 55, label: '55' },
            { key: 56, label: '56' },
            { key: 57, label: '57' },
            { key: 58, label: '58' },
            { key: 59, label: '59' },
            { key: 60, label: '60' },
            { key: 61, label: '61' },
            { key: 62, label: '62' },
            { key: 63, label: '63' },
            { key: 64, label: '64' },
            { key: 65, label: '65' },
            { key: 66, label: '66' },
            { key: 67, label: '67' },
            { key: 68, label: '68' },
            { key: 69, label: '69' },
            { key: 70, label: '70' },
            { key: 71, label: '71' },
            { key: 72, label: '72' },
            { key: 73, label: '73' },
            { key: 74, label: '74' },
            { key: 75, label: '75' },
            { key: 76, label: '76' },
            { key: 77, label: '77' },
            { key: 78, label: '78' },
            { key: 79, label: '79' },
            { key: 80, label: '80' }
        ];

        const gender = [
            {key: 1, label:'남성'},
            {key: 2, label:'여성'}
        ];


        return (
            <Container>

                <Header style={commonStyle.headerLayout}>

                    {/*<TouchableOpacity onPress={() => Actions.pop({ refresh: {refresh:true} })} style={{flex:.2, alignItems: 'flex-start'}}>*/}
                        {/*<View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>*/}
                            {/*<Text style={{fontSize:12,color:'#fff'}}> BACK </Text>*/}
                        {/*</View>*/}
                    {/*</TouchableOpacity>*/}
                    {/*<View style={{flex:.6, justifyContent: 'center', alignItems: 'center'}}>*/}
                        {/*<Text style={{fontSize:16,color:'#fff'}}>아이디 설정</Text>*/}
                    {/*</View>*/}
                    {/*<View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>*/}
                    {/*</View>*/}
                    <Left style={{flex:1, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <Button style={commonStyle.backBtn} onPress={Actions.pop} >
                            <Title style={{fontSize:14,color:'#fff'}}> BACK </Title>
                        </Button>
                    </Left>
                    <Body style={{flex:1,  justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={{fontSize:16,color:'#fff'}}>아이디 설정</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>

                <Content style={{padding:10}}>

                    <View style={idFormStyle.contentsLayout}>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.3, alignItems:'center'}}>
                                <Text style={idFormStyle.title}> USER NAME </Text>
                            </View>
                            <View style={{flex:.7, alignItems:'center'}}>
                                <TextInput style = {idFormStyle.input} underlineColorAndroid = "transparent" placeholder = "사용할 아이디 입력해주세요." placeholderTextColor = "#9a73ef" autoCapitalize = "none" value={this.state.USERNAME} onChangeText={(text) => this.setState({USERNAME: text})} keyboardType="default"/>
                            </View>
                        </View>

                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.3, alignItems:'center'}}>
                                <Text style={idFormStyle.title}> COUNTRY </Text>
                            </View>
                            <View style={{flex:.7, alignItems:'center'}}>

                                <ModalSelector
                                    data={data} initValue="국적을 선택해주세요." onChange={(option)=> this._contryChange(option)}>
                                    <TextInput placeholder="국적을 선택해주세요." placeholderTextColor = "#9a73ef"
                                               style = {idFormStyle.input} editable={false}  value={this.state.textInputValue} />

                                </ModalSelector>

                            </View>
                        </View>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.3, alignItems:'center'}}></View>

                            <View style={{flex:.7, alignItems:'center'}}>
                            {renderIf(this.state.countryImg != "")(
                                <Image source={this.state.countryImg} style={{width:32,height:32}}>
                                </Image>
                            )}
                            </View>
                        </View>

                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.3, alignItems:'center'}}>
                                <Text style={idFormStyle.title}> AGE </Text>
                            </View>
                            <View style={{flex:.7, alignItems:'center'}}>
                                <ModalSelector data={age} initValue="나이를 선택해주세요."  onChange={(option)=>{ this.setState({textInputValue3:option.label})}}>
                                     <TextInput placeholder="나이를 선택해주세요." placeholderTextColor = "#9a73ef"
                                                style = {idFormStyle.input} editable={false}  value={this.state.textInputValue3} />
                                </ModalSelector>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.3, alignItems:'center'}}>
                                <Text style={idFormStyle.title}> GENDER </Text>
                            </View>
                            <View style={{flex:.7, alignItems:'center'}}>
                                <ModalSelector data={gender} initValue="성별을 선택해주세요."  onChange={(option)=>{ this.setState({textInputValue2:option.label})}}>
                                    <TextInput placeholder="성별을 선택해주세요." placeholderTextColor = "#9a73ef" underlineColorAndroid = "transparent"
                                               style = {idFormStyle.input} editable={false}  value={this.state.textInputValue2} />
                                </ModalSelector>
                            </View>
                        </View>
                    </View>


                </Content>
                <TouchableOpacity onPress={() => this._save()}>
                    <Footer style={commonStyle.footerLayout}>
                        <View>
                            <Text style={commonStyle.footerColor}>SAVE</Text>
                        </View>
                    </Footer>
                </TouchableOpacity>
            </Container>
        );
    }
}

