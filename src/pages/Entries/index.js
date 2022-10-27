import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import { RFPercentage } from 'react-native-responsive-fontsize';
import SelectDropDown from 'react-native-select-dropdown';
import {Feather} from '@expo/vector-icons';

import Header from '../../components/Header';

export default Entries = ({ navigation }) => {
    const [showValue, setShowValue] = useState(false);

    const [valueLancamento, setValueLancamento] = useState(0);

    const [indexValueSelect, setIndexValueSelect] = useState('');

    const typeLancamento = ['Entrada', 'Saída'];

    return (
        <View style={styles.container} >
            <StatusBar backgroundColor='#8000ff' barStyle="light-content" />
            <Header />

            <View style={styles.content}>
                {/* <Text style={styles.titleLancamento}>Efetuar Lançamento</Text> */}

                <View style={styles.insiderLancamento}>
                    {/* 

                    <View>
                        <SelectDropDown
                            data={typeLancamento}
                            buttonStyle={{backgroundColor:'#8800ff', borderRadius: 8, width: '100%', marginTop: 20}}
                            buttonTextStyle={{color: '#fff'}}
                            dropdownOverlayColor='rgba(0,0,0,.6)'
                            
                            onSelect={(selectedItem, index) => { setIndexValueSelect(index)  }}
                        />
                    </View> */}


                    <View style={styles.contentInput}>

                        <Text style={styles.textTitleTransacao}>Valor do lançamento:</Text>

                        <CurrencyInput
                            style={styles.inputLancamento}
                            value={valueLancamento}
                            onChangeValue={setValueLancamento}
                            prefix="R$ "
                            delimiter="."
                            separator=","
                            precision={2}
                            keyboardType='numeric'
                            autoFocus
                            placeholder='R$ 0,00'
                        />

                    </View>

                </View>


                <TouchableOpacity style={styles.contentButtonNext}>
                    <Feather name='chevron-right' color='#888' size={34} />
                    {/* <Text style={styles.buttonNext} >Avançar</Text> */}
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },

    content: {
        position: 'relative',
        flex: 1,
        marginTop: -25,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 4,
        marginStart: 14,
        marginEnd: 14,
        padding: 20,
        shadowColor: "rgba(0,0,0,.8)",
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 4,
        elevation: 8,

    },

    contentInput: {
        width: '100%',
        padding: 10,
        marginTop: 20
    },

    titleLancamento: {
        fontWeight: 'bold',
        fontSize: RFPercentage(2.2)
    },

    contentButtonNext: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        backgroundColor: '#8800ff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textTitleTransacao: {
        fontSize: RFPercentage(2),
        fontWeight: 'bold',
    },

    inputLancamento: {
        padding: 20,
        position: 'relative',
        marginTop: 30,
        borderBottomWidth: .4,
        borderWidthColor: '#b6b6b6',
        borderRadius: 6,
        width: '100%',
        textAlign: 'center',
        fontSize: RFPercentage(2.8),
        fontWeight: 'bold',
        color: '#a2a2a2'
    },

    insiderLancamento: {
        justifyContent: 'center',
        alignItems: 'center'

    }

})