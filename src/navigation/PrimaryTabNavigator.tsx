import Ionicons from '@expo/vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import Screens from '../screens';
import {PrimaryTabParamList} from '../typings/navigation';
import ContactsNavigator from './ContactsNavigator';
import MenuNavigator from './MenuNavigator';
import ProfileNavigator from './ProfileNavigator';
import ScheduleNavigator from './ScheduleNavigator';

const Tab = createBottomTabNavigator<PrimaryTabParamList>();

function PrimaryTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: function renderIcon({focused, color}) {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'ios-home';
          } else if (route.name === 'Profile') {
            iconName = `ios-contact${focused ? '' : ''}`;
          } else if (route.name === 'Schedule') {
            iconName = `ios-calendar${focused ? '' : ''}`;
          } else if (route.name === 'Contacts') {
            iconName = `ios-contacts${focused ? '' : ''}`;
          } else if (route.name === 'Menu') {
            iconName = 'md-menu';
          }
          return <Ionicons name={iconName} size={32} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {backgroundColor: '#333'},
        activeTintColor: '#fff',
      }}>
      <Tab.Screen name="Home" component={Screens.Home} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
      <Tab.Screen name="Schedule" component={ScheduleNavigator} />
      <Tab.Screen name="Contacts" component={ContactsNavigator} />
      <Tab.Screen name="Menu" component={MenuNavigator} />
    </Tab.Navigator>
  );
}

export default PrimaryTabNavigator;
