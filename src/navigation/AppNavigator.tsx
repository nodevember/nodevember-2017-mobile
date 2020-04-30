import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Screen from '../screens';
import QRCheckinScannerModalNavigation from '../screens/QRScreens/CheckIn';
import QRContactScannerModalNavigation from '../screens/QRScreens/Contact';
import QRScannerModalNavigation from '../screens/QRScreens/Identify';
import {AppStackParamList} from '../typings/navigation';
import DefaultStackConfig from '../utils/defaultNavConfig';
import PrimaryTabNavigator from './PrimaryTabNavigator';
import StaffCheckinListsNavigator from './StaffCheckinListsNavigator';

const Stack = createStackNavigator<AppStackParamList>();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="none"
      mode="modal"
      screenOptions={({route}) => ({...DefaultStackConfig(route)})}>
      <Stack.Screen name="Home" component={PrimaryTabNavigator} />
      <Stack.Screen name="AttendeeDetail" component={Screen.AttendeeDetail} />
      <Stack.Screen
        name="TicketInstructions"
        component={Screen.TicketInstructions}
      />
      <Stack.Screen
        name="CheckedInAttendeeInfo"
        component={Screen.CheckedInAttendeeInfo}
      />
      <Stack.Screen name="QRScanner" component={QRScannerModalNavigation} />
      <Stack.Screen
        name="QRCheckinScanner"
        component={QRCheckinScannerModalNavigation}
      />
      <Stack.Screen
        name="QRContactScanner"
        component={QRContactScannerModalNavigation}
      />
      <Stack.Screen
        name="StaffCheckinLists"
        component={StaffCheckinListsNavigator}
      />
      <Stack.Screen
        name="Details"
        component={Screen.Details}
        options={{gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
