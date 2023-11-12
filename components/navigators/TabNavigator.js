import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../../screens/HomeScreen';
import SearchScreen from '../../screens/SearchScreen'
import ProfileScreen from '../../screens/ProfileScreen';
import ReelsScreen from '../../screens/ReelsScreen';


const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: 'black' , borderTopWidth:0 , bordertWidth: 0 , elevation:0},
        
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name='home' size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='search' size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='Reels'
        component={ReelsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='video-collection' size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='Shopping'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='shopping-bag' size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={{ width: 30, height: 30, borderRadius: 15 }}
              source={require('../../assets/profile.jpeg')}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default TabNavigator;