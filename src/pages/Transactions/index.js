import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';

import Header from '../../components/Header';
import Grid from '../../components/Body/Grid';
import Filters from '../../components/Filters';

export default Transactions = () => {

    const [showValue, setShowValue] = useState(false)

    return (
        <View style={styles.container} >
            <StatusBar backgroundColor='#8000ff' barStyle="light-content" />
            <Header />
            

            <Filters/>

            <Grid />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },

})