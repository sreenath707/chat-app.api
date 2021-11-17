import React from 'react';
import { View,StyleSheet, Text } from "react-native";

function Header({title}){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    title:{
        color : 'white',
        fontSize : 30,
        textAlign : 'center',
    },
})

export default Header;