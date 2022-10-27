import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import ModalPayment from '../../components/Body/Modal/Payment/';


const cartoes = [
    {
        id: '1', nomeCartao: 'Jodean Costa', empresa: 'Nubank', numeroCartao: '0000-1111-2222-3344-5000', funcao: 'debito/crédito', vencimento: '12/2026',
        infoCard: { limite: '7800,00', expenses: '6700,25', dataVencimentoFatura: '15/10/2022' },
        options: { bgColor: '#a138fc' }
    },
    {
        id: '2', nomeCartao: 'Jodean C. Nascimento', empresa: 'Inter', numeroCartao: '0000-1111-2222-3344-5000', funcao: 'debito/crédito', vencimento: '12/2026',
        infoCard: { limite: '3000,00', expenses: '200,27', dataVencimentoFatura: '25/10/2022' },
        options: { bgColor: '#fa862d' }
    },
    {
        id: '3', nomeCartao: 'Jodean Nascimento', empresa: 'Caixa', numeroCartao: '0000-1111-2222-3344-5000', funcao: 'debito', vencimento: '12/2023',
        infoCard: { limite: '3000,00', expenses: '0,00', dataVencimentoFatura: '14/11/2022' },
        options: { bgColor: '#3734eb' }
    },

    // {
    //     id: '4', nomeCartao: 'Jodean Costa Do Nascimento', empresa: 'Bradesco', numeroCartao: '0000-1111-2222-3344-5000', funcao: 'debito', vencimento: '12/2024',
    //     infoCard: { limite: '3000,00', expenses: '0,00' },
    //     options: { bgColor: '#ff5454' }
    // },
    // {
    //     id: '5', nomeCartao: 'Jodean Costa N', empresa: 'Banco Brasil', numeroCartao: '0000-1111-2222-3344-5000', funcao: 'crédito', vencimento: '12/2028',
    //     infoCard: { limite: '3500,00', expenses: '15,00' },
    //     options: { bgColor: '#facc0f' }
    // },
]




