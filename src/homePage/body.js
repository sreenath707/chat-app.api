import React from 'react';
import { View,Text,StyleSheet,Image, TouchableOpacity } from "react-native";
import colorPallete from '../util/colorPallete';


let users = [
    {
        userName : 'sreenath',
        dp : 'https://wallpapercave.com/wp/lGc4AKv.jpg',
        lastMessage : 'Hii I am batman fan.'
    },
    {
        userName : 'batman',
        dp : 'https://wallpapercave.com/wp/lGc4AKv.jpg',
        lastMessage : 'Hii I am batman.'
    },
    {
        userName : 'sreenath',
        dp : 'https://wallpapercave.com/wp/lGc4AKv.jpg',
        lastMessage : 'ok then, bye.'
    },
    {
        userName : 'batman',
        dp : 'https://wallpapercave.com/wp/lGc4AKv.jpg',
        lastMessage : 'ok then, bye.'
    },
    {
        userName : 'sreenath',
        dp : 'https://wallpapercave.com/wp/lGc4AKv.jpg',
        lastMessage : 'ok then, bye.'
    },
    {
        userName : 'batman',
        dp : 'https://wallpapercave.com/wp/lGc4AKv.jpg',
        lastMessage : 'ok then, bye.'
    },
    {
        userName : 'sreenath',
        dp : 'https://wallpapercave.com/wp/lGc4AKv.jpg',
        lastMessage : 'ok then, bye.'
    },
    {
        userName : 'batman',
        dp : 'https://wallpapercave.com/wp/lGc4AKv.jpg',
        lastMessage : 'ok then, bye.'
    },
    
]

function Body({setUserName,navigation}){
    return(
        <View>
            {
                users.map((user,index)=>(
                    <TouchableOpacity
                        key={index}
                        onPress={()=>{
                            setUserName(user.userName);
                            navigation.push('message');
                        }}
                    >
                        <View style={styles.card}>
                            <Image
                                style={styles.dp}
                                source={
                                    {
                                        uri : user.dp
                                    }
                                }
                            ></Image>
                            <View style={styles.restCard}>
                                <Text style={styles.userName}>{user.userName}</Text>
                                <Text style={styles.lastMessage}>{user.lastMessage}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        height : 70,
        backgroundColor : colorPallete.card,
        marginTop : 5,
        padding : 5,
        display :'flex',
        flexDirection : 'row',
        alignItems : 'center'
    },
    dp:{
        height :65,
        width : 65,
        borderRadius : 32.5
    },
    userName :{
        color : 'white',
        fontSize : 20
    },
    restCard : {
        paddingLeft : 20
    },
    lastMessage : {
        fontSize : 14,
        color : '#909090'
    }
})

export default Body;

