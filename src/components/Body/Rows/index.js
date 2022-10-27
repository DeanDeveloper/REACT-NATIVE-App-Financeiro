import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default Rows = ({ action, setModal, data, status, iterator, setInfo, infoModal }) => {


    return (
        <View>
            

            <Animatable.View
                key={data}
                animation="fadeIn"
                delay={iterator * 200}
                useNativeDriver
            >

                <TouchableOpacity style={styles.touch} onPress={() => { setModal(true), setInfo(data.id) }} >
                    <Text style={styles.data}>{data.card} - {data.date}</Text>
                    <View style={styles.container}>

                        <Text style={styles.descritpion}>{data.description}</Text>
                        
                        {status ? (
                            <View style={styles.boxValue}>
                                <Text style={data.type === 1 ? styles.values : styles.expenses}>{data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}</Text>
                            </View>
                        ) : (

                            <View style={styles.boxHidden}>
                                <Text style={styles.hidden}></Text>
                            </View>

                        )}

                    </View>

                </TouchableOpacity>



            </Animatable.View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    touch: {
        padding: 4,
        marginBottom: 18,
        paddingBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#d4d4d4'
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    descritpion: {
        fontSize: 18,
        color: 'black',
        paddingTop: 4
    },

    data: {
        fontSize: 16,
        color: '#b6b6b6'
    },
    boxValue: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    values: {
        fontSize: 18,
        color: '#2ecc71',
    },

    expenses: {
        fontSize: 18,
        color: '#e74c3c',
    },

    boxHidden: {
        flexDirection: 'row'
    },

    hidden: {
        width: 60,
        height: 7,
        backgroundColor: '#e4e4e4',
        borderRadius: 3,
    }

})