export default Cards = () => {

    const [showCard, setShowCard] = useState(cartoes[0]);

    let calculoLimite = () => {
        let gastos = (parseFloat(showCard.infoCard.limite.replace(',', '.')) - parseFloat(showCard.infoCard.expenses.replace(',', '.'))).toFixed(2).replace('.', ',');
        return gastos;
    }

    const [actionModal, setActionModal] = useState(false);

    let calculoPorcentagem = () => {

        let valorGasto = parseFloat(calculoLimite());
        let valorLimite = parseFloat(showCard.infoCard.limite);

        let porcentagem = (100 - ((valorGasto / valorLimite) * 100).toFixed(0));


        if (porcentagem > 0) {
            return { bgColor: '#de3a3a', porcentagem: `${porcentagem}%` };
        }

        return { bgColor: '#5aed5f', porcentagem: 0 };

    }

    calculoPorcentagem();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#8000ff' barStyle="light-content" />
            <Header />


            <View style={styles.insider} >
                <ScrollView showsVerticalScrollIndicator={false}>

                    <ModalPayment action={actionModal} setModal={setActionModal} valueExpenses={showCard.infoCard.expenses} cardName={showCard.empresa} expire={showCard.infoCard.dataVencimentoFatura} />


                    <View style={styles.boxCards}>
                        <Text style={styles.titles}> <Feather name='credit-card' size={20} /> Meus Cartões</Text>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={cartoes}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.cardsTouch} onPress={() => { setShowCard(item) }} >
                                    <View style={[styles.cardMain, { backgroundColor: item.options.bgColor }]}>

                                        <View style={styles.infCardEmpresa}>
                                            <Text style={styles.textEmpresa}>{item.empresa}</Text>
                                            <Text style={styles.textFuncao}>{item.funcao}</Text>
                                        </View>

                                        <View style={styles.infCardName}>
                                            <Text style={styles.texNumeroCartao}>{item.numeroCartao}</Text>
                                            <Text style={styles.textNome}>{item.nomeCartao}</Text>
                                        </View>

                                        <View style={styles.infCardVenciento}>
                                            <Text style={styles.textVencimento}> Vencimento: {item.vencimento}</Text>
                                        </View>

                                    </View>
                                </TouchableOpacity>
                            )}
                        />


                        <View style={styles.contentBarra}>
                            <View style={styles.contentTextsBarra}>
                                <Text style={styles.textLimitesOff}>Utilizado: {`R$ ${showCard.infoCard.expenses}`}</Text>
                                <Text style={styles.textLimitesOn}>Disponível: {`R$ ${calculoLimite()}`}</Text>
                            </View>

                            <View style={styles.contentLimiteDisponivel}>
                                <View style={[styles.percentage, { width: calculoPorcentagem().porcentagem, backgroundColor: calculoPorcentagem().bgColor }]}></View>
                            </View>
                        </View>

                    </View>

                    <View style={styles.cardsDescription} showsVerticalScrollIndicator={false}>

                        <Text style={styles.titles}><Feather name='file' size={20} /> Minhas Faturas</Text>

                        <View style={styles.contentInfoCards}>

                            <View style={styles.contentLimite}>
                                <View style={styles.infoLimites}>
                                    <Text style={styles.titleExpenses}>Utilizado:</Text>
                                    <Text style={styles.textExpenses}> {parseFloat(showCard.infoCard.expenses) > 0 ? `R$ -${showCard.infoCard.expenses}` : ``}   </Text>
                                </View>
                            </View>


                            <View style={styles.contentCardExpire}>
                                <Text style={styles.titleVencimentoCartao}>Vencim. da fatura:</Text>
                                <Text style={styles.textVencimentoCartao}>{showCard.infoCard.dataVencimentoFatura}</Text>
                            </View>

                        </View>


                        {
                            parseFloat(showCard.infoCard.expenses) > "0" ?
                                (
                                    <View style={styles.contentButtonsPayment}>
                                        <View style={{ width: '100%' }}>
                                            <TouchableOpacity style={styles.buttonPay}
                                                onPress={() => { setActionModal(true) }}
                                            >
                                                <Text style={styles.textButtonPay}>Efetuar Pagamento</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                ) :
                                (
                                    ""
                                )

                        }

                    </View>
                </ScrollView>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({

    percentage: {
        backgroundColor: '#de3a3a',
        padding: 3,
        borderRadius: 50,

    },


    contentBarra: {
        width: '100%',
        marginTop: 10
    },
    contentTextsBarra: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 4
    },
    contentLimiteDisponivel: {
        width: '100%',
        borderWidth: .4,
        borderColor: '#d4d4d4',
        borderRadius: 10,
        backgroundColor: '#5aed5f'
    },

    textLimitesOn: {
        color: '#5aed5f',
        fontWeight: 'bold',
        fontSize: 11,
    },

    textLimitesOff: {
        color: '#de3a3a',
        fontWeight: 'bold',
        fontSize: 11,
    },

    titleExpenses: {
        color: '#de3a3a',
    },

    textExpenses: {
        fontSize: RFPercentage(1.8),
        marginTop: 6,
        color: '#de3a3a'
    },

    notExpenses: {
        marginTop: 10,
        backgroundColor: '#ddd',
        width: 100,
        height: 18,
        borderRadius: 2,
        padding: 2
    },

    cardsDescription: {
        borderRadius: 4,
        marginTop: 14,
        paddingTop: 20,
        justifyContent: 'space-between',
    },

    contentInfoCards: {
        height: 80,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 15

    },

    contentLimite: {
        width: '50%',
        backgroundColor: '#f1f1f1',
        borderRadius: 6,
        borderColor: '#8800ff',
        marginHorizontal: 5,
        padding: 15,
    },

    contentCardExpire: {
        width: '50%',
        backgroundColor: '#f1f1f1',
        borderRadius: 6,
        borderColor: '#8800ff',
        marginHorizontal: 5,
        padding: 15,
    },

    contentButtonsPayment: {
        marginTop: 20,
        alignItems: 'flex-end',
        width: '100%'

    },

    titleVencimentoCartao: {
        color: '#8800ff'
    },
    textVencimentoCartao: {
        fontSize: RFPercentage(1.6),
        marginTop: 6
    },

    buttonPay: {
        backgroundColor: '#8800ff',
        padding: 12,
        borderRadius: 8,
        width: '100%',
    },

    textButtonPay: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    },

    insider: {
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
        // flex: .3
    },
    container: {
        width: '100%',
        flex: 1,
    },
    boxCards: {
        height: 280,
    },

    cardsTouch: {
        minWidth: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardMain: {
        width: '90%',
        minHeight: 180,
        marginHorizontal: 10,
        maxHeight: 180,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        backgroundColor: '#f4f4f4',
        shadowColor: "rgba(0,0,0,.9)",
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 1,
        elevation: 8,

    },

    titles: {
        color: '#b6b6b6',
        fontSize: 18,

    },

    infCardEmpresa: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textEmpresa: {
        fontSize: RFPercentage(1.8),
        color: '#fff'
    },
    textFuncao: {
        fontSize: RFPercentage(1.5),
        color: '#fff'
    },
    textNome: {
        color: '#fff',
        fontSize: RFPercentage(1.7),
    },
    texNumeroCartao: {
        color: '#fff',
        fontSize: RFPercentage(1.7),
        marginTop: 4
    },

    textVencimento: {
        color: '#fff',
        fontSize: RFPercentage(1.5),
    },

    contentLimites: {
        marginTop: 10,
        paddingHorizontal: 10,
        borderRadius: 8,
        backgroundColor: '#e2e2e2',
        padding: 8
    },



    textCards: {
        padding: 6,
        borderBottomWidth: .4,
        borderRadius: 4,
        marginVertical: 6,
        borderColor: '#d4d4d4',
        fontSize: 18,
        color: "#121212"
    },







})