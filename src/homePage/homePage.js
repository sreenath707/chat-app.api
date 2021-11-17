import React from 'react';
import { StyleSheet, Text, View,Linking, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colorPallete from '../util/colorPallete';

import Body from './body';


function HomePage({navigation,setUserName}){
    return(
            <View style={styles.body}>
                <Body navigation={navigation} setUserName={setUserName}></Body>
            </View>   
    )
}


const styles = StyleSheet.create({
    heading : {
      color : 'white',
      fontSize : 27,
      fontWeight :'bold',
      textAlign : 'center',
      padding : 15
    },
    body : {
      backgroundColor : colorPallete.background,
      height : '100%'
    }
  });

export default HomePage;