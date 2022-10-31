import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';


const { Screen, Navigator } = createBottomTabNavigator();

import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Cards from '../pages/Cards';
import Transactions from '../pages/Transactions';
import Entries from '../pages/Entries';

import Provider from '../contexts/Provider';

export default StackRoutes = () => {


    return (
        <Provider>

            <Navigator initialRouteName='Home'
                screenOptions={{
                    headerShown: false,
                    tabBarInactiveTintColor: '#8000ff',
                    tabBarActiveTintColor: 'gray',
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        borderRightWidth: .5,
                        borderLeftWidth: .5,
                        borderToptWidth: .5,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                        borderRightColor: '#8000ff',
                        borderTopColor: '#8000ff',
                        borderLeftColor: '#8000ff',
                        paddingBottom: 10,
                        paddingTop: 10,
                        height: 60,
                    },
                    tabBarLabelStyle: {
                        fontSize: RFPercentage(1.5),
                        marginTop: 0
                    }
                }}

            >


                <Screen name="Home" component={Home}
                    options={{ tabBarIcon: ({ color }) => (<Feather name="home" color={color} size={RFPercentage(1.9)} />), title: 'Inicio' }}
                />

                <Screen name="Transactions" component={Transactions}
                    options={{ tabBarIcon: ({ color }) => (<Feather name="repeat" color={color} size={RFPercentage(1.9)} />), title: 'Movimentações' }}
                />

                <Screen style={styles.iconMain} name="Entries" component={Entries}
                    options={{ tabBarIcon: ({ size, color }) => (<View style={styles.iconMain}><Feather name="dollar-sign" color={'white'} size={RFPercentage(2.8)} /></View>), tabBarLabel: '' }}
                />

                <Screen name="Cards" component={Cards}
                    options={{ tabBarIcon: ({ color }) => (<Feather name="credit-card" color={color} size={RFPercentage(1.9)} />), title: 'Cartões' }}
                />

                <Screen name="Settings" component={Settings}
                    options={{ tabBarIcon: ({ color }) => (<Feather name="settings" color={color} size={RFPercentage(1.9)} />), title: 'Configurações' }}
                />

            </Navigator>

        </Provider>
    )
}


const styles = StyleSheet.create({
    iconMain: {
        width: 70,
        height: 70,
        backgroundColor: '#8000ff',
        borderColor: '#8000ff',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    }
})
