import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default Actions = () => {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false} >

            <TouchableOpacity style={styles.actionButtons} active={0.9} >
                <View style={styles.areaButtons}>
                    <AntDesign name="tagso" size={27} color="rgb(136,0,255)" />
                </View>
                <Text style={styles.textAction}>Tags</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButtons} active={0.9} >
                <View style={styles.areaButtons}>
                    <AntDesign name="creditcard" size={27} color="rgb(136,0,255)" />
                </View>
                <Text style={styles.textAction}>Carteira</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButtons} active={0.9} >
                <View style={styles.areaButtons}>
                    <AntDesign name="calculator" size={27} color="rgb(136,0,255)" />
                </View>
                <Text style={styles.textAction}>Calculadora</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButtons} active={0.9} >
                <View style={styles.areaButtons}>
                    <AntDesign name="sharealt" size={27} color="rgb(136,0,255)" />
                </View>
                <Text style={styles.textAction}>Compartilhar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButtons} active={0.9} >
                <View style={styles.areaButtons}>
                    <AntDesign name="lock" size={27} color="rgb(136,0,255)" />
                </View>
                <Text style={styles.textAction}>Bloquear App</Text>
            </TouchableOpacity>

        </ScrollView>

    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        flex: 1,
        maxHeight: 120,
        minHeight: 120,
        paddingTop: 20,
        marginBottom: 6,
        marginStart: 14,
        marginEnd: 14,
        fontWeight: 'bold',
        marginTop: 6
    },
    actionButtons: {
        marginRight: 20,
        marginLeft: 20,
        alignItems: 'center'
    },

    areaButtons: {
        alignItems: 'center',
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(136,0,255,.1)',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textAction: {
        marginTop: 4
    }
})