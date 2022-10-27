import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Modal, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import CurrencyInput from 'react-native-currency-input';
import { RFPercentage } from 'react-native-responsive-fontsize';


export default ModalPayment = ({ action, setModal, valueExpenses, cardName, expire }) => {

    valueExpenses = valueExpenses.replace(',','.').replace('.','');
    const [valuePayment, setValuePayment] = useState(100);

    let efetuarPagamento = () => {
        return (valuePayment == "" || valuePayment == 0 || valuePayment == null) ? false : setModal(false)
    }

    const effectAnimateRef = useRef();

    let effectButtonPress = () => {
        effectAnimateRef.current.pulse(600)
    }


    return (
        <View>
            <Modal
                transparent={true}
                onRequestClose={() => {setValuePayment(true); setModal(false) }}
                animationType='slide'
                visible={action}
            >

                <View style={styles.contentPayment}>
                    <View style={styles.content}>

                        <View style={styles.contentTextCardPayment}>
                            <Text style={styles.textCardPayment}>Fatura Cartão: {cardName}</Text>
                        </View>

                        <View style={styles.contentInputs}>
                            <Text style={styles.textTitleInput}>Valor</Text>

                            <CurrencyInput 
                            style={styles.inputs}
                            value={valuePayment}
                            onChangeValue={setValuePayment}
                            prefix="R$ "
                            delimiter="."
                            separator=","
                            precision={2}
                            keyboardType='numeric'
                            placeholder='100,00'
                            autoFocus
                            />

                            { (valuePayment == "" || valuePayment == 0 || valuePayment == null) ? (<Text style={styles.alert}>Digite um valor</Text>) : ("") } 
                        </View>

                        <View style={styles.contentInputs}>
                            <Text style={styles.textTitleInput}>Vencimento</Text>
                            <TextInput style={styles.inputs} keyboardType='numeric' placeholderTextColor='#e4e4e4' editable={false} >{expire}</TextInput>
                        </View>

                        <View style={styles.contentInputs}>
                            <Text style={styles.textTitleInput}>Descrição do Pagamento (opcional)</Text>
                            <TextInput style={styles.inputs} placeholderTextColor='#e4e4e4' placeholder={'Fatura cartão crédito'}></TextInput>
                        </View>

                        <View style={styles.contentButtonPay} >

                            <Animatable.View ref={effectAnimateRef}>
                                <TouchableOpacity style={styles.buttonPayNow}
                                    onPress={() => { effectButtonPress(), setTimeout(() => { efetuarPagamento() }, 2000) }}
                                >
                                    <Text style={styles.textButtonPay} >Pagar</Text>
                                </TouchableOpacity>
                            </Animatable.View>

                        </View>


                    </View>

                </View>

            </Modal>

        </View >

    );
}



const styles = StyleSheet.create({

    modal: {

    },

    alert: {
        color: '#de3a3a'
    },

    contentPayment: {
        marginTop: 20,
        flex: 1,
        zIndex: 99,
        padding: 20,
        backgroundColor: 'rgba(0,0,0, .8)',
        justifyContent: 'center'
    },

    content: {
        // flex: .6,
        backgroundColor: '#fff',
        borderRadius: 6,
        padding: 10
    },

    contentInputs: {
        padding: 10,
        borderRadius: 6,
        marginVertical: 6,
        borderBottomColor: '#8800ff',
        borderBottomWidth: .4,
        borderStyle: 'dashed'
    },

    textTitleInput: {
        color: '#b6b6b6'
    },
    inputs: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        fontSize: 18,
        borderWidth: .4,
        borderColor: '#b6b6b6',
        borderRadius: 6
    },

    contentButtonPay: {
        marginTop: 12,
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 6
    },
    textButtonPay: {
        color: '#fff',
        textAlign: 'center'
    },

    buttonPayNow: {
        backgroundColor: '#8800ff',
        padding: 12,
        borderRadius: 8,
        width: '100%',
    },

    contentTextCardPayment: {
        padding: 10,
        marginTop: 6,
        marginBottom: 20,
        borderColor: '#8800ff',
        borderBottomWidth: .4,
        borderStyle: 'dashed'
    },

    textCardPayment: {
        color: '#8800ff',
        fontSize: RFPercentage(1.7),
        fontWeight: 'bold'
    },

})