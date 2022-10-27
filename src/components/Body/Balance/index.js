import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default Balance = ({ saldo, expenses }) => {

    return (
        <View style={styles.balance}>

            <View style={styles.item}>
                <Text style={styles.title}>Saldo</Text>

                <View style={styles.itemSaldo}>
                    <Text style={styles.symbol}>R$</Text>
                    <Text style={styles.saldo}>{saldo}</Text>
                </View>

            </View>

            <View style={styles.item}>
                <Text style={styles.title}>Gastos</Text>

                <View style={styles.itemSaldo}>
                    <Text style={styles.symbol}>R$</Text>
                    <Text style={styles.expenses}>{expenses}</Text>
                </View>

            </View>

        </View>
    )

}



const styles = StyleSheet.create({
    balance: {
        padding: 10,
        paddingStart: 20,
        paddingEnd: 20,
        marginTop: -25,
        backgroundColor: '#ffffff',
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        justifyContent: 'space-between',
        flexDirection: 'row',
        zIndex: 99,
        
    },

    item: {
        paddingStart: 12,
        paddingEnd: 12,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        color: '#b6b6b6'
    },

    itemSaldo: {
        flexDirection: 'row',
    },

    symbol: {
        fontSize: 24,
        marginRight: 5,
        color: '#b6b6b6'
    },

    saldo: {
        color: '#2ecc71',
        fontSize: 24,
        fontWeight: 'bold',
    },

    expenses: {
        color: '#e74c3c',
        fontSize: 24,
        fontWeight: 'bold',
    },

    boxHidden: {
        flexDirection: 'row',
        minHeight: 30,
        // minWidht: 100
    },

    hidden: {
        width: 60,
        height: 7,
        backgroundColor: '#e4e4e4',
        borderRadius: 3,
    }
})