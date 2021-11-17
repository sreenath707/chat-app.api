import React, { useState } from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/homePage/homePage';
import MessageArea from './src/messageArea/messageArea';
import Header from './src/header';
import { View,Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import colorPallete from './src/util/colorPallete';



const Stack = createStackNavigator();


export default function App() {
  const [userName,setUserName] = useState('not set');
  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
             name="chit-chat"
             options={{
              headerLeft :  ()=>(<SimpleLineIcons  name="menu" size={24} color="white" style={{marginLeft : 10}} />),
              headerTitle: ()=>( <Header title="chat-app" />),
              headerStyle : {backgroundColor : colorPallete.navbar}
            }} 
            >
              {(props)=>(<HomePage setUserName={setUserName} {...props}/>)}
            </Stack.Screen>
            <Stack.Screen 
              name="message" 
              component={MessageArea} 
               options={({navigation})=>({
                headerLeft :  ()=>(<AntDesign style={{marginLeft : 10}} onPress={navigation.goBack} name="arrowleft" size={30} color="white" />),
                headerRight :  ()=>(<Fontisto style={{marginRight : '15%'}} name="more-v-a" size={24} color="white" />),
                headerTitle: ()=>( <Header title={userName} />),
                headerStyle : {backgroundColor : colorPallete.navbar}
              })} 
            />
            
          </Stack.Navigator>
    </NavigationContainer>
  );
}

