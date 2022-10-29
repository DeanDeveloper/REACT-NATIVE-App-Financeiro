import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';

import Header from '../../components/Header';

export default Settings = ({ navigation }) => {
  const [showValue, setShowValue] = useState(false)
  return (
    <View style={styles.container} >
      <StatusBar backgroundColor='#8000ff' barStyle="light-content" />
      <Header/>
      <View style={styles.configPanel}>
        <Text>Configurações</Text>
      </View>

      {/* <Footer navigation={navigation}  /> */}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },

  configPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})