import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Demo Screens/HomeScreen';
import UserScreen from '../Demo Screens/UserScreen';
import ProductScreen from '../Demo Screens/ProductScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Điều kiện môi trường') {
              iconName = focused ? 'ios-flame' : 'ios-flame';
            } else if (route.name === 'User') {
              iconName = focused ? 'bonfire-outline' : 'bonfire-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        
        
        >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Điều kiện môi trường" component={ProductScreen} />
        <Tab.Screen name="User" component={UserScreen} />

      </Tab.Navigator>
    )
}

export default BottomTab
const styles = StyleSheet.create({})