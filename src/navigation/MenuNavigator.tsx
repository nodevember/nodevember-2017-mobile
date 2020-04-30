import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Screens from '../screens';
import {MenuStackParamList} from '../typings/navigation';
import DefaultStackConfig from '../utils/defaultNavConfig';

const Stack = createStackNavigator<MenuStackParamList>();

function MenuNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({...DefaultStackConfig(route)})}>
      <Stack.Screen name="Menu" component={Screens.Menu} />
      <Stack.Screen name="Speakers" component={Screens.Speakers} />
      <Stack.Screen name="Crew" component={Screens.Crew} />
      <Stack.Screen name="Sponsors" component={Screens.Sponsors} />
      <Stack.Screen name="Attendees" component={Screens.Attendees} />
      <Stack.Screen name="AttendeeDetail" component={Screens.AttendeeDetail} />
    </Stack.Navigator>
  );
}

export default MenuNavigator;
