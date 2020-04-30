import md5 from 'crypto-js/md5';
import React from 'react';
import {StyleProp, ImageStyle} from 'react-native';

import CachedImage from './CachedImage';

type Props = {
  email: string;
  style: StyleProp<ImageStyle>;
};

export default function GravatarImage(props: Props) {
  const gravatarUrl = `https://www.gravatar.com/avatar/${md5(
    props.email
  )}?s=200`;

  return <CachedImage source={{uri: gravatarUrl}} style={props.style} />;
}
