import React from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';

type Props = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

export function RegularText<P extends Props>(props: P) {
  return (
    <Text
      {...(props as P)}
      style={[
        {backgroundColor: 'transparent'},
        props.style,
        {fontFamily: 'open-sans'},
      ]}
    />
  );
}

export function SemiBoldText<P extends Props>(props: P) {
  return (
    <Text
      {...(props as P)}
      style={[
        {backgroundColor: 'transparent'},
        props.style,
        {fontFamily: 'open-sans-semibold'},
      ]}
    />
  );
}

export function BoldText<P extends Props>(props: P) {
  return (
    <Text
      {...(props as P)}
      style={[
        {backgroundColor: 'transparent'},
        props.style,
        {fontFamily: 'open-sans-bold'},
      ]}
    />
  );
}
