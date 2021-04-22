import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Routes from './src/routes';
import { Confirmation } from './src/pages/Confirmation';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';


export default function App(){
  const [ loaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });
  
  if(!loaded){
    return(
      <AppLoading/>
    )
  }
    return(
      <Routes />
    )
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  }
})
