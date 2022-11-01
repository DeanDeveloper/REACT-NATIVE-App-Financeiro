import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default Profile = ({ closeModalProfile }) => {
    return (
        <SafeAreaView style={styles.container}>

                <View style={styles.containerList}>

                    <TouchableOpacity style={styles.containerSubList}>
                        <Feather name="edit-2" color="#8000ff" size={20} />
                        <Text style={[styles.list, { color: '#8000ff' }]}>Alterar Nome</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerSubList}>
                        <Feather name="image" color="#8000ff" size={20} />
                        <Text style={[styles.list, { color: '#8000ff' }]}>Alterar Imagem</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerSubList}>
                        <Feather name="log-out" color="#8000ff" size={20} />
                        <Text style={[styles.list, { color: '#8000ff' }]}>Encerrar Sessão</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.containerSubList} onPress={closeModalProfile} >
                        <Feather name="arrow-left" color="#8000ff" size={20} />
                        <Text style={[styles.list, { color: '#8000ff' }]}>Voltar</Text>
                    </TouchableOpacity>

                </View>


                <TouchableOpacity style={styles.spaceCloseModal} onPress={closeModalProfile} ></TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        borderRadius: 6,
        alignItems: 'center',
    },
 

    containerList: {
        flex: .4,
        // width: '90%',
        borderBottomEndRadius: 6,
        borderBottomStartRadius: 6,
        backgroundColor: 'rgba(0,0,0,0.75)',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 6,
        paddingTop: 20,
        paddingStart: 20,
        paddingEnd: 20,
        // marginTop: 90
    },

    spaceCloseModal: {
        flex: .6,
        width: '100%',
        backgroundColor: 'transparent'
    }, 
    containerSubList: {
        width: 100,
        height: 100,
        flexShrink: 1,
        borderRadius: 6,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#fff',
        marginHorizontal: 4,
        marginVertical: 8,
        paddingHorizontal: 6
    },



    list: {
        fontSize: 14,
        marginTop: 8,
        textAlign: 'center',
    }

})