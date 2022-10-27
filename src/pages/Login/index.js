import React, { useState } from 'react';
import { StatusBar, View, Text, StyleSheet, TextInput, Image, TouchableOpacity, Button } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';



export default Login = () => {

    return (
        <View style={styles.containerMain}>
            <StatusBar backgroundColor='#8800ff' />


            <View style={styles.containerComponents}>

                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
                    <View style={{ borderWidth: .6, borderRadius: 60, width: 120, height: 120, justifyContent: 'center', alignItems: 'center', borderColor: '#8800ff' }}>
                        <Feather name='bar-chart-2' style={{ fontSize: 90, color: '#8800ff' }} />
                    </View>
                </View>
                
                <Text style={{ fontSize: 24, textAlign: 'center', color: '#8800ff', marginTop: 12 }}  >Minhas Finanças</Text>

                <View style={styles.containerInputs}>
                    {/* <Text style={{ fontSize: 16, color: '#444444' }}>Digite seu usuário e senha para acessar</Text> */}
                    <TextInput style={styles.inputs} placeholder='Email ou usuário' />
                    <TextInput style={styles.inputs} placeholder='Sua Senha' secureTextEntry={true} />
                </View>

                <View style={styles.boxButtons}>

                    <TouchableOpacity style={styles.touchButton} >
                        <Feather name="user-plus" color='#8800ff' size={15} /><Text style={styles.buttonSign} title='Sign In'>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchButton} >
                        <Feather name="log-in" color='#8800ff' size={15} /><Text style={styles.buttonLogin} title='Login' >Login</Text>
                    </TouchableOpacity>

                </View>


                <TouchableOpacity style={styles.forgotPass}><Text style={styles.textForgotPass}>Esqueceu o login ou senha?</Text></TouchableOpacity>


            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    containerComponents: {
        width: '100%',
        // borderWidth: .4,
        justifyContent: 'center',
        borderColor: '#b6b6b6',
        paddingTop: -120,
        paddingBottom: 50,
        padding: 30,
    },

    logotipo: {
        height: 100,
        borderWidth: .4,
        borderColor: '#d4d4d4',
    },

    containerInputs: {
        marginTop: 20
    },

    inputs: {
        borderBottomWidth: .4,
        borderRadius: 4,
        padding: 10,
        marginVertical: 6,
        fontSize: 16
    },

    boxButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },

    touchButton: {
        width: 150,
        borderRadius: 4,
        flexDirection: 'row',
        borderWidth: .4,
        borderColor: '#8800ff',
        textAlign: 'center',
        padding: 10,
        justifyContent: 'space-evenly'
    },

    buttonSign: {
        color: '#8800ff',
    },

    buttonLogin: {
        color: '#8800ff',

    },

    forgotPass: {
        marginTop: 60,
    },

    textForgotPass: {
        textAlign: 'center',
        fontSize: 16,
        textDecorationLine: 'underline',
        textDecorationColor: '#8800ff',
        color: '#b6b6b6'



    }


})