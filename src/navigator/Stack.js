import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Gallery from "../screens/Gallery";
import Home from '../screens/Home';
import { homeOptions } from "./Config";
import { galleryOptions } from "./Config";
import { screenOptions } from "./Config";

const Stack = createNativeStackNavigator();

const StackScreens = () => {
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
            <Stack.Screen name="Home" component={Home} options = {homeOptions}/>
            <Stack.Screen name="Gallery" component={Gallery} options = {({route}) => (galleryOptions(route))}/>
        </Stack.Navigator>
    )
}

export default StackScreens;