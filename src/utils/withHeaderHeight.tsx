import {useHeaderHeight} from '@react-navigation/stack';
import React from 'react';
import {Platform} from 'react-native';

import {Layout} from '../constants';

type InjectedHeaderHeightProps = {
  headerHeight: number;
};

const withHeaderHeight = <P extends InjectedHeaderHeightProps>(
  Component: React.ComponentType<P>
): React.FC<Pick<P, Exclude<keyof P, keyof InjectedHeaderHeightProps>>> => (
  props: Pick<P, Exclude<keyof P, keyof InjectedHeaderHeightProps>>
) => {
  const headerHeight = useHeaderHeight();
  return (
    <Component
      {...(props as P)}
      headerHeight={
        Platform.OS === 'android'
          ? headerHeight
          : headerHeight + Layout.notchHeight
      }
    />
  );
};

export default withHeaderHeight;
