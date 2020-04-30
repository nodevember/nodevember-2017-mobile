import Constants from 'expo-constants';
import _ from 'lodash';
import React, {useState} from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {View as AnimatableView} from 'react-native-animatable';
import FadeIn from 'react-native-fade-in-image';
//@ts-ignore TODO use a new react-native-paper release
import {Button} from 'react-native-paper';

import AnimatedScrollView from '../components/AnimatedScrollView';
import GravatarImage from '../components/GravatarImage';
import NavigationBar from '../components/NavigationBar';
import {RegularText, SemiBoldText} from '../components/StyledText';
import {Colors, FontSizes, Layout} from '../constants';
import {Attendee} from '../typings/data';
import {MenuTabProps} from '../typings/navigation';
import {openTwitter, addContact, getContactTwitter} from '../utils';
import {saveContactOnDevice} from '../utils/storage';
import withHeaderHeight from '../utils/withHeaderHeight';

type Props = {
  headerHeight: number;
};

function AttendeeDetail(props: Props & MenuTabProps<'AttendeeDetail'>) {
  const [scrollY] = useState(new Animated.Value(0));

  const _handlePressTwitter = () => {
    const {attendee}: {attendee: Attendee} = props.route.params;
    const twitter = getContactTwitter(attendee);
    openTwitter(twitter);
  };

  /* const _handlePressEmail = () => {
    const {
      attendee: {email: emailTo},
    } = props.route.params;
    const {tickets} = props;
    let fromName = {firstName: '', lastName: ''};
    if (tickets && tickets[0] && tickets[0].firstName) {
      fromName = tickets[0];
    }
    sendEmail(emailTo, fromName);
  }; */

  const _handleAddToContacts = async () => {
    const {attendee}: {attendee: Attendee} = props.route.params;
    await addContact(attendee);
    await saveContactOnDevice(attendee);
    props.navigation.navigate('Contacts');
  };

  const params = props.route.params || {};
  const attendee = params.attendee;

  if (!attendee || !_.has(attendee, 'email')) {
    props.navigation.goBack();
    return null;
  }

  const twitter = getContactTwitter(attendee);

  const scale = scrollY.interpolate({
    inputRange: [-300, 0, 1],
    outputRange: [2, 1, 1],
    extrapolate: 'clamp',
  });
  const translateX = 0;
  const translateY = scrollY.interpolate({
    inputRange: [-300, 0, 1],
    outputRange: [-50, 1, 1],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 30, 200],
    outputRange: [0, 0, 1],
  });

  return (
    <View style={{flex: 1, backgroundColor: '#fff', overflow: 'hidden'}}>
      {Platform.OS === 'ios' ? (
        <Animated.View
          style={{
            position: 'absolute',
            top: -350,
            left: 0,
            right: 0,
            height: 400,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [1, 0, 0],
                }),
              },
            ],
            backgroundColor: Colors.blue,
          }}
        />
      ) : null}
      <AnimatedScrollView
        style={{flex: 1, backgroundColor: 'transparent'}}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: scrollY}},
            },
          ],
          {useNativeDriver: true}
        )}>
        <View style={styles.headerContainer}>
          <Animated.View
            style={{transform: [{scale}, {translateX}, {translateY}]}}>
            <FadeIn placeholderStyle={{backgroundColor: 'transparent'}}>
              {attendee.email && (
                <GravatarImage style={styles.avatar} email={attendee.email} />
              )}
            </FadeIn>
          </Animated.View>
          <SemiBoldText style={styles.headerText}>
            {attendee.firstName} {attendee.lastName}
          </SemiBoldText>
          {twitter ? (
            <TouchableOpacity onPress={_handlePressTwitter}>
              <RegularText style={styles.headerText}>@{twitter}</RegularText>
            </TouchableOpacity>
          ) : null}
        </View>
        <AnimatableView
          animation="fadeIn"
          useNativeDriver
          delay={50}
          duration={250}
          style={styles.content}>
          <View>
            <Button raised primary onPress={_handleAddToContacts}>
              Add to contacts
            </Button>
          </View>
        </AnimatableView>
      </AnimatedScrollView>

      <NavigationBar
        animatedBackgroundOpacity={headerOpacity}
        style={[
          Platform.OS === 'android'
            ? {height: props.headerHeight + Constants.statusBarHeight}
            : null,
        ]}
        renderLeftButton={() => (
          <View
            style={{
              // gross dumb things
              paddingTop: Platform.OS === 'android' ? 30 : 0,
              marginTop: Layout.notchHeight > 0 ? -5 : 0,
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  content: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerContainer: {
    backgroundColor: Colors.blue,
    paddingTop: Constants.statusBarHeight + Layout.notchHeight + 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: FontSizes.subtitle,
  },
});

export default withHeaderHeight(AttendeeDetail);
