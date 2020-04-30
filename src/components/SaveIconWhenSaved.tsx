import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';

import {Icons, Colors} from '../constants';
import {Talk} from '../typings/data';
import {withSaveState} from '../utils/storage';

type Props = {
  saved: Talk;
  style: StyleProp<TextStyle>;
};

function SaveIconWhenSaved(props: Props) {
  if (!props.saved) {
    return null;
  }

  const icon = (
    <Ionicons
      name={Icons.favoriteActive}
      color={Colors.blue}
      style={[{backgroundColor: 'transparent'}, props.style]}
    />
  );

  return (
    <Text>
      {icon}
      {'  '}
    </Text>
  );
}

export default withSaveState(SaveIconWhenSaved);
