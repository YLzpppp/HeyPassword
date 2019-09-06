import React from 'react';
import { View,StyleSheet,Text,Image,Animated } from 'react-native';
import MainBackgroundScreen from './MainBackgroundScreen';
import { TopSwitch } from 'components';
import {device} from '../utils';

const w = device.SCREENWIDTH;
const h = device.SCREENHEIGHT;

function HomeSN(props){

    return(
        <MainBackgroundScreen>
            <TopSwitch/>
        </MainBackgroundScreen>
    )

}
const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start"
    }
});

export default HomeSN;
