import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Profilescreen from '../screens/Profilescreen';
import Homescreen from '../screens/Homescreen';
import home from '../../assets/home.png';
import profile from '../../assets/user-profile.png';


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        "display": "flex",
        "tabBarStyle": [
          {

            height: 70,
            paddingBottom: 10,
            paddingTop: 10,
            borderTopWidth: 0,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,

          },
          null
        ],
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Image
                source={home}
                style={{ width: 35, height: 35 }}
              />
            );
          } /* else if(route.name === 'Map'){
                return (
                    <Image
                      source={earth}
                      style={{ width: 35, height: 35 }}
                    />
                );
            } */
          else if (route.name === 'Profile') {
            return (
              <Image
                source={profile}
                style={{ width: 35, height: 35 }}
              />
            );
          }
        },

      })}
    >
      <Tab.Screen name="Home" options={{
        headerTitle: 'Explore new Places',

        headerStyle: {

          backgroundColor: '#8399a8',

        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#000',
        headerTitleAlign: 'center'
      }} component={Homescreen} />

      <Tab.Screen name="Profile" options={{
        headerTitle: 'User',

        headerStyle: {

          backgroundColor: '#8399a8',

        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#000',
        headerTitleAlign: 'center'
      }} component={Profilescreen} />

    </Tab.Navigator>
  );
}

export default TabNavigator;