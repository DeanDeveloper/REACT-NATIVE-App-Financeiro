import React from 'react';
import { View, Text } from 'react-native';

import Routes from "../../Routes";
import RoutesLogin from "../../Routes/index.login";


export default Auth = () => {

    return (
        <View>
            { auth ? (<Routes />) : (<RoutesLogin />) }
        </View>
    );
}