import React from 'react';
import { View,TouchableHighlight,Text,StyleSheet,Platform } from 'react-native';

class TopSwitch extends React.Component{
    constructor(props) {
        super(props);
        this.__bubbleHandler = this.__bubbleHandler.bind(this);
        this.__newoneHandler = this.__newoneHandler.bind(this);
    }
    __bubbleHandler(){

    }
    __newoneHandler(){

    }
    render(){
        let dimens = this.props.dimens === undefined ? {width: 200,height: 37,borderRadius:19} : this.props.dimens;
        let posi = this.props.posi === undefined ? {marginTop: 40,marginRight:'auto',marginLeft:'auto'} : this.props.dimens;
        return (
            <View style={[styles.topBtnFixStyle,dimens,posi]}>
                <TouchableHighlight underlayColor="#33333366" onPress={ this.__bubbleHandler }
                                    style={{flex:1,height:'100%',flexDirection: 'column',
                                        alignItems: 'center',justifyContent: 'center',
                                        borderTopLeftRadius:19,borderBottomLeftRadius:19}}>
                    <Text style={styles.buttontext}>Bubble</Text>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="#FFFFFF66" onPress={ this.__newoneHandler }
                                    style={{flex:1,height:'100%',flexDirection: 'column',
                                        alignItems: 'center',justifyContent: 'center',
                                        borderTopRightRadius:19,borderBottomRightRadius:19}}>
                    <Text style={styles.buttontext}>NewOne</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topBtnFixStyle : {
        backgroundColor : "#00AEEF",
        ...Platform.select({
            ios: {
               shadowColor: '#333333',
               shadowOpacity: 0.15,
               shadowRadius:3,
               shadowOffset:{width:2,height: 3}
            },
            android: {
                elevation:1.5
            }
        }),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttontext : {
        color: 'white',
        fontSize: 14,
        fontWeight: '600'
    }
});

export default TopSwitch;
