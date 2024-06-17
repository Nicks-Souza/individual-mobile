import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Home } from '../Pages/Home';
import { styles } from './style';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';

export type RootTabParamsList = {
  TabHome: { name: string };
  TabProfile: { name: string };
}

const Tab = createBottomTabNavigator<RootTabParamsList>();

export function TabsRoutes() {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#001937',
          height: 60,
        },

        headerStyle: {
          backgroundColor: '#ADD8E6',
        }
      }}
    >
      <Tab.Screen
        name="TabHome"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.boxNavigation}>
              <Icon name="home" size={focused ? 25 : 20} color={focused ? "#FFC0CB" : "#fff"} />
              <Text style={styles.nameRoute}>Home</Text>
            </View>
          ),

          headerTitle: "Digimons",
          headerTitleStyle: {
            paddingLeft: 128,
            fontWeight: 'bold',
            fontSize: 20,
          },
        
          tabBarLabel: '',
        }}
      />

    </Tab.Navigator>
  )
}

