import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Home } from '../Pages/Home';
import { Profile } from '../Pages/Profile';
import { Favorites } from '../Pages/Favorites';
import { styles } from './style';
import { Text, View, Image } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';


const logo = require('../Assets/logo.png');

export type RootTabParamsList = {
  TabHome: { name: string };
  TabProfile: { name: string };
  TabFavorites: { name: string };
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
          height: 120,
        },
        headerTitleAlign: 'center', 
      }}
    >
      <Tab.Screen
        name="TabHome"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.boxNavigation}>
              <Icon name="home" size={focused ? 25 : 20} color={focused ? "#FFC0CB" : "#fff"} />
              <Text style={styles.nameRoute}>Home</Text>
            </View>
          ),
          headerTitle: () => (
            <View style={{ alignItems: 'center' }}>
              <Image source={logo} style={{ width: 200, height: 80 }} resizeMode="contain" />
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Digimonpédia</Text>
            </View>
          ),
          headerTitleStyle: {
            paddingLeft: 0,
            fontWeight: 'bold',
            fontSize: 20,
          },
          tabBarLabel: '',
        }}
      />
      
      <Tab.Screen
        name="TabProfile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.boxNavigation}>
              <Icon name="person" size={focused ? 25 : 20} color={focused ? "#FFC0CB" : "#fff"} />
              <Text style={styles.nameRoute}>Perfil</Text>
            </View>
          ),
          headerTitle: () => (
            <View style={{ alignItems: 'center' }}>
              <Image source={logo} style={{ width: 200, height: 80 }} resizeMode="contain" />
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Perfil</Text>
            </View>
          ),
          headerTitleStyle: {
            paddingLeft: 0,
            fontWeight: 'bold',
            fontSize: 20,
          },
          tabBarLabel: '',
        }}
      />

      <Tab.Screen
        name="TabFavorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.boxNavigation}>
              <Icon name="heart" size={focused ? 25 : 20} color={focused ? "#FFC0CB" : "#fff"} />
              <Text style={styles.nameRoute}>Favoritos</Text>
            </View>
          ),
          headerTitle: () => (
            <View style={{ alignItems: 'center' }}>
              <Image source={logo} style={{ width: 200, height: 80 }} resizeMode="contain" />
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Seus Favoritos</Text>
            </View>
          ),
          headerTitleStyle: {
            paddingLeft: 0,
            fontWeight: 'bold',
            fontSize: 20,
          },

          tabBarLabel: '',
        }}
      />

    </Tab.Navigator>
  );
}