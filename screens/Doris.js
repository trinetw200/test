/**
 * Sam+-ple React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    Image,
    ScrollView,
    PixelRatio,
    TextInput
} from 'react-native';
import Dimensions from "Dimensions";
var width = Dimensions.get('window').width;
var height= Dimensions.get('window').height;
 
export default class Pic extends Component {
    static  defaultProps={
        name:"Apple",
        url:"apple.png",
        class:"Fruit",
        measure:"5.5",
        place:"五号温室",
        start:"14-02-17",
        end:"25-10-30",
        days:"1204"
    }
    render(){
        return(
                <View style={[styles.content,styles.flex]}>
                    <View style={styles.left}>
                        <View style={styles.ring}>
                            <Image style={styles.pic} source={require('../assets/washing-machine.png')} />
                        </View>
                        <Text style={styles.measure}>面积:{this.props.measure}亩</Text>
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.place}>{this.props.place}</Text>
                        <Text style={styles.class}>{this.props.class}-{this.props.name}</Text>
                        <Text style={styles.days}>{this.props.days}天</Text>
 
                        <View style={styles.input}></View>
                        <View style={styles.list}>
                            <View style={styles.start}><Text>{this.props.start}</Text></View>
                            <View style={styles.end}><Text>{this.props.end}</Text></View>
                        </View>
 
                    </View>
                </View>
 
        );
    }
}
//noinspection JSDuplicatedDeclaration
const styles = StyleSheet.create({
    flex:{
        flexDirection:'row'
    },
    content:{
        width:width-15,
        height:220,
        margin:10,
        marginLeft:5,
        borderWidth:3/PixelRatio.get(),
        borderColor:'#f7ffec',
        backgroundColor:'#ffffff',
        elevation:100,
        borderRadius:10
    },
    left:{
        width:150,
        height:220
    },
    pic:{
        width:100,
        height:100,
        borderWidth:3/PixelRatio.get(),
        borderColor:'#c3f8df',
        borderRadius:50
    },
    ring:{
        marginLeft:10,
        marginTop:30,
        width:120,
        height:120,
        padding:6,
        borderWidth:14/PixelRatio.get(),
        borderColor:'#b4f83c',
        borderRadius:60
    },
    measure:{
        marginTop:15,
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign:'center'
    },
    text:{
        width:width-135,
        height:10
    },
    place:{
        marginTop:30,
        width:width-135,
        height:30,
        color:'#c1c1c1',
        fontSize:20
    },
    class:{
        marginTop:5,
        width:width-135,
        color:'#000000',
        fontSize:30
    },
    days:{
        marginTop:5,
        width:width-135,
        color:'#000000',
        fontSize:20
    },
    input:{
        marginTop:5,
        height:10,
        borderWidth:6/PixelRatio.get(),
        borderColor:'#55f800',
        width:width-200,
        backgroundColor:'#33f8be',
        borderRadius:5
    },
    list:{
        width:width-135,
        flexDirection:"row",
    },
    start:{
        flex:1,
 
    },
    end:{
        flex:1,
 
    }
 
});