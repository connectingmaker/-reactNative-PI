/**
 * Created by jccho on 2017. 12. 14..
 */
import React, { Component } from 'react';
import {Actions } from 'react-native-router-flux';
import {View, Text, AppRegistry, Image, StyleSheet, TouchableOpacity,AlertIOS,Alert,Platform,TextInput,AsyncStorage } from 'react-native';
import {Container, Header, Body, Content, Footer,Item, Icon, Input,Button } from 'native-base';
import ModalSelector from 'react-native-modal-selector';

import stringify from 'json-stable-stringify';


import {idFormStyle} from '../style/idsetting';
import {commonStyle} from "../style/common";


import FormData from 'FormData';
import country from '../config/country_config'

import config from "../config/config";

import renderIf from 'render-if'


export default class Idsetting extends Component {

    constructor(){
        super();
        this.state = {
            countryData: ""
            ,uid:""
            , textInputValue: ''
            , textInputValue2: ''
            , textInputValue3: ''
            , countryImg: ""
            ,username:''
            ,country:''
            ,age:''
            ,gender:''

        }

        //console.log(country.country_config);

    }

    _contryChange(option)
    {
        this.setState({textInputValue:option.label,countryImg:option.img})
    }

    componentWillMount()
    {
        this.loadData();
    }
    loadData()
    {

        AsyncStorage.getItem(config.STORE_KEY).then((value) => {
            var json = eval("("+value+")");
            console.log("OK");
            console.log(json.USERNAME);
            if(json!=null) {

                var username = json.USERNAME;
                var country = json.COUNTRY;
                var countryImg = json.COUNTRYIMG;
                var age = json.AGE;
                var gender = json.GENDER;
                var uid = json.UID;


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

            }
        }).then(res => {
        });
    }

    _save()
    {
        var dataObject = {
            "USERNAME": this.state.USERNAME
            ,"COUNTRY" : this.state.textInputValue
            ,"COUNTRYIMG" : this.state.countryImg
            ,"AGE" : this.state.textInputValue3
            ,"GENDER" : this.state.textInputValue2
        };

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

            AsyncStorage.getItem(config.STORE_KEY).then((value) => {
                var json = eval("("+value+")");
                if(json!=null) {

                    var username = json.USERNAME;
                    var country = json.COUNTRY;
                    var age = json.AGE;
                    var gender = json.GENDER;


                AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(dataObject), () => {
                    this.setState({username:username,country:country,age:age,gender:gender});
                });
                    

                } else {
                }



            }).then(res => {
            });


