import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons';

export default Filters = () => {
    return (
        <View style={styles.container}>
            <Feather name="filter" color="black" size={22} />

            <View style={styles.insideFilter}>
                
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        height:  130,
        padding: 10,
        marginStart: 14,
        marginEnd :14,
        backgroundColor: "#fafafa",
        marginTop:-25,
        marginBottom:  10,
        borderRadius: 4,
        shadowColor: "rgba(0,0,0,.8)",
        shadowRadius: 10,
        shadowOffset:{
            width:0,
            height: 4
        },  
        shadowOpacity: 4,
        elevation: 8
    },

    insideFilter : {
        marginTop: 6
    },


    inputText: {
        borderWidth: .4,
        borderColor : "#a4a4a4",
        borderRadius: 4,
        padding: 6,
        textTransform: 'uppercase',
        width: '60%'
    }


})