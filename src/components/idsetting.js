/**
 * Created by jccho on 2017. 12. 14..
 */
import React, { Component } from 'react';
import {Actions } from 'react-native-router-flux';
import {View, Text, AppRegistry, Image, StyleSheet, TouchableOpacity,AlertIOS,Alert,Platform,TextInput } from 'react-native';
import {Container, Header, Body, Content, Footer,Item, Icon, Input,Button } from 'native-base';
import ModalSelector from 'react-native-modal-selector';

import stringify from 'json-stable-stringify';


import {idFormStyle} from '../style/idsetting';
import {commonStyle} from "../style/common";

import country from '../config/country_config'

import renderIf from 'render-if'


export default class Idsetting extends Component {

    constructor(){
        super();
        this.state = {
            countryData: ""
            , textInputValue: ''
            , countryImg: ""

        }

        //console.log(country.country_config);
        console.log(country.countries);

    }



    render() {
        const data = [

            { key: 376, label: 'Andorra', img: '../../assets/img/id/ad.png' },
            { key: 971, label: 'United Arab Emirates', img: '../../assets/img/id/ae.png' },
            { key: 93, label: 'Afghanistan', img: '../../assets/img/id/af.png' },
            { key: 1268, label: 'Antigua and Barbuda', img: '../../assets/img/id/ag.png' },
            { key: 1264, label: 'Anguilla', img: '../../assets/img/id/ai.png' },
            { key: 355, label: 'Albania', img: '../../assets/img/id/al.png' },
            { key: 374, label: 'Armenia', img: '../../assets/img/id/am.png' },
            { key: 244, label: 'Angola', img: '../../assets/img/id/ao.png' },
            { key: 999, label: 'Antarctica', img: '../../assets/img/id/aq.png' },
            { key: 54, label: 'Argentina', img: '../../assets/img/id/ar.png' },
            { key: 1684, label: 'American Samoa', img: '../../assets/img/id/as.png' },
            { key: 43, label: 'Austria', img: '../../assets/img/id/at.png' },
            { key: 61, label: 'Australia', img: '../../assets/img/id/au.png' },
            { key: 297, label: 'Aruba', img: '../../assets/img/id/aw.png' },
            { key: 358, label: 'Åland Islands', img: '../../assets/img/id/ax.png' },
            { key: 994, label: 'Azerbaijan', img: '../../assets/img/id/az.png' },
            { key: 387, label: 'Bosnia and Herzegovina', img: '../../assets/img/id/ba.png' },
            { key: 1246, label: 'Barbados', img: '../../assets/img/id/bb.png' },
            { key: 880, label: 'Bangladesh', img: '../../assets/img/id/bd.png' },
            { key: 32, label: 'Belgium', img: '../../assets/img/id/be.png' },
            { key: 226, label: 'Burkina Faso', img: '../../assets/img/id/bf.png' },
            { key: 359, label: 'Bulgaria', img: '../../assets/img/id/bg.png' },
            { key: 973, label: 'Bahrain', img: '../../assets/img/id/bh.png' },
            { key: 257, label: 'Burundi', img: '../../assets/img/id/bi.png' },
            { key: 229, label: 'Benin', img: '../../assets/img/id/bj.png' },
            { key: 590, label: 'Saint Barthélemy', img: '../../assets/img/id/bl.png' },
            { key: 1441, label: 'Bermuda', img: '../../assets/img/id/bm.png' },
            { key: 673, label: 'Brunei', img: '../../assets/img/id/bn.png' },
            { key: 591, label: 'Bolivia', img: '../../assets/img/id/bo.png' },
            { key: 55, label: 'Brazil', img: '../../assets/img/id/br.png' },
            { key: 1242, label: 'Bahamas', img: '../../assets/img/id/bs.png' },
            { key: 975, label: 'Bhutan', img: '../../assets/img/id/bt.png' },
            { key: 99991, label: 'Bouvet Island', img: '../../assets/img/id/bv.png' },
            { key: 267, label: 'Botswana', img: '../../assets/img/id/bw.png' },
            { key: 375, label: 'Belarus', img: '../../assets/img/id/by.png' },
            { key: 501, label: 'Belize', img: '../../assets/img/id/bz.png' },
            { key: 2, label: 'Canada', img: '../../assets/img/id/ca.png' },
            { key: 610, label: 'Cocos (Keeling) Islands', img: '../../assets/img/id/cc.png' },
            { key: 243, label: 'DR Congo', img: '../../assets/img/id/cd.png' },
            { key: 236, label: 'Central African Republic', img: '../../assets/img/id/cf.png' },
            { key: 242, label: 'Republic of the Congo', img: '../../assets/img/id/cg.png' },
            { key: 41, label: 'Switzerland', img: '../../assets/img/id/ch.png' },
            { key: 225, label: 'Ivory Coast', img: '../../assets/img/id/ci.png' },
            { key: 682, label: 'Cook Islands', img: '../../assets/img/id/ck.png' },
            { key: 56, label: 'Chile', img: '../../assets/img/id/cl.png' },
            { key: 237, label: 'Cameroon', img: '../../assets/img/id/cm.png' },
            { key: 86, label: 'China', img: '../../assets/img/id/cn.png' },
            { key: 57, label: 'Colombia', img: '../../assets/img/id/co.png' },
            { key: 506, label: 'Costa Rica', img: '../../assets/img/id/cr.png' },
            { key: 53, label: 'Cuba', img: '../../assets/img/id/cu.png' },
            { key: 238, label: 'Cape Verde', img: '../../assets/img/id/cv.png' },
            { key: 5999, label: 'Curaçao', img: '../../assets/img/id/cw.png' },
            { key: 611, label: 'Christmas Island', img: '../../assets/img/id/cx.png' },
            { key: 357, label: 'Cyprus', img: '../../assets/img/id/cy.png' },
            { key: 420, label: 'Czech Republic', img: '../../assets/img/id/cz.png' },
            { key: 49, label: 'Germany', img: '../../assets/img/id/de.png' },
            { key: 253, label: 'Djibouti', img: '../../assets/img/id/dj.png' },
            { key: 45, label: 'Denmark', img: '../../assets/img/id/dk.png' },
            { key: 1767, label: 'Dominica', img: '../../assets/img/id/dm.png' },
            { key: 1809, label: 'Dominican Republic', img: '../../assets/img/id/do.png' },
            { key: 213, label: 'Algeria', img: '../../assets/img/id/dz.png' },
            { key: 593, label: 'Ecuador', img: '../../assets/img/id/ec.png' },
            { key: 372, label: 'Estonia', img: '../../assets/img/id/ee.png' },
            { key: 20, label: 'Egypt', img: '../../assets/img/id/eg.png' },
            { key: 2120, label: 'Western Sahara', img: '../../assets/img/id/eh.png' },
            { key: 291, label: 'Eritrea', img: '../../assets/img/id/er.png' },
            { key: 34, label: '34', img: '../../assets/img/id/es.png' },
            { key: 251, label: 'Ethiopia', img: '../../assets/img/id/et.png' },
            { key: 3590, label: 'Finland', img: '../../assets/img/id/fi.png' },
            { key: 679, label: 'Fiji', img: '../../assets/img/id/fj.png' },
            { key: 500, label: 'Falkland Islands', img: '../../assets/img/id/fk.png' },
            { key: 691, label: 'Micronesia', img: '../../assets/img/id/fm.png' },
            { key: 298, label: 'Faroe Islands', img: '../../assets/img/id/fo.png' },
            { key: 33, label: 'France', img: '../../assets/img/id/fr.png' },
            { key: 241, label: 'Gabon', img: '../../assets/img/id/ga.png' },
            { key: 440, label: 'United Kingdom', img: '../../assets/img/id/gb.png' },
            { key: 1473, label: 'Grenada', img: '../../assets/img/id/gd.png' },
            { key: 995, label: 'Georgia', img: '../../assets/img/id/ge.png' },
            { key: 594, label: 'French Guiana', img: '../../assets/img/id/gf.png' },
            { key: 441, label: 'Guernsey', img: '../../assets/img/id/gg.png' },
            { key: 233, label: 'Ghana', img: '../../assets/img/id/gh.png' },
            { key: 350, label: 'Gibraltar', img: '../../assets/img/id/gi.png' },
            { key: 299, label: 'Greenland', img: '../../assets/img/id/gl.png' },
            { key: 220, label: 'Gambia', img: '../../assets/img/id/gm.png' },
            { key: 224, label: 'Guinea', img: '../../assets/img/id/gn.png' },
            { key: 5901, label: 'Guadeloupe', img: '../../assets/img/id/gp.png' },
            { key: 240, label: 'Equatorial Guinea', img: '../../assets/img/id/gq.png' },
            { key: 30, label: 'Greece', img: '../../assets/img/id/gr.png' },
            { key: 5902, label: 'South Georgia', img: '../../assets/img/id/gs.png' },
            { key: 502, label: 'Guatemala', img: '../../assets/img/id/gt.png' },
            { key: 1671, label: 'Guam', img: '../../assets/img/id/gu.png' },
            { key: 245, label: 'Guinea-Bissau', img: '../../assets/img/id/gw.png' },
            { key: 592, label: 'Guyana', img: '../../assets/img/id/gy.png' },
            { key: 852, label: 'Hong Kong', img: '../../assets/img/id/hk.png' },
            { key: 9992, label: 'Heard Island and McDonald Islands', img: '../../assets/img/id/hm.png' },
            { key: 504, label: 'Honduras', img: '../../assets/img/id/hn.png' },
            { key: 385, label: 'Croatia', img: '../../assets/img/id/hr.png' },
            { key: 509, label: 'Haiti', img: '../../assets/img/id/ht.png' },
            { key: 36, label: 'Hungary', img: '../../assets/img/id/hu.png' },
            { key: 62, label: 'Indonesia', img: '../../assets/img/id/id.png' },
            { key: 353, label: 'Ireland', img: '../../assets/img/id/ie.png' },
            { key: 972, label: 'Israel', img: '../../assets/img/id/il.png' },
            { key: 442, label: 'Isle of Man', img: '../../assets/img/id/im.png' },
            { key: 91, label: 'India', img: '../../assets/img/id/in.png' },
            { key: 246, label: 'British Indian Ocean Territory', img: '../../assets/img/id/io.png' },
            { key: 964, label: 'Iraq', img: '../../assets/img/id/iq.png' },
            { key: 98, label: 'Iran', img: '../../assets/img/id/ir.png' },
            { key: 354, label: 'Iceland', img: '../../assets/img/id/is.png' },
            { key: 39, label: 'Italy', img: '../../assets/img/id/it.png' },
            { key: 443, label: 'Jersey', img: '../../assets/img/id/je.png' },
            { key: 1876, label: 'Jamaica', img: '../../assets/img/id/jm.png' },
            { key: 962, label: 'Jordan', img: '../../assets/img/id/jo.png' },
            { key: 81, label: 'Japan', img: '../../assets/img/id/jp.png' },
            { key: 254, label: 'Kenya', img: '../../assets/img/id/ke.png' },
            { key: 996, label: 'Kyrgyzstan', img: '../../assets/img/id/kg.png' },
            { key: 855, label: 'Cambodia', img: '../../assets/img/id/kh.png' },
            { key: 686, label: 'Kiribati', img: '../../assets/img/id/ki.png' },
            { key: 269, label: 'Comoros', img: '../../assets/img/id/km.png' },
            { key: 1869, label: 'Saint Kitts and Nevis', img: '../../assets/img/id/kn.png' },
            { key: 850, label: 'North Korea', img: '../../assets/img/id/kp.png' },
            { key: 82, label: 'South Korea', img: '../../assets/img/id/kr.png' },
            { key: 965, label: 'Kuwait', img: '../../assets/img/id/kw.png' },
            { key: 1345, label: 'Cayman Islands', img: '../../assets/img/id/ky.png' },
            { key: 76, label: 'Kazakhstan', img: '../../assets/img/id/kz.png' },
            { key: 856, label: 'Laos', img: '../../assets/img/id/la.png' },
            { key: 961, label: 'Lebanon', img: '../../assets/img/id/lb.png' },
            { key: 1758, label: 'Saint Lucia', img: '../../assets/img/id/lc.png' },
            { key: 423, label: 'Liechtenstein', img: '../../assets/img/id/li.png' },
            { key: 94, label: 'Sri Lanka', img: '../../assets/img/id/lk.png' },
            { key: 231, label: 'Liberia', img: '../../assets/img/id/lr.png' },
            { key: 266, label: 'Lesotho', img: '../../assets/img/id/ls.png' },
            { key: 370, label: 'Lithuania', img: '../../assets/img/id/lt.png' },
            { key: 352, label: 'Luxembourg', img: '../../assets/img/id/lu.png' },
            { key: 371, label: 'Latvia', img: '../../assets/img/id/lv.png' },
            { key: 218, label: 'Libya', img: '../../assets/img/id/ly.png' },
            { key: 212, label: 'Morocco', img: '../../assets/img/id/ma.png' },
            { key: 377, label: 'Monaco', img: '../../assets/img/id/mc.png' },
            { key: 373, label: 'Moldova', img: '../../assets/img/id/md.png' },
            { key: 382, label: 'Montenegro', img: '../../assets/img/id/me.png' },
            { key: 5903, label: 'Saint Martin', img: '../../assets/img/id/mf.png' },
            { key: 261, label: 'Madagascar', img: '../../assets/img/id/mg.png' },
            { key: 692, label: 'Marshall Islands', img: '../../assets/img/id/mh.png' },
            { key: 389, label: 'Macedonia', img: '../../assets/img/id/mk.png' },
            { key: 223, label: 'Mali', img: '../../assets/img/id/ml.png' },
            { key: 95, label: 'Myanmar', img: '../../assets/img/id/mm.png' },
            { key: 976, label: 'Mongolia', img: '../../assets/img/id/mn.png' },
            { key: 853, label: 'Macau', img: '../../assets/img/id/mo.png' },
            { key: 1670, label: 'Northern Mariana Islands', img: '../../assets/img/id/mp.png' },
            { key: 596, label: 'Martinique', img: '../../assets/img/id/mq.png' },
            { key: 222, label: 'Mauritania', img: '../../assets/img/id/mr.png' },
            { key: 1664, label: 'Montserrat', img: '../../assets/img/id/ms.png' },
            { key: 356, label: 'Malta', img: '../../assets/img/id/mt.png' },
            { key: 230, label: 'Mauritius', img: '../../assets/img/id/mu.png' },
            { key: 960, label: 'Maldives', img: '../../assets/img/id/mv.png' },
            { key: 265, label: 'Malawi', img: '../../assets/img/id/mw.png' },
            { key: 52, label: 'Mexico', img: '../../assets/img/id/mx.png' },
            { key: 60, label: 'Malaysia', img: '../../assets/img/id/my.png' },
            { key: 258, label: 'Mozambique', img: '../../assets/img/id/mz.png' },
            { key: 264, label: 'Namibia', img: '../../assets/img/id/na.png' },
            { key: 687, label: 'New Caledonia', img: '../../assets/img/id/nc.png' },
            { key: 227, label: 'Niger', img: '../../assets/img/id/ne.png' },
            { key: 672, label: 'Norfolk Island', img: '../../assets/img/id/nf.png' },
            { key: 234, label: 'Nigeria', img: '../../assets/img/id/ng.png' },
            { key: 505, label: 'Nicaragua', img: '../../assets/img/id/ni.png' },
            { key: 31, label: 'Netherlands', img: '../../assets/img/id/nl.png' },
            { key: 47, label: 'Norway', img: '../../assets/img/id/no.png' },
            { key: 977, label: 'Nepal', img: '../../assets/img/id/np.png' },
            { key: 674, label: 'Nauru', img: '../../assets/img/id/nr.png' },
            { key: 683, label: 'Niue', img: '../../assets/img/id/nu.png' },
            { key: 64, label: 'New Zealand', img: '../../assets/img/id/nz.png' },
            { key: 968, label: 'Oman', img: '../../assets/img/id/om.png' },
            { key: 507, label: 'Panama', img: '../../assets/img/id/pa.png' },
            { key: 51, label: 'Peru', img: '../../assets/img/id/pe.png' },
            { key: 689, label: 'French Polynesia', img: '../../assets/img/id/pf.png' },
            { key: 675, label: 'Papua New Guinea', img: '../../assets/img/id/pg.png' },
            { key: 63, label: 'Philippines', img: '../../assets/img/id/ph.png' },
            { key: 92, label: 'Pakistan', img: '../../assets/img/id/pk.png' },
            { key: 48, label: 'Poland', img: '../../assets/img/id/pl.png' },
            { key: 508, label: 'Saint Pierre and Miquelon', img: '../../assets/img/id/pm.png' },
            { key: 6403, label: 'Pitcairn Islands', img: '../../assets/img/id/pn.png' },
            { key: 1787, label: 'Puerto Rico', img: '../../assets/img/id/pr.png' },
            { key: 970, label: 'Palestine', img: '../../assets/img/id/ps.png' },
            { key: 351, label: 'Portugal', img: '../../assets/img/id/pt.png' },
            { key: 680, label: 'Palau', img: '../../assets/img/id/pw.png' },
            { key: 595, label: 'Paraguay', img: '../../assets/img/id/py.png' },
            { key: 974, label: 'Qatar', img: '../../assets/img/id/qa.png' },
            { key: 262, label: 'Réunion', img: '../../assets/img/id/re.png' },
            { key: 40, label: 'Romania', img: '../../assets/img/id/ro.png' },
            { key: 381, label: 'Serbia', img: '../../assets/img/id/rs.png' },
            { key: 7, label: 'Russia', img: '../../assets/img/id/ru.png' },
            { key: 250, label: 'Rwanda', img: '../../assets/img/id/rw.png' },
            { key: 966, label: 'Saudi Arabia', img: '../../assets/img/id/sa.png' },
            { key: 677, label: 'Solomon Islands', img: '../../assets/img/id/sb.png' },
            { key: 248, label: 'Seychelles', img: '../../assets/img/id/sc.png' },
            { key: 249, label: 'Sudan', img: '../../assets/img/id/sd.png' },
            { key: 46, label: 'Sweden', img: '../../assets/img/id/se.png' },
            { key: 65, label: 'Singapore', img: '../../assets/img/id/sg.png' },
            { key: 386, label: 'Slovenia', img: '../../assets/img/id/si.png' },
            { key: 4779, label: 'Svalbard and Jan Mayen', img: '../../assets/img/id/sj.png' },
            { key: 421, label: 'Slovakia', img: '../../assets/img/id/sk.png' },
            { key: 232, label: 'Sierra Leone', img: '../../assets/img/id/sl.png' },
            { key: 378, label: 'San Marino', img: '../../assets/img/id/sm.png' },
            { key: 221, label: 'Senegal', img: '../../assets/img/id/sn.png' },
            { key: 252, label: 'Somalia', img: '../../assets/img/id/so.png' },
            { key: 597, label: 'Suriname', img: '../../assets/img/id/sr.png' },
            { key: 211, label: 'South Sudan', img: '../../assets/img/id/ss.png' },
            { key: 239, label: 'São Tomé and Príncipe', img: '../../assets/img/id/st.png' },
            { key: 503, label: 'El Salvador', img: '../../assets/img/id/sv.png' },
            { key: 1721, label: 'Sint Maarten', img: '../../assets/img/id/sx.png' },
            { key: 963, label: 'Syria', img: '../../assets/img/id/sy.png' },
            { key: 268, label: 'Swaziland', img: '../../assets/img/id/sz.png' },
            { key: 1649, label: 'Turks and Caicos Islands', img: '../../assets/img/id/tc.png' },
            { key: 235, label: 'Chad', img: '../../assets/img/id/td.png' },
            { key: 9993, label: 'French Southern and Antarctic Lands', img: '../../assets/img/id/tf.png' },
            { key: 228, label: 'Togo', img: '../../assets/img/id/tg.png' },
            { key: 66, label: 'Thailand', img: '../../assets/img/id/th.png' },
            { key: 992, label: 'Tajikistan', img: '../../assets/img/id/tj.png' },
            { key: 690, label: 'Tokelau', img: '../../assets/img/id/tk.png' },
            { key: 670, label: 'Timor-Leste', img: '../../assets/img/id/tl.png' },
            { key: 993, label: 'Turkmenistan', img: '../../assets/img/id/tm.png' },
            { key: 216, label: 'Tunisia', img: '../../assets/img/id/tn.png' },
            { key: 676, label: 'Tonga', img: '../../assets/img/id/to.png' },
            { key: 90, label: 'Turkey', img: '../../assets/img/id/tr.png' },
            { key: 1868, label: 'Trinidad and Tobago', img: '../../assets/img/id/tt.png' },
            { key: 688, label: 'Tuvalu', img: '../../assets/img/id/tv.png' },
            { key: 886, label: 'Taiwan', img: '../../assets/img/id/tw.png' },
            { key: 255, label: 'Tanzania', img: '../../assets/img/id/tz.png' },
            { key: 380, label: 'Ukraine', img: '../../assets/img/id/ua.png' },
            { key: 256, label: 'Uganda', img: '../../assets/img/id/ug.png' },
            { key: 9994, label: 'United States Minor Outlying Islands', img: '../../assets/img/id/um.png' },
            { key: 1, label: 'United States', img: '../../assets/img/id/us.png' },
            { key: 598, label: 'Uruguay', img: '../../assets/img/id/uy.png' },
            { key: 998, label: 'Uzbekistan', img: '../../assets/img/id/uz.png' },
            { key: 3906698, label: 'Vatican City', img: '../../assets/img/id/va.png' },
            { key: 1784, label: 'Saint Vincent and the Grenadines', img: '../../assets/img/id/vc.png' },
            { key: 58, label: 'Venezuela', img: '../../assets/img/id/ve.png' },
            { key: 1284, label: 'British Virgin Islands', img: '../../assets/img/id/vg.png' },
            { key: 1340, label: 'United States Virgin Islands', img: '../../assets/img/id/vi.png' },
            { key: 84, label: 'Vietnam', img: '../../assets/img/id/vn.png' },
            { key: 678, label: 'Vanuatu', img: '../../assets/img/id/vu.png' },
            { key: 681, label: 'Wallis and Futuna', img: '../../assets/img/id/wf.png' },
            { key: 685, label: 'Samoa', img: '../../assets/img/id/ws.png' },
            { key: 383, label: 'Kosovo', img: '../../assets/img/id/xk.png' },
            { key: 967, label: 'Yemen', img: '../../assets/img/id/ye.png' },
            { key: 2630, label: 'Mayotte', img: '../../assets/img/id/yt.png' },
            { key: 27, label: 'South Africa', img: '../../assets/img/id/za.png' },
            { key: 260, label: 'Zambia', img: '../../assets/img/id/zm.png' },
            { key: 263, label: 'Zimbabwe', img: '../../assets/img/id/zw.png' }

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
                                <TextInput style = {idFormStyle.input} underlineColorAndroid = "transparent" placeholder = "사용할 아이디 입력해주세요." placeholderTextColor = "#9a73ef" autoCapitalize = "none" onChangeText={(text) => this.setState({USERNAME: text})} keyboardType="default"/>
                            </View>
                        </View>

                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.3, alignItems:'center'}}>
                                <Text style={idFormStyle.title}> COUNTRY </Text>
                            </View>
                            <View style={{flex:.7, alignItems:'center'}}>
                                <ModalSelector
                                data={data} initValue="국적을 선택해주세요." onChange={(option)=>{ this.setState({textInputValue:option.label})}}>
                                    <TextInput placeholder="국적을 선택해주세요."
                                               style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}} editable={false}  value={this.state.textInputValue} />

                                </ModalSelector>

                            </View>
                        </View>

                        <View>

                        </View>

                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.3, alignItems:'center'}}>
                                <Text style={idFormStyle.title}> AGE </Text>
                            </View>
                            <View style={{flex:.7, alignItems:'center'}}>
                                <TextInput style = {idFormStyle.input} underlineColorAndroid = "transparent" placeholder = "나이를 입력해주세요." placeholderTextColor = "#9a73ef" autoCapitalize = "none" onChangeText={(text) => this.setState({AGE: text})} keyboardType="numeric"/>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection: 'row', paddingTop:5, paddingBottom:5}}>
                            <View style={{flex:.3, alignItems:'center'}}>
                                <Text style={idFormStyle.title}> GENDER </Text>
                            </View>
                            <View style={{flex:.7, alignItems:'center'}}>
                                <ModalSelector data={gender} initValue="성별을 선택해주세요."  onChange={(option)=>{ this.setState({textInputValue:option.label})}}/>
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
