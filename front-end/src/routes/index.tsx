// libraries
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { Home } from '../pages/Home';
import { UserMetrics } from '../pages/UserMetrics';
import { NewMeals } from '../pages/NewMeals';
import { NewMealsDetails } from '../pages/NewMealsDetails';
import { FeedBackPageIsDiet } from '../pages/FeedBackPageIsDiet';
import { FeedBackPageIsNotDiet } from '../pages/FeedBackPageIsNotDiet';
import { Profile } from '../pages/Profile';
import { ProfilePassword } from '../pages/ProfilePassword';
import { Register } from '../pages/Register';
import { Login } from '../pages/Login';
import { useUserContext } from '../context/useUserContext';
import { Loading } from '../pages/Loading';

// stack
const Stack = createNativeStackNavigator();

export function Routes() {
    //consts
    const screenOptions = { headerShown: false };
    const { isLoading = true, user } = useUserContext();

    function renderRoutes() {
        if (isLoading) {
            return (
                <>
                    <Stack.Screen name="Loading" component={Loading} />
                </>
            );
        }
        if (!user) {
            return (
                <>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                </>
            );
        }

        return (
            <>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="UserMetrics" component={UserMetrics} />
                <Stack.Screen name="NewMeals" component={NewMeals} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen
                    name="ProfilePassword"
                    component={ProfilePassword}
                />
                <Stack.Screen
                    name="FeedBackPageIsDiet"
                    component={FeedBackPageIsDiet}
                />
                <Stack.Screen
                    name="FeedBackPageIsNotDiet"
                    component={FeedBackPageIsNotDiet}
                />
                <Stack.Screen
                    name="NewMealsDetails"
                    component={NewMealsDetails}
                />
            </>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptions}>
                {renderRoutes()}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
