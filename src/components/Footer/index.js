import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

export default Footer = ({ navigation }) => {

    



    return (
        <View style={styles.container} >

            <TouchableOpacity active={0.9} style={styles.iconFooter} onPress={() => navigation.navigate('Home')} >
                <Feather name="home" size={20} color='#8000ff' />
            </TouchableOpacity>

            <TouchableOpacity active={0.9} style={styles.iconFooter}  onPress={() => navigation.navigate('Cards')} >
                <Feather name="credit-card" size={20} color='#8000ff' />
            </TouchableOpacity>

            <TouchableOpacity active={0.9} style={[styles.iconFooter, {padding: 24}]}>
                <Feather name="dollar-sign" size={20} color='#8000ff' />
            </TouchableOpacity>

            <TouchableOpacity active={0.9} style={styles.iconFooter}>
                <Feather name="folder" size={20} color='#8000ff' />
            </TouchableOpacity>

            <TouchableOpacity active={0.9} style={styles.iconFooter} onPress={() => navigation.navigate('Settings')} >
                <Feather name="tool" size={20} color='#8000ff' />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 14,
        paddingBottom: 14,
        paddingStart: 24,
        paddingEnd: 24,
        backgroundColor: '#8000ff',
    },

    iconFooter: {
        borderWidth: .8,
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 12,
    },
})