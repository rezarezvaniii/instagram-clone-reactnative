import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';


const ReelsScreen = () => {
    const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
    screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  )
}

export default ReelsScreen

const styles = StyleSheet.create({})