import React from 'react';
import { Dimensions,Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const isIos = () => Platform.OS === 'ios';
const isAndroid = () => Platform.OS === 'android';

const model = DeviceInfo.getModel();
const version = DeviceInfo.getVersion();
const systemname = DeviceInfo.getSystemName();
const systemversion = DeviceInfo.getSystemVersion();


export { SCREENHEIGHT,SCREENWIDTH,model,version,systemname,systemversion,isIos,isAndroid };
