import React from 'react';
import {
  Animated,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
} from 'react-native';
import { Constants, Video } from 'expo';
import FadeIn from 'react-native-fade-in-image';
import ReadMore from 'react-native-read-more-text';
import { BorderlessButton } from 'react-native-gesture-handler';
import { HeaderBackButton } from 'react-navigation';
import { View as AnimatableView } from 'react-native-animatable';
import _ from 'lodash';

import AnimatedScrollView from '../components/AnimatedScrollView';
import NavigationBar from '../components/NavigationBar';
import { Colors, FontSizes, Layout } from '../constants';
import { RegularText, BoldText, SemiBoldText } from '../components/StyledText';
import { getSpeakerAvatarURL } from '../utils';
import { findTalkData, findSpeakerData } from '../data';
import SaveButton from '../components/SaveButton';
import { loadSavedTalks, storeSavedTalks } from '../utils/storageSettings';
import { Ionicons } from '@expo/vector-icons';

class SavedButtonNavigationItem extends React.Component {
  state = {
    savedTalks: {},
  };

  componentDidMount() {
    loadSavedTalks().then(value => this.setState({ savedTalks: value || {} }));
  }

  _handleSaveToggle = () => {
    let key = _.snakeCase(this.props.talk.title);
    this.setState(
      state => ({
        savedTalks: {
          ...state.savedTalks,
          [key]: !state.savedTalks[key],
        },
      }),
      this._storeSavedTalks
    );
  };

  _storeSavedTalks = () => {
    storeSavedTalks(this.state.savedTalks);
  };

  render() {
    const { talk } = this.props;
    const isIOS = Platform.OS === 'ios';
    const active = this.state.savedTalks[_.snakeCase(talk.title)];

    return (
      <View
        style={{
          // gross dumb things
          paddingTop: Platform.OS === 'android' ? 17 : 0,
          marginTop: Layout.notchHeight > 0 ? -5 : 0,
        }}
      >
        <BorderlessButton
          // onPress={this._handleSaveToggle}
          style={{
            alignSelf: 'flex-start',
          }}
          hitSlop={{ left: 15, top: 15, right: 15, bottom: 15 }}
        >
          <Ionicons
            name={`${isIOS ? 'ios' : 'md'}-heart${active ? '' : '-outline'}`}
            size={28}
            color={'#FFF'}
          />
        </BorderlessButton>
      </View>
    );
  }
}

export default class Details extends React.Component {
  state = {
    scrollY: new Animated.Value(0),
  };

  render() {
    let params = this.props.navigation.state.params || {};
    let speaker;
    let talk;
    if (params.scheduleSlot || params.talk) {
      talk = params.scheduleSlot || params.talk;
      speaker = findSpeakerData(talk.speaker);
    } else if (params.speaker) {
      speaker = params.speaker;
      talk = findTalkData(speaker.name);
    }

    const { scrollY } = this.state;
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
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
              backgroundColor: Colors.green,
            }}
          />
        ) : null}
        <AnimatedScrollView
          style={{ flex: 1, backgroundColor: 'transparent' }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: this.state.scrollY } },
              },
            ],
            { useNativeDriver: true }
          )}
        >
          <View style={styles.headerContainer}>
            <Animated.View
              style={{
                transform: [{ scale }, { translateX }, { translateY }],
              }}
            >
              <FadeIn placeholderStyle={{ backgroundColor: '#318A73' }}>
                <Image
                  source={{ uri: getSpeakerAvatarURL(speaker) }}
                  style={styles.avatar}
                />
              </FadeIn>
            </Animated.View>
            <SemiBoldText style={styles.headerText}>
              {speaker.name}
            </SemiBoldText>
            {speaker.organization ? (
              <RegularText style={styles.headerText}>
                {speaker.organization}
              </RegularText>
            ) : null}
            <BoldText style={styles.talkTitleText}>{talk.title}</BoldText>
          </View>
          <AnimatableView
            animation="fadeIn"
            useNativeDriver
            delay={Platform.OS === 'ios' ? 50 : 150}
            duration={500}
            style={styles.content}
          >
            <SemiBoldText style={styles.sectionHeader}>Bio</SemiBoldText>
            <ReadMore
              numberOfLines={3}
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={this._renderRevealedFooter}
              onReady={this._handleTextReady}
            >
              <RegularText style={styles.bodyText}>{speaker.bio}</RegularText>
            </ReadMore>

            <SemiBoldText style={styles.sectionHeader}>
              Talk description
            </SemiBoldText>
            <ReadMore
              numberOfLines={5}
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={this._renderRevealedFooter}
              onReady={this._handleTextReady}
            >
              <RegularText style={styles.bodyText}>
                {speaker.description}
              </RegularText>
            </ReadMore>

            <SemiBoldText style={styles.sectionHeader}>
              Time and place
            </SemiBoldText>
            <RegularText>
              {talk.day} {talk.time}
            </RegularText>
            <RegularText>{talk.room}</RegularText>
          </AnimatableView>
        </AnimatedScrollView>

        <NavigationBar
          animatedBackgroundOpacity={headerOpacity}
          style={[
            Platform.OS === 'android'
              ? { height: Layout.headerHeight + Constants.statusBarHeight }
              : null,
          ]}
          renderLeftButton={() => (
            <View
              style={{
                // gross dumb things
                paddingTop: Platform.OS === 'android' ? 17 : 0,
                marginTop: Layout.notchHeight > 0 ? -5 : 0,
              }}
            >
              <HeaderBackButton
                onPress={() => this.props.navigation.goBack()}
                tintColor="#fff"
                title={null}
              />
            </View>
          )}
          renderRightButton={() => <SavedButtonNavigationItem talk={talk} />}
        />
      </View>
    );
  }

  _renderTruncatedFooter = handlePress => {
    return (
      <TouchableOpacity
        hitSlop={{ top: 15, left: 15, right: 15, bottom: 15 }}
        onPress={handlePress}
      >
        <SemiBoldText style={{ color: Colors.green, marginTop: 5 }}>
          Read more
        </SemiBoldText>
      </TouchableOpacity>
    );
  };

  _renderRevealedFooter = handlePress => {
    return (
      <TouchableOpacity
        hitSlop={{ top: 15, left: 15, right: 15, bottom: 15 }}
        onPress={handlePress}
      >
        <SemiBoldText style={{ color: Colors.green, marginTop: 5 }}>
          Show less
        </SemiBoldText>
      </TouchableOpacity>
    );
  };
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
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerContainer: {
    backgroundColor: Colors.green,
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
  talkTitleText: {
    color: '#fff',
    fontSize: FontSizes.title,
    textAlign: 'center',
    marginTop: 10,
  },
  sectionHeader: {
    fontSize: FontSizes.bodyTitle,
    marginTop: 15,
    marginBottom: 3,
  },
});
