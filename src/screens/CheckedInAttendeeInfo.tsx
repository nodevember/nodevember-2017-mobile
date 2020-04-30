import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Animated, Text, StyleSheet, View, AsyncStorage} from 'react-native';
import {View as AnimatableView} from 'react-native-animatable';
import {Gravatar} from 'react-native-gravatar';
import Markdown from 'react-native-markdown-renderer';
//@ts-ignore TODO use a new react-native-paper release
import {Button, Card, CardContent, Title} from 'react-native-paper';

import AnimatedScrollView from '../components/AnimatedScrollView';
import {Colors, FontSizes, Layout} from '../constants';
import {Checkin} from '../typings/data';
import {AppRouteProp, AppNavigationProp} from '../typings/navigation';
import withHeaderHeight from '../utils/withHeaderHeight';

type CheckedInAttendeeInfoProps = {
  headerHeight: number;
  route: AppRouteProp<'CheckedInAttendeeInfo'>;
};

type DeferredCheckedInAttendeeInfoContentProps = {
  route: AppRouteProp<'CheckedInAttendeeInfo'>;
};

function CheckedInAttendeeInfo(props: CheckedInAttendeeInfoProps) {
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

        <DeferredCheckedInAttendeeInfoContent route={props.route} />
        <OverscrollView />
      </AnimatedScrollView>
    </View>
  );
}

function CheckinCard({checkins}: {checkins: Checkin[]}) {
  // console.log("props", this.props);
  // console.log("checkins", checkins);
  return <Text>Date: {checkins[0].createdAt}</Text>;
}

function DeferredCheckedInAttendeeInfoContent(
  props: DeferredCheckedInAttendeeInfoContentProps
) {
  const navigation = useNavigation<
    AppNavigationProp<'CheckedInAttendeeInfo'>
  >();
  const params = props.route.params || {};
  const checkedInAttendee = params.checkedInAttendee;

  return (
    <AnimatableView animation="fadeIn" useNativeDriver duration={800}>
      <Gravatar
        options={{
          email: checkedInAttendee.email,
          parameters: {size: '200', d: 'mm'},
          secure: true,
        }}
        style={styles.roundedProfileImage}
      />

      <Card>
        <CardContent>
          <Title>
            {checkedInAttendee.firstName + ' ' + checkedInAttendee.lastName}{' '}
          </Title>
          {checkedInAttendee?.ticket?.name && (
            <Title>Ticket Name: {checkedInAttendee.ticket.name} </Title>
          )}
          <Title>Ticket Ref: {checkedInAttendee.ref} </Title>
          <Markdown>{checkedInAttendee.checkinMessage}</Markdown>
        </CardContent>
      </Card>
      <Button
        raised
        onPress={() => {
          AsyncStorage.removeItem(
            '@MySuperStore2019:lastCheckedInRef'
          ).then(() => navigation.goBack());
        }}>
        Close
      </Button>
      {checkedInAttendee.checkins && checkedInAttendee.checkins.length > 0 ? (
        <View>
          <Title>Previous Checkin</Title>
          <CheckinCard checkins={checkedInAttendee.checkins as Checkin[]} />
        </View>
      ) : null}
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

const BORDER_RADIUS = 3;

const styles = StyleSheet.create({
  roundedProfileImage: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 50,
  },
  headerContent: {
    alignItems: 'center',
    marginTop: 5,
    paddingVertical: 10,
  },
  headerVideoLayer: {
    ...StyleSheet.absoluteFillObject,
  },
  headerVideoOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.blue,
    opacity: 0.8,
  },
  headerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 17 * 1.5,
  },
  headerSmallText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 7,
    lineHeight: 7 * 1.5,
  },
  bigButton: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 15,
    height: 50,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BORDER_RADIUS,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  bigButtonText: {
    fontSize: FontSizes.normalButton,
    color: '#fff',
    textAlign: 'center',
  },
  seeAllTalks: {
    fontSize: FontSizes.normalButton,
    color: Colors.blue,
  },
});

export default withHeaderHeight(CheckedInAttendeeInfo);
