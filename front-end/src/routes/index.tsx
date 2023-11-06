// libraries
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { Home } from '../pages/Home';

// stack
const Stack = createNativeStackNavigator();

export function Routes() {
    //consts
    const screenOptions = { headerShown: false };

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
