import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {BorderlessButton} from 'react-native-gesture-handler';

import {Icons} from '../constants';
import {Talk} from '../typings/data';
import {toggleSaved, withSaveState} from '../utils/storage';

type Props = {
  talk: Talk;
  saved?: boolean;
};

function SaveButton(props: Props) {
  const _handlePress = () => {
    toggleSaved(props.talk);
  };

  return (
    <BorderlessButton
      onPress={_handlePress}
      style={{
        alignSelf: 'flex-start',
        backgroundColor: 'transparent',
        paddingLeft: 15,
        paddingRight: 15,
      }}
      hitSlop={{left: 30, top: 30, right: 30, bottom: 30}}>
      <Ionicons
        name={props.saved ? Icons.favoriteActive : Icons.favorite}
        size={25}
        color="#fff"
        style={{backgroundColor: 'transparent'}}
      />
    </BorderlessButton>
  );
}

export default withSaveState(SaveButton);
