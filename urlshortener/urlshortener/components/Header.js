import React  from "react";
import { StyleSheet, View, Text }  from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.text}>URL SHORTENER</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        backgroundColor : 'coral',
        height : 100,
        paddingTop: 50,
        justifyContent: "space-between",
        alignContent: 'center',
        width : 500,
        borderStyle :"solid",
    },
    text : {
        color : '#fff',
        fontSize : 25,
        textAlign : 'center',
        fontWeight : 'bold'
    }
})