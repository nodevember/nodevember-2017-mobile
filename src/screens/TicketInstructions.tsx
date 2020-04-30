import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Animated, View} from 'react-native';
import {View as AnimatableView} from 'react-native-animatable';
import Markdown from 'react-native-markdown-renderer';
//@ts-ignore TODO use a new react-native-paper release
import {Button, Card, CardContent, Title} from 'react-native-paper';

import AnimatedScrollView from '../components/AnimatedScrollView';
import {Colors, Layout} from '../constants';
import {User} from '../typings/data';
import {AppRouteProp, AppNavigationProp} from '../typings/navigation';
import withHeaderHeight from '../utils/withHeaderHeight';

type TicketInstructionsProps = {
  route: AppRouteProp<'TicketInstructions'>;
  headerHeight: number;
};

type DeferredTicketInstructionsContentProps = {
  ticketParams: {ticket: User};
};

function TicketInstructions(props: TicketInstructionsProps) {
  const [scrollY] = useState(new Animated.Value(0));
  return (
    <View style={{flex: 1}}>
      <AnimatedScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 20 + Layout.notchHeight / 2}}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: scrollY}},
            },
          ],
          {useNativeDriver: true}
        )}>
        <View
          style={{
            backgroundColor: Colors.blue,
            padding: 10,
            paddingTop: props.headerHeight - 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />

        <DeferredTicketInstructionsContent ticketParams={props.route.params} />
        <OverscrollView />
      </AnimatedScrollView>
    </View>
  );
}

function DeferredTicketInstructionsContent({
  ticketParams,
}: DeferredTicketInstructionsContentProps) {
  const navigation = useNavigation<AppNavigationProp<'TicketInstructions'>>();
  const ticket = ticketParams.ticket;
  return (
    <AnimatableView animation="fadeIn" useNativeDriver duration={800}>
      <Card>
        <CardContent>
          <Title>{ticket.firstName + ' ' + ticket.lastName} </Title>
          <Title>Ticket Ref: {ticket.ref} </Title>
          <Markdown>{ticket.mobileMessage}</Markdown>
        </CardContent>
      </Card>
      <Button raised onPress={() => navigation.goBack()}>
        Close
      </Button>
    </AnimatableView>
  );
}

const OverscrollView = () => (
  <View
    style={{
      position: 'absolute',
      top: -400,
      height: 400,
      left: 0,
      right: 0,
      backgroundColor: Colors.blue,
    }}
  />
);

export default withHeaderHeight(TicketInstructions);
