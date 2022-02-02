import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {PrimaryChat, GeneralChat, RequestsChat} from '../screens';

const Tab = createMaterialTopTabNavigator();

const ChatTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarIndicatorStyle: {
        backgroundColor: 'black',
      },
      tabBarLabelStyle: {
        textTransform: 'capitalize',
        fontSize: 15,
        fontWeight: '500',
      },
      swipeEnabled: false,
    }}>
    <Tab.Screen name="Primary" component={PrimaryChat} />
    <Tab.Screen name="General" component={GeneralChat} />
    <Tab.Screen name="Requests" component={RequestsChat} />
  </Tab.Navigator>
);

export default ChatTabs;
