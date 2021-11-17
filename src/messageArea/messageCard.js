import React from "react";
import { View,StyleSheet,Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import colorPallete from "../util/colorPallete";


function MessageCard({message}){
    return(
        // <View styles={styles.cardContainer}>
        //     <View style= {styles.tilt}></View>
            <View 
                style={
                    message.user=='me'?
                    styles.leftCard :
                    styles.rightCard
                }
            >  
                <Text style={styles.message }>{message.message}</Text>
            </View>
        // </View>
    )
}

const styles = StyleSheet.create({
    leftCard : {
        backgroundColor : colorPallete.messageCard,
        margin : 5,
        minHeight : 40,
        alignItems : 'center',
        flexDirection : 'row',
        paddingHorizontal : 10,
        maxWidth : '60%',
        alignSelf : 'flex-start',
        marginLeft : 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    rightCard : {
        backgroundColor : colorPallete.messageCard,
        margin : 5,
        minHeight : 40,
        alignItems : 'center',
        flexDirection : 'row',
        padding : 5,
        paddingLeft : 10,
        maxWidth : '60%',
        alignSelf : 'flex-end',
        marginRight : 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    message : {
        color : 'black',
        fontSize : 18,
                
    },
    tilt : {
        width  :0,
        height : 0,
        borderTopColor : colorPallete.messageCard,
        borderLeftColor : 'rgba(52, 52, 52, 0)',
        borderRightColor : 'rgba(52, 52, 52, 0)',
        borderBottomColor : 'rgba(52, 52, 52, 0)',
        borderWidth : 20
    },
    cardContainer : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'flex-start',
        position : "absolute",
        top : 30
    }
    
})

export default MessageCard;