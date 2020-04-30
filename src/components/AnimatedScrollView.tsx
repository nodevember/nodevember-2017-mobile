import {useScrollToTop} from '@react-navigation/native';
import React from 'react';
import {Animated, ScrollView} from 'react-native';

type ScrollViewRefProps = {
  scrollRef: React.RefObject<ScrollView>;
};

class ScrollViewRef extends React.Component<ScrollViewRefProps> {
  render() {
    return <ScrollView ref={this.props.scrollRef} {...this.props} />;
  }
}

const AnimatedComponent = Animated.createAnimatedComponent(ScrollViewRef);

const AnimatedScrollView = function (props: any) {
  const ref = React.useRef<ScrollView>(null);

  useScrollToTop(ref);

  return <AnimatedComponent {...props} scrollRef={ref} />;
};

export default AnimatedScrollView;
