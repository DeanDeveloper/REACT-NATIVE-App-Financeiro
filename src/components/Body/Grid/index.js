import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';

import { Feather } from '@expo/vector-icons';
import Rows from '../Rows';
import CarregarList from '../../../Functions/CarregarList';
import ModalEntries from '../../../components/Body/Modal/Entries';


export default Grid = () => {

    const [showValue, setShowValue] = useState(false);
    const [openDetails, setOpenDetails] = useState(false);

    const [getIDRow, setLoadInfoModal] = useState(null);

    let idMovimentacao = getIDRow;
    let list = CarregarList().listagem;

    let result = list.filter(key => key.id == idMovimentacao)

    return (

        <View style={styles.container} >


            { openDetails ? ( <ModalEntries action={openDetails} setModal={setOpenDetails} setInfo={setLoadInfoModal} options={result} />)  : ""}
           

            <View style={styles.conteinerTitle}>
                <Text style={styles.titleMove}>Últimas movimentações</Text>
                <Feather name={showValue ? "eye" : "eye-off"} color={showValue ? "#8800ff" : "black"} size={22} onPress={() => { setShowValue(!showValue) }} />
            </View>

            <ScrollView style={{ marginTop: 20 }}>
                {
                    list.map((item, i) =>
                        <Rows action={openDetails} setModal={setOpenDetails} data={item} status={showValue} iterator={i} setInfo={setLoadInfoModal} infoModal={getIDRow} />
                    )
                }
            </ScrollView>

            {/* <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Rows data={item} status={showValue} />}
            /> */}
        </View>


    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        marginHorizontal: 14,
        marginBottom: 20,
        borderRadius: 6,
        shadowColor: "rgba(0,0,0,.8)",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: .4,
        shadowRadius: 0,
        elevation: 8
    },

    list: {
        // flex: 1,
        marginStart: 14,
        marginEnd: 14,
        marginTop: 30,
    },
    titleMove: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#8800ff'
    },

    conteinerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 14,
        marginRight: 24,
        marginTop: 20
    }
})