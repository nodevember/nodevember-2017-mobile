import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Screens from '../screens';
import {StaffCheckinListsParamList} from '../typings/navigation';
import DefaultStackConfig from '../utils/defaultNavConfig';

const Stack = createStackNavigator<StaffCheckinListsParamList>();

function StaffCheckinListsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({...DefaultStackConfig(route)})}>
      <Stack.Screen
        name="StaffCheckinLists"
        component={Screens.StaffCheckinLists}
      />
    </Stack.Navigator>
  );
}

export default StaffCheckinListsNavigator;
