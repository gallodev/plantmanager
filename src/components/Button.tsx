import React from 'react';
import { View , Text, TouchableOpacity, StyleSheet, TouchableOpacityProps} from 'react-native';

import colors from '../styles/colors';
import fronts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title : string
}

export function Button({title,...props} : ButtonProps){
    return(        
        <TouchableOpacity {...props} style={styles.button}>            
            <Text style={styles.text}>{ title }</Text>            
        </TouchableOpacity>        
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginTop: 20,
        height: 56,
        width: 100        
    },
    text : {
        color: colors.white,                
    }
});