            var formData = new FormData();
            formData.append('UID', this.state.uid);
            formData.append('USERNAME', this.state.USERNAME);
            formData.append('COUNTRY', this.state.textInputValue);
            formData.append('AGE', this.state.textInputValue3);
            formData.append('GENDER', this.state.textInputValue2);
            var object = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:formData
            };

            console.log(object);


            fetch(config.SERVER_URL+'/member/memberInsert', object)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);

                    var object = {
                        UID : responseJson.UID
                    }

                    AsyncStorage.setItem(config.STORE_KEY, JSON.stringify(object), () => {
                        this.setState({uid:responseJson.UID});
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

            { key: 376, label: 'Andorra', img: require('../../assets/img/id/ad.png') },
            { key: 971, label: 'United Arab Emirates', img: require('../../assets/img/id/ae.png' ) },
            { key: 93, label: 'Afghanistan', img: require('../../assets/img/id/af.png' ) },
            { key: 1268, label: 'Antigua and Barbuda', img: require('../../assets/img/id/ag.png' ) },
            { key: 1264, label: 'Anguilla', img: require('../../assets/img/id/ai.png' ) },
            { key: 355, label: 'Albania', img: require('../../assets/img/id/al.png' ) },
            { key: 374, label: 'Armenia', img: require('../../assets/img/id/am.png' ) },
            { key: 244, label: 'Angola', img: require('../../assets/img/id/ao.png' ) },
            { key: 999, label: 'Antarctica', img: require('../../assets/img/id/aq.png' ) },
            { key: 54, label: 'Argentina', img: require('../../assets/img/id/ar.png' ) },
            { key: 1684, label: 'American Samoa', img: require('../../assets/img/id/as.png' ) },
            { key: 43, label: 'Austria', img: require('../../assets/img/id/at.png' ) },
            { key: 61, label: 'Australia', img: require('../../assets/img/id/au.png' ) },
            { key: 297, label: 'Aruba', img: require('../../assets/img/id/aw.png' ) },
            { key: 358, label: 'Åland Islands', img: require('../../assets/img/id/ax.png' ) },
            { key: 994, label: 'Azerbaijan', img: require('../../assets/img/id/az.png' ) },
            { key: 387, label: 'Bosnia and Herzegovina', img: require('../../assets/img/id/ba.png' ) },
            { key: 1246, label: 'Barbados', img: require('../../assets/img/id/bb.png' ) },
            { key: 880, label: 'Bangladesh', img: require('../../assets/img/id/bd.png' ) },
            { key: 32, label: 'Belgium', img: require('../../assets/img/id/be.png' ) },
            { key: 226, label: 'Burkina Faso', img: require('../../assets/img/id/bf.png' ) },
            { key: 359, label: 'Bulgaria', img: require('../../assets/img/id/bg.png' ) },
            { key: 973, label: 'Bahrain', img: require('../../assets/img/id/bh.png' ) },
            { key: 257, label: 'Burundi', img: require('../../assets/img/id/bi.png' ) },
            { key: 229, label: 'Benin', img: require('../../assets/img/id/bj.png' ) },
            { key: 590, label: 'Saint Barthélemy', img: require('../../assets/img/id/bl.png' ) },
            { key: 1441, label: 'Bermuda', img: require('../../assets/img/id/bm.png' ) },
            { key: 673, label: 'Brunei', img: require('../../assets/img/id/bn.png' ) },
            { key: 591, label: 'Bolivia', img: require('../../assets/img/id/bo.png' ) },
            { key: 55, label: 'Brazil', img: require('../../assets/img/id/br.png' ) },
            { key: 1242, label: 'Bahamas', img: require('../../assets/img/id/bs.png' ) },
            { key: 975, label: 'Bhutan', img: require('../../assets/img/id/bt.png' ) },
            { key: 99991, label: 'Bouvet Island', img: require('../../assets/img/id/bv.png' ) },
            { key: 267, label: 'Botswana', img: require('../../assets/img/id/bw.png' ) },
            { key: 375, label: 'Belarus', img: require('../../assets/img/id/by.png' ) },
            { key: 501, label: 'Belize', img: require('../../assets/img/id/bz.png' ) },
            { key: 2, label: 'Canada', img: require('../../assets/img/id/ca.png' ) },
            { key: 610, label: 'Cocos (Keeling) Islands', img: require('../../assets/img/id/cc.png' ) },
            { key: 243, label: 'DR Congo', img: require('../../assets/img/id/cd.png' ) },
            { key: 236, label: 'Central African Republic', img: require('../../assets/img/id/cf.png' ) },
            { key: 242, label: 'Republic of the Congo', img: require('../../assets/img/id/cg.png' ) },
            { key: 41, label: 'Switzerland', img: require('../../assets/img/id/ch.png' ) },
            { key: 225, label: 'Ivory Coast', img: require('../../assets/img/id/ci.png' ) },
            { key: 682, label: 'Cook Islands', img: require('../../assets/img/id/ck.png' ) },
            { key: 56, label: 'Chile', img: require('../../assets/img/id/cl.png' ) },
            { key: 237, label: 'Cameroon', img: require('../../assets/img/id/cm.png' ) },
            { key: 86, label: 'China', img: require('../../assets/img/id/cn.png' ) },
            { key: 57, label: 'Colombia', img: require('../../assets/img/id/co.png' ) },
            { key: 506, label: 'Costa Rica', img: require('../../assets/img/id/cr.png' ) },
            { key: 53, label: 'Cuba', img: require('../../assets/img/id/cu.png' ) },
            { key: 238, label: 'Cape Verde', img: require('../../assets/img/id/cv.png' ) },
            { key: 5999, label: 'Curaçao', img: require('../../assets/img/id/cw.png' ) },
            { key: 611, label: 'Christmas Island', img: require('../../assets/img/id/cx.png' ) },
            { key: 357, label: 'Cyprus', img: require('../../assets/img/id/cy.png' ) },
            { key: 420, label: 'Czech Republic', img: require('../../assets/img/id/cz.png' ) },
            { key: 49, label: 'Germany', img: require('../../assets/img/id/de.png' ) },
            { key: 253, label: 'Djibouti', img: require('../../assets/img/id/dj.png' ) },
            { key: 45, label: 'Denmark', img: require('../../assets/img/id/dk.png' ) },
            { key: 1767, label: 'Dominica', img: require('../../assets/img/id/dm.png' ) },
            { key: 1809, label: 'Dominican Republic', img: require('../../assets/img/id/do.png' ) },
            { key: 213, label: 'Algeria', img: require('../../assets/img/id/dz.png' ) },
            { key: 593, label: 'Ecuador', img: require('../../assets/img/id/ec.png' ) },
            { key: 372, label: 'Estonia', img: require('../../assets/img/id/ee.png' ) },
            { key: 20, label: 'Egypt', img: require('../../assets/img/id/eg.png' ) },
            { key: 2120, label: 'Western Sahara', img: require('../../assets/img/id/eh.png' ) },
            { key: 291, label: 'Eritrea', img: require('../../assets/img/id/er.png' ) },
            { key: 34, label: 'Spain', img: require('../../assets/img/id/es.png' ) },
            { key: 251, label: 'Ethiopia', img: require('../../assets/img/id/et.png' ) },
            { key: 3590, label: 'Finland', img: require('../../assets/img/id/fi.png' ) },
            { key: 679, label: 'Fiji', img: require('../../assets/img/id/fj.png' ) },
            { key: 500, label: 'Falkland Islands', img: require('../../assets/img/id/fk.png' ) },
            { key: 691, label: 'Micronesia', img: require('../../assets/img/id/fm.png' ) },
            { key: 298, label: 'Faroe Islands', img: require('../../assets/img/id/fo.png' ) },
            { key: 33, label: 'France', img: require('../../assets/img/id/fr.png' ) },
            { key: 241, label: 'Gabon', img: require('../../assets/img/id/ga.png' ) },
            { key: 440, label: 'United Kingdom', img: require('../../assets/img/id/gb.png' ) },
            { key: 1473, label: 'Grenada', img: require('../../assets/img/id/gd.png' ) },
            { key: 995, label: 'Georgia', img: require('../../assets/img/id/ge.png' ) },
            { key: 594, label: 'French Guiana', img: require('../../assets/img/id/gf.png' ) },
            { key: 441, label: 'Guernsey', img: require('../../assets/img/id/gg.png' ) },
            { key: 233, label: 'Ghana', img: require('../../assets/img/id/gh.png' ) },
            { key: 350, label: 'Gibraltar', img: require('../../assets/img/id/gi.png' ) },
            { key: 299, label: 'Greenland', img: require('../../assets/img/id/gl.png' ) },
            { key: 220, label: 'Gambia', img: require('../../assets/img/id/gm.png' ) },
            { key: 224, label: 'Guinea', img: require('../../assets/img/id/gn.png' ) },
            { key: 5901, label: 'Guadeloupe', img: require('../../assets/img/id/gp.png' ) },
            { key: 240, label: 'Equatorial Guinea', img: require('../../assets/img/id/gq.png' ) },
            { key: 30, label: 'Greece', img: require('../../assets/img/id/gr.png' ) },
            { key: 5902, label: 'South Georgia', img: require('../../assets/img/id/gs.png' ) },
            { key: 502, label: 'Guatemala', img: require('../../assets/img/id/gt.png' ) },
            { key: 1671, label: 'Guam', img: require('../../assets/img/id/gu.png' ) },
            { key: 245, label: 'Guinea-Bissau', img: require('../../assets/img/id/gw.png' ) },
            { key: 592, label: 'Guyana', img: require('../../assets/img/id/gy.png' ) },
            { key: 852, label: 'Hong Kong', img: require('../../assets/img/id/hk.png' ) },
            { key: 9992, label: 'Heard Island and McDonald Islands', img: require('../../assets/img/id/hm.png' ) },
            { key: 504, label: 'Honduras', img: require('../../assets/img/id/hn.png' ) },
            { key: 385, label: 'Croatia', img: require('../../assets/img/id/hr.png' ) },
            { key: 509, label: 'Haiti', img: require('../../assets/img/id/ht.png' ) },
            { key: 36, label: 'Hungary', img: require('../../assets/img/id/hu.png' ) },
            { key: 62, label: 'Indonesia', img: require('../../assets/img/id/id.png' ) },
            { key: 353, label: 'Ireland', img: require('../../assets/img/id/ie.png' ) },
            { key: 972, label: 'Israel', img: require('../../assets/img/id/il.png' ) },
            { key: 442, label: 'Isle of Man', img: require('../../assets/img/id/im.png' ) },
            { key: 91, label: 'India', img: require('../../assets/img/id/in.png' ) },
            { key: 246, label: 'British Indian Ocean Territory', img: require('../../assets/img/id/io.png' ) },
            { key: 964, label: 'Iraq', img: require('../../assets/img/id/iq.png' ) },
            { key: 98, label: 'Iran', img: require('../../assets/img/id/ir.png' ) },
            { key: 354, label: 'Iceland', img: require('../../assets/img/id/is.png' ) },
            { key: 39, label: 'Italy', img: require('../../assets/img/id/it.png' ) },
            { key: 443, label: 'Jersey', img: require('../../assets/img/id/je.png' ) },
            { key: 1876, label: 'Jamaica', img: require('../../assets/img/id/jm.png' ) },
            { key: 962, label: 'Jordan', img: require('../../assets/img/id/jo.png' ) },
            { key: 81, label: 'Japan', img: require('../../assets/img/id/jp.png' ) },
            { key: 254, label: 'Kenya', img: require('../../assets/img/id/ke.png' ) },
            { key: 996, label: 'Kyrgyzstan', img: require('../../assets/img/id/kg.png' ) },
            { key: 855, label: 'Cambodia', img: require('../../assets/img/id/kh.png' ) },
            { key: 686, label: 'Kiribati', img: require('../../assets/img/id/ki.png' ) },
            { key: 269, label: 'Comoros', img: require('../../assets/img/id/km.png' ) },
            { key: 1869, label: 'Saint Kitts and Nevis', img: require('../../assets/img/id/kn.png' ) },
            { key: 850, label: 'North Korea', img: require('../../assets/img/id/kp.png' ) },
            { key: 82, label: 'South Korea', img: require('../../assets/img/id/kr.png' ) },
            { key: 965, label: 'Kuwait', img: require('../../assets/img/id/kw.png' ) },
            { key: 1345, label: 'Cayman Islands', img: require('../../assets/img/id/ky.png' ) },
            { key: 76, label: 'Kazakhstan', img: require('../../assets/img/id/kz.png' ) },
            { key: 856, label: 'Laos', img: require('../../assets/img/id/la.png' ) },
            { key: 961, label: 'Lebanon', img: require('../../assets/img/id/lb.png' ) },
            { key: 1758, label: 'Saint Lucia', img: require('../../assets/img/id/lc.png' ) },
            { key: 423, label: 'Liechtenstein', img: require('../../assets/img/id/li.png' ) },
            { key: 94, label: 'Sri Lanka', img: require('../../assets/img/id/lk.png' ) },
            { key: 231, label: 'Liberia', img: require('../../assets/img/id/lr.png' ) },
            { key: 266, label: 'Lesotho', img: require('../../assets/img/id/ls.png' ) },
            { key: 370, label: 'Lithuania', img: require('../../assets/img/id/lt.png' ) },
            { key: 352, label: 'Luxembourg', img: require('../../assets/img/id/lu.png' ) },
            { key: 371, label: 'Latvia', img: require('../../assets/img/id/lv.png' ) },
            { key: 218, label: 'Libya', img: require('../../assets/img/id/ly.png' ) },
            { key: 212, label: 'Morocco', img: require('../../assets/img/id/ma.png' ) },
            { key: 377, label: 'Monaco', img: require('../../assets/img/id/mc.png' ) },
            { key: 373, label: 'Moldova', img: require('../../assets/img/id/md.png' ) },
            { key: 382, label: 'Montenegro', img: require('../../assets/img/id/me.png' ) },
            { key: 5903, label: 'Saint Martin', img: require('../../assets/img/id/mf.png' ) },
            { key: 261, label: 'Madagascar', img: require('../../assets/img/id/mg.png' ) },
            { key: 692, label: 'Marshall Islands', img: require('../../assets/img/id/mh.png' ) },
            { key: 389, label: 'Macedonia', img: require('../../assets/img/id/mk.png' ) },
            { key: 223, label: 'Mali', img: require('../../assets/img/id/ml.png' ) },
            { key: 95, label: 'Myanmar', img: require('../../assets/img/id/mm.png' ) },
            { key: 976, label: 'Mongolia', img: require('../../assets/img/id/mn.png' ) },
            { key: 853, label: 'Macau', img: require('../../assets/img/id/mo.png' ) },
            { key: 1670, label: 'Northern Mariana Islands', img: require('../../assets/img/id/mp.png' ) },
            { key: 596, label: 'Martinique', img: require('../../assets/img/id/mq.png' ) },
            { key: 222, label: 'Mauritania', img: require('../../assets/img/id/mr.png' ) },
            { key: 1664, label: 'Montserrat', img: require('../../assets/img/id/ms.png' ) },
            { key: 356, label: 'Malta', img: require('../../assets/img/id/mt.png' ) },
            { key: 230, label: 'Mauritius', img: require('../../assets/img/id/mu.png' ) },
            { key: 960, label: 'Maldives', img: require('../../assets/img/id/mv.png' ) },
            { key: 265, label: 'Malawi', img: require('../../assets/img/id/mw.png' ) },
            { key: 52, label: 'Mexico', img: require('../../assets/img/id/mx.png' ) },
            { key: 60, label: 'Malaysia', img: require('../../assets/img/id/my.png' ) },
            { key: 258, label: 'Mozambique', img: require('../../assets/img/id/mz.png' ) },
            { key: 264, label: 'Namibia', img: require('../../assets/img/id/na.png' ) },
            { key: 687, label: 'New Caledonia', img: require('../../assets/img/id/nc.png' ) },
            { key: 227, label: 'Niger', img: require('../../assets/img/id/ne.png' ) },
            { key: 672, label: 'Norfolk Island', img: require('../../assets/img/id/nf.png' ) },
            { key: 234, label: 'Nigeria', img: require('../../assets/img/id/ng.png' ) },
            { key: 505, label: 'Nicaragua', img: require('../../assets/img/id/ni.png' ) },
            { key: 31, label: 'Netherlands', img: require('../../assets/img/id/nl.png' ) },
            { key: 47, label: 'Norway', img: require('../../assets/img/id/no.png' ) },
            { key: 977, label: 'Nepal', img: require('../../assets/img/id/np.png' ) },
            { key: 674, label: 'Nauru', img: require('../../assets/img/id/nr.png' ) },
            { key: 683, label: 'Niue', img: require('../../assets/img/id/nu.png' ) },
            { key: 64, label: 'New Zealand', img: require('../../assets/img/id/nz.png' ) },
            { key: 968, label: 'Oman', img: require('../../assets/img/id/om.png' ) },
            { key: 507, label: 'Panama', img: require('../../assets/img/id/pa.png' ) },
            { key: 51, label: 'Peru', img: require('../../assets/img/id/pe.png' ) },
            { key: 689, label: 'French Polynesia', img: require('../../assets/img/id/pf.png' ) },
            { key: 675, label: 'Papua New Guinea', img: require('../../assets/img/id/pg.png' ) },
            { key: 63, label: 'Philippines', img: require('../../assets/img/id/ph.png' ) },
            { key: 92, label: 'Pakistan', img: require('../../assets/img/id/pk.png' ) },
            { key: 48, label: 'Poland', img: require('../../assets/img/id/pl.png' ) },
            { key: 508, label: 'Saint Pierre and Miquelon', img: require('../../assets/img/id/pm.png' ) },
            { key: 6403, label: 'Pitcairn Islands', img: require('../../assets/img/id/pn.png' ) },
            { key: 1787, label: 'Puerto Rico', img: require('../../assets/img/id/pr.png' ) },
            { key: 970, label: 'Palestine', img: require('../../assets/img/id/ps.png' ) },
            { key: 351, label: 'Portugal', img: require('../../assets/img/id/pt.png' ) },
            { key: 680, label: 'Palau', img: require('../../assets/img/id/pw.png' ) },
            { key: 595, label: 'Paraguay', img: require('../../assets/img/id/py.png' ) },
            { key: 974, label: 'Qatar', img: require('../../assets/img/id/qa.png' ) },
            { key: 262, label: 'Réunion', img: require('../../assets/img/id/re.png' ) },
            { key: 40, label: 'Romania', img: require('../../assets/img/id/ro.png' ) },
            { key: 381, label: 'Serbia', img: require('../../assets/img/id/rs.png' ) },
            { key: 7, label: 'Russia', img: require('../../assets/img/id/ru.png' ) },
            { key: 250, label: 'Rwanda', img: require('../../assets/img/id/rw.png' ) },
            { key: 966, label: 'Saudi Arabia', img: require('../../assets/img/id/sa.png' ) },
            { key: 677, label: 'Solomon Islands', img: require('../../assets/img/id/sb.png' ) },
            { key: 248, label: 'Seychelles', img: require('../../assets/img/id/sc.png' ) },
            { key: 249, label: 'Sudan', img: require('../../assets/img/id/sd.png' ) },
            { key: 46, label: 'Sweden', img: require('../../assets/img/id/se.png' ) },
            { key: 65, label: 'Singapore', img: require('../../assets/img/id/sg.png' ) },
            { key: 386, label: 'Slovenia', img: require('../../assets/img/id/si.png' ) },
            { key: 4779, label: 'Svalbard and Jan Mayen', img: require('../../assets/img/id/sj.png' ) },
            { key: 421, label: 'Slovakia', img: require('../../assets/img/id/sk.png' ) },
            { key: 232, label: 'Sierra Leone', img: require('../../assets/img/id/sl.png' ) },
            { key: 378, label: 'San Marino', img: require('../../assets/img/id/sm.png' ) },
            { key: 221, label: 'Senegal', img: require('../../assets/img/id/sn.png' ) },
            { key: 252, label: 'Somalia', img: require('../../assets/img/id/so.png' ) },
            { key: 597, label: 'Suriname', img: require('../../assets/img/id/sr.png' ) },
            { key: 211, label: 'South Sudan', img: require('../../assets/img/id/ss.png' ) },
            { key: 239, label: 'São Tomé and Príncipe', img: require('../../assets/img/id/st.png' ) },
            { key: 503, label: 'El Salvador', img: require('../../assets/img/id/sv.png' ) },
            { key: 1721, label: 'Sint Maarten', img: require('../../assets/img/id/sx.png' ) },
            { key: 963, label: 'Syria', img: require('../../assets/img/id/sy.png' ) },
            { key: 268, label: 'Swaziland', img: require('../../assets/img/id/sz.png' ) },
            { key: 1649, label: 'Turks and Caicos Islands', img: require('../../assets/img/id/tc.png' ) },
            { key: 235, label: 'Chad', img: require('../../assets/img/id/td.png' ) },
            { key: 9993, label: 'French Southern and Antarctic Lands', img: require('../../assets/img/id/tf.png' ) },
            { key: 228, label: 'Togo', img: require('../../assets/img/id/tg.png' ) },
            { key: 66, label: 'Thailand', img: require('../../assets/img/id/th.png' ) },
            { key: 992, label: 'Tajikistan', img: require('../../assets/img/id/tj.png' ) },
            { key: 690, label: 'Tokelau', img: require('../../assets/img/id/tk.png' ) },
            { key: 670, label: 'Timor-Leste', img: require('../../assets/img/id/tl.png' ) },
            { key: 993, label: 'Turkmenistan', img: require('../../assets/img/id/tm.png' ) },
            { key: 216, label: 'Tunisia', img: require('../../assets/img/id/tn.png' ) },
            { key: 676, label: 'Tonga', img: require('../../assets/img/id/to.png' ) },
            { key: 90, label: 'Turkey', img: require('../../assets/img/id/tr.png' ) },
            { key: 1868, label: 'Trinidad and Tobago', img: require('../../assets/img/id/tt.png' ) },
            { key: 688, label: 'Tuvalu', img: require('../../assets/img/id/tv.png' ) },
            { key: 886, label: 'Taiwan', img: require('../../assets/img/id/tw.png' ) },
            { key: 255, label: 'Tanzania', img: require('../../assets/img/id/tz.png' ) },
            { key: 380, label: 'Ukraine', img: require('../../assets/img/id/ua.png' ) },
            { key: 256, label: 'Uganda', img: require('../../assets/img/id/ug.png' ) },
            { key: 9994, label: 'United States Minor Outlying Islands', img: require('../../assets/img/id/um.png' ) },
            { key: 1, label: 'United States', img: require('../../assets/img/id/us.png' ) },
            { key: 598, label: 'Uruguay', img: require('../../assets/img/id/uy.png' ) },
            { key: 998, label: 'Uzbekistan', img: require('../../assets/img/id/uz.png' ) },
            { key: 3906698, label: 'Vatican City', img: require('../../assets/img/id/va.png' ) },
            { key: 1784, label: 'Saint Vincent and the Grenadines', img: require('../../assets/img/id/vc.png' ) },
            { key: 58, label: 'Venezuela', img: require('../../assets/img/id/ve.png' ) },
            { key: 1284, label: 'British Virgin Islands', img: require('../../assets/img/id/vg.png' ) },
            { key: 1340, label: 'United States Virgin Islands', img: require('../../assets/img/id/vi.png' ) },
            { key: 84, label: 'Vietnam', img: require('../../assets/img/id/vn.png' ) },
            { key: 678, label: 'Vanuatu', img: require('../../assets/img/id/vu.png' ) },
            { key: 681, label: 'Wallis and Futuna', img: require('../../assets/img/id/wf.png' ) },
            { key: 685, label: 'Samoa', img: require('../../assets/img/id/ws.png' ) },
            { key: 383, label: 'Kosovo', img: require('../../assets/img/id/xk.png' ) },
            { key: 967, label: 'Yemen', img: require('../../assets/img/id/ye.png' ) },
            { key: 2630, label: 'Mayotte', img: require('../../assets/img/id/yt.png' ) },
            { key: 27, label: 'South Africa', img: require('../../assets/img/id/za.png' ) },
            { key: 260, label: 'Zambia', img: require('../../assets/img/id/zm.png' ) },
            { key: 263, label: 'Zimbabwe', img: require('../../assets/img/id/zw.png' )}

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

                    <TouchableOpacity onPress={Actions.pop} style={{flex:.2, alignItems: 'flex-start'}}>
                        <View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize:12,color:'#fff'}}> BACK </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:.6, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize:16,color:'#fff'}}>아이디 설정</Text>
                    </View>
                    <View style={{flex:.2, justifyContent: 'center', alignItems: 'center'}}>
                    </View>
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

