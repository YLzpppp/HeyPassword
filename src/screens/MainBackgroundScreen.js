import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

import {device} from '../utils';

import light_clear from '../assets/gradientbg/light_clear.png';
import light_sky from '../assets/gradientbg/light_sky.png';
import {systemversion} from '../utils/device';

const adapt_status_height = 24;

class MainBackgroundScreen extends React.Component {

    constructor(props){
        super();
    }

    __doAdapte(model){
        console.log(model)
        const model_lists = ['iPhone X','iPhone XS','iPhone XS Max','iPhone XR'];
        for(m of model_lists){
            return model === m;
        }
    }

    render(){
        return (
            <View style={{flex:1,backgroundColor:'black'}}>
                <ImageBackground
                    source={light_sky}
                    style={this.__doAdapte(device.model) ? styles.main_bg_adapt_screen : styles.main_bg_screen } >
                    <View style={styles.main_bg_screen}>
                        {this.props.children}
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_bg_screen : {
        width:'100%',
        height:'100%',
        borderRadius: 8,
    },
    main_bg_adapt_screen: {
        width:'100%',
        height:'100%',
        paddingTop: adapt_status_height,
        borderRadius: 8,
    }
});

export default MainBackgroundScreen;
