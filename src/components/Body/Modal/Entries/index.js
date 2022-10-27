import React, { useState } from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity, Share } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export default ModalEntries = ({ setModal, action, options }) => {

    let result = options[0];




    const onShare = async () => {


        const dados = (<View >
            <TouchableOpacity  >
                <Text>Fechar Detalhes</Text>
            </TouchableOpacity>
        </View>)



        try {

            const result = await Share.share({
                message: 'Compartilhando meu APP Finaceiro',
                title: 'APP'
            })

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    alert('Compartilhado com sucesso')
                }
            } else if (result.action === Share.dismissedAction) {
                alert('Falha no compartilhamento')
            }

        } catch (error) {
            alert(error.message)
        }

    }


    return (
        <View>
            <Modal visible={action} transparent={true} onRequestClose={() => { setModal(false) }} animationType='slide'>

                <View style={styles.container}>

                    <View style={styles.content}>

                        <Feather style={styles.iconShare} name='share-2' size={24} color='#8800ff' onPress={onShare} />

                        <Text style={styles.title}>Dados de Transação </Text>

                        <View style={styles.boxInformation}>
                            <Text style={styles.titleTransacao}>Data e Hora</Text>
                            <View style={styles.boxRowInformation}>
                                <Text style={styles.titleDetailsEntries}>Data:</Text>
                                <Text style={styles.infoDetails}>{result.date}</Text>
                            </View>

                            <View style={styles.boxRowInformation}>
                                <Text style={styles.titleDetailsEntries}>Horario:</Text>
                                <Text style={styles.infoDetails}>{result.time}</Text>
                            </View>
                        </View>

                        <View style={styles.boxInformation}>

                            <Text style={styles.titleTransacao}>Sobre a Transação</Text>
                            <View style={styles.boxRowInformation}>
                                <Text style={styles.titleDetailsEntries}>Instituição:</Text>
                                <Text style={styles.infoDetails}>{result.card}</Text>
                            </View>

                            <View style={styles.boxRowInformation}>
                                <Text style={styles.titleDetailsEntries}>Descrição:</Text>
                                <Text style={styles.infoDetails}>{result.description}</Text>
                            </View>

                            <View style={styles.boxRowInformation}>
                                <Text style={styles.titleDetailsEntries}>Valor:</Text>
                                <Text style={styles.infoDetails}>{`R$ ${result.value}`}</Text>
                            </View>

                            <View style={styles.boxRowInformation}>
                                <Text style={styles.titleDetailsEntries}>Tipo de Receita:</Text>
                                <Text style={styles.infoDetails}>{result.type == 0 ? 'Saída' : 'Entrada'}</Text>
                            </View>

                        </View>

                        <View style={styles.containerBottom}>
                            <TouchableOpacity style={styles.buttonContent} onPress={() => { setModal(false) }} >
                                <Text style={styles.buttonText}>Fechar Detalhes</Text>
                            </TouchableOpacity>
                        </View>


                    </View>


                </View>


            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        zIndex: 99,
        padding: 20,
        backgroundColor: 'rgba(0,0,0, .8)',
        justifyContent: 'center',
    },
    iconShare: {
        position: 'absolute',
        right: 12,
        top: 12,
        zIndex: 99
    },

    content: {
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: 6,
        padding: 10
    },

    title: {
        fontSize: RFPercentage(1.8),
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 22
    },

    titleTransacao: {
        fontSize: RFPercentage(1.7),
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 12,
        color: '#8800ff'
    },

    boxInformation: {
        marginBottom: 20,
        borderBottomWidth: .4,
        paddingBottom: 10,
        borderBottomColor: '#8800ff',
        borderStyle: 'dashed'
    },

    boxRowInformation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 6,
        paddingBottom: 6
    },

    titleDetailsEntries: {
        fontSize: RFPercentage(1.5),
        color: '#b6b6b6'
    },

    infoDetails: {
        fontWeight: 'bold'
    },


    containerBottom: {
        marginTop: 10
    },

    buttonContent: {
        backgroundColor: '#8800ff',
        borderRadius: 8,
        padding: 12
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },


})


