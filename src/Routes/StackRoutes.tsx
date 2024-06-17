import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Login } from '../Pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { TabsRoutes } from './TabsRoutes';

export type rotas = {
  StackLogin: {name: string};
  StackHome: {name: string};
}

const Stack = createNativeStackNavigator<rotas>();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="StackLogin" component={Login} />
        <Stack.Screen name="StackHome" component={TabsRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
