import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, Modal } from "react-native";

import { Feather } from '@expo/vector-icons';
import Profile from "../Body/Modal/Profile";
import {Context} from '../../contexts/Provider';
import { RFPercentage } from "react-native-responsive-fontsize";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight - (60) : 66;


export default Header = () => {

    const [statusModal, setStatusModal] = useState(false);
    const {prefix, username} = useContext(Context);

    return (
        <View style={styles.header}>

            <Modal visible={statusModal} transparent={true} onRequestClose={() => setStatusModal(false)} >
                <Profile closeModalProfile={() => setStatusModal(false)} />
            </Modal>

            <View style={styles.container}>

                <Text style={styles.username}>{prefix}{username}</Text>

                <View style={styles.containerIcons}>

                    <TouchableOpacity style={styles.buttonUser} onPress={() => setStatusModal(true)} >
                        <Feather name="user" size={27} color='#fff' />
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )

}



const styles = StyleSheet.create({
    header: {
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 20,
        paddingEnd: 20,
        paddingBottom: 50,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,

    },

    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },

    username: {
        fontSize: RFPercentage(2.2),
        color: '#fff',
        fontWeight: 'bold',
        // width: esquerda
    },

    containerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    buttonEye: {
        marginRight: 40
    },

    buttonUser: {
        fontSize: 20,
        borderWidth: 0.8,
        borderColor: '#fff',
        borderRadius: 50,
        padding: 8
    }
})