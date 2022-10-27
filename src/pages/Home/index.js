import React from 'react';
import { StatusBar, StyleSheet, View, Text, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Body/Balance';
import Actions from '../../components/Body/Actions';


export default Home = () => {


    return (

        <View style={styles.container}>

            <StatusBar backgroundColor='#8000ff' barStyle="light-content" />
            <Header/>
            <Balance saldo="5.420,00" expenses="125,00" />

            <Actions />

            <ScrollView style={styles.scrollViewHome} showsVerticalScrollIndicator={false}>

                <Text style={styles.textTitle}>Cartões</Text>
                <View style={styles.boxHomeDetails}></View>

                <Text style={styles.textTitle}>Despesas por categorias</Text>
                <View style={styles.boxHomeDetails}></View>

                <Text style={styles.textTitle}>Despesas por categorias</Text>
                <View style={styles.boxHomeDetails}></View>
            </ScrollView>


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },

    textTitlePreviewCard: {
        fontSize: 17,
        paddingStart: 16,
        paddingTop: 20,
        color: '#8800ff'
    },
    scrollViewHome: {
        marginVertical: 40
    },
    boxHomeDetails: {
        borderWidth: .4,
        borderColor: '#c2c2c2',
        borderRadius: 4,
        backgroundColor: '#fff',
        height: 200,
        marginStart: 16, 
        marginEnd: 16,
        marginTop: 10
    },


    textTitle: {
        fontSize: 17,
        paddingStart: 16,
        paddingTop: 20,
        color: '#4e4e4e'
    }

})