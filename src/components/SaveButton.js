import React from 'react';
import { Platform } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants';

export default class SaveButton extends React.Component {
  render() {
    const { savePress, active } = this.props;
    const isIOS = Platform.OS === 'ios';
    return (
      <BorderlessButton
        onPress={savePress}
        style={{
          alignSelf: 'flex-start',
        }}
        hitSlop={{ left: 15, top: 15, right: 15, bottom: 15 }}
      >
        <Ionicons
          name={`${isIOS ? 'ios' : 'md'}-heart${active ? '' : '-outline'}`}
          size={28}
          color={active ? Colors.green : '#000'}
        />
      </BorderlessButton>
    );
  }
}
