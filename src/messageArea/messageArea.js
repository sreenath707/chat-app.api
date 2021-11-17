import React from "react";
import { View,StyleSheet,TextInput,ScrollView,Button  } from "react-native";

import { SafeAreaView } from 'react-native-safe-area-context';
import colorPallete from "../util/colorPallete";
import { Ionicons } from '@expo/vector-icons';


import MessageCard from "./messageCard";


const messages = [
    {user : 'me',message : 'hii'},
    {user : 'you',message : 'Hii'},
    {user : 'me',message : 'how are you ?'},
    {user : 'me',message : 'hope you are fine'},
    {user : 'you',message : 'yes I am fine...thanks for asking and how are you good to know'},
    {user : 'me',message : 'hii'},
    {user : 'you',message : 'Hii'},
    {user : 'me',message : 'how are you ?'},
    {user : 'me',message : 'hope you are fine'},
    {user : 'you',message : 'yes I am fine...thanks for asking and how are you good to know'},
    {user : 'me',message : 'hii'},
    {user : 'you',message : 'Hii'},
    {user : 'me',message : 'how are you ?'},
    {user : 'me',message : 'hope you are fine'},
    {user : 'you',message : 'yes I am fine...thanks for asking and how are you good to know'},
    {user : 'me',message : 'hii'},
    {user : 'you',message : 'Hii'},
    {user : 'me',message : 'how are you ?'},
    {user : 'me',message : 'hope you are fine'},
    {user : 'you',message : 'yes I am fine...thanks for asking and how are you good to know'}

]

function MessageArea(){
    return(
            <View style={styles.messageArea}>
                <ScrollView>
                
                {
                    messages.map((msg,index)=>(
                        <MessageCard key={index} message={msg} />
                    ))
                }
                </ScrollView>
                <View style={styles.bottomContainer}>
                    <TextInput style = {styles.messageInput}/>
                    <Ionicons name="send" size={40} color="white" />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    messageArea: {
        backgroundColor : colorPallete.background,
        height : '100%',
        paddingTop : 20,
        paddingBottom : 10,
        justifyContent : 'flex-end'
    },
    messageInput : {
        height : 50,
        borderColor : 'white',
        borderWidth : 2,
        padding : 10,
        color : 'white',
        width : '75%',
        borderRadius : 20,
        justifyContent : 'flex-end',
        marginLeft : '4%',
    },
    bottomContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around'
    }
}) 

export default MessageArea;