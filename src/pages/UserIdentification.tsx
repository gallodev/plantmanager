import React, { useState } from 'react';
import { StyleSheet,
     SafeAreaView,
     View,
     Text,
     TextInput,
     KeyboardAvoidingView,
     TouchableWithoutFeedback,
     Platform, 
     Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';

export function UserIdentification() {
    const navigation = useNavigation();

    const [name,setName] = useState<string>('');
    const [isFocused,setIsFocused] = useState<Boolean>(false);
    const [isFilled,setIsFilled] = useState<Boolean>(false);

    function handleSubmit(){
        navigation.navigate('Confirmation');
    }

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus(){
        setIsFocused(true);
    }

    function handleInputChange(value : string){
        setIsFocused(!!value);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>                
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <Text style={styles.emoji}>
                                😎
                            </Text>
                            <Text style={styles.title}> 
                                Como podemos {'\n'}
                                chamar você ? 
                            </Text>
                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocused && isFilled) &&
                                    { borderColor: colors.green }                                
                                    ]
                                }
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                onChangeText={handleInputChange}
                            />
                            <Button title="Confirmar" onPress={handleSubmit} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {        
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
    },
    title: {
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        fontSize: 24,
        lineHeight: 32
    }